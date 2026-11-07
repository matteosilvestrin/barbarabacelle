# AGENTS.md

Written for: coding agents working in this repository.

## Project

Sito web di **Bárbara Bacelle**, consulente di imagen personal ad Alicante (contenuti in spagnolo). Sito pubblico, prerenderizzato come HTML statico, con un server Express di produzione che serve i file.

- Lingua dei contenuti: **spagnolo (es-ES)**. Il codice, i commenti e i messaggi tecnici possono essere in italiano o inglese.
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
pnpm build            # vite build + prerender + esbuild del server -> dist/
pnpm start            # NODE_ENV=production node dist/index.js (vedi nota Windows)
pnpm check            # tsc --noEmit
pnpm format           # prettier --write .
```

**Nota Windows:** `pnpm start` usa la sintassi POSIX `NODE_ENV=production`, che non funziona in PowerShell o cmd. Su Windows avvia con `NODE_ENV=production PORT=3000 node dist/index.js` da Git Bash. Per correggere lo script in modo portabile, si può usare `cross-env`.

Il server di produzione ascolta sulla porta `PORT` (default 3000).

## Struttura

```
client/
  index.html            # shell HTML, meta tag di default, Google Fonts
  public/               # asset statici serviti dalla root (/img-*.jpg, /logo-*.svg, ...)
  src/
    main.tsx            # entry: hydrateRoot se la pagina è prerenderizzata, altrimenti createRoot
    entry-server.tsx    # render() per il prerender in Node; prerenderRoutes per le pagine non linkate
    App.tsx             # Switch wouter con le route + Layout (Header, Footer, WhatsApp, popup masterclass)
    index.css           # token di design e stili globali (non rompere le regole @layer base)
    pages/              # Home.tsx, Servicios.tsx, SobreMi.tsx, NotFound.tsx
    components/
      site.tsx          # Header, Footer, WhatsAppButton, MasterclassPopup, Reveal, Eyebrow, CTASection
      Map.tsx           # MapView per Google Maps (non usato dalle pagine attuali)
      ErrorBoundary.tsx
      ui/               # componenti shadcn/ui generati
    contexts/, hooks/, lib/
server/
  index.ts              # Express: file statici da dist/public, sitemap.xml, robots.txt, fallback SPA
scripts/
  prerender.mjs         # genera dist/public/<path>/index.html per ogni pagina
shared/
  const.ts              # costanti condivise
patches/
  wouter@3.7.1.patch    # patch applicata a wouter via pnpm.patchedDependencies
```

## Route

| Path | Pagina |
|---|---|
| `/` | `Home` |
| `/servicios-asesoria-imagen-personal-alicante` | `Servicios` |
| `/barbara-bacelle-asesoria-imagen-alicante` | `SobreMi` |
| `/404` e qualsiasi altra URL | `NotFound` (noindex) |

Il link "Sobre mí" punta alla route `/barbara-bacelle-asesoria-imagen-alicante`.

## Documenti di riferimento: dove stanno le informazioni

- **`DESIGN.md`** (root): tutti i dati di design, cioè colori, font, spaziatura, stile visivo e componenti. Consultalo per qualsiasi valore visivo.
- **`KNOWLEDGE_BASE.md`** (root): i dettagli sui contenuti, cioè testi, servizi, packs, dati della consulente e copy.
- I valori di design vanno poi in `client/src/index.css` come token CSS. Non hardcodare colori nei componenti.

## Regole di codice

**Prerendering (importante):** `pnpm build` renderizza ogni pagina in Node. Nel rendering non si possono toccare `window`, `document`, `localStorage` o `navigator`: va fatto solo in `useEffect` o negli event handler. Non usare `Math.random()`, `Date.now()` o `new Date()` nel render. Per animazioni di ingresso sopra la piega usa `initial={false}` o CSS, perché `opacity: 0` iniziale nasconde il testo nell'HTML statico. Leggi i warning `[prerender]` del build e risolvili tutti.

**SEO:** ogni pagina imposta il proprio `<title>` e la `description` con i tag React 19 nel componente. Un `<title>` deve avere un solo figlio stringa: scrivi `` <title>{`${name} | Brand`}</title> ``, non `<title>{name} | Brand</title>`. Usa URL assoluti per `canonical` e `og:image`.

**Link:** non annidare `<a>` dentro un `Link` di wouter, passa i children direttamente.

**Select:** ogni `<Select.Item>` deve avere un `value` non vuoto.

**Toast:** usa solo **sonner**. Non aggiungere react-toastify o `@radix-ui/react-toast`.

**Placeholder:** se aggiungi elementi per funzioni non ancora implementate (nav, CTA), mostra un toast al click che indichi che la funzione arriverà, e segnalalo quando presenti il lavoro. Il testo del toast va concordato con il titolare, perché il sito è in spagnolo.

**Asset:** i file in `client/public/` vanno referenziati con path assoluti (`/nome.jpg`). Se sostituisci un asset cambia nome o aggiungi un hash, perché le risorse sono cachate a lungo.

**Stili:** `.container` è già centrato con padding responsive, quindi non serve `mx-auto px-*`. `.flex` ha `min-width:0`. Il `variant="outline"` dei button ha sfondo trasparente.

## Stato attuale e todo aperti

Todo concordati con il titolare del sito (non ancora implementati, salvo dove indicato):

1. **Footer:** aggiungere icone e link a TikTok e YouTube, accanto a Instagram (`@espaciodeestilo`). Lucide non ha l'icona TikTok.
2. **Servizi:** effetto mouseover sulle immagini in `pages/Servicios.tsx` (`ServiceRow` e l'immagine di Armonía Party) **e sulle card dei servizi in home** (`pages/Home.tsx`, componente `ServiciosIntro`).
3. **Servizi (Home):** pulsante che porta al dettaglio del servizio, da aggiungere alle card dei servizi nella **home page** (`pages/Home.tsx`, componente `ServiciosIntro`). Oggi non esistono pagine di dettaglio. **Decisione presa (per ora): ancora.** Il pulsante porta al blocco del servizio nella pagina Servizi (es. `/servicios-asesoria-imagen-personal-alicante#armocromia`), quindi serve un `id` su ogni `ServiceRow`/pack in `pages/Servicios.tsx` e un `scroll-mt-*` per l'header sticky. `ScrollToTop` in `App.tsx` non scrolla in cima se l'URL contiene `#`. Le pagine di dettaglio dedicate (`/servicios/:slug`, da elencare in `prerenderRoutes`) restano un'evoluzione futura.
4. **Form:** il form di contatto in `pages/Home.tsx` e quello della masterclass in `components/site.tsx` sono finti (fanno solo `setSent(true)`). Il server non ha API. Decisione aperta: endpoint `POST /api/contact` in Express con invio email, oppure servizio esterno (Formspree, Google Forms).

