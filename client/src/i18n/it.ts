// Testi del sito in italiano, tradotti da es.ts e revisionati (27 novembre 2026).
// Deve avere la stessa forma di es.ts (lo controlla TypeScript).
import type { Dict } from "./index";

export const it: Dict = {
  logoAlt: "Barbara Bacelle — Consulenza d'Immagine Personale",

  nav: {
    label: "Navigazione principale",
    goHome: "Vai alla home",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
    home: "Home",
    servicios: "Servizi",
    sobreMi: "Chi sono",
    contacto: "Contatti",
    masterclass: "Masterclass",
    reserva: "Prenota la tua consulenza",
    language: "Lingua",
  },

  footer: {
    tagline: "Consulenza d'immagine personale ad Alicante. Online e in presenza.",
    contacto: "Contatti",
    place: "Alicante · Online",
    follow: "Seguimi",
    legalNav: "Informazioni legali",
  },

  legalLinks: {
    avisoLegal: "Note legali",
    privacidad: "Privacy",
    cookies: "Cookie",
  },

  whatsapp: "Scrivimi su WhatsApp",

  cta: {
    title: "Iniziamo a costruire un'immagine che ti rappresenti?",
    text: "Prenota una prima consulenza e insieme definiamo il punto di partenza migliore per te.",
    button: "Voglio prenotare la mia consulenza",
  },

  form: {
    honeypot: "Non compilare",
    nombre: "Nome",
    nombrePh: "Il tuo nome",
    email: "Email",
    emailPh: "tu@email.com",
    ciudad: "Città",
    ciudadPh: "La tua città",
    telefono: "Telefono",
    telefonoPh: "+39 300 000 0000",
    opcional: "(facoltativo)",
    sending: "Invio in corso…",
    privacyAccept: "Ho letto e accetto l'",
    privacyLink: "informativa sulla privacy",
    privacyInfo: (titular: string, finalidad: string) =>
      `Titolare: ${titular}. Finalità: ${finalidad}. Base giuridica: il tuo consenso. Diritti: accesso, rettifica, cancellazione e altri, come spiegato nell'informativa sulla privacy.`,
  },

  popup: {
    ariaLabel: "Masterclass gratuita",
    close: "Chiudi",
    thanksTitle: "Grazie!",
    thanksText: "Ti risponderò personalmente molto presto.",
    eyebrow: "Novità",
    titleBefore: "Ricevi consigli di ",
    titleScript: "stile consapevole",
    titleAfter: " nella tua email",
    text: "Iscriviti e scopri ogni settimana i segreti di armocromia, stile e silhouette per sentirti sicura della tua immagine.",
    finalidad: "inviarti la masterclass e comunicazioni su immagine e stile",
    error: "Non è stato possibile inviare. Riprova tra qualche minuto.",
    submit: "Voglio iscrivermi",
  },

  cookieBanner: {
    ariaLabel: "Avviso sui cookie",
    textBefore:
      "Barbara Bacelle, titolare di questo sito, vorrebbe usare cookie di analisi di terze parti (Google Analytics, di Google) per sapere quante persone lo visitano e quali pagine vedono, così da migliorarlo. Vengono installati solo se li accetti. Puoi cambiare la tua scelta in qualsiasi momento nella ",
    link: "Cookie policy",
    textAfter: ".",
    accept: "ACCETTA",
    reject: "RIFIUTA",
  },

  legalPage: {
    eyebrow: "Informazioni legali",
    updated: "Ultimo aggiornamento:",
    courtesyNote:
      "Traduzione di cortesia. Il testo di riferimento è la versione in spagnolo: in caso di discrepanza prevale la versione spagnola.",
  },

  notFound: {
    title: "Pagina non trovata | Barbara Bacelle",
    description:
      "La pagina che cerchi non esiste o ha cambiato indirizzo. Torna alla home per scoprire la consulenza d'immagine di Barbara Bacelle ad Alicante.",
    heading: "Pagina non trovata",
    line1: "Ci dispiace, la pagina che cerchi non esiste.",
    line2: "Potrebbe essere stata spostata o eliminata.",
    back: "Torna alla home",
  },

  schema: {
    jobTitle: "Consulente d'immagine personale",
    businessDescription:
      "Consulenza d'immagine personale ad Alicante: armocromia, stile personale, analisi del viso e della silhouette, terapia dell'armadio e personal shopper.",
    serviceType: "Consulenza d'immagine personale",
  },

  home: {
    seo: {
      title: "Barbara Bacelle | Consulente d'Immagine ad Alicante",
      description:
        "Consulenza d'immagine ad Alicante e online. Ti aiuto a scoprire il tuo stile autentico con armocromia, analisi della figura e un percorso su misura.",
    },
    hero: {
      eyebrow: "Consulente d'Immagine Personale",
      titleBefore: "La tua immagine esteriore è lo specchio della tua interiorità;",
      titleScript: "lascia che parli con autenticità.",
      text: "Accompagno le donne che vogliono piacersi, sentirsi sicure e mostrarsi con autenticità, unendo immagine, atteggiamento e stile personale.",
      ctaPrimary: "Prenota la prima consulenza",
      ctaSecondary: "Scopri i servizi",
      imgAlt: "Barbara Bacelle durante una consulenza d'immagine personale",
    },
    unica: {
      imgAlt: "Sessione di consulenza d'immagine personale",
      eyebrow: "Il mio approccio",
      title: "Cosa rende unica la mia consulenza",
      p1: "Il mio approccio non è convenzionale: unisco la consulenza d'immagine consapevole a un tocco professionale da parrucchiera, per un'esperienza completa che valorizza la tua autenticità e la tua sicurezza.",
      p2: "Ogni sessione lavora sul tuo stile, sui tuoi colori e sulla tua silhouette, perché la tua immagine esteriore rifletta la tua fiducia e trasmetta coerenza e professionalità, nella vita personale come in quella professionale.",
    },
    valores: {
      eyebrow: "Valori",
      title: "Più che una consulente, un'alleata",
      text: "Ogni percorso si adatta alla tua storia, ai tuoi obiettivi e ai tuoi tempi.",
      items: [
        { title: "Vicinanza", text: "Ti accompagno con ascolto ed empatia, senza giudizi." },
        { title: "Fiducia", text: "Creiamo uno spazio sicuro in cui esplorare la tua immagine con serenità." },
        { title: "Personalizzazione", text: "Non uso formule standard: ogni percorso è pensato per te." },
        { title: "Esclusività", text: "Attenzione dedicata e posti limitati per curare la qualità del percorso." },
      ],
    },
    servicios: {
      eyebrow: "Servizi",
      title: "Trova il servizio più adatto a te",
      text: "Ogni servizio è pensato per accompagnarti nel tuo percorso di trasformazione, dalla prima consulenza al risultato finale.",
      more: "Scopri di più",
      moreAria: (title: string) => `Scopri di più su ${title}`,
      all: "Scopri tutti i pacchetti e le esperienze",
      cards: {
        armocromia: {
          title: "Armocromia",
          alt: "Sessione di armocromia con analisi del colore personalizzata",
          text: "Scopriremo la tua palette di colori unica analizzando sottotono, intensità e contrasto, per individuare i colori che si armonizzano meglio con la tua pelle, i tuoi occhi e i tuoi capelli. Alla fine della sessione riceverai la tua palette personalizzata.",
        },
        "estilo-personal": {
          title: "Stile Personale",
          alt: "Sessione di stile personale con coaching d'immagine",
          text: "Individuiamo i tuoi valori e l'immagine che vuoi trasmettere, con l'aiuto del coaching, per definire uno stile autentico che rifletta chi sei e come vuoi mostrarti al mondo.",
        },
        "analisis-del-rostro": {
          title: "Analisi del Viso",
          alt: "Analisi del viso per trucco e acconciature",
          text: "Analizziamo i tratti, la forma e le proporzioni del tuo viso per individuare il trucco, i tagli, le acconciature e gli accessori che ti valorizzano di più.",
        },
        "analisis-de-la-silueta": {
          title: "Analisi della Silhouette",
          alt: "Analisi della silhouette davanti allo specchio",
          text: "Analizziamo la forma del tuo corpo e capiamo come bilanciare visivamente le tue proporzioni. Imparerai a scegliere capi e modelli che valorizzano la tua figura.",
        },
        "terapia-de-armario": {
          title: "Terapia dell'Armadio",
          alt: "Terapia dell'armadio personalizzata",
          text: "Riscopri il tuo armadio e impara a sfruttarlo al meglio: cosa tenere, cosa rinnovare e cosa aggiungere in base al tuo stile, ai tuoi colori e alla tua silhouette. Perché non ti servono più vestiti, ma un armadio che parli di te.",
        },
        "personal-shopper": {
          title: "Personal Shopper in Presenza",
          alt: "Personal shopper in presenza in boutique",
          text: "Ti accompagno a scegliere i capi più adatti al tuo stile, alla tua morfologia e al tuo budget. Un'esperienza di shopping guidata ed efficiente. È necessaria una consulenza preliminare.",
        },
      },
    },
    testimonios: {
      eyebrow: "Testimonianze",
      title: "Cosa dicono le mie clienti",
      items: [
        { quote: "C'è stato un prima e un dopo. Non ho cambiato solo il mio modo di vestire: ora mi sento più sicura ogni giorno.", name: "Laura García" },
        { quote: "Dalla prima sessione mi sono sentita ascoltata. Il pacchetto Stile Consapevole mi ha aiutata a mettere ordine nel mio armadio e nella mia immagine.", name: "María Rodríguez" },
        { quote: "Professionale e alla mano. Oggi scelgo i miei look con più criterio e sicurezza, senza complicarmi la vita.", name: "Ana Martínez" },
      ],
    },
    contacto: {
      eyebrow: "Contatti",
      title: "Raccontami di cosa hai bisogno e ti aiuto a scegliere il punto di partenza migliore",
      text: "Ti risponderò personalmente per orientarti in base ai tuoi obiettivi e al tuo momento.",
      place: "Online e in presenza ad Alicante",
      thanksTitle: "Grazie per avermi scritto!",
      thanksText: "Ho ricevuto la tua richiesta e ti risponderò personalmente molto presto.",
      mensaje: "Messaggio",
      mensajePh: "Raccontami cosa vorresti migliorare o ottenere con la tua immagine…",
      finalidad: "rispondere alla tua richiesta di informazioni",
      error:
        "Non è stato possibile inviare la tua richiesta. Riprova tra qualche minuto oppure scrivimi a hola@barbarabacelle.es.",
      submit: "Invia la mia richiesta",
    },
  },

  servicios: {
    seo: {
      title: "Servizi di Consulenza d'Immagine ad Alicante | Barbara Bacelle",
      description:
        "Consulenza d'immagine personale ad Alicante e online: armocromia, stile personale, analisi del viso e della silhouette, armadio e personal shopper.",
    },
    hero: {
      eyebrow: "Servizi",
      titleBefore: "Trova il servizio",
      titleScript: "più adatto a te",
      text: "Ogni servizio è pensato per accompagnarti nel tuo percorso di trasformazione, dalla prima consulenza al risultato finale.",
      cta: "Prenota una consulenza",
      imgAlt: "Sessione di consulenza d'immagine personale",
    },
    labels: { modalidad: "Modalità", duracion: "Durata", incluye: "Include" },
    aLaCarta: {
      eyebrow: "À la Carte",
      title: "I miei Servizi à la Carte",
      text: "Servizi singoli pensati per lavorare su un aspetto specifico della tua immagine personale. Sei tu a scegliere da dove iniziare.",
    },
    packs: {
      eyebrow: "Pacchetti ed esperienze",
      title: "Percorsi completi per la tua trasformazione",
      cta: "Prenota una consulenza",
    },
    items: {
      armocromia: {
        title: "Armocromia",
        alt: "Sessione di armocromia con analisi del colore personalizzata",
        modalidad: "In presenza e online",
        duracion: "1 sessione di un'ora e mezza + report e palette di colori",
        text: "Insieme scopriremo la tua palette di colori unica analizzando sottotono, intensità e contrasto, per individuare i colori che si armonizzano meglio con la tua pelle, i tuoi occhi e i tuoi capelli. Conoscere i tuoi colori amici ti permette di valorizzare il tuo stile, trasmettere sicurezza e fare scelte di guardaroba più azzeccate. Alla fine della sessione riceverai la tua palette personalizzata, una guida pratica per esaltare la tua bellezza naturale, risparmiare tempo e denaro e sentirti autentica in ogni occasione.",
      },
      "estilo-personal": {
        title: "Stile Personale",
        alt: "Sessione di stile personale con coaching d'immagine",
        modalidad: "In presenza e online",
        duracion: "Una sessione di un'ora e mezza",
        text: "Individuiamo i tuoi valori e l'immagine che vuoi trasmettere, con l'aiuto del coaching. Lavoriamo insieme per definire uno stile autentico che rifletta chi sei e come vuoi mostrarti al mondo.",
      },
      "analisis-del-rostro": {
        title: "Analisi del Viso",
        alt: "Analisi del viso per trucco e acconciature",
        modalidad: "In presenza e online",
        duracion: "Una sessione di un'ora",
        text: "Analizziamo i tratti, la forma e le proporzioni del tuo viso per individuare il trucco, i tagli, le acconciature e gli accessori che ti valorizzano di più. Scopri come esaltare i tuoi lineamenti naturali.",
      },
      "analisis-de-la-silueta": {
        title: "Analisi della Silhouette",
        subtitle: "Body Shape",
        alt: "Analisi della silhouette davanti allo specchio",
        modalidad: "In presenza e online",
        duracion: "Una sessione di un'ora",
        text: "Analizziamo la forma del tuo corpo e capiamo come bilanciare visivamente le tue proporzioni. Imparerai a scegliere capi e modelli che valorizzano la tua figura e ti fanno sentire sicura.",
      },
      "terapia-de-armario": {
        title: "Terapia dell'Armadio",
        alt: "Terapia dell'armadio personalizzata",
        modalidad: "In presenza e online",
        duracion: "Una sessione di un'ora e mezza",
        text: "Riscopri il tuo armadio e impara a sfruttarlo al meglio. Analizzeremo insieme i tuoi capi per capire cosa tenere, cosa rinnovare e cosa ti serve aggiungere in base al tuo stile, ai tuoi colori e alla tua silhouette. Imparerai a organizzare l'armadio, creare nuovi abbinamenti e fare acquisti in modo più consapevole, con guide pratiche e consigli personalizzati. Perché non ti servono più vestiti, ma un armadio che parli di te.",
      },
      "personal-shopper": {
        title: "Personal Shopper in Presenza",
        alt: "Personal shopper in presenza in boutique",
        modalidad: "Online o in presenza",
        text: "Ti accompagno a scegliere i capi più adatti al tuo stile, alla tua morfologia e al tuo budget. Un'esperienza di shopping guidata ed efficiente per costruire un guardaroba con uno scopo. È necessaria una consulenza preliminare.",
      },
      "tu-mejor-version": {
        title: "La Tua Versione Migliore",
        alt: "Esperienza La Tua Versione Migliore",
        modalidad: "Online o in presenza",
        duracion: "3 sessioni",
        incluye: "Dossier personalizzato",
        text: "Un viaggio per ritrovare te stessa, scoprire la tua essenza e valorizzare la tua bellezza naturale. Attraverso il coaching di stile, il Face Shape, il Body Shape e l'armocromia, scopriremo i tagli, le acconciature, gli accessori, i capi e i colori che si armonizzano meglio con te. Un'esperienza per acquistare sicurezza, esaltare ciò che ti rende unica ed esprimere la tua personalità attraverso la tua immagine. Al termine riceverai una guida personalizzata con consigli pratici per la vita di tutti i giorni.",
      },
      "tu-imagen-tu-marca": {
        title: "La tua immagine, il tuo brand",
        alt: "Coaching d'immagine professionale: La tua immagine, il tuo brand",
        modalidad: "Online o in presenza",
        duracion: "3 sessioni",
        incluye: "Dossier personalizzato",
        text: "La tua immagine parla di te prima ancora che tu dica una parola. Scopri come valorizzarla per trasmettere sicurezza, autenticità e professionalità. Attraverso il coaching di stile, il Face Shape, il Body Shape e l'armocromia, troveremo i tagli, le acconciature, gli accessori, i capi e i colori che riflettono meglio la tua personalità e i tuoi obiettivi professionali. Un'esperienza per trasmettere fiducia, far emergere la tua essenza e trasformare la tua immagine nel tuo miglior biglietto da visita. Al termine riceverai una guida personalizzata con consigli pratici per la tua quotidianità professionale.",
      },
      "tu-armario-ideal": {
        title: "Il Tuo Armadio Ideale",
        alt: "Esperienza Il Tuo Armadio Ideale",
        modalidad: "In presenza",
        duracion: "1 sessione di 4 ore in presenza",
        incluye: "Lookbook personalizzato",
        text: "Scopriamo il tuo stile e la tua morfologia, individuiamo il tuo sottotono caldo o freddo e facciamo una terapia dell'armadio di 4 ore in presenza. Lavoriamo anche sull'organizzazione personalizzata del tuo armadio, sulla creazione di look con i tuoi capi, su un lookbook esclusivo e su un report con consigli per la vita di tutti i giorni.",
      },
      eventos: {
        title: "Consulenza d'Immagine per Eventi",
        alt: "Consulenza d'immagine per eventi",
        modalidad: "In presenza",
        duracion: "1 sessione di 2 ore",
        text: "Lavoriamo sullo stile personale per l'evento, sul body shape per definire il tipo di abito, sul face shape per acconciature e accessori, sull'armocromia per trovare i toni del tuo look ideale e sul dress code in base al livello di formalità. Come servizi facoltativi puoi aggiungere parrucchiera e trucco il giorno dell'evento, oltre al personal shopper per trovare il tuo look ideale.",
      },
      "bridal-experience": {
        title: "Bridal Experience",
        alt: "Bridal Experience per spose",
        modalidad: "In presenza",
        duracion: "4 sessioni",
        text: "Lavoriamo su autostima e benessere emotivo, sullo stile personale per il tuo matrimonio, sulla morfologia per abiti e tagli, sul visagismo per colori e forme e sull'armocromia per il grande giorno. Come servizi facoltativi puoi aggiungere parrucchiera e trucco il giorno del matrimonio, oltre al personal shopper per trovare il tuo abito ideale.",
      },
    },
    regala: {
      imgAlt: "Gift card di consulenza d'immagine",
      eyebrow: "Esperienza",
      title: "Regala un'Esperienza",
      subtitle: "Gift card di consulenza d'immagine",
      text: "Regala qualcosa di davvero speciale: una gift card di consulenza d'immagine perché una persona cara possa sentirsi sicura, autentica e piena di benessere. È un'esperienza personalizzata in cui, con cura e professionalità, la accompagniamo a scoprire il suo stile unico, rafforzare la sua sicurezza e connettersi con la sua bellezza interiore ed esteriore. Un regalo pieno di significato, che ispira e dà forza.",
      cta: "Regala ora",
    },
    party: {
      eyebrow: "Experience",
      title: "Armonía Party",
      subtitle: "Un'esperienza di gruppo per festeggiare",
      text: "Festeggia il tuo evento in modo unico e divertente con un'esperienza di bellezza personalizzata per te e le tue amiche. Durante la sessione facciamo un'analisi del colore e del trucco su misura per ogni partecipante, così che tutte scoprano la loro palette migliore e siano radiose. Vi godrete un'atmosfera informale e divertente, con un piccolo aperitivo e momenti per imparare qualcosa su stile, immagine e cura di sé. Perché regalare fiducia e benessere è il regalo più bello che tu possa fare.",
      cta: "Prenota la tua esperienza",
      imgAlt: "Armonía Party: esperienza di gruppo di analisi del colore",
    },
  },

  sobreMi: {
    seo: {
      title: "Barbara Bacelle | Consulente d'Immagine Personale ad Alicante",
      description:
        "Conosci Barbara Bacelle, consulente d'immagine consapevole ad Alicante con 20 anni di esperienza. Ti accompagno a scoprire il tuo stile unico e autentico.",
    },
    hero: {
      eyebrow: "Chi sono",
      titleBefore: "Sono Barbara Bacelle,",
      titleScript: "consulente d'immagine consapevole",
      text: "Italiana di origine, vivo e lavoro ad Alicante. Accompagno le donne a scoprire la loro versione migliore attraverso l'immagine personale.",
      imgAlt: "Barbara Bacelle, consulente d'immagine consapevole",
    },
    bio: {
      imgAlt: "Sessione di armocromia con analisi del colore personalizzata",
      eyebrow: "La mia storia",
      title: "Oltre 20 anni di passione per la bellezza",
      paragraphs: [
        "Sono Barbara, consulente d'immagine consapevole, italiana di nascita, con 20 anni di esperienza nel settore della bellezza e dell'acconciatura e 6 anni dedicati in modo specifico alla consulenza d'immagine consapevole. La mia formazione all'Italian Image Institute di Milano e la mia specializzazione mi permettono di unire analisi del colore, dello stile e della silhouette per offrire una consulenza personalizzata che aiuta ogni persona a scoprire e valorizzare la propria immagine unica.",
        "Il mio approccio va oltre l'apparenza: lavoro partendo dal benessere interiore per arrivare all'immagine esteriore, integrando tecniche di conoscenza di sé, coaching d'immagine e un accompagnamento vicino e personale. Credo profondamente che la vera immagine nasca dall'equilibrio tra corpo e mente, e che trasmettere fiducia e autenticità sia la base di una presenza solida e coerente.",
        "Se cerchi una consulenza d'immagine per valorizzare la tua immagine personale, aumentare la tua sicurezza o mostrare la tua versione migliore, troverai in me uno spazio professionale e accogliente. Ti accompagno in tutto il percorso, dall'analisi del colore e dall'armocromia fino allo sviluppo dello stile, della silhouette e della conoscenza di te.",
      ],
      stats: [
        { value: "+20", label: "anni di esperienza" },
        { value: "+500", label: "clienti soddisfatte" },
      ],
    },
    cta: "Prenota una prima consulenza e scopriamo insieme come iniziare questo percorso.",
  },
};
