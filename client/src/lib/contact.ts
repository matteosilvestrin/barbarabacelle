import type { Lang } from "@shared/routes";

export type TipoFormulario = "contacto" | "masterclass";

/**
 * Invia i campi di un form a POST /api/contact.
 * I campi del form devono avere l'attributo `name` (nombre, email, mensaje, privacidad, website).
 * `idioma` è la lingua della pagina: la conferma al visitatore arriva in quella lingua.
 * Ritorna true se l'invio è andato a buon fine, false altrimenti.
 */
export async function enviarFormulario(form: HTMLFormElement, tipo: TipoFormulario, idioma: Lang): Promise<boolean> {
  const data = new FormData(form);
  const payload = {
    tipo,
    idioma,
    nombre: String(data.get("nombre") ?? ""),
    email: String(data.get("email") ?? ""),
    ciudad: String(data.get("ciudad") ?? ""),
    telefono: String(data.get("telefono") ?? ""),
    mensaje: String(data.get("mensaje") ?? ""),
    pagina: window.location.href,
    privacidad: data.get("privacidad") === "on",
    website: String(data.get("website") ?? ""),
  };
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return res.ok;
  } catch {
    return false;
  }
}
