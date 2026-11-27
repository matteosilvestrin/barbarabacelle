// Testi del sito in spagnolo (lingua principale). La forma di questo oggetto è il tipo
// che deve rispettare anche it.ts: una chiave mancante è un errore di TypeScript.
// Solo stringhe (o funzioni che restituiscono stringhe): il markup resta nei componenti.

export type HomeCardId =
  | "armocromia"
  | "estilo-personal"
  | "analisis-del-rostro"
  | "analisis-de-la-silueta"
  | "terapia-de-armario"
  | "personal-shopper";

export type ServiceId =
  | HomeCardId
  | "tu-mejor-version"
  | "tu-imagen-tu-marca"
  | "tu-armario-ideal"
  | "eventos"
  | "bridal-experience";

type CardText = { title: string; alt: string; text: string };
export type ServiceText = CardText & { modalidad: string; duracion?: string; incluye?: string };

export const es = {
  logoAlt: "Barbara Bacelle — Asesoría de Imagen Personal",

  nav: {
    label: "Navegación principal",
    goHome: "Ir a Inicio",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    home: "Inicio",
    servicios: "Servicios",
    sobreMi: "Sobre mí",
    contacto: "Contacto",
    masterclass: "Masterclass",
    reserva: "Reserva tu asesoría",
    language: "Idioma",
  },

  footer: {
    tagline: "Asesoría de imagen personal en Alicante. Online y presencial.",
    contacto: "Contacto",
    place: "Alicante · Online",
    follow: "Sígueme",
    legalNav: "Información legal",
  },

  legalLinks: {
    avisoLegal: "Aviso legal",
    privacidad: "Privacidad",
    cookies: "Cookies",
  },

  whatsapp: "Escribir por WhatsApp",

  cta: {
    title: "¿Empezamos a construir una imagen que te represente?",
    text: "Reserva una primera consulta y definimos juntas el mejor punto de partida para ti.",
    button: "Quiero reservar mi consulta",
  },

  form: {
    honeypot: "No rellenar",
    nombre: "Nombre",
    nombrePh: "Tu nombre",
    email: "Email",
    emailPh: "tu@email.com",
    ciudad: "Ciudad",
    ciudadPh: "Tu ciudad",
    telefono: "Teléfono",
    telefonoPh: "+34 600 000 000",
    opcional: "(opcional)",
    sending: "Enviando…",
    /** Testo prima del link, spazio finale incluso (in italiano termina con l'apostrofo). */
    privacyAccept: "He leído y acepto la ",
    privacyLink: "política de privacidad",
    privacyInfo: (titular: string, finalidad: string) =>
      `Responsable: ${titular}. Finalidad: ${finalidad}. Legitimación: tu consentimiento. Derechos: acceso, rectificación, supresión y otros, como se explica en la política de privacidad.`,
  },

  popup: {
    ariaLabel: "Masterclass gratuita",
    close: "Cerrar",
    thanksTitle: "¡Gracias!",
    thanksText: "Te responderé personalmente muy pronto.",
    eyebrow: "Novedades",
    titleBefore: "Recibe consejos de ",
    titleScript: "estilo consciente",
    titleAfter: " en tu email",
    text: "Suscríbete y descubre cada semana claves de armocromía, estilo y silueta para sentirte segura con tu imagen.",
    finalidad: "enviarte la masterclass y comunicaciones sobre imagen y estilo",
    error: "No se ha podido enviar. Inténtalo de nuevo en unos minutos.",
    submit: "Quiero suscribirme",
  },

  cookieBanner: {
    ariaLabel: "Aviso de cookies",
    textBefore:
      "Barbara Bacelle, titular de este sitio, quiere usar cookies de análisis de terceros (Google Analytics, de Google) para saber cuántas personas lo visitan y qué páginas ven, y así mejorarlo. Solo se instalan si las aceptas. Puedes cambiar tu elección en cualquier momento en la ",
    link: "Política de cookies",
    textAfter: ".",
    accept: "ACEPTAR",
    reject: "RECHAZAR",
  },

  legalPage: {
    eyebrow: "Información legal",
    updated: "Última actualización:",
    /** Avviso in testa alle pagine legali tradotte; vuoto nella lingua originale. */
    courtesyNote: "",
  },

  notFound: {
    title: "Página no encontrada | Barbara Bacelle",
    description:
      "La página que buscas no existe o ha cambiado de dirección. Vuelve al inicio para descubrir la asesoría de imagen de Barbara Bacelle en Alicante.",
    heading: "Página no encontrada",
    line1: "Lo sentimos, la página que buscas no existe.",
    line2: "Puede que se haya movido o eliminado.",
    back: "Volver al inicio",
  },

  schema: {
    jobTitle: "Asesora de imagen personal",
    businessDescription:
      "Asesoría de imagen personal en Alicante: armocromía, estilo personal, análisis de rostro y silueta, terapia de armario y personal shopper.",
    serviceType: "Asesoría de imagen personal",
  },

  home: {
    seo: {
      title: "Barbara Bacelle | Asesoría de Imagen Personal en Alicante",
      description:
        "Asesoría de imagen personal en Alicante. Te ayudo a descubrir tu estilo auténtico con armocromía, análisis de silueta y acompañamiento personalizado.",
    },
    hero: {
      eyebrow: "Consultora de Imagen Personal",
      titleBefore: "Tu imagen exterior es el espejo de tu interior;",
      titleScript: "haz que hable con autenticidad.",
      text: "Acompaño a mujeres que quieren verse bien, sentirse seguras y proyectarse con autenticidad, integrando imagen, actitud y estilo personal.",
      ctaPrimary: "Reservar primera consulta",
      ctaSecondary: "Ver servicios",
      imgAlt: "Barbara Bacelle en la asesoría de imagen personal",
    },
    unica: {
      imgAlt: "Sesión de asesoría de imagen personal",
      eyebrow: "Mi enfoque",
      title: "Lo que hace única mi asesoría",
      p1: "Mi enfoque no es convencional: combino asesoría de imagen consciente con un toque profesional de peluquería, creando una experiencia integral que potencia tu autenticidad y seguridad.",
      p2: "Cada sesión trabaja sobre tu estilo, color y silueta para que tu imagen externa refleje tu confianza y proyecte coherencia y profesionalidad, tanto en tu vida personal como profesional.",
    },
    valores: {
      eyebrow: "Valores",
      title: "Más que una asesora, una aliada",
      text: "Cada proceso se adapta a tu historia, tus objetivos y tu ritmo.",
      items: [
        { title: "Cercanía", text: "Te acompaño desde la escucha, con empatía y sin juicios." },
        { title: "Confianza", text: "Creamos un espacio seguro para que puedas explorar tu imagen con tranquilidad." },
        { title: "Personalización", text: "No trabajo con fórmulas genéricas; diseño cada plan para ti." },
        { title: "Exclusividad", text: "Atención dedicada y cupos limitados para cuidar la calidad del proceso." },
      ],
    },
    servicios: {
      eyebrow: "Servicios",
      title: "Encuentra el servicio que mejor se adapta a ti",
      text: "Cada servicio está diseñado para acompañarte en tu proceso de transformación, desde la primera consulta hasta el resultado final.",
      more: "Descubre más",
      moreAria: (title: string) => `Descubre más sobre ${title}`,
      all: "Descubre todos los packs y experiencias",
      cards: {
        armocromia: {
          title: "Armocromía",
          alt: "Sesión de armocromía con análisis de color personalizado",
          text: "Descubriremos tu paleta de colores única a través de un análisis de subtono, intensidad y contraste, identificando los colores que mejor armonizan con tu piel, ojos y cabello. Al final de la sesión recibirás tu paleta personalizada.",
        },
        "estilo-personal": {
          title: "Estilo Personal",
          alt: "Sesión de estilo personal con coaching de imagen",
          text: "Identificamos tus valores y la imagen que quieres proyectar, con la ayuda del coaching, para definir un estilo auténtico que refleje quién eres y cómo quieres mostrarte al mundo.",
        },
        "analisis-del-rostro": {
          title: "Análisis del Rostro",
          alt: "Análisis del rostro para maquillaje y peinados",
          text: "Analizamos características, forma y proporciones de tu rostro para identificar maquillaje, cortes, peinados y accesorios que más te favorecen.",
        },
        "analisis-de-la-silueta": {
          title: "Análisis de la Silueta",
          alt: "Análisis de la silueta frente al espejo",
          text: "Analizamos la forma de tu cuerpo e identificamos cómo equilibrar tus proporciones visualmente. Aprenderás a elegir prendas y cortes que realcen tu figura.",
        },
        "terapia-de-armario": {
          title: "Terapia de Armario",
          alt: "Terapia de armario personalizada",
          text: "Redescubre tu armario y aprende a sacarle el máximo partido: qué conservar, qué renovar y qué incorporar según tu estilo, tus colores y tu silueta. Porque no necesitas más ropa, sino un armario que hable de ti.",
        },
        "personal-shopper": {
          title: "Personal Shopper Presencial",
          alt: "Personal shopper presencial en boutique",
          text: "Te acompaño a elegir las prendas que mejor se adaptan a tu estilo, morfología y presupuesto. Una experiencia de compra guiada y eficiente. Asesoramiento previo necesario.",
        },
      } as Record<HomeCardId, CardText>,
    },
    testimonios: {
      eyebrow: "Testimonios",
      title: "Lo que dicen mis clientas",
      items: [
        { quote: "Fue un antes y un después. No solo cambié mi forma de vestir: ahora me siento más segura en mi día a día.", name: "Laura García" },
        { quote: "Desde la primera sesión me sentí escuchada. El Pack Estilo Consciente me ayudó a ordenar mi armario y mi imagen.", name: "María Rodríguez" },
        { quote: "Profesional y cercana. Hoy elijo mis looks con más criterio y confianza, sin complicarme.", name: "Ana Martínez" },
      ],
    },
    contacto: {
      eyebrow: "Contacto",
      title: "Cuéntame qué necesitas y te ayudo a elegir el mejor punto de partida",
      text: "Te responderé personalmente para orientarte según tus objetivos y momento.",
      place: "Online y presencial en Alicante",
      thanksTitle: "¡Gracias por escribirme!",
      thanksText: "He recibido tu petición y te responderé personalmente muy pronto.",
      mensaje: "Mensaje",
      mensajePh: "Cuéntame qué te gustaría mejorar o conseguir con tu imagen…",
      finalidad: "responder a tu solicitud de información",
      error:
        "No se ha podido enviar tu petición. Inténtalo de nuevo en unos minutos o escríbeme a hola@barbarabacelle.es.",
      submit: "Envía mi petición",
    },
  },

  servicios: {
    seo: {
      title: "Servicios de Asesoría de Imagen en Alicante | Barbara Bacelle",
      description:
        "Servicios de asesoría de imagen personal en Alicante: armocromía, estilo personal, análisis de rostro y silueta, terapia de armario y personal shopper.",
    },
    hero: {
      eyebrow: "Servicios",
      titleBefore: "Encuentra el servicio que",
      titleScript: "mejor se adapta a ti",
      text: "Cada servicio está diseñado para acompañarte en tu proceso de transformación, desde la primera consulta hasta el resultado final.",
      cta: "Reservar consulta",
      imgAlt: "Sesión de asesoría de imagen personal",
    },
    labels: { modalidad: "Modalidad", duracion: "Duración", incluye: "Incluye" },
    aLaCarta: {
      eyebrow: "A la carta",
      title: "Mis Servicios a la Carta",
      text: "Servicios individuales diseñados para trabajar un aspecto concreto de tu imagen personal. Tú eliges por dónde empezar.",
    },
    packs: {
      eyebrow: "Packs y experiencias",
      title: "Programas completos para tu transformación",
      cta: "Reservar consulta",
    },
    items: {
      armocromia: {
        title: "Armocromía",
        alt: "Sesión de armocromía con análisis de color personalizado",
        modalidad: "Presencial y online",
        duracion: "1 sesión de una hora y media + informe y paleta de colores",
        text: "Juntos descubriremos tu paleta de colores única a través de un análisis de subtono, intensidad y contraste, identificando los colores que mejor armonizan con tu piel, ojos y cabello. Conocer tus colores amigos te permite potenciar tu estilo, proyectar confianza y tomar decisiones de vestuario más acertadas. Al final de la sesión recibirás tu paleta personalizada, una guía práctica para resaltar tu belleza natural, ahorrar tiempo y dinero, y sentirte auténtico/a en cada ocasión.",
      },
      "estilo-personal": {
        title: "Estilo Personal",
        alt: "Sesión de estilo personal con coaching de imagen",
        modalidad: "Presencial y online",
        duracion: "Una sesión de una hora y media",
        text: "Identificamos tus valores y la imagen que quieres proyectar, con la ayuda del coaching. Trabajamos juntos para definir un estilo auténtico que refleje quién eres y cómo quieres mostrarte al mundo.",
      },
      "analisis-del-rostro": {
        title: "Análisis del Rostro",
        alt: "Análisis del rostro para maquillaje y peinados",
        modalidad: "Presencial y online",
        duracion: "Una sesión de una hora",
        text: "Analizamos características, forma y proporciones de tu rostro para identificar maquillaje, cortes, peinados y accesorios que más te favorecen. Descubre cómo potenciar tus rasgos naturales.",
      },
      "analisis-de-la-silueta": {
        title: "Análisis de la Silueta",
        alt: "Análisis de la silueta frente al espejo",
        modalidad: "Presencial y online",
        duracion: "Una sesión de una hora",
        text: "Analizamos la forma de tu cuerpo e identificamos cómo equilibrar tus proporciones visualmente. Aprenderás a elegir prendas y cortes que realcen tu figura y te hagan sentir segura.",
      },
      "terapia-de-armario": {
        title: "Terapia de Armario",
        alt: "Terapia de armario personalizada",
        modalidad: "Presencial y online",
        duracion: "Una sesión de una hora y media",
        text: "Redescubre tu armario y aprende a sacarle el máximo partido. Analizaremos juntas tus prendas para descubrir qué conservar, qué renovar y qué necesitas incorporar según tu estilo, tus colores y tu silueta. Aprenderás a organizar tu armario, crear nuevas combinaciones y comprar de forma más consciente, con guías prácticas y recomendaciones personalizadas. Porque no necesitas más ropa, sino un armario que hable de ti.",
      },
      "personal-shopper": {
        title: "Personal Shopper Presencial",
        alt: "Personal shopper presencial en boutique",
        modalidad: "Online o presencial",
        text: "Te acompaño a elegir las prendas que mejor se adaptan a tu estilo, morfología y presupuesto. Una experiencia de compra guiada y eficiente para que construyas un armario con propósito. Asesoramiento previo necesario.",
      },
      "tu-mejor-version": {
        title: "Tu Mejor Versión",
        alt: "Experiencia Tu Mejor Versión",
        modalidad: "Online o presencial",
        duracion: "3 sesiones",
        incluye: "Dossier personalizado",
        text: "Un viaje para reconectar contigo, descubrir tu esencia y potenciar tu belleza natural. A través del coaching de estilo, el Face Shape, el Body Shape y la armocromía, descubriremos los cortes, peinados, accesorios, prendas y colores que mejor armonizan contigo. Una experiencia para ganar confianza, realzar lo que te hace única y expresar tu personalidad a través de tu imagen. Al finalizar, recibirás una guía personalizada con consejos prácticos para tu día a día.",
      },
      "tu-imagen-tu-marca": {
        title: "Tu imagen, tu marca",
        alt: "Coaching de imagen profesional: Tu imagen, tu marca",
        modalidad: "Online o presencial",
        duracion: "3 sesiones",
        incluye: "Dossier personalizado",
        text: "Tu imagen habla de ti antes de que digas una palabra. Descubre cómo potenciarla para transmitir seguridad, autenticidad y profesionalidad. A través del coaching de estilo, el Face Shape, el Body Shape y la armocromía, encontraremos los cortes, peinados, accesorios, prendas y colores que mejor reflejan tu personalidad y tus objetivos profesionales. Una experiencia para proyectar confianza, destacar tu esencia y convertir tu imagen en tu mejor carta de presentación. Al finalizar, recibirás una guía personalizada con consejos prácticos para tu día a día profesional.",
      },
      "tu-armario-ideal": {
        title: "Tu Armario Ideal",
        alt: "Experiencia Tu Armario Ideal",
        modalidad: "Presencial",
        duracion: "1 sesión de 4 horas presencial",
        incluye: "Lookbook personalizado",
        text: "Descubrimos tu estilo y morfología, identificamos tu subtono cálido o frío y realizamos una terapia de armario de 4 horas presencial. También trabajamos la organización personalizada de tu armario, la creación de looks combinados con tus prendas, un lookbook exclusivo y un informe con tips para tu día a día.",
      },
      eventos: {
        title: "Asesoramiento de Imagen para Eventos",
        alt: "Asesoramiento de imagen para eventos",
        modalidad: "Presencial",
        duracion: "1 sesión de 2 horas",
        text: "Trabajamos el estilo personal para el evento, body shape para definir el tipo de vestuario, face shape para peinados y accesorios, armocromía para encontrar los tonos de tu look ideal y protocolo según el nivel de formalidad. Como servicios opcionales, puedes añadir peluquería y maquillaje el día del evento, así como personal shopper para encontrar tu look ideal.",
      },
      "bridal-experience": {
        title: "Bridal Experience",
        alt: "Bridal Experience para novias",
        modalidad: "Presencial",
        duracion: "4 sesiones",
        text: "Trabajamos autoestima y bienestar emocional, estilo personal para tu boda, morfología para vestidos y cortes, visagismo para colores y formas y armocromía para el gran día. Como servicios opcionales, puedes añadir peluquería y maquillaje el día de la boda, así como personal shopper para encontrar tu vestido ideal.",
      },
    } as Record<ServiceId, ServiceText>,
    regala: {
      imgAlt: "Tarjeta Regalo de Asesoría de Imagen",
      eyebrow: "Experiencia",
      title: "Regala una Experiencia",
      subtitle: "Tarjeta Regalo de Asesoría de Imagen",
      text: "Regala algo realmente especial: una Tarjeta Regalo de Asesoría de Imagen para que esa persona querida pueda sentirse segura, auténtica y llena de bienestar. Es una experiencia personalizada donde, con cariño y profesionalidad, la acompañamos a descubrir su estilo único, potenciar su confianza y conectar con su belleza interior y exterior. Un regalo lleno de significado que inspira y empodera.",
      cta: "Regala ahora",
    },
    party: {
      eyebrow: "Experience",
      title: "Armonía Party",
      subtitle: "Experiencia grupal para celebrar",
      text: "Celebra tu evento de una manera única y divertida con una experiencia de belleza personalizada para ti y tus amigas. Durante la sesión, realizamos un análisis de color y maquillaje adaptado a cada participante, para que todas descubran su mejor paleta de colores y luzcan radiantes. Disfrutaréis de un ambiente cercano y divertido, con un pequeño picoteo y momentos de aprendizaje sobre estilo, imagen y cuidado personal. Porque regalar confianza y bienestar es el mejor regalo que puedes hacer.",
      cta: "Reserva tu experiencia",
      imgAlt: "Armonía Party: experiencia grupal de análisis de color",
    },
  },

  sobreMi: {
    seo: {
      title: "Barbara Bacelle | Consultora de Imagen Personal en Alicante",
      description:
        "Conoce a Barbara Bacelle, consultora de imagen consciente en Alicante con 20 años de experiencia. Te acompaño a descubrir tu estilo único y auténtico.",
    },
    hero: {
      eyebrow: "Quién soy",
      titleBefore: "Soy Barbara Bacelle,",
      titleScript: "consultora de imagen consciente",
      text: "Italiana de origen, establecida en Alicante. Acompaño a mujeres a descubrir su mejor versión a través de la imagen personal.",
      imgAlt: "Barbara Bacelle, consultora de imagen consciente",
    },
    bio: {
      imgAlt: "Sesión de armocromía con análisis de color personalizado",
      eyebrow: "Mi historia",
      title: "Más de 20 años de pasión por la belleza",
      paragraphs: [
        "Soy Barbara, consultora de imagen consciente, italiana de nacimiento, con 20 años de experiencia en el sector de la belleza y la peluquería y 6 años dedicada específicamente a la consultoría de imagen consciente. Mi formación en Italian Image Institute de Milán y mi especialización me permiten combinar análisis de color, estilo y silueta para ofrecer un asesoramiento personalizado que ayuda a cada persona a descubrir y potenciar su imagen única.",
        "Mi enfoque va más allá de la apariencia: trabajo desde el bienestar interior hacia la proyección externa, integrando técnicas de autoconocimiento, coaching de imagen y acompañamiento cercano. Creo firmemente que la verdadera imagen surge del equilibrio entre cuerpo y mente, y que proyectar confianza y autenticidad es la base de una presencia sólida y coherente.",
        "Si buscas consultoría de imagen para potenciar tu imagen personal, aumentar tu confianza o proyectar tu mejor versión, encontrarás en mí un espacio profesional y cercano. Te acompaño en todo el proceso, desde el análisis de color y armocromía hasta el desarrollo de estilo, silueta y autoconocimiento.",
      ],
      stats: [
        { value: "+20", label: "años de experiencia" },
        { value: "+500", label: "clientas felices" },
      ],
    },
    cta: "Reserva una primera consulta y descubramos juntas cómo empezar este camino.",
  },
};
