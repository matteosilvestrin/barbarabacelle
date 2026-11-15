import express from "express";
import nodemailer from "nodemailer";
import { z } from "zod";
import { renderContacto, renderMasterclass } from "./email/templates";

/*
 * POST /api/contact — invio dei form (contatti della home e masterclass).
 *
 * Configurazione via variabili d'ambiente (mai nel codice), vedi .env.example:
 *   SMTP_HOST, SMTP_PORT (default 587), SMTP_USER, SMTP_PASS
 *   MAIL_FROM_NAME, MAIL_FROM, MAIL_TO, MAIL_BCC
 *   MAIL_SUBJECT_MASTERCLASS, MAIL_SUBJECT_CONTACTO
 *   MAIL_LOGO_URL, MAIL_FOOTER
 *
 * Invio:
 *   masterclass -> MAIL_TO (notifica), copia nascosta a MAIL_BCC
 *   contacto    -> l'email della persona (conferma), copia nascosta a MAIL_BCC
 *
 * Protezioni: campo honeypot "website" (i bot lo riempiono), limite di richieste per IP,
 * validazione dei campi lato server.
 */

const schema = z.object({
  tipo: z.enum(["contacto", "masterclass"]),
  nombre: z.string().trim().min(1).max(100),
  email: z.email().max(254),
  ciudad: z.string().trim().max(100).optional().default(""),
  telefono: z.string().trim().max(30).optional().default(""),
  mensaje: z.string().trim().max(5000).optional().default(""),
  pagina: z.string().trim().max(500).optional().default(""),
  privacidad: z.literal(true),
  website: z.string().optional().default(""), // honeypot
});

// Limite semplice in memoria: 5 invii ogni 10 minuti per IP.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, { count: number; reset: number }>();

function allow(ip: string): boolean {
  const now = Date.now();
  if (hits.size > 5000) {
    hits.forEach((value, key) => {
      if (value.reset <= now) hits.delete(key);
    });
  }
  const entry = hits.get(ip);
  if (!entry || entry.reset <= now) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return true;
  }
  entry.count += 1;
  return entry.count <= MAX_PER_WINDOW;
}

type Mailer = ReturnType<typeof nodemailer.createTransport>;
let transporter: Mailer | null = null;
function getTransporter(): Mailer | null {
  if (!process.env.SMTP_HOST) return null;
  if (!transporter) {
    const port = Number(process.env.SMTP_PORT || 587);
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth:
        process.env.SMTP_USER && process.env.SMTP_PASS
          ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
          : undefined,
    });
  }
  return transporter;
}

// Legge una variabile obbligatoria; se manca, l'invio viene rifiutato con un errore chiaro nel log.
function required(name: string): string | null {
  const value = process.env[name];
  if (!value) {
    console.error(`[contact] variabile mancante: ${name}`);
    return null;
  }
  return value;
}

// Data e ora dell'invio nel fuso di Madrid (il consenso privacy va datato).
function fechaHora(now: Date): { fecha: string; hora: string } {
  const fecha = new Intl.DateTimeFormat("es-ES", {
    timeZone: "Europe/Madrid",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(now);
  const hora = new Intl.DateTimeFormat("es-ES", {
    timeZone: "Europe/Madrid",
    hour: "2-digit",
    minute: "2-digit",
  }).format(now);
  return { fecha, hora };
}

export const contactRouter = express.Router();

contactRouter.post("/api/contact", express.json({ limit: "20kb" }), async (req, res) => {
  if (!allow(req.ip ?? "unknown")) {
    return res.status(429).json({ error: "rate_limited" });
  }

  const parsed = schema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "invalid" });
  }
  const data = parsed.data;

  // Honeypot compilato: fingiamo successo senza inviare nulla.
  if (data.website) {
    return res.json({ ok: true });
  }
  // Il form di contatto richiede il messaggio; la masterclass no.
  if (data.tipo === "contacto" && !data.mensaje) {
    return res.status(400).json({ error: "invalid" });
  }

  const mailer = getTransporter();
  const from = required("MAIL_FROM");
  const fromName = process.env.MAIL_FROM_NAME || "Espacio de estilo by Barbara";
  const bcc = required("MAIL_BCC");
  const logo = required("MAIL_LOGO_URL");
  const footer = required("MAIL_FOOTER");
  const subject = required(data.tipo === "masterclass" ? "MAIL_SUBJECT_MASTERCLASS" : "MAIL_SUBJECT_CONTACTO");
  const to = data.tipo === "masterclass" ? required("MAIL_TO") : data.email;
  if (!mailer || !from || !bcc || !logo || !footer || !subject || !to) {
    if (!mailer) console.error("[contact] SMTP non configurato: richiesta non inviata", data.tipo);
    return res.status(503).json({ error: "not_configured" });
  }

  const { fecha, hora } = fechaHora(new Date());
  const vars = {
    nombre: data.nombre,
    email: data.email,
    ciudad: data.ciudad,
    telefono: data.telefono,
    mensaje: data.mensaje,
    url: data.pagina,
    fecha,
    hora,
  };
  const html = data.tipo === "masterclass" ? renderMasterclass(vars) : renderContacto(vars);

  try {
    await mailer.sendMail({
      from: `"${fromName.replace(/"/g, "")}" <${from}>`,
      to,
      bcc,
      // Nel subject entrano solo valori fissi del .env, mai i dati del form.
      subject,
      html,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error("[contact] invio fallito", err);
    res.status(500).json({ error: "send_failed" });
  }
});
