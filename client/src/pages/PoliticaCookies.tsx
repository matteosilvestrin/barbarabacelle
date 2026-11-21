import { Link } from "wouter";
import { LegalPage } from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";
import { GA4_ID, openCookieSettings } from "@/lib/analytics";

export default function PoliticaCookies() {
  return (
    <LegalPage
      title="Política de cookies"
      seoTitle="Política de cookies | Barbara Bacelle"
      description="Qué cookies y tecnologías similares utiliza barbarabacelle.es, para qué sirven y cómo puedes gestionarlas desde tu navegador."
      path="/politica-de-cookies"
    >
      <h2>1. Qué son las cookies</h2>
      <p>
        Las cookies son pequeños archivos que un sitio web guarda en tu navegador para recordar
        información sobre tu visita. Existen también tecnologías similares, como el almacenamiento
        local del navegador, que funcionan de forma parecida. En esta política usamos «cookies» para
        referirnos a todas ellas.
      </p>

      <h2>2. Qué cookies utiliza este sitio web</h2>
      <p>
        {LEGAL.dominio} utiliza los siguientes elementos. Los técnicos son necesarios para el
        funcionamiento del sitio web y están exentos de consentimiento según el artículo 22.2 de la
        LSSI-CE.
      </p>
      <ul>
        <li><strong>Nombre:</strong> mc_popup_shown</li>
        <li><strong>Tipo:</strong> técnica y propia (almacenamiento de sesión del navegador).</li>
        <li><strong>Finalidad:</strong> recordar que ya has visto la ventana de la masterclass para no volver a mostrarla.</li>
        <li><strong>Duración:</strong> hasta que cierras la pestaña o el navegador.</li>
        {GA4_ID && (
          <>
            <li><strong>Nombre:</strong> cookie_consent</li>
            <li><strong>Tipo:</strong> técnica y propia (almacenamiento local del navegador).</li>
            <li><strong>Finalidad:</strong> guardar si has aceptado o rechazado las cookies de análisis, y en qué fecha, para no volver a preguntártelo en cada visita.</li>
            <li><strong>Duración:</strong> 12 meses. Pasado ese plazo te volvemos a preguntar.</li>
          </>
        )}
      </ul>
      {GA4_ID && (
        <>
          <p>
            <strong>Cookies de análisis (Google Analytics).</strong> Solo se instalan si aceptas
            en el aviso de cookies. Guardan un identificador seudónimo que permite obtener
            estadísticas de cuántas personas visitan el sitio, qué páginas ven y cómo navegan, y así
            mejorarlo. Si las rechazas, no se instalan, y si retiras tu consentimiento después de
            haberlas aceptado, las borramos de tu navegador.
          </p>
          <ul>
            <li><strong>Nombres:</strong> _ga y _ga_{GA4_ID.replace(/^G-/, "")}</li>
            <li><strong>Tipo:</strong> de análisis, de terceros. Se guardan con el dominio de este sitio, pero la información la trata Google.</li>
            <li><strong>Proveedor:</strong> Google Ireland Limited (Gordon House, Barrow Street, Dublín 4, Irlanda).</li>
            <li><strong>Duración:</strong> hasta 2 años.</li>
            <li>
              <strong>Transferencias internacionales:</strong> Google puede tratar los datos en
              Estados Unidos (Google LLC), con base en el Marco de Privacidad de Datos UE-EE. UU.
              (Data Privacy Framework) y en las cláusulas contractuales tipo de la Comisión Europea.
            </li>
            <li>
              <strong>Más información:</strong>{" "}
              <a href="https://policies.google.com/technologies/partner-sites?hl=es" target="_blank" rel="noreferrer">
                cómo usa Google los datos
              </a>
              ,{" "}
              <a href="https://policies.google.com/privacy?hl=es" target="_blank" rel="noreferrer">
                política de privacidad de Google
              </a>{" "}
              y{" "}
              <a href="https://tools.google.com/dlpage/gaoptout?hl=es" target="_blank" rel="noreferrer">
                complemento de inhabilitación de Google Analytics
              </a>
              .
            </li>
          </ul>
        </>
      )}

      <h2>3. Servicios y enlaces de terceros</h2>
      <ul>
        <li>
          <strong>Google Fonts:</strong> el sitio web carga sus tipografías desde los servidores de
          Google. No instala cookies, pero tu navegador comunica tu dirección IP a Google para
          descargarlas.
        </li>
        <li>
          <strong>Redes sociales y WhatsApp:</strong> los enlaces a Instagram, TikTok, YouTube y WhatsApp
          te llevan a sus sitios o aplicaciones, que pueden instalar sus propias cookies según sus
          políticas. Este sitio web no incrusta sus contenidos ni sus botones de seguimiento.
        </li>
      </ul>

      <h2>4. Cómo gestionar o eliminar las cookies</h2>
      <p>
        Puedes consultar, bloquear o eliminar las cookies y los datos de los sitios web desde la
        configuración de tu navegador:
      </p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/es/kb/Borrar%20cookies" target="_blank" rel="noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer">Safari</a></li>
        <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noreferrer">Microsoft Edge</a></li>
      </ul>
      <p>
        Si bloqueas el almacenamiento técnico, la ventana de la masterclass podría volver a aparecer
        en cada página, pero el resto del sitio web seguirá funcionando.
      </p>
      {GA4_ID && (
        <>
          <p>
            También puedes cambiar en cualquier momento tu elección sobre las cookies de análisis:
          </p>
          <button
            type="button"
            onClick={openCookieSettings}
            className="inline-flex items-center rounded-md border border-teal-dark px-4 py-2 text-sm font-medium text-teal-dark hover:bg-teal-lightest"
          >
            Cambiar mi elección
          </button>
        </>
      )}

      <h2>5. Cambios en esta política</h2>
      <p>
        Si incorporamos nuevas herramientas o cambiamos las existentes, actualizaremos esta política
        y, cuando sea necesario, te pediremos tu consentimiento antes de instalar cookies no
        necesarias. Para más información sobre el tratamiento de tus datos, consulta la{" "}
        <Link href="/politica-de-privacidad">Política de privacidad</Link>.
      </p>
    </LegalPage>
  );
}
