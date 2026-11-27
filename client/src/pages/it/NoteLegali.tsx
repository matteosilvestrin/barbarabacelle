import { Link } from "wouter";
import { pathFor } from "@shared/routes";
import { LegalPage } from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";

// Traduzione di cortesia di pages/AvisoLegal.tsx: le modifiche vanno fatte in entrambe.
export default function NoteLegali() {
  return (
    <LegalPage
      title="Note legali"
      seoTitle="Note legali | Barbara Bacelle"
      description="Note legali di barbarabacelle.es: dati della titolare, condizioni d'uso del sito, proprietà intellettuale e legge applicabile."
      page="avisoLegal"
    >
      <h2>1. Dati identificativi della titolare</h2>
      <p>
        In conformità all'articolo 10 della Legge spagnola 34/2002, dell'11 luglio, sui Servizi della
        Società dell'Informazione e del Commercio Elettronico (LSSI-CE), si riportano i dati della
        titolare di questo sito web:
      </p>
      <ul>
        <li><strong>Titolare:</strong> {LEGAL.titular}</li>
        <li><strong>Nome commerciale:</strong> {LEGAL.nombreComercial}</li>
        <li><strong>NIF/NIE (codice fiscale spagnolo):</strong> {LEGAL.nif}</li>
        <li><strong>Sede:</strong> {LEGAL.domicilio.it}</li>
        <li><strong>Email:</strong> <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a></li>
        <li><strong>Telefono:</strong> <a href={LEGAL.telefonoHref}>{LEGAL.telefono}</a></li>
        <li><strong>Attività:</strong> Consulenza d'immagine personale</li>
      </ul>

      <h2>2. Oggetto</h2>
      <p>
        Le presenti note legali regolano l'accesso e l'uso del sito web {LEGAL.dominio} (di seguito,
        «il sito web»), il cui scopo è far conoscere i servizi di consulenza d'immagine personale di{" "}
        {LEGAL.titular} e facilitare il contatto con le persone interessate.
      </p>
      <p>
        L'accesso al sito web attribuisce la condizione di utente e implica l'accettazione di queste
        note legali. Se non sei d'accordo con il loro contenuto, ti chiediamo di non utilizzare il sito
        web.
      </p>

      <h2>3. Condizioni d'uso</h2>
      <p>
        L'utente si impegna a fare un uso corretto del sito web e dei suoi contenuti, nel rispetto
        della legge, della buona fede e dell'ordine pubblico, e a non utilizzarli per attività illecite
        o che possano ledere i diritti di terzi o il funzionamento del sito web.
      </p>
      <p>
        Quando l'utente fornisce dati tramite moduli, email o WhatsApp, si impegna a fare in modo che
        siano veritieri, esatti e aggiornati.
      </p>

      <h2>4. Proprietà intellettuale e industriale</h2>
      <p>
        Tutti i contenuti del sito web (testi, fotografie, loghi, grafica e codice) sono di proprietà
        di {LEGAL.titular} o sono utilizzati con l'autorizzazione dei rispettivi titolari, e sono
        protetti dalla normativa sulla proprietà intellettuale e industriale.
      </p>
      <p>
        Ne è vietata la riproduzione, distribuzione, comunicazione pubblica o trasformazione, totale o
        parziale, senza l'autorizzazione espressa di {LEGAL.titular}, salvo per uso personale e privato.
      </p>

      <h2>5. Responsabilità</h2>
      <p>
        {LEGAL.titular} si impegna affinché le informazioni del sito web siano corrette e aggiornate, ma
        non garantisce l'assenza di errori né la disponibilità ininterrotta del sito web, e non è
        responsabile dei danni che potrebbero derivare dal suo utilizzo, salvo nei casi previsti dalla
        legge.
      </p>
      <p>
        Le informazioni pubblicate hanno carattere orientativo. I dettagli, la durata e le condizioni
        di ciascun servizio vengono definiti in modo personalizzato prima dell'acquisto.
      </p>

      <h2>6. Link a siti di terzi</h2>
      <p>
        Il sito web contiene link a siti e servizi di terzi, come Instagram, TikTok, YouTube e
        WhatsApp. {LEGAL.titular} non controlla tali siti e non è responsabile dei loro contenuti né
        delle loro informative sulla privacy, che ti consigliamo di consultare.
      </p>

      <h2>7. Protezione dei dati e cookie</h2>
      <p>
        Il trattamento dei dati personali è spiegato nell'
        <Link href={pathFor("privacidad", "it")}>Informativa sulla privacy</Link> e l'uso dei cookie e
        delle tecnologie simili nella <Link href={pathFor("cookies", "it")}>Cookie policy</Link>.
      </p>

      <h2>8. Legge applicabile e foro competente</h2>
      <p>
        Le presenti note legali sono regolate dalla legge spagnola. Per qualsiasi controversia, le
        parti si sottopongono ai giudici e ai tribunali di Alicante, salvo che la normativa applicabile
        ai consumatori stabilisca un foro diverso.
      </p>
    </LegalPage>
  );
}
