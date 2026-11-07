import { Reveal, Eyebrow, CTASection } from "@/components/site";

const A_LA_CARTA = [
  {
    img: "/img-session.jpg",
    alt: "Sesión de armocromía con análisis de color personalizado",
    title: "Armocromía",
    text: "Juntos descubriremos tu paleta de colores única a través de un análisis de subtono, intensidad y contraste, identificando los colores que mejor armonizan con tu piel, ojos y cabello. Conocer tus colores amigos te permite potenciar tu estilo, proyectar confianza y tomar decisiones de vestuario más acertadas. Al final de la sesión recibirás tu paleta personalizada, una guía práctica para resaltar tu belleza natural, ahorrar tiempo y dinero, y sentirte auténtico/a en cada ocasión.",
  },
  {
    img: "/img-estilo.jpg",
    alt: "Sesión de estilo personal con coaching de imagen",
    title: "Estilo Personal",
    text: "Identificamos tus valores y la imagen que quieres proyectar, con la ayuda del coaching. Trabajamos juntos para definir un estilo auténtico que refleje quién eres y cómo quieres mostrarte al mundo.",
  },
  {
    img: "/img-rostro.jpg",
    alt: "Análisis del rostro para maquillaje y peinados",
    title: "Análisis del Rostro",
    text: "Analizamos características, forma y proporciones de tu rostro para identificar maquillaje, cortes, peinados y accesorios que más te favorecen. Descubre cómo potenciar tus rasgos naturales.",
  },
  {
    img: "/img-silueta.jpg",
    alt: "Análisis de la silueta frente al espejo",
    title: "Análisis de la Silueta",
    text: "Analizamos la forma de tu cuerpo e identificamos cómo equilibrar tus proporciones visualmente. Aprenderás a elegir prendas y cortes que realcen tu figura y te hagan sentir segura.",
  },
  {
    img: "/img-armario.jpg",
    alt: "Terapia de armario personalizada",
    title: "Terapia de Armario",
    text: "Redescubre tu armario y aprende a sacarle el máximo partido. Analizaremos juntas tus prendas para descubrir qué conservar, qué renovar y qué necesitas incorporar según tu estilo, tus colores y tu silueta. Aprenderás a organizar tu armario, crear nuevas combinaciones y comprar de forma más consciente, con guías prácticas y recomendaciones personalizadas. Porque no necesitas más ropa, sino un armario que hable de ti.",
  },
  {
    img: "/img-shopper.jpg",
    alt: "Personal shopper presencial en boutique",
    title: "Personal Shopper Presencial",
    text: "Te acompaño a elegir las prendas que mejor se adaptan a tu estilo, morfología y presupuesto. Una experiencia de compra guiada y eficiente para que construyas un armario con propósito. Asesoramiento previo necesario.",
  },
];

const PACKS = [
  {
    img: "/img-estilo.jpg",
    alt: "Experiencia Tu Mejor Versión",
    title: "Tu Mejor Versión",
    text: "Trabajamos el estilo personal con coaching, automaquillaje personalizado, corte y peinado personalizado, face shape para rostro, cortes y accesorios, body shape para cuerpo y proporciones, armocromía para descubrir los tonos que armonizan contigo y consejos prácticos con informe. También incluye asesoría exprés presencial de una hora, coaching y preguntas, clase de automaquillaje y tips fáciles para tu día a día.",
  },
  {
    img: "/img-armario.jpg",
    alt: "Experiencia Tu Armario Ideal",
    title: "Tu Armario Ideal",
    text: "Descubrimos tu estilo y morfología, identificamos tu subtono cálido o frío y realizamos una terapia de armario de 3 horas presencial. También trabajamos la organización personalizada de tu armario, la creación de looks combinados con tus prendas, un lookbook exclusivo y un informe con tips para tu día a día. Asesoramiento previo necesario.",
  },
  {
    img: "/img-evento.jpg",
    alt: "Asesoramiento de imagen para eventos",
    title: "Asesoramiento de Imagen para Eventos",
    text: "Trabajamos el estilo personal para el evento, body shape para definir el tipo de vestuario, face shape para peinados y accesorios, armocromía para encontrar los tonos de tu look ideal y protocolo según el nivel de formalidad. Como servicios opcionales, puedes añadir peluquería y maquillaje el día del evento, así como personal shopper para encontrar tu look ideal.",
  },
  {
    img: "/img-bridal.jpg",
    alt: "Bridal Experience para novias",
    title: "Bridal Experience",
    text: "Trabajamos autoestima y bienestar emocional, estilo personal para tu boda, morfología para vestidos y cortes, visagismo para colores y formas y armocromía para el gran día. Como servicios opcionales, puedes añadir peluquería y maquillaje el día de la boda, así como personal shopper para encontrar tu vestido ideal.",
  },
];

