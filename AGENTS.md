# AGENTS.md

Written for: coding agents working in this repository.

## Project

Sito web di **Bárbara Bacelle**, consulente di imagen personal ad Alicante (contenuti in spagnolo e italiano). Sito pubblico, prerenderizzato come HTML statico, con un server Express di produzione che serve i file.

- Lingue dei contenuti: **spagnolo (es-ES)**, lingua principale, sulle URL senza prefisso; **italiano (it-IT)** sotto `/it` (vedi "Multilingua"). Il codice, i commenti e i messaggi tecnici possono essere in italiano o inglese.
- Dominio di riferimento nei meta tag: `barbarabacelle.es` (vedi `client/index.html`).

## Stack

- **React 19** + **TypeScript 5.6**, bundler **Vite 7**
- **Tailwind CSS 4** (via `@tailwindcss/vite`) e **shadcn/ui** su **Radix UI** (`client/src/components/ui/`)
- **wouter** per il routing lato client
- **framer-motion** è nelle dipendenze ma non risulta usato fuori da `components/ui/`
- **sonner** per i toast
- **Express 4** in `server/index.ts`, bundle con **esbuild**
- **pnpm 10** come gestore pacchetti (`packageManager` in `package.json`)

## Comandi

```bash
pnpm install          # dipendenze (lockfile: pnpm-lock.yaml)
pnpm dev              # vite --host, dev server su http://localhost:3000
pnpm dev:api          # tsx watch server/index.ts, API Express per i form (porta PORT, default 3000 -> usare PORT=3001)
pnpm build            # vite build + prerender + esbuild del server -> dist/
pnpm start            # cross-env NODE_ENV=production node --env-file-if-exists=.env dist/index.js (funziona anche su Windows)
pnpm check            # tsc --noEmit
pnpm format           # prettier --write .
```

**Nota Windows:** `pnpm start` usa `cross-env`, quindi funziona anche in PowerShell e cmd. Per cambiare porta: `$env:PORT=3001; pnpm start` in PowerShell, `PORT=3001 pnpm start` in Git Bash.

Il server di produzione ascolta sulla porta `PORT` (default 3000).

