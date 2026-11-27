import { Link } from "wouter";
import { pathFor } from "@shared/routes";
import { LegalPage } from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";
import { GA4_ID } from "@/lib/analytics";

// Traduzione di cortesia di pages/PoliticaPrivacidad.tsx: le modifiche vanno fatte in entrambe.
export default function InformativaPrivacy() {
  return (
    <LegalPage
      title="Informativa sulla privacy"
      seoTitle="Informativa sulla privacy | Barbara Bacelle"
      description="Come Barbara Bacelle tratta i tuoi dati personali: titolare, finalità, base giuridica, conservazione, destinatari e come esercitare i tuoi diritti."
      page="privacidad"
    >
      <p>
        In questa informativa ti spieghiamo come trattiamo i tuoi dati personali quando visiti{" "}
        {LEGAL.dominio} o ci contatti, ai sensi del Regolamento (UE) 2016/679 (Regolamento generale
        sulla protezione dei dati, GDPR) e della Legge Organica spagnola 3/2018 sulla Protezione dei
        Dati Personali e la garanzia dei diritti digitali (LOPDGDD).
      </p>

      <h2>1. Titolare del trattamento</h2>
      <ul>
        <li><strong>Titolare:</strong> {LEGAL.titular} ({LEGAL.nombreComercial})</li>
        <li><strong>NIF/NIE (codice fiscale spagnolo):</strong> {LEGAL.nif}</li>
        <li><strong>Sede:</strong> {LEGAL.domicilio.it}</li>
        <li><strong>Email:</strong> <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a></li>
        <li><strong>Telefono:</strong> <a href={LEGAL.telefonoHref}>{LEGAL.telefono}</a></li>
      </ul>

      <h2>2. Quali dati trattiamo</h2>
      <ul>
        <li><strong>Dati identificativi:</strong> nome e cognome.</li>
        <li><strong>Dati di contatto:</strong> email, telefono e, se acquisti un servizio in presenza, indirizzo postale.</li>
        <li><strong>Contenuto dei tuoi messaggi:</strong> ciò che ci racconti nel modulo, via email o su WhatsApp sui tuoi obiettivi e sul servizio che ti interessa.</li>
        <li><strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser e dispositivo e pagine visitate, che il server registra per motivi tecnici e di sicurezza.</li>
        {GA4_ID && (
          <li><strong>Dati di utilizzo (solo se accetti i cookie di analisi):</strong> un identificativo online pseudonimo salvato in un cookie, pagine visitate, durata della visita, provenienza della visita, posizione approssimativa (paese e città) e tipo di browser e dispositivo, raccolti da Google Analytics. Google Analytics usa il tuo indirizzo IP per calcolare la posizione approssimativa, ma non lo memorizza. Noi consultiamo solo report statistici, senza identificare nessuno.</li>
        )}
      </ul>
      <p>
        Non abbiamo bisogno di categorie particolari di dati. Ti chiediamo di non includerli nei tuoi
        messaggi.
      </p>

      <h2>3. Per quali finalità trattiamo i tuoi dati e con quale base giuridica</h2>
      <table>
        <thead>
          <tr><th>Finalità</th><th>Base giuridica</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Rispondere alle tue domande e alle tue richieste di informazioni o di prenotazione (modulo di contatto, email, telefono o WhatsApp).</td>
            <td>Il tuo consenso e l'esecuzione di misure precontrattuali su tua richiesta (art. 6.1.a e 6.1.b GDPR).</td>
          </tr>
          <tr>
            <td>Fornire i servizi acquistati: sessioni, report, follow-up e fatturazione.</td>
            <td>Esecuzione del contratto e adempimento di obblighi di legge (art. 6.1.b e 6.1.c GDPR).</td>
          </tr>
          <tr>
            <td>Iscriverti alla masterclass e inviarti le informazioni collegate.</td>
            <td>Il tuo consenso (art. 6.1.a GDPR).</td>
          </tr>
          <tr>
            <td>Inviarti comunicazioni su servizi e novità, solo se lo hai richiesto.</td>
            <td>Il tuo consenso (art. 6.1.a GDPR), che puoi revocare in qualsiasi momento.</td>
          </tr>
          {GA4_ID && (
            <tr>
              <td>Ottenere statistiche sulle visite al sito web per migliorarlo (Google Analytics).</td>
              <td>Il tuo consenso (art. 6.1.a GDPR), che puoi revocare in qualsiasi momento dalla Cookie policy.</td>
            </tr>
          )}
          <tr>
            <td>Garantire la sicurezza del sito web e prevenire abusi o frodi.</td>
            <td>Legittimo interesse (art. 6.1.f GDPR).</td>
          </tr>
        </tbody>
      </table>
      <p>Non prendiamo decisioni automatizzate né creiamo profili con i tuoi dati.</p>

      <h2>4. Per quanto tempo conserviamo i tuoi dati</h2>
      <ul>
        <li><strong>Richieste e persone interessate:</strong> il tempo necessario per risponderti e, se non acquisti alcun servizio, fino a due anni dopo l'ultimo contatto, salvo che tu ne chieda prima la cancellazione.</li>
        <li><strong>Clienti:</strong> per tutta la durata del rapporto e, successivamente, per i termini previsti dalla legge spagnola: 4 anni (Ley General Tributaria), 5 anni (art. 1964 del Código Civil) e 6 anni per fatture e documentazione contabile (art. 30 del Código de Comercio).</li>
        <li><strong>Comunicazioni e masterclass:</strong> fino a quando revochi il consenso o annulli l'iscrizione.</li>
        <li><strong>Registri tecnici del server:</strong> il tempo minimo necessario per motivi di sicurezza.</li>
        {GA4_ID && (
          <li><strong>Dati di Google Analytics:</strong> 14 mesi, secondo l'impostazione di conservazione della proprietà di Google Analytics. Se revochi il consenso, cancelliamo dal tuo browser i cookie di analisi.</li>
        )}
      </ul>

      <h2>5. A chi comunichiamo i tuoi dati</h2>
      <p>
        Non cediamo i tuoi dati a terzi, salvo obbligo di legge. Per il funzionamento del sito web e dei
        servizi, alcuni fornitori possono accedervi in qualità di responsabili del trattamento, con un
        contratto che li obbliga a proteggerli:
      </p>
      <ul>
        <li>Fornitore dell'hosting e della manutenzione del sito web.</li>
        <li>Fornitore del servizio di invio dei moduli e della posta elettronica.</li>
        <li>Consulente fiscale e contabile, per la fatturazione.</li>
      </ul>
      <p>
        Inoltre, se ci scrivi su WhatsApp, i tuoi dati sono trattati anche secondo l'informativa sulla
        privacy di WhatsApp (Meta). Il sito web carica i caratteri tipografici da Google Fonts: per
        questo il tuo indirizzo IP viene comunicato a Google.
      </p>
      {GA4_ID && (
        <p>
          Se accetti i cookie di analisi, Google Ireland Limited (Gordon House, Barrow Street, Dublino
          4, Irlanda), fornitore di Google Analytics, tratta i dati di utilizzo indicati al punto 2 in
          qualità di responsabile del trattamento, secondo le proprie condizioni di trattamento dei
          dati. Puoi consultare come Google utilizza i dati dei siti web che usano i suoi servizi su{" "}
          <a href="https://policies.google.com/technologies/partner-sites?hl=it" target="_blank" rel="noreferrer">
            policies.google.com/technologies/partner-sites
          </a>{" "}
          e la sua informativa sulla privacy su{" "}
          <a href="https://policies.google.com/privacy?hl=it" target="_blank" rel="noreferrer">
            policies.google.com/privacy
          </a>
          .
        </p>
      )}

      <h2>6. Trasferimenti internazionali</h2>
      <p>
        Alcuni di questi fornitori (per esempio Google o Meta) possono trattare dati al di fuori dello
        Spazio economico europeo, in particolare negli Stati Uniti tramite le società capogruppo
        (Google LLC e Meta Platforms, Inc.). In tal caso, i trasferimenti si basano sul Quadro UE-USA
        per la protezione dei dati personali (Data Privacy Framework) o sulle clausole contrattuali
        tipo approvate dalla Commissione europea.
      </p>

      <h2>7. I tuoi diritti</h2>
      <p>Puoi esercitare in qualsiasi momento i seguenti diritti sui tuoi dati:</p>
      <ul>
        <li><strong>Accesso:</strong> sapere se trattiamo i tuoi dati e ottenerne una copia.</li>
        <li><strong>Rettifica:</strong> correggere dati inesatti o incompleti.</li>
        <li><strong>Cancellazione:</strong> chiedere che eliminiamo i tuoi dati.</li>
        <li><strong>Opposizione e limitazione:</strong> opporti a un trattamento o chiederne la limitazione.</li>
        <li><strong>Portabilità:</strong> ricevere i tuoi dati in un formato strutturato.</li>
        <li><strong>Revocare il consenso</strong>, senza pregiudicare i trattamenti precedenti.</li>
      </ul>
      <p>
        Per esercitarli scrivici a <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a> o per posta a{" "}
        {LEGAL.domicilio.it}, indicando il diritto che vuoi esercitare. Se necessario per verificare la
        tua identità, ti chiederemo un documento che la attesti.
      </p>
      <p>
        Se ritieni che non abbiamo trattato correttamente i tuoi dati, puoi presentare un reclamo
        all'Agencia Española de Protección de Datos (
        <a href="https://www.aepd.es" target="_blank" rel="noreferrer">www.aepd.es</a>), l'autorità
        spagnola di controllo.
      </p>

      <h2>8. Sicurezza</h2>
      <p>
        Adottiamo misure tecniche e organizzative adeguate per proteggere i tuoi dati. Il sito web
        utilizza una connessione cifrata (HTTPS). Se si verificasse una violazione di sicurezza che
        riguarda i tuoi dati, te lo comunicheremmo senza ritardo quando previsto dalla legge.
      </p>

      <h2>9. Minori</h2>
      <p>
        I servizi sono rivolti a persone di età superiore ai 14 anni. Se hai meno di 14 anni, per
        fornirci i tuoi dati ti serve il consenso di tua madre, di tuo padre o del tuo tutore legale.
      </p>

      <h2>10. Modifiche a questa informativa</h2>
      <p>
        Possiamo aggiornare questa informativa per adeguarla a modifiche normative o del sito web.
        Pubblicheremo sempre la versione in vigore in questa pagina, con la data di aggiornamento.
        Consulta anche le <Link href={pathFor("avisoLegal", "it")}>Note legali</Link> e la{" "}
        <Link href={pathFor("cookies", "it")}>Cookie policy</Link>.
      </p>
    </LegalPage>
  );
}
