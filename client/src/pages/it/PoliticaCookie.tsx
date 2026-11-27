import { Link } from "wouter";
import { pathFor } from "@shared/routes";
import { LegalPage } from "@/components/LegalPage";
import { LEGAL } from "@/lib/legal";
import { GA4_ID, openCookieSettings } from "@/lib/analytics";

// Traduzione di cortesia di pages/PoliticaCookies.tsx: le modifiche vanno fatte in entrambe.
export default function PoliticaCookie() {
  return (
    <LegalPage
      title="Cookie policy"
      seoTitle="Cookie policy | Barbara Bacelle"
      description="Quali cookie e tecnologie simili usa barbarabacelle.es, a cosa servono e come puoi gestirli dal tuo browser."
      page="cookies"
    >
      <h2>1. Cosa sono i cookie</h2>
      <p>
        I cookie sono piccoli file che un sito web salva nel tuo browser per ricordare informazioni
        sulla tua visita. Esistono anche tecnologie simili, come la memoria locale del browser, che
        funzionano in modo analogo. In questa informativa usiamo «cookie» per indicarle tutte.
      </p>

      <h2>2. Quali cookie usa questo sito web</h2>
      <p>
        {LEGAL.dominio} utilizza gli elementi seguenti. Quelli tecnici sono necessari al funzionamento
        del sito web e sono esenti dal consenso ai sensi dell'articolo 22.2 della LSSI-CE (legge
        spagnola sui servizi della società dell'informazione).
      </p>
      <ul>
        <li><strong>Nome:</strong> mc_popup_shown</li>
        <li><strong>Tipo:</strong> tecnico e di prima parte (memoria di sessione del browser).</li>
        <li><strong>Finalità:</strong> ricordare che hai già visto la finestra della masterclass per non mostrartela di nuovo.</li>
        <li><strong>Durata:</strong> fino alla chiusura della scheda o del browser.</li>
        {GA4_ID && (
          <>
            <li><strong>Nome:</strong> cookie_consent</li>
            <li><strong>Tipo:</strong> tecnico e di prima parte (memoria locale del browser).</li>
            <li><strong>Finalità:</strong> salvare se hai accettato o rifiutato i cookie di analisi, e in che data, per non chiedertelo a ogni visita.</li>
            <li><strong>Durata:</strong> 12 mesi. Trascorso questo periodo te lo chiediamo di nuovo.</li>
          </>
        )}
      </ul>
      {GA4_ID && (
        <>
          <p>
            <strong>Cookie di analisi (Google Analytics).</strong> Vengono installati solo se li
            accetti nell'avviso sui cookie. Salvano un identificativo pseudonimo che permette di
            ottenere statistiche su quante persone visitano il sito, quali pagine vedono e come
            navigano, così da migliorarlo. Se li rifiuti non vengono installati, e se revochi il
            consenso dopo averli accettati li cancelliamo dal tuo browser.
          </p>
          <ul>
            <li><strong>Nomi:</strong> _ga e _ga_{GA4_ID.replace(/^G-/, "")}</li>
            <li><strong>Tipo:</strong> di analisi, di terze parti. Vengono salvati con il dominio di questo sito, ma le informazioni sono trattate da Google.</li>
            <li><strong>Fornitore:</strong> Google Ireland Limited (Gordon House, Barrow Street, Dublino 4, Irlanda).</li>
            <li><strong>Durata:</strong> fino a 2 anni.</li>
            <li>
              <strong>Trasferimenti internazionali:</strong> Google può trattare i dati negli Stati
              Uniti (Google LLC), sulla base del Quadro UE-USA per la protezione dei dati personali
              (Data Privacy Framework) e delle clausole contrattuali tipo della Commissione europea.
            </li>
            <li>
              <strong>Maggiori informazioni:</strong>{" "}
              <a href="https://policies.google.com/technologies/partner-sites?hl=it" target="_blank" rel="noreferrer">
                come Google utilizza i dati
              </a>
              ,{" "}
              <a href="https://policies.google.com/privacy?hl=it" target="_blank" rel="noreferrer">
                informativa sulla privacy di Google
              </a>{" "}
              e{" "}
              <a href="https://tools.google.com/dlpage/gaoptout?hl=it" target="_blank" rel="noreferrer">
                componente aggiuntivo per la disattivazione di Google Analytics
              </a>
              .
            </li>
          </ul>
        </>
      )}

      <h2>3. Servizi e link di terze parti</h2>
      <ul>
        <li>
          <strong>Google Fonts:</strong> il sito web carica i caratteri tipografici dai server di
          Google. Non installa cookie, ma il tuo browser comunica il tuo indirizzo IP a Google per
          scaricarli.
        </li>
        <li>
          <strong>Social network e WhatsApp:</strong> i link a Instagram, TikTok, YouTube e WhatsApp ti
          portano ai rispettivi siti o app, che possono installare i propri cookie secondo le loro
          policy. Questo sito web non incorpora i loro contenuti né i loro pulsanti «segui».
        </li>
      </ul>

      <h2>4. Come gestire o eliminare i cookie</h2>
      <p>
        Puoi consultare, bloccare o eliminare i cookie e i dati dei siti web dalle impostazioni del tuo
        browser:
      </p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647?hl=it" target="_blank" rel="noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/it/kb/Eliminare%20i%20cookie" target="_blank" rel="noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer">Safari</a></li>
        <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noreferrer">Microsoft Edge</a></li>
      </ul>
      <p>
        Se blocchi la memoria tecnica, la finestra della masterclass potrebbe ricomparire a ogni
        pagina, ma il resto del sito web continuerà a funzionare.
      </p>
      {GA4_ID && (
        <>
          <p>
            Puoi anche cambiare in qualsiasi momento la tua scelta sui cookie di analisi:
          </p>
          <button
            type="button"
            onClick={openCookieSettings}
            className="inline-flex items-center rounded-md border border-teal-dark px-4 py-2 text-sm font-medium text-teal-dark hover:bg-teal-lightest"
          >
            Cambia la mia scelta
          </button>
        </>
      )}

      <h2>5. Modifiche a questa informativa</h2>
      <p>
        Se introduciamo nuovi strumenti o modifichiamo quelli esistenti, aggiorneremo questa
        informativa e, quando necessario, ti chiederemo il consenso prima di installare cookie non
        necessari. Per maggiori informazioni sul trattamento dei tuoi dati, consulta l'
        <Link href={pathFor("privacidad", "it")}>Informativa sulla privacy</Link>.
      </p>
    </LegalPage>
  );
}
