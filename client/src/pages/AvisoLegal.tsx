import { Link } from "wouter";
import { LegalPage } from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";

export default function AvisoLegal() {
  return (
    <LegalPage
      title="Aviso legal"
      seoTitle="Aviso legal | Barbara Bacelle"
      description="Aviso legal de barbarabacelle.es: datos del titular, condiciones de uso del sitio web, propiedad intelectual y legislación aplicable."
      path="/aviso-legal"
    >
      <h2>1. Datos identificativos del titular</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
        Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos
        del titular de este sitio web:
      </p>
      <ul>
        <li><strong>Titular:</strong> {LEGAL.titular}</li>
        <li><strong>Nombre comercial:</strong> {LEGAL.nombreComercial}</li>
        <li><strong>NIF/NIE:</strong> {LEGAL.nif}</li>
        <li><strong>Domicilio:</strong> {LEGAL.domicilio}</li>
        <li><strong>Email:</strong> <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a></li>
        <li><strong>Teléfono:</strong> <a href={LEGAL.telefonoHref}>{LEGAL.telefono}</a></li>
        <li><strong>Actividad:</strong> {LEGAL.actividad}</li>
      </ul>

      <h2>2. Objeto</h2>
      <p>
        El presente aviso legal regula el acceso y el uso del sitio web {LEGAL.dominio} (en adelante,
        «el sitio web»), cuya finalidad es dar a conocer los servicios de asesoría de imagen personal
        de {LEGAL.titular} y facilitar el contacto con las personas interesadas.
      </p>
      <p>
        El acceso al sitio web atribuye la condición de usuario e implica la aceptación de este aviso
        legal. Si no estás de acuerdo con su contenido, te rogamos que no utilices el sitio web.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        El usuario se compromete a hacer un uso adecuado del sitio web y de sus contenidos, conforme a
        la ley, la buena fe y el orden público, y a no emplearlos para actividades ilícitas o que
        puedan dañar los derechos de terceros o el funcionamiento del sitio web.
      </p>
      <p>
        Cuando el usuario facilite datos a través de formularios, correo electrónico o WhatsApp, se
        compromete a que sean veraces, exactos y actualizados.
      </p>

      <h2>4. Propiedad intelectual e industrial</h2>
      <p>
        Todos los contenidos del sitio web (textos, fotografías, logotipos, diseño gráfico y código)
        son propiedad de {LEGAL.titular} o se utilizan con la autorización de sus titulares, y están
        protegidos por la normativa de propiedad intelectual e industrial.
      </p>
      <p>
        Queda prohibida su reproducción, distribución, comunicación pública o transformación, total o
        parcial, sin la autorización expresa de {LEGAL.titular}, salvo para uso personal y privado.
      </p>

      <h2>5. Responsabilidad</h2>
      <p>
        {LEGAL.titular} trabaja para que la información del sitio web sea correcta y esté actualizada,
        pero no garantiza la ausencia de errores ni la disponibilidad ininterrumpida del sitio web, y
        no se hace responsable de los daños que pudieran derivarse de su uso, salvo en los casos
        previstos por la ley.
      </p>
      <p>
        La información publicada tiene carácter orientativo. Los detalles, la duración y las
        condiciones de cada servicio se concretan de forma personalizada antes de su contratación.
      </p>

      <h2>6. Enlaces a sitios de terceros</h2>
      <p>
        El sitio web incluye enlaces a sitios y servicios de terceros, como Instagram, TikTok, YouTube
        y WhatsApp. {LEGAL.titular} no controla esos sitios y no es responsable de sus contenidos ni de
        sus políticas de privacidad, que te recomendamos consultar.
      </p>

      <h2>7. Protección de datos y cookies</h2>
      <p>
        El tratamiento de los datos personales se explica en la{" "}
        <Link href="/politica-de-privacidad">Política de privacidad</Link> y el uso de cookies y
        tecnologías similares en la <Link href="/politica-de-cookies">Política de cookies</Link>.
      </p>

      <h2>8. Legislación aplicable y jurisdicción</h2>
      <p>
        Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes
        se someten a los juzgados y tribunales de Alicante, salvo que la normativa aplicable a los
        consumidores establezca otro fuero.
      </p>
    </LegalPage>
  );
}
