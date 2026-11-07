import { Link } from "wouter";
import { LegalPage } from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";

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
        {LEGAL.dominio} <strong>no utiliza cookies de análisis, de publicidad ni de seguimiento</strong>,
        ni propias ni de terceros. Solo utiliza el siguiente elemento técnico, necesario para el
        funcionamiento del sitio web y exento de consentimiento según el artículo 22.2 de la LSSI-CE:
      </p>
      <ul>
        <li><strong>Nombre:</strong> mc_popup_shown</li>
        <li><strong>Tipo:</strong> técnica y propia (almacenamiento de sesión del navegador).</li>
        <li><strong>Finalidad:</strong> recordar que ya has visto la ventana de la masterclass para no volver a mostrarla.</li>
        <li><strong>Duración:</strong> hasta que cierras la pestaña o el navegador.</li>
      </ul>

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

      <h2>5. Cambios en esta política</h2>
      <p>
        Si en el futuro incorporamos herramientas de análisis o publicidad, actualizaremos esta
        política y te pediremos tu consentimiento antes de instalar cookies no necesarias. Para más
        información sobre el tratamiento de tus datos, consulta la{" "}
        <Link href="/politica-de-privacidad">Política de privacidad</Link>.
      </p>
    </LegalPage>
  );
}
