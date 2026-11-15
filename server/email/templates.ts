/*
 * Template delle email (HTML semplice, stili inline per i client di posta).
 * I segnaposto {{chiave}} vengono sostituiti con valori escapati: i dati del form
 * non devono mai finire nell'HTML come codice.
 * Logo e footer arrivano dal .env (MAIL_LOGO_URL, MAIL_FOOTER).
 */

export type MailVars = {
  nombre: string;
  email: string;
  ciudad: string;
  telefono?: string;
  mensaje?: string;
  url: string;
  fecha: string;
  hora: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function fill(template: string, vars: Record<string, string>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key: string) => escapeHtml(vars[key] ?? ""));
}

// Struttura comune: logo in alto, contenuto, footer in basso.
function layout(body: string): string {
  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body style="margin:0; padding:24px 16px; background:#f5f5f5; font-family:Arial, Helvetica, sans-serif; color:#333333;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin:0 auto; background:#ffffff;">
      <tr>
        <td style="padding:24px; text-align:center;">
          <a href="https://www.barbarabacelle.es" title="barbarabacelle.es">
            <img src="{{logo_url}}" alt="Espacio de estilo by Barbara Bacelle" width="200" style="max-width:200px; height:auto; border:0;" />
          </a>
        </td>
      </tr>
      <tr>
        <td style="padding:0 24px 24px; font-size:15px; line-height:1.5;">
          ${body}
          <p style="margin:24px 0 0; font-size:12px; color:#777777;">Correo automático enviado desde barbarabacelle.es.</p>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 24px; border-top:1px solid #eeeeee; font-size:12px; line-height:1.5; color:#777777; text-align:center;">
          {{footer}}
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

const MASTERCLASS_BODY = `
          <p style="margin:0 0 16px;">Una nueva persona se ha registrado en la <strong>Masterclass sobre el estilo personal</strong>.</p>
          <ul style="padding-left:20px; margin:0;">
            <li><strong>Nombre:</strong> {{nombre}}</li>
            <li><strong>E-mail:</strong> {{email}}</li>
            <li><strong>Ciudad:</strong> {{ciudad}}</li>
            <li><strong>Página:</strong> {{url}}</li>
            <li><strong>Consentimiento de privacidad:</strong> {{fecha}} {{hora}}</li>
          </ul>`;

const CONTACTO_BODY = `
          <p style="margin:0 0 16px;">Estimada <strong>{{nombre}}</strong>, gracias por ponerte en contacto conmigo. Te responderé <strong>lo antes posible</strong>.</p>
          <p style="margin:0 0 8px;"><strong>Esta es la solicitud que me has enviado:</strong></p>
          <ul style="padding-left:20px; margin:0;">
            <li><strong>Nombre:</strong> {{nombre}}</li>
            <li><strong>E-mail:</strong> {{email}}</li>
            <li><strong>Ciudad:</strong> {{ciudad}}</li>
            <li><strong>Teléfono:</strong> {{telefono}}</li>
            <li><strong>Solicitud:</strong> <span style="white-space:pre-wrap;">{{mensaje}}</span></li>
            <li><strong>Página:</strong> {{url}}</li>
            <li><strong>Consentimiento de privacidad:</strong> {{fecha}} {{hora}}</li>
          </ul>`;

const MASTERCLASS_HTML = layout(MASTERCLASS_BODY);
const CONTACTO_HTML = layout(CONTACTO_BODY);

function common(vars: MailVars): Record<string, string> {
  return {
    nombre: vars.nombre,
    email: vars.email,
    ciudad: vars.ciudad || "-",
    telefono: vars.telefono || "-",
    mensaje: vars.mensaje || "-",
    url: vars.url || "-",
    fecha: vars.fecha,
    hora: vars.hora,
    logo_url: process.env.MAIL_LOGO_URL ?? "",
    footer: process.env.MAIL_FOOTER ?? "",
  };
}

export function renderMasterclass(vars: MailVars): string {
  return fill(MASTERCLASS_HTML, common(vars));
}

export function renderContacto(vars: MailVars): string {
  return fill(CONTACTO_HTML, common(vars));
}