**Variabili di build:** `GA4_ID` (ID di misurazione Google Analytics, es. `G-XXXXXXXXXX`) è letto da `vite.config.ts` durante `pnpm build` e iniettato nel client con `define`: non è un valore a runtime. Va messo nel `.env` locale e nel `.env` (o nell'ambiente) del server Plesk **prima** del deploy, perché il build avviene lì (`git-auto-deploy.sh`). Se cambia, va rifatto il build. Vuoto = nessun analytics e nessun banner.

## Struttura

```
client/
  index.html            # shell HTML, meta tag di default, Google Fonts
  public/               # asset statici serviti dalla root (/img-*.jpg, /logo-*.svg, ...)
  src/
    main.tsx            # entry: hydrateRoot se la pagina è prerenderizzata, altrimenti createRoot
    entry-server.tsx    # render() per il prerender in Node; prerenderRoutes (tutte le pagine in tutte le lingue); htmlLang()
    App.tsx             # Switch wouter con le route generate da shared/routes.ts + Layout (LangProvider, Header, Footer, WhatsApp, popup masterclass)
    index.css           # token di design e stili globali (non rompere le regole @layer base)
    pages/              # Home, Servicios, SobreMi, AvisoLegal, PoliticaPrivacidad, PoliticaCookies, NotFound
      it/               # pagine legali in italiano: NoteLegali, InformativaPrivacy, PoliticaCookie
    i18n/
      index.tsx         # LangProvider + useI18n() -> { lang, page, t, href(page, hash?) }
      es.ts, it.ts      # testi per lingua (es.ts definisce il tipo Dict, it.ts deve rispettarlo)
    components/
      site.tsx          # Header, Footer, WhatsAppButton, MasterclassPopup, Reveal, Eyebrow, CTASection
      LanguageSwitch.tsx # ESP / ITA nel menu, sotto "Reserva tu asesoría"
      Seo.tsx           # title, description, canonical, hreflang, og:*, twitter:*; JsonLd
      Map.tsx           # MapView per Google Maps (non usato dalle pagine attuali)
      ErrorBoundary.tsx
      CookieBanner.tsx  # banner ACEPTAR / RECHAZAR per Google Analytics (montato in Layout, App.tsx)
      ui/               # componenti shadcn/ui generati
    contexts/, hooks/, lib/
      analytics.ts      # GA4_ID (da define), consenso in localStorage, caricamento di gtag.js
server/
  index.ts              # Express: file statici da dist/public, sitemap.xml, robots.txt, 404 per URL sconosciuti
scripts/
  prerender.mjs         # genera dist/public/<path>/index.html per ogni pagina
shared/
  const.ts              # costanti condivise
  routes.ts             # PAGES: path di ogni pagina per lingua; pathFor, langOf, pageOf, HREFLANG, OG_LOCALE
patches/
  wouter@3.7.1.patch    # patch applicata a wouter via pnpm.patchedDependencies
```

## Route

Fonte unica: `PAGES` in `shared/routes.ts` (chiave pagina -> path per lingua).

| Chiave | Spagnolo | Italiano | Componente |
|---|---|---|---|
| `home` | `/` | `/it` | `Home` |
| `servicios` | `/servicios-asesoria-imagen-personal-alicante` | `/it/servizi-consulenza-immagine-personale-alicante` | `Servicios` |
| `sobreMi` | `/barbara-bacelle-asesoria-imagen-alicante` | `/it/barbara-bacelle-consulenza-immagine-alicante` | `SobreMi` |
| `avisoLegal` | `/aviso-legal` | `/it/note-legali` | `AvisoLegal` / `it/NoteLegali` |
| `privacidad` | `/politica-de-privacidad` (stesso URL del sito precedente) | `/it/informativa-privacy` | `PoliticaPrivacidad` / `it/InformativaPrivacy` |
| `cookies` | `/politica-de-cookies` | `/it/politica-cookie` | `PoliticaCookies` / `it/PoliticaCookie` |
| `notFound` | `/404` e ogni URL sconosciuta | `/it/404` e ogni URL sconosciuta sotto `/it/` | `NotFound` (noindex, HTTP 404 dal server) |

## Multilingua (spagnolo + italiano)

- **Niente librerie i18n.** Le route sono generate in `App.tsx` da `PAGES`; ogni route ha un `Layout lang page` che apre un `LangProvider`. Lingua e pagina vengono dalla route, mai dal browser, così prerender e idratazione coincidono. Nessun redirect in base alla lingua del browser: la lingua è solo quella dell'URL.
- **Testi:** in `client/src/i18n/es.ts` e `it.ts`, solo stringhe (o funzioni che restituiscono stringhe); il markup resta nei componenti, che leggono `const { t } = useI18n()`. Una chiave mancante in `it.ts` è un errore di `pnpm check`. Immagini, ancore e `id` dei servizi stanno nei componenti (uguali in tutte le lingue). Le pagine legali sono invece un componente per lingua (testo lungo): una modifica va fatta in entrambe le versioni.
- **Link interni:** sempre `href(pagina, ancora?)` di `useI18n()` (o `pathFor(pagina, lingua)` di `shared/routes.ts`), mai path scritti a mano. Le ancore (`#contacto`, `#armocromia`, ...) sono le stesse nelle due lingue.
- **Switcher:** `components/LanguageSwitch.tsx`, nel menu sotto la CTA. Porta alla stessa pagina nell'altra lingua conservando l'ancora (dalla 404 porta alla home); la lingua corrente non è un link (`aria-current`). Bandiere in SVG inline (le emoji-bandiera non si vedono su Windows).
- **SEO:** `<Seo page=... />` scrive canonical, `hreflang` es-ES / it-IT / x-default (= spagnolo) e `og:locale` + `og:locale:alternate`. Gli hreflang non vanno in `client/index.html` (il prerender sostituisce solo title/meta/canonical: verrebbero duplicati). `<html lang>` lo scrive il prerender (`htmlLang()` di `entry-server.tsx`) e lo aggiorna `LangProvider` lato client. La sitemap elenca ogni URL con le alternative `xhtml:link`. JSON-LD (`lib/schema.ts`): stessi `@id` in tutte le lingue, testi e URL per lingua.
- **Nuova pagina:** aggiungila a `PAGES` (entrambe le lingue), a `PAGE_COMPONENTS` in `App.tsx` e ai testi in `es.ts`/`it.ts`; prerender, sitemap, hreflang e switcher seguono da soli.
- **Form:** il client invia `idioma` (lingua della pagina). La conferma del contatto arriva nella lingua della persona (`server/email/templates.ts`, oggetto `MAIL_SUBJECT_CONTACTO_IT` facoltativo); la notifica della masterclass resta in spagnolo con la riga "Idioma".
- **Pagine legali italiane:** traduzione di cortesia con avviso in testa ("in caso di discrepanza prevale la versione spagnola", `t.legalPage.courtesyNote`), stessa data di aggiornamento della versione spagnola (`LEGAL.actualizado`).
- **Testi italiani:** bozza tradotta dallo spagnolo il 27 novembre 2026, **da far rivedere alla titolare** (in particolare nomi dei pack, testimonianze, pagine legali e banner cookie). Il logo resta quello spagnolo ("Asesoría de imagen consciente") anche sulle pagine italiane.

## Documenti di riferimento: dove stanno le informazioni

- **`DESIGN.md`** (root): tutti i dati di design, cioè colori, font, spaziatura, stile visivo e componenti. Consultalo per qualsiasi valore visivo.
- **`KNOWLEDGE_BASE.md`** (root): i dettagli sui contenuti, cioè testi, servizi, packs, dati della consulente e copy.
- I valori di design vanno poi in `client/src/index.css` come token CSS. Non hardcodare colori nei componenti.

## Regole di codice

**Prerendering (importante):** `pnpm build` renderizza ogni pagina in Node. Nel rendering non si possono toccare `window`, `document`, `localStorage` o `navigator`: va fatto solo in `useEffect` o negli event handler. Non usare `Math.random()`, `Date.now()` o `new Date()` nel render. Per animazioni di ingresso sopra la piega usa `initial={false}` o CSS, perché `opacity: 0` iniziale nasconde il testo nell'HTML statico. Leggi i warning `[prerender]` del build e risolvili tutti.

**SEO:** ogni pagina imposta il proprio `<title>` e la `description` con i tag React 19 nel componente, tramite `<Seo title description page image />` (`components/Seo.tsx`), che aggiunge anche canonical, hreflang, `og:*` e `twitter:*`. Il dominio per gli URL assoluti è `SITE_URL` in `shared/const.ts`. Un `<title>` deve avere un solo figlio stringa: scrivi `` <title>{`${name} | Brand`}</title> ``, non `<title>{name} | Brand</title>`. Usa URL assoluti per `canonical` e `og:image`. Title intorno ai 60 caratteri, description sotto i 160. I dati strutturati schema.org stanno in `lib/schema.ts` (presi da `LEGAL`, `SITE_URL` e `SOCIAL`) e si inseriscono con `<JsonLd data={...} />` di `components/Seo.tsx`.

**Route e 404:** ogni route deve essere prerenderizzata. Il server risponde HTTP 404 con l'HTML di `/404` (o di `/it/404` per le URL sotto `/it/`) a ogni URL senza pagina in `dist/public`, quindi una route solo client (non prerenderizzata) risulterebbe 404. La route catch-all di `App.tsx` usa lo stesso `Layout` della 404 nella lingua dell'URL, così l'idratazione combacia.

**Analytics e consenso:** Google Analytics si carica **solo dopo** "ACEPTAR" nel banner (`lib/analytics.ts`, `components/CookieBanner.tsx`). Non inserire script di tracciamento nell'HTML statico, in `client/index.html` o in `<head>` di React: passa sempre da `loadAnalytics()`/`setConsent()`. La scelta è salvata in localStorage con chiave `cookie_consent` come JSON `{"value":"accepted"|"rejected","date":<ms>}`, con try/catch; vale 12 mesi (`CONSENT_MAX_AGE_MS`), poi il banner ricompare (il vecchio formato senza data vale come nessuna scelta). RECHAZAR cancella anche i cookie `_ga`/`_ga_*`. I due pulsanti del banner hanno lo stesso stile (pari evidenza, guida AEPD). Se aggiungi un altro strumento di terze parti, va sotto lo stesso consenso e va dichiarato in `/politica-de-cookies` e `/politica-de-privacidad` e nelle versioni italiane (`/it/politica-cookie`, `/it/informativa-privacy`). Le etichette del banner in italiano sono ACCETTA / RIFIUTA.

**Link:** non annidare `<a>` dentro un `Link` di wouter, passa i children direttamente.

**Select:** ogni `<Select.Item>` deve avere un `value` non vuoto.

**Toast:** usa solo **sonner**. Non aggiungere react-toastify o `@radix-ui/react-toast`.

**Placeholder:** se aggiungi elementi per funzioni non ancora implementate (nav, CTA), mostra un toast al click che indichi che la funzione arriverà, e segnalalo quando presenti il lavoro. Il testo del toast va concordato con il titolare, perché il sito è in spagnolo.

**Asset:** i file in `client/public/` vanno referenziati con path assoluti (`/nome.jpg`). Se sostituisci un asset cambia nome o aggiungi un hash, perché le risorse sono cachate a lungo. **Foto:** JPEG veri (non PNG rinominati), progressivi, qualità ~80, lato lungo max 1536 px; nome in spagnolo, minuscolo, con trattini e parole chiave del contenuto (es. `terapia-de-armario-organizacion.jpg`, `personal-shopper-alicante.jpg`).

**Stili:** `.container` è già centrato con padding responsive, quindi non serve `mx-auto px-*`. `.flex` ha `min-width:0`. Il `variant="outline"` dei button ha sfondo trasparente.

## Stato attuale e todo aperti

Todo concordati con il titolare del sito (non ancora implementati, salvo dove indicato):

1. **Form:** implementati (commit `614b2ce`). Il form di contatto in `pages/Home.tsx` e quello della masterclass in `components/site.tsx` inviano `POST /api/contact` (`server/contact.ts`) con validazione zod, honeypot `website`, rate limit per IP e invio SMTP via nodemailer; i template sono in `server/email/`. Configurazione in `.env` (vedi `.env.example`): `pnpm start` e `pnpm dev:api` la caricano con `--env-file-if-exists=.env`, e le variabili già presenti nell'ambiente hanno precedenza sul file. Senza configurazione l'API risponde `503 not_configured`. In locale i form funzionano solo con `pnpm dev` + `pnpm dev:api` (la porta di default del server Express va messa a 3001, perché Vite fa proxy `/api` lì).
2. **Pagine legali da far verificare** al titolare (o a un consulente) prima della pubblicazione: dati in `client/src/lib/legal.ts`. Quando il form funzionerà, il fornitore scelto va citato nella privacy (sezione destinatari). Analytics e banner cookie sono implementati (vedi "Fatti già completati"). Da confermare dal titolare: testi del banner e delle pagine legali, conservazione dei dati GA (14 mesi, da impostare anche nella proprietà GA4). **Revisione GA4 del 21 novembre 2026:** privacy e cookie citano Google Ireland Limited come encargado, l'identificatore pseudonimo (niente "de forma agregada"), il trasferimento a Google LLC (DPF), i link a partner-sites, alla privacy di Google e all'opt-out; tolta la frase "Google no los utiliza para perfilar". Le parti GA delle due pagine compaiono solo con `GA4_ID`. Da fare nella proprietà GA4: conservazione a 14 mesi, Google Signals e condivisione dati spenti, accettare l'emendamento sul trattamento dei dati (Impostazioni account).
3. **Pagine di approfondimento per servizio:** una pagina dedicata per ogni servizio (`/servicios/:slug`, da elencare in `prerenderRoutes`), linkata dalla card in home e dalla sezione in Servicios. Il testo e le keywords per ogni pagina vanno presi da `KNOWLEDGE_BASE.md`; ogni pagina ha il proprio `<Seo>`.
4. **Shop per clienti e consulenti di imagen:** nuova sezione per l'acquisto di collane e materiale per consulenti di immagine. Decisioni aperte: catalogo (prodotti, prezzi, stock) gestito in codice o in un database, spedizioni, IVA. Per le vendite online in Spagna servono anche le condizioni generali di vendita e l'informazione sul diritto di recesso, da far verificare alla titolare insieme alle pagine legali.
5. **Pagamenti con Stripe:** integrazione di Stripe Checkout per lo shop e, se la titolare lo vuole, per le prenotazioni dei servizi. Il webhook di conferma va gestito lato server (Express), e le chiavi restano in `.env*` (mai committate). Stripe diventa un nuovo destinatario dei dati: va citato nella privacy, come per il fornitore del form (punto 1).
6. **Hero delle pagine:** trovare un'alternativa al hero attuale con un impianto più di design, coerente con DESIGN.md (layout, tipografia, uso delle immagini). Prima proporre alcune varianti alla titolare, poi applicarle alle pagine.

Fatti già completati:
- **Consenso privacy nei form**: componente `PrivacyConsent` in `components/site.tsx`, usato nel form contatti di `pages/Home.tsx` e nel popup masterclass. Casella obbligatoria (`required`, il browser blocca l'invio senza spunta) con link a `/politica-de-privacidad` in nuova scheda, più informazione di base RGPD (responsabile, finalità, legittimazione, diritti). **Decisioni del titolare:** email legale `hola@barbarabacelle.es`; data di aggiornamento delle pagine legali 7 novembre 2026.
- **Pagine legali**: `/aviso-legal`, `/politica-de-privacidad`, `/politica-de-cookies`, con layout comune `components/LegalPage.tsx` (stili dei contenuti via selettori arbitrari Tailwind, testo in colonna `max-w-3xl`) e dati del titolare in `lib/legal.ts` (`LEGAL`, `LEGAL_PAGES`; `domicilio` e `actualizado` sono per lingua). Testi ispirati alla privacy del sito precedente e all'estratto iubenda, aggiornati al sito attuale: niente profilazione, Privacy Shield sostituito dal Data Privacy Framework, storage tecnico `mc_popup_shown` (sessionStorage) e `cookie_consent` (localStorage), Google Fonts dichiarato, Google Analytics dichiarato come cookie di analisi con consenso (vedi punto seguente). Sono in questa sezione anche la data di aggiornamento in `lib/legal.ts` (`LEGAL.actualizado.es`, ora 21 novembre 2026) e il pulsante "Cambiar mi elección" in `/politica-de-cookies` (visibile solo con `GA4_ID`).
- **Google Analytics + banner di consenso** (richiesto dal titolare, con `GA4_ID` in `.env`): banner ACEPTAR / RECHAZAR in spagnolo (il titolare ha chiesto ACCETTA/RIFIUTA, ma il sito è in spagnolo: etichette da confermare). Appare solo se `GA4_ID` è configurato e l'utente non ha ancora scelto. RECHAZAR imposta `ga-disable-<ID>`. Il testo del banner e delle pagine legali va confermato dal titolare, come gli altri testi legali. Il footer linka le tre pagine (`LEGAL_PAGES`, etichette in `t.legalLinks`); sono prerenderizzate e nella sitemap.
- **Personal Shopper Presencial**: decisione del titolare, la frase "Asesoramiento previo necesario." **resta** nel testo (in `pages/Servicios.tsx` e nella card di `pages/Home.tsx`).
- **Ottimizzazione immagini**: le 12 foto usate dal sito erano PNG con estensione `.jpg` (~2 MB l'una). Convertite in JPEG progressivi q80 alle stesse dimensioni (totale da 22 MB a 1,7 MB) e rinominate con nomi SEO in spagnolo; riferimenti aggiornati in pagine e `Seo`. Eliminati i file non usati da nessuna pagina (`barbara-hero.jpg`, `color-analysis.jpg`, `event-look.jpg`, `gift-card.jpg`, `hero-barbara-v2.jpg`, `hero-portrait.jpg`, `img-hero.jpg`, `wardrobe.jpg`, `logo-barbara-bacelle.png`, circa 14 MB): restano recuperabili dalla storia git.
- **SEO per pagina**: Home, Servicios e Sobre mí usano `<Seo>` con title e description presi da `KNOWLEDGE_BASE.md` ("Barbara" senza accento), canonical e `og:url` su `https://www.barbarabacelle.es<path>`, `og:image`/`twitter:image` con la foto hero della pagina. Il prerender sostituisce i meta di default di `client/index.html`. La 404 ha il titolo "Página no encontrada | Barbara Bacelle" e resta `noindex`. Le keywords del KNOWLEDGE_BASE non sono state messe nel meta `keywords` (Google lo ignora).
- **Audit SEO (16 novembre 2026, skill `seo-audit`)**: URL sconosciuti ora HTTP 404 invece di 200 (soft 404); title di Servicios e description di Home, Servicios e Sobre mí accorciati (anche in `KNOWLEDGE_BASE.md` e `client/index.html`); sitemap e robots.txt usano `SITE_URL` invece dell'host della richiesta; dominio canonico `https://www.barbarabacelle.es` (`SITE_URL`), con 301 dal server da `barbarabacelle.es` a `www`; JSON-LD `ProfessionalService` + `Person` + `WebSite` in home, `ProfilePage` in Sobre mí, un `Service` per blocco in Servicios (indirizzo da `LEGAL.domicilio`); 404 con description propria e testi in spagnolo. Niente `lastmod` nella sitemap: non c'è una data di modifica affidabile per pagina (la data del build cambierebbe a ogni deploy e Google ignora i `lastmod` inaffidabili).
- **Footer social (ex punto 1)**: `components/site.tsx`, colonna "Sígueme" generata dall'array `SOCIAL` (Instagram `https://www.instagram.com/espaciodeestilo/`, TikTok `https://www.tiktok.com/@espaciodeestilo`, YouTube `https://www.youtube.com/@espaciodeestilo4404`), una riga per social con icona 16px e handle; nome del social in `sr-only`; apertura in nuova scheda. L'icona TikTok è il componente `TikTokIcon` (SVG da Simple Icons, CC0), perché lucide non la ha; Instagram e YouTube sono di lucide.
- **Effetto hover sulle card servizi in home (ex punto 2)**: `pages/Home.tsx`, `ServiciosIntro`. Passando sulla card (`group/card`) l'immagine fa uno zoom lento a `scale-105` in 700 ms con easing ease-out, dentro un wrapper `overflow-hidden`; con `prefers-reduced-motion` resta ferma. Scelto come da DESIGN.md (Motion; niente ombre o bordi aggiunti alle card). **Decisione del titolare:** l'effetto va solo sulle card in home, non sulle immagini della pagina Servicios né su Armonía Party.
- **Pulsante "Descubre más" sulle card servizi in home (ex punto 3)**: `pages/Home.tsx`, `SERVICIOS` ha un campo `id` uguale all'ancora del blocco in Servicios; il link è un `<a>` normale (non `Link` di wouter, così il browser carica la pagina e va all'ancora) verso `/servicios-asesoria-imagen-personal-alicante#<id>`, con `aria-label` "Descubre más sobre <servizio>". Anche la foto della card è un link alla stessa ancora; essendo un duplicato è fuori dal tab e dagli screen reader (`tabIndex={-1}`, `aria-hidden`). `ScrollToTop` in `App.tsx` legge l'hash da `window.location` (il `useLocation` di wouter non lo include) e fa `scrollIntoView()` sul blocco, altrimenti torna in cima. Le pagine di dettaglio dedicate (`/servicios/:slug`, da elencare in `prerenderRoutes`) restano un'evoluzione futura.
- **Contenuti (ex punto 5)**, applicati come da `KNOWLEDGE_BASE.md` e richieste del titolare:
  - `pages/Servicios.tsx`: tipo `Servicio` con `id`, `modalidad`, `duracion?`, `incluye?`; `ServiceRow` mostra Modalidad/Duración/Incluye in un `<dl>` con icone lucide (`MapPin`, `Clock`, `BookOpen`; l'etichetta resta in `sr-only` e `title`) e un CTA opzionale. Durate e modalità per tutti i servizi e i packs; nuovo testo di Terapia de Armario e di Tu Mejor Versión; nuovo pack **Tu imagen, tu marca** (foto `/tu-imagen-tu-marca-coaching-imagen-profesional.jpg`, verticale: campo opzionale `imgPosition` = `object-[50%_20%]` per spostare il ritaglio 4:3 verso l'alto e non tagliare il volto); Tu Armario Ideal con 4 horas, senza "Asesoramiento previo necesario", "Incluye: Lookbook"; titolo "Programas completos para tu transformación"; CTA dei packs "Reservar consulta"; "Regala ahora"; "Reserva tu experiencia".
  - Ancore: ogni `ServiceRow` ha un `id` (`armocromia`, `estilo-personal`, `analisis-del-rostro`, `analisis-de-la-silueta`, `terapia-de-armario`, `personal-shopper`, `tu-mejor-version`, `tu-imagen-tu-marca`, `tu-armario-ideal`, `eventos`, `bridal-experience`), più `#regala-una-experiencia` e `#armonia-party`, con `scroll-mt-8 sm:scroll-mt-[136px]`. Servono al punto 3.
  - `pages/Home.tsx`: la card Terapia de Armario usa una versione breve del nuovo testo, di lunghezza simile alle altre card (il testo completo resta solo nella pagina Servicios).
  - `pages/SobreMi.tsx`: "Quién soy", "establecida", titolo h2 "Más de 20 años de pasión por la belleza" (l'eyebrow resta "Mi historia"), "peluquería y 6 años", "Mi formación en Italian Image Institute de Milán y mi especialización me permiten…"; il box finale usa `<CTASection text="…descubramos juntas cómo empezar este camino." />` (prop `text`, le altre pagine mantengono il testo di default).
  - "Bárbara" → "Barbara" in `client/` (title, meta, alt, footer, testi).
- **Header e menu** copiati dal sito di riferimento `http://localhost/barbarabacelle/`, solo con classi Tailwind (`components/site.tsx`, componente `Header`):
  - toolbar flottante a pillola (`max-w-[428px]`, `h-[76px]`, `rounded-2xl`) con logo SVG (`h-10`) e hamburger animato, su tutti i breakpoint (niente nav orizzontale su desktop);
  - mobile (< `sm`): fissa in fondo allo schermo; `Layout` in `App.tsx` ha `pb-[116px] sm:pb-0` per non coprire il contenuto; il pulsante WhatsApp sta a `bottom-[136px]` su mobile per non sovrapporsi;
  - `sm`+: sticky in alto, trasparente e senza blur in cima alla pagina, vetro smerigliato con ombra dopo lo scroll;
  - vetro smerigliato (21 novembre 2026): classe `.glass` in `index.css` (layer components), bianco al 75% con `blur(12px) saturate(1.5)`; bianco opaco se `backdrop-filter` non è supportato o con `prefers-reduced-transparency: reduce`. Non usare `@media not (prefers-reduced-transparency…)`: nei browser che non conoscono la feature (Safari, Firefox) è falsa e toglierebbe il blur. Ombra `box-shadow` verso l'alto su mobile (pillola in basso) e verso il basso da `sm`;
  - si nasconde scorrendo verso il basso e riappare risalendo (Tailwind 4 usa la proprietà CSS `translate`, non `transform`);
  - menu aperto: overlay a schermo intero `.glass [--glass-blur:16px] [--glass-saturate:1.3]` con logo, voci grandi, CTA "Reserva tu asesoría" e pulsante di chiusura; si chiude con Escape, click sui link, click sullo sfondo o passando a ≥1024px; blocca lo scroll della pagina e porta il focus sul pulsante di chiusura.
  - Sostituisce la vecchia richiesta del menu mobile "agganciato al fondo pagina" (bottom sheet).
- Logo SVG in `client/public/`: `logo-barbara-bacelle-asesoria-de-imgen-consciente-header.svg` (originale bicolore, "Bacelle" in teal) nell'header, a 0.5em (8px) dal bordo della pillola, alto 60px; `logo-barbara-bacelle-asesoria-de-imgen-consciente.svg` (tutto nero) nel footer con filtro `brightness-0 invert`, cioè bianco, e nel JSON-LD. I file si chiamavano `...-conciente...` (refuso, rinominati il 27 novembre 2026). Il 27 novembre 2026 la tagline "ASESORIA DE IMAGEN CONSCIENTE" è stata ingrandita a 1,3× in entrambi i file (stessi path vettoriali, glifi scalati sulla baseline e spaziature ricalcolate per mantenere invariata la larghezza totale): a 60px era alta ~5px e risultava sgranata.

## Git

- Branch principale: `master`. Il commit `64e6ae7` contiene l'import del progetto.
- Remote (dal 9 novembre 2026 il progetto è su GitHub):
  - `origin` = `git@github.com:matteosilvestrin/barbarabacelle.git` (principale). La chiave `~/.ssh/github_matteosilvestrin_2026` è impostata per `Host github.com` in `~/.ssh/config`, quindi `git push`/`git fetch` funzionano senza opzioni.
  - `gitlab` = `git@gitlab.com:cloudgroup2/barbarabacelle.git` (vecchio remote, migrato con `git push --mirror`). Richiede la chiave PuTTY via TortoiseGitPlink: `git -c ssh.variant=plink -c core.sshCommand="'C:/Program Files/TortoiseGit/bin/TortoiseGitPlink.exe' -batch -i C:/Users/matte/.ssh/gitlab_key_silver6.ppk" push gitlab master`.
- Non committare `__MATERIALS/` (ignorato da `.gitignore` con `/__MATERIALS/*`): materiali di lavoro non usati dal sito, tra cui uno zip di backup da ~34 MB.
- Non committare `node_modules/`, `dist/` o `.env*` (già in `.gitignore`).
- Messaggi di commit: il log esistente mescola italiano e inglese, quindi non c'è una lingua fissa. Il trailer da aggiungere è `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>` (il modello usato finora nei commit).
- Committa e pusha solo quando richiesto esplicitamente. Se sei su `master`, valuta un branch dedicato prima di modificare la storia.

## Ambiente di sviluppo

- Sistema: Windows 11, shell primaria PowerShell, con Git Bash disponibile.
- Node 24 e pnpm 10.4.1 (via Corepack).
- Il server di produzione può essere avviato in background, ma va fermato a mano alla fine della sessione.