### Pagina Servizi (`/servicios-asesoria-imagen-personal-alicante`)

Per ogni servizio aggiungere **durata** e **modalità** (presenziale e/o online). Dati da inserire:

- **Armocromía** (presenziale e online): durata "1 sesión de una hora y media + informe y paleta de colores".
- **Estilo Personal** (presenziale e online): durata "una sesión de una hora y media".
- **Análisis del Rostro** (presenziale e online): durata "una sesión de una hora".
- **Análisis de la Silueta** (presenziale e online): durata "una sesión de una hora".
- **Terapia de Armario** (presenziale e online): durata "una sesión de una hora y media".
- **Personal Shopper Presencial**: modalità online o presenziale, **senza durata**.

Cambi di testo:

- **Terapia de Armario**, testo da sostituire con: "Redescubre tu armario y aprende a sacarle el máximo partido. Analizaremos juntas tus prendas para descubrir qué conservar, qué renovar y qué necesitas incorporar según tu estilo, tus colores y tu silueta. Aprenderás a organizar tu armario, crear nuevas combinaciones y comprar de forma más consciente, con guías prácticas y recomendaciones personalizadas. Porque no necesitas más ropa, sino un armario que hable de ti."
- Titolo della sezione packs: "Procesos completos para tu transformación" → **"Programas completos para tu transformación"**.

**Packs y experiencias** (aggiungere CTA, durata e modalità a ciascuno):

- **Tu Mejor Versión**
  - Testo da sostituire con: "Un viaje para reconectar contigo, descubrir tu esencia y potenciar tu belleza natural. A través del coaching de estilo, el Face Shape, el Body Shape y la armocromía, descubriremos los cortes, peinados, accesorios, prendas y colores que mejor armonizan contigo. Una experiencia para ganar confianza, realzar lo que te hace única y expresar tu personalidad a través de tu imagen. Al finalizar, recibirás una guía personalizada con consejos prácticos para tu día a día."
  - Modalità: online o presencial. Durata: 3 sesiones + dossier.
- **Tu imagen, tu marca** (nuovo pack da aggiungere)
  - Testo: "Tu imagen habla de ti antes de que digas una palabra. Descubre cómo potenciarla para transmitir seguridad, autenticidad y profesionalidad. A través del coaching de estilo, el Face Shape, el Body Shape y la armocromía, encontraremos los cortes, peinados, accesorios, prendas y colores que mejor reflejan tu personalidad y tus objetivos profesionales. Una experiencia para proyectar confianza, destacar tu esencia y convertir tu imagen en tu mejor carta de presentación. Al finalizar, recibirás una guía personalizada con consejos prácticos para tu día a día profesional."
  - Modalità: online o presencial. Durata: 3 sesiones + dossier.
