import { Link } from "wouter";
import { LegalPage } from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";

export default function PoliticaPrivacidad() {
  return (
    <LegalPage
      title="Política de privacidad"
      seoTitle="Política de privacidad | Barbara Bacelle"
      description="Cómo trata Barbara Bacelle tus datos personales: responsable, finalidades, base legal, conservación, destinatarios y cómo ejercer tus derechos."
      path="/politica-de-privacidad"
    >
      <p>
        En esta política te explicamos cómo tratamos tus datos personales cuando visitas{" "}
        {LEGAL.dominio} o te pones en contacto con nosotros, conforme al Reglamento (UE) 2016/679
        General de Protección de Datos (RGPD) y a la Ley Orgánica 3/2018 de Protección de Datos
        Personales y garantía de los derechos digitales (LOPDGDD).
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li><strong>Responsable:</strong> {LEGAL.titular} ({LEGAL.nombreComercial})</li>
        <li><strong>NIF/NIE:</strong> {LEGAL.nif}</li>
        <li><strong>Domicilio:</strong> {LEGAL.domicilio}</li>
        <li><strong>Email:</strong> <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a></li>
        <li><strong>Teléfono:</strong> <a href={LEGAL.telefonoHref}>{LEGAL.telefono}</a></li>
      </ul>

      <h2>2. Qué datos tratamos</h2>
      <ul>
        <li><strong>Datos identificativos:</strong> nombre y apellidos.</li>
        <li><strong>Datos de contacto:</strong> email, teléfono y, si contratas un servicio presencial, dirección postal.</li>
        <li><strong>Contenido de tus mensajes:</strong> lo que nos cuentas en el formulario, por email o por WhatsApp sobre tus objetivos y el servicio que te interesa.</li>
        <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador y dispositivo, y páginas visitadas, que el servidor registra por motivos técnicos y de seguridad.</li>
      </ul>
      <p>
        No necesitamos datos especialmente protegidos. Te pedimos que no los incluyas en tus mensajes.
      </p>

      <h2>3. Para qué tratamos tus datos y con qué base legal</h2>
      <table>
        <thead>
          <tr><th>Finalidad</th><th>Base legal</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Responder a tus consultas y solicitudes de información o de reserva (formulario de contacto, email, teléfono o WhatsApp).</td>
            <td>Tu consentimiento y la aplicación de medidas precontractuales a petición tuya (art. 6.1.a y 6.1.b RGPD).</td>
          </tr>
          <tr>
            <td>Prestar los servicios contratados: sesiones, informes, seguimiento y facturación.</td>
            <td>Ejecución del contrato y cumplimiento de obligaciones legales (art. 6.1.b y 6.1.c RGPD).</td>
          </tr>
          <tr>
            <td>Inscribirte en la masterclass y enviarte la información relacionada.</td>
            <td>Tu consentimiento (art. 6.1.a RGPD).</td>
          </tr>
          <tr>
            <td>Enviarte comunicaciones sobre servicios y novedades, solo si lo has solicitado.</td>
            <td>Tu consentimiento (art. 6.1.a RGPD), que puedes retirar en cualquier momento.</td>
          </tr>
          <tr>
            <td>Garantizar la seguridad del sitio web y prevenir abusos o fraudes.</td>
            <td>Interés legítimo (art. 6.1.f RGPD).</td>
          </tr>
        </tbody>
      </table>
      <p>No tomamos decisiones automatizadas ni elaboramos perfiles con tus datos.</p>

      <h2>4. Cuánto tiempo conservamos tus datos</h2>
      <ul>
        <li><strong>Consultas y personas interesadas:</strong> el tiempo necesario para responderte y, si no llegas a contratar, hasta dos años después del último contacto, salvo que nos pidas antes su supresión.</li>
        <li><strong>Clientas y clientes:</strong> mientras dure la relación y, después, durante los plazos legales: 4 años (Ley General Tributaria), 5 años (art. 1964 del Código Civil) y 6 años para facturas y documentación contable (art. 30 del Código de Comercio).</li>
        <li><strong>Comunicaciones y masterclass:</strong> hasta que retires tu consentimiento o te des de baja.</li>
        <li><strong>Registros técnicos del servidor:</strong> el tiempo mínimo necesario por motivos de seguridad.</li>
      </ul>

      <h2>5. A quién comunicamos tus datos</h2>
      <p>
        No cedemos tus datos a terceros, salvo obligación legal. Para que el sitio web y los servicios
        funcionen, algunos proveedores pueden acceder a ellos como encargados del tratamiento, con un
        contrato que les obliga a protegerlos:
      </p>
      <ul>
        <li>Proveedor de alojamiento web y de mantenimiento del sitio.</li>
        <li>Proveedor del servicio de envío de los formularios y de correo electrónico.</li>
        <li>Asesoría fiscal y contable, para la facturación.</li>
      </ul>
      <p>
        Además, si nos escribes por WhatsApp, tus datos se tratan también conforme a la política de
        privacidad de WhatsApp (Meta). El sitio web carga sus tipografías desde Google Fonts, lo que
        implica que tu dirección IP se comunica a Google.
      </p>

      <h2>6. Transferencias internacionales</h2>
      <p>
        Algunos de estos proveedores (por ejemplo, Google o Meta) pueden tratar datos fuera del
        Espacio Económico Europeo. En ese caso, las transferencias se basan en el Marco de Privacidad
        de Datos UE-EE. UU. (Data Privacy Framework) o en las cláusulas contractuales tipo aprobadas
        por la Comisión Europea.
      </p>

      <h2>7. Tus derechos</h2>
      <p>Puedes ejercer en cualquier momento los siguientes derechos sobre tus datos:</p>
      <ul>
        <li><strong>Acceso:</strong> saber si tratamos tus datos y obtener una copia.</li>
        <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
        <li><strong>Supresión:</strong> pedir que eliminemos tus datos.</li>
        <li><strong>Oposición y limitación:</strong> oponerte a un tratamiento o pedir que lo limitemos.</li>
        <li><strong>Portabilidad:</strong> recibir tus datos en un formato estructurado.</li>
        <li><strong>Retirar tu consentimiento</strong>, sin que afecte a los tratamientos anteriores.</li>
      </ul>
      <p>
        Para ejercerlos, escríbenos a <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a> o por
        correo postal a {LEGAL.domicilio}, indicando el derecho que quieres ejercer. Si es necesario
        para verificar tu identidad, te pediremos un documento que la acredite.
      </p>
      <p>
        Si consideras que no hemos tratado tus datos correctamente, puedes presentar una reclamación
        ante la Agencia Española de Protección de Datos (
        <a href="https://www.aepd.es" target="_blank" rel="noreferrer">www.aepd.es</a>).
      </p>

      <h2>8. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas adecuadas para proteger tus datos. El sitio web
        utiliza una conexión cifrada (HTTPS). Si se produjera una brecha de seguridad que afecte a tus
        datos, te lo comunicaríamos sin dilación cuando así lo exija la ley.
      </p>

      <h2>9. Menores de edad</h2>
      <p>
        Los servicios están dirigidos a personas mayores de 14 años. Si eres menor de esa edad, necesitas
        el consentimiento de tu madre, padre o tutor legal para facilitarnos tus datos.
      </p>

      <h2>10. Cambios en esta política</h2>
      <p>
        Podemos actualizar esta política para adaptarla a cambios legales o del sitio web. Publicaremos
        siempre la versión vigente en esta página, con su fecha de actualización. Consulta también el{" "}
        <Link href="/aviso-legal">Aviso legal</Link> y la{" "}
        <Link href="/politica-de-cookies">Política de cookies</Link>.
      </p>
    </LegalPage>
  );
}
