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
pnpm start            # cross-env NODE_ENV=production node dist/index.js (funziona anche su Windows)
pnpm check            # tsc --noEmit
pnpm format           # prettier --write .
```

**Nota Windows:** `pnpm start` usa `cross-env`, quindi funziona anche in PowerShell e cmd. Per cambiare porta: `$env:PORT=3001; pnpm start` in PowerShell, `PORT=3001 pnpm start` in Git Bash.

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
    pages/              # Home, Servicios, SobreMi, AvisoLegal, PoliticaPrivacidad, PoliticaCookies, NotFound
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
| `/aviso-legal` | `AvisoLegal` |
| `/politica-de-privacidad` | `PoliticaPrivacidad` (stesso URL del sito precedente) |
| `/politica-de-cookies` | `PoliticaCookies` |
| `/404` e qualsiasi altra URL | `NotFound` (noindex) |

Il link "Sobre mí" punta alla route `/barbara-bacelle-asesoria-imagen-alicante`.

## Documenti di riferimento: dove stanno le informazioni

- **`DESIGN.md`** (root): tutti i dati di design, cioè colori, font, spaziatura, stile visivo e componenti. Consultalo per qualsiasi valore visivo.
- **`KNOWLEDGE_BASE.md`** (root): i dettagli sui contenuti, cioè testi, servizi, packs, dati della consulente e copy.
- I valori di design vanno poi in `client/src/index.css` come token CSS. Non hardcodare colori nei componenti.

## Regole di codice

**Prerendering (importante):** `pnpm build` renderizza ogni pagina in Node. Nel rendering non si possono toccare `window`, `document`, `localStorage` o `navigator`: va fatto solo in `useEffect` o negli event handler. Non usare `Math.random()`, `Date.now()` o `new Date()` nel render. Per animazioni di ingresso sopra la piega usa `initial={false}` o CSS, perché `opacity: 0` iniziale nasconde il testo nell'HTML statico. Leggi i warning `[prerender]` del build e risolvili tutti.

**SEO:** ogni pagina imposta il proprio `<title>` e la `description` con i tag React 19 nel componente, tramite `<Seo title description path image />` (`components/Seo.tsx`), che aggiunge anche canonical, `og:*` e `twitter:*`. Il dominio per gli URL assoluti è `SITE_URL` in `shared/const.ts`. Un `<title>` deve avere un solo figlio stringa: scrivi `` <title>{`${name} | Brand`}</title> ``, non `<title>{name} | Brand</title>`. Usa URL assoluti per `canonical` e `og:image`.

**Link:** non annidare `<a>` dentro un `Link` di wouter, passa i children direttamente.

**Select:** ogni `<Select.Item>` deve avere un `value` non vuoto.

**Toast:** usa solo **sonner**. Non aggiungere react-toastify o `@radix-ui/react-toast`.

**Placeholder:** se aggiungi elementi per funzioni non ancora implementate (nav, CTA), mostra un toast al click che indichi che la funzione arriverà, e segnalalo quando presenti il lavoro. Il testo del toast va concordato con il titolare, perché il sito è in spagnolo.

**Asset:** i file in `client/public/` vanno referenziati con path assoluti (`/nome.jpg`). Se sostituisci un asset cambia nome o aggiungi un hash, perché le risorse sono cachate a lungo. **Foto:** JPEG veri (non PNG rinominati), progressivi, qualità ~80, lato lungo max 1536 px; nome in spagnolo, minuscolo, con trattini e parole chiave del contenuto (es. `terapia-de-armario-organizacion.jpg`, `personal-shopper-alicante.jpg`).

**Stili:** `.container` è già centrato con padding responsive, quindi non serve `mx-auto px-*`. `.flex` ha `min-width:0`. Il `variant="outline"` dei button ha sfondo trasparente.

## Stato attuale e todo aperti

Todo concordati con il titolare del sito (non ancora implementati, salvo dove indicato):

1. **Form:** il form di contatto in `pages/Home.tsx` e quello della masterclass in `components/site.tsx` sono finti (fanno solo `setSent(true)`). Il server non ha API. Decisione aperta: endpoint `POST /api/contact` in Express con invio email, oppure servizio esterno (Formspree, Google Forms).
2. **Pagine legali da far verificare** al titolare (o a un consulente) prima della pubblicazione: dati in `client/src/lib/legal.ts`. Quando il form funzionerà, il fornitore scelto va citato nella privacy (sezione destinatari). Se si aggiungono analytics servono banner cookie e aggiornamento di `/politica-de-cookies`.
3. **Pagine di approfondimento per servizio:** una pagina dedicata per ogni servizio (`/servicios/:slug`, da elencare in `prerenderRoutes`), linkata dalla card in home e dalla sezione in Servicios. Il testo e le keywords per ogni pagina vanno presi da `KNOWLEDGE_BASE.md`; ogni pagina ha il proprio `<Seo>`.
4. **Shop per clienti e consulenti di imagen:** nuova sezione per l'acquisto di collane e materiale per consulenti di immagine. Decisioni aperte: catalogo (prodotti, prezzi, stock) gestito in codice o in un database, spedizioni, IVA. Per le vendite online in Spagna servono anche le condizioni generali di vendita e l'informazione sul diritto di recesso, da far verificare alla titolare insieme alle pagine legali.
5. **Pagamenti con Stripe:** integrazione di Stripe Checkout per lo shop e, se la titolare lo vuole, per le prenotazioni dei servizi. Il webhook di conferma va gestito lato server (Express), e le chiavi restano in `.env*` (mai committate). Stripe diventa un nuovo destinatario dei dati: va citato nella privacy, come per il fornitore del form (punto 1).

Fatti già completati:
- **Consenso privacy nei form**: componente `PrivacyConsent` in `components/site.tsx`, usato nel form contatti di `pages/Home.tsx` e nel popup masterclass. Casella obbligatoria (`required`, il browser blocca l'invio senza spunta) con link a `/politica-de-privacidad` in nuova scheda, più informazione di base RGPD (responsabile, finalità, legittimazione, diritti). **Decisioni del titolare:** email legale `hola@barbarabacelle.es`; data di aggiornamento delle pagine legali 7 novembre 2026.
- **Pagine legali**: `/aviso-legal`, `/politica-de-privacidad`, `/politica-de-cookies`, con layout comune `components/LegalPage.tsx` (stili dei contenuti via selettori arbitrari Tailwind, testo in colonna `max-w-3xl`) e dati del titolare in `lib/legal.ts` (`LEGAL`, `LEGAL_LINKS`). Testi ispirati alla privacy del sito precedente e all'estratto iubenda, aggiornati al sito attuale: niente analytics né profilazione, Privacy Shield sostituito dal Data Privacy Framework, unico storage tecnico `mc_popup_shown` (sessionStorage), Google Fonts dichiarato. Il footer linka le tre pagine (`LEGAL_LINKS`); sono prerenderizzate e nella sitemap.
- **Personal Shopper Presencial**: decisione del titolare, la frase "Asesoramiento previo necesario." **resta** nel testo (in `pages/Servicios.tsx` e nella card di `pages/Home.tsx`).
- **Ottimizzazione immagini**: le 12 foto usate dal sito erano PNG con estensione `.jpg` (~2 MB l'una). Convertite in JPEG progressivi q80 alle stesse dimensioni (totale da 22 MB a 1,7 MB) e rinominate con nomi SEO in spagnolo; riferimenti aggiornati in pagine e `Seo`. Eliminati i file non usati da nessuna pagina (`barbara-hero.jpg`, `color-analysis.jpg`, `event-look.jpg`, `gift-card.jpg`, `hero-barbara-v2.jpg`, `hero-portrait.jpg`, `img-hero.jpg`, `wardrobe.jpg`, `logo-barbara-bacelle.png`, circa 14 MB): restano recuperabili dalla storia git.
- **SEO per pagina**: Home, Servicios e Sobre mí usano `<Seo>` con title e description presi da `KNOWLEDGE_BASE.md` ("Barbara" senza accento), canonical e `og:url` su `https://barbarabacelle.es<path>`, `og:image`/`twitter:image` con la foto hero della pagina. Il prerender sostituisce i meta di default di `client/index.html`. La 404 ha il titolo "Página no encontrada | Barbara Bacelle" e resta `noindex`. Le keywords del KNOWLEDGE_BASE non sono state messe nel meta `keywords` (Google lo ignora).
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
  - `sm`+: sticky in alto, trasparente in cima alla pagina e bianca con ombra dopo lo scroll;
  - si nasconde scorrendo verso il basso e riappare risalendo;
  - menu aperto: overlay a schermo intero `bg-white/90 backdrop-blur-[3px]` con logo, voci grandi, CTA "Reserva tu asesoría" e pulsante di chiusura; si chiude con Escape, click sui link, click sullo sfondo o passando a ≥1024px; blocca lo scroll della pagina e porta il focus sul pulsante di chiusura.
  - Sostituisce la vecchia richiesta del menu mobile "agganciato al fondo pagina" (bottom sheet).
- Logo SVG `logo-barbara-bacelle-asesoria-de-imgen-conciente.svg` in `client/public/`, usato nell'header (colori originali) e nel footer (filtro `brightness-0 invert`, cioè bianco).

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