- **Tu Armario Ideal**
  - Testo: sostituire "una terapia de armario de 3 horas presencial" con **"una terapia de armario de 4 horas presencial"**.
  - Eliminare la frase "Asesoramiento previo necesario."
  - Aggiungere modalità presenziale, durata "1 sesión de 4 horas presencial" e "lookbook" tra i contenuti.
- **Asesoramiento de Imagen para Eventos**: modalità presenziale, durata "1 sesión de 2 horas".
- **Bridal Experience**: modalità presenziale, durata "4 sesiones".
- **Regala una Experiencia**: CTA con testo **"Regala ahora"**.
- **Armonía Party**: CTA con testo **"Reserva tu experiencia"**.

### Home (`/`)

- Sezione servizi, card **Terapia de Armario**: sostituire il testo con quello indicato nel punto precedente.

### Pagina Sobre mí (`/barbara-bacelle-asesoria-imagen-alicante`)

- Titolo "Conoceme" → **"Quien soy"**.
- Testo: "afincada" → **"establecida"** in Alicante.
- Titolo della sezione "Mi historia" → **"Más de 20 años de pasión por la belleza"**.
- Testo: "20 años de experiencia en el sector de la belleza y la estética y 5 años dedicada específicamente a la consultoría de imagen consciente" → **"20 años de experiencia en el sector de la belleza y la peluquería y 6 años dedicada específicamente a la consultoría de imagen consciente"**.
- Testo: la frase "Mi formación en Milán y mi especialización en armocromía" va sostituita con **"Mi formación en Italian Image Institute de Milán y mi especialización me permite..."**. Il resto del paragrafo resta com'è.
- Box finale (CTA "Empezamos..."): sostituire "Reserva una primera consulta y definimos juntas el mejor punto de partida para ti" con **"Reserva una primera consulta y descubramos juntas cómo empezar este camino"**.

### In tutto il sito

- Il nome **"Bárbara"** diventa **"Barbara"** senza accento (in tutte le occorrenze visibili, compresi `<title>`, meta tag, alt delle immagini e footer). Il dominio resta invariato.

Fatti già completati:
- **Header e menu** copiati dal sito di riferimento `http://localhost/barbarabacelle/`, solo con classi Tailwind (`components/site.tsx`, componente `Header`):
  - toolbar flottante a pillola (`max-w-[428px]`, `h-[76px]`, `rounded-2xl`) con logo SVG (`h-10`) e hamburger animato, su tutti i breakpoint (niente nav orizzontale su desktop);
  - mobile (< `sm`): fissa in fondo allo schermo; `Layout` in `App.tsx` ha `pb-[116px] sm:pb-0` per non coprire il contenuto; il pulsante WhatsApp sta a `bottom-[136px]` su mobile per non sovrapporsi;
  - `sm`+: sticky in alto, trasparente in cima alla pagina e bianca con ombra dopo lo scroll;
  - si nasconde scorrendo verso il basso e riappare risalendo;
  - menu aperto: overlay a schermo intero `bg-white/90 backdrop-blur-[3px]` con logo, voci grandi, CTA "Reserva tu asesoría" e pulsante di chiusura; si chiude con Escape, click sui link, click sullo sfondo o passando a ≥1024px; blocca lo scroll della pagina e porta il focus sul pulsante di chiusura.
  - Sostituisce la vecchia richiesta del menu mobile "agganciato al fondo pagina" (bottom sheet).
- Logo SVG `logo-barbara-bacelle-asesoria-de-imgen-conciente.svg` in `client/public/`, usato nell'header (colori originali) e nel footer (filtro `brightness-0 invert`, cioè bianco).

## Git

- Branch principale: `master`. Il commit `64e6ae7` contiene l'import del progetto ed è allineato con `origin/master`.
- Remote: `origin` = `git@gitlab.com:cloudgroup2/barbarabacelle.git`.
- Il push via SSH richiede una chiave autorizzata su GitLab, che non è configurata in `~/.ssh/config`.
- Non committare `__MATERIALS/`: contiene uno zip di backup da ~34 MB.
- Non committare `node_modules/`, `dist/` o `.env*` (già in `.gitignore`).
- Messaggi di commit: il log esistente mescola italiano e inglese, quindi non c'è una lingua fissa. Il trailer da aggiungere è `Co-Authored-By: Claude Haiku 5.5 <noreply@anthropic.com>`.
- Committa e pusha solo quando richiesto esplicitamente. Se sei su `master`, valuta un branch dedicato prima di modificare la storia.

## Ambiente di sviluppo

- Sistema: Windows 11, shell primaria PowerShell, con Git Bash disponibile.
- Node 24 e pnpm 10.4.1 (via Corepack).
- Il server di produzione può essere avviato in background, ma va fermato a mano alla fine della sessione.