function Hero() {
  return (
    <section className="relative">
      <div className="grid lg:grid-cols-2 items-stretch">
        <div className="container-brand flex items-center py-16 md:py-24 lg:py-32 order-2 lg:order-1">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow>Servicios</Eyebrow>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02]">
                Encuentra el servicio que{" "}
                <span className="font-script text-teal font-medium">mejor se adapta a ti</span>
              </h1>
              <p className="mt-8 text-teal-dark/80 md:text-lg leading-8">
                Cada servicio está diseñado para acompañarte en tu proceso de transformación,
                desde la primera consulta hasta el resultado final.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="/#contacto" className="btn-primary">Reservar consulta</a>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="relative order-1 lg:order-2">
          <img
            src="/img-session.jpg"
            alt="Sesión de asesoría de imagen personal"
            className="h-72 w-full object-cover sm:h-96 lg:h-full"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ s, i }: { s: (typeof A_LA_CARTA)[number]; i: number }) {
  const flip = i % 2 === 1;
  return (
    <Reveal>
      <article className={`grid gap-8 lg:gap-16 lg:grid-cols-2 items-center ${flip ? "" : ""}`}>
        <div className={flip ? "lg:order-2" : ""}>
          <img src={s.img} alt={s.alt} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover rounded-2xl" />
        </div>
        <div className={flip ? "lg:order-1" : ""}>
          <h3 className="text-3xl font-semibold">{s.title}</h3>
          <p className="mt-4 max-w-2xl text-teal-dark/80 leading-8">{s.text}</p>
        </div>
      </article>
    </Reveal>
  );
}

export default function Servicios() {
  return (
    <main>
      <Hero />

      <section className="py-20 md:py-24 lg:py-32">
        <div className="container-brand">
          <Reveal className="max-w-3xl">
            <Eyebrow>A la carta</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-semibold leading-[1.08]">Mis Servicios a la Carta</h2>
            <p className="mt-6 text-teal-dark/80 md:text-lg leading-8">
              Servicios individuales diseñados para trabajar un aspecto concreto de tu imagen
              personal. Tú eliges por dónde empezar.
            </p>
          </Reveal>
          <div className="mt-16 space-y-16 lg:space-y-20">
            {A_LA_CARTA.map((s, i) => <ServiceRow key={s.title} s={s} i={i} />)}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 lg:py-32 bg-stone-lightest">
        <div className="container-brand">
          <Reveal className="max-w-3xl">
            <Eyebrow>Packs y experiencias</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-semibold leading-[1.08]">Procesos completos para tu transformación</h2>
          </Reveal>
          <div className="mt-16 space-y-16 lg:space-y-20">
            {PACKS.map((s, i) => <ServiceRow key={s.title} s={s} i={i} />)}
          </div>
        </div>
      </section>

      {/* Regala una experiencia */}
      <section className="py-20 md:py-24 lg:py-32">
        <div className="container-brand grid gap-8 lg:gap-16 lg:grid-cols-2 items-center">
          <Reveal>
            <img src="/img-regalo.jpg" alt="Tarjeta Regalo de Asesoría de Imagen" loading="lazy" decoding="async" className="aspect-square w-full object-cover rounded-2xl" />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow mb-4">Experiencia</p>
            <h2 className="text-4xl md:text-5xl font-semibold leading-[1.08]">Regala una Experiencia</h2>
            <p className="mt-3 font-script text-3xl text-teal">Tarjeta Regalo de Asesoría de Imagen</p>
            <p className="mt-6 max-w-2xl text-teal-dark/80 leading-8">
              Regala algo realmente especial: una Tarjeta Regalo de Asesoría de Imagen para que
              esa persona querida pueda sentirse segura, auténtica y llena de bienestar. Es una
              experiencia personalizada donde, con cariño y profesionalidad, la acompañamos a
              descubrir su estilo único, potenciar su confianza y conectar con su belleza
              interior y exterior. Un regalo lleno de significado que inspira y empodera.
            </p>
            <div className="mt-8"><a href="/#contacto" className="btn-primary">Quiero reservar mi consulta</a></div>
          </Reveal>
        </div>
      </section>

      {/* Armonía Party */}
      <section className="py-20 md:py-24 lg:py-32 bg-teal-dark text-white">
        <div className="container-brand grid gap-8 lg:gap-16 lg:grid-cols-2 items-center">
          <Reveal>
            <p className="eyebrow !text-white/70 mb-4">Experience</p>
            <h2 className="text-4xl md:text-5xl font-semibold leading-[1.08] !text-white">Armonía Party</h2>
            <p className="mt-3 font-script text-3xl text-teal-lighter">Experiencia grupal para celebrar</p>
            <p className="mt-6 max-w-2xl text-white/80 leading-8">
              Celebra tu evento de una manera única y divertida con una experiencia de belleza
              personalizada para ti y tus amigas. Durante la sesión, realizamos un análisis de
              color y maquillaje adaptado a cada participante, para que todas descubran su mejor
              paleta de colores y luzcan radiantes. Disfrutaréis de un ambiente cercano y
              divertido, con un pequeño picoteo y momentos de aprendizaje sobre estilo, imagen y
              cuidado personal. Porque regalar confianza y bienestar es el mejor regalo que
              puedes hacer.
            </p>
            <div className="mt-8"><a href="/#contacto" className="btn-secondary">Reservar consulta</a></div>
          </Reveal>
          <Reveal delay={100}>
            <img src="/img-party.jpg" alt="Armonía Party: experiencia grupal de análisis de color" loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover rounded-2xl" />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
