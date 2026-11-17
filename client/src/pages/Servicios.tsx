import { Reveal, Eyebrow, CTASection } from "@/components/site";
import { Seo, JsonLd } from "@/components/Seo";
import { serviciosSchema } from "@/lib/schema";
import { BookOpen, Clock, MapPin, type LucideIcon } from "lucide-react";

const PATH = "/servicios-asesoria-imagen-personal-alicante";

type Servicio = {
  id: string;
  img: string;
  alt: string;
  title: string;
  text: string;
  modalidad: string;
  duracion?: string;
  incluye?: string;
  /** Clase Tailwind object-position para fotos que no se recortan bien al centro. */
  imgPosition?: string;
};

const A_LA_CARTA: Servicio[] = [
  {
    img: "/armocromia-analisis-de-color-alicante.jpg",
    alt: "Sesión de armocromía con análisis de color personalizado",
    title: "Armocromía",
    id: "armocromia",
    modalidad: "Presencial y online",
    duracion: "1 sesión de una hora y media + informe y paleta de colores",
    text: "Juntos descubriremos tu paleta de colores única a través de un análisis de subtono, intensidad y contraste, identificando los colores que mejor armonizan con tu piel, ojos y cabello. Conocer tus colores amigos te permite potenciar tu estilo, proyectar confianza y tomar decisiones de vestuario más acertadas. Al final de la sesión recibirás tu paleta personalizada, una guía práctica para resaltar tu belleza natural, ahorrar tiempo y dinero, y sentirte auténtico/a en cada ocasión.",
  },
  {
    img: "/estilo-personal-coaching-de-imagen.jpg",
    alt: "Sesión de estilo personal con coaching de imagen",
    title: "Estilo Personal",
    id: "estilo-personal",
    modalidad: "Presencial y online",
    duracion: "Una sesión de una hora y media",
    text: "Identificamos tus valores y la imagen que quieres proyectar, con la ayuda del coaching. Trabajamos juntos para definir un estilo auténtico que refleje quién eres y cómo quieres mostrarte al mundo.",
  },
  {
    img: "/analisis-del-rostro-visagismo-maquillaje.jpg",
    alt: "Análisis del rostro para maquillaje y peinados",
    title: "Análisis del Rostro",
    id: "analisis-del-rostro",
    modalidad: "Presencial y online",
    duracion: "Una sesión de una hora",
    text: "Analizamos características, forma y proporciones de tu rostro para identificar maquillaje, cortes, peinados y accesorios que más te favorecen. Descubre cómo potenciar tus rasgos naturales.",
  },
  {
    img: "/analisis-de-la-silueta-body-shape.jpg",
    alt: "Análisis de la silueta frente al espejo",
    title: "Análisis de la Silueta",
    id: "analisis-de-la-silueta",
    modalidad: "Presencial y online",
    duracion: "Una sesión de una hora",
    text: "Analizamos la forma de tu cuerpo e identificamos cómo equilibrar tus proporciones visualmente. Aprenderás a elegir prendas y cortes que realcen tu figura y te hagan sentir segura.",
  },
  {
    img: "/terapia-de-armario-organizacion.jpg",
    alt: "Terapia de armario personalizada",
    title: "Terapia de Armario",
    id: "terapia-de-armario",
    modalidad: "Presencial y online",
    duracion: "Una sesión de una hora y media",
    text: "Redescubre tu armario y aprende a sacarle el máximo partido. Analizaremos juntas tus prendas para descubrir qué conservar, qué renovar y qué necesitas incorporar según tu estilo, tus colores y tu silueta. Aprenderás a organizar tu armario, crear nuevas combinaciones y comprar de forma más consciente, con guías prácticas y recomendaciones personalizadas. Porque no necesitas más ropa, sino un armario que hable de ti.",
  },
  {
    img: "/personal-shopper-alicante.jpg",
    alt: "Personal shopper presencial en boutique",
    title: "Personal Shopper Presencial",
    id: "personal-shopper",
    modalidad: "Online o presencial",
    text: "Te acompaño a elegir las prendas que mejor se adaptan a tu estilo, morfología y presupuesto. Una experiencia de compra guiada y eficiente para que construyas un armario con propósito. Asesoramiento previo necesario.",
  },
];

const PACKS: Servicio[] = [
  {
    img: "/estilo-personal-coaching-de-imagen.jpg",
    alt: "Experiencia Tu Mejor Versión",
    title: "Tu Mejor Versión",
    id: "tu-mejor-version",
    modalidad: "Online o presencial",
    duracion: "3 sesiones",
    incluye: "Dossier personalizado",
    text: "Un viaje para reconectar contigo, descubrir tu esencia y potenciar tu belleza natural. A través del coaching de estilo, el Face Shape, el Body Shape y la armocromía, descubriremos los cortes, peinados, accesorios, prendas y colores que mejor armonizan contigo. Una experiencia para ganar confianza, realzar lo que te hace única y expresar tu personalidad a través de tu imagen. Al finalizar, recibirás una guía personalizada con consejos prácticos para tu día a día.",
  },
  {
    img: "/tu-imagen-tu-marca-coaching-imagen-profesional.jpg",
    alt: "Coaching de imagen profesional: Tu imagen, tu marca",
    // Foto vertical: el recorte 4:3 se desplaza hacia arriba para no cortar el rostro.
    imgPosition: "object-[50%_20%]",
    title: "Tu imagen, tu marca",
    id: "tu-imagen-tu-marca",
    modalidad: "Online o presencial",
    duracion: "3 sesiones",
    incluye: "Dossier personalizado",
    text: "Tu imagen habla de ti antes de que digas una palabra. Descubre cómo potenciarla para transmitir seguridad, autenticidad y profesionalidad. A través del coaching de estilo, el Face Shape, el Body Shape y la armocromía, encontraremos los cortes, peinados, accesorios, prendas y colores que mejor reflejan tu personalidad y tus objetivos profesionales. Una experiencia para proyectar confianza, destacar tu esencia y convertir tu imagen en tu mejor carta de presentación. Al finalizar, recibirás una guía personalizada con consejos prácticos para tu día a día profesional.",
  },
  {
    img: "/terapia-de-armario-organizacion.jpg",
    alt: "Experiencia Tu Armario Ideal",
    title: "Tu Armario Ideal",
    id: "tu-armario-ideal",
    modalidad: "Presencial",
    duracion: "1 sesión de 4 horas presencial",
    incluye: "Lookbook personalizado",
    text: "Descubrimos tu estilo y morfología, identificamos tu subtono cálido o frío y realizamos una terapia de armario de 4 horas presencial. También trabajamos la organización personalizada de tu armario, la creación de looks combinados con tus prendas, un lookbook exclusivo y un informe con tips para tu día a día.",
  },
  {
    img: "/asesoria-de-imagen-para-eventos.jpg",
    alt: "Asesoramiento de imagen para eventos",
    title: "Asesoramiento de Imagen para Eventos",
    id: "eventos",
    modalidad: "Presencial",
    duracion: "1 sesión de 2 horas",
    text: "Trabajamos el estilo personal para el evento, body shape para definir el tipo de vestuario, face shape para peinados y accesorios, armocromía para encontrar los tonos de tu look ideal y protocolo según el nivel de formalidad. Como servicios opcionales, puedes añadir peluquería y maquillaje el día del evento, así como personal shopper para encontrar tu look ideal.",
  },
  {
    img: "/bridal-experience-asesoria-de-imagen-novias.jpg",
    alt: "Bridal Experience para novias",
    title: "Bridal Experience",
    id: "bridal-experience",
    modalidad: "Presencial",
    duracion: "4 sesiones",
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
            src="/armocromia-analisis-de-color-alicante.jpg"
            alt="Sesión de asesoría de imagen personal"
            className="h-72 w-full object-cover sm:h-96 lg:h-full"
          />
        </div>
      </div>
    </section>
  );
}

// Las secciones se enlazan con anclas (/servicios-...#armocromia): scroll-mt deja
// espacio para el header sticky en sm+ (en mobile la toolbar está abajo).
const ANCHOR_OFFSET = "scroll-mt-8 sm:scroll-mt-[136px]";

function ServiceRow({ s, i, cta }: { s: Servicio; i: number; cta?: string }) {
  const flip = i % 2 === 1;
  const details = [
    { label: "Modalidad", Icon: MapPin, value: s.modalidad },
    s.duracion && { label: "Duración", Icon: Clock, value: s.duracion },
    s.incluye && { label: "Incluye", Icon: BookOpen, value: s.incluye },
  ].filter(Boolean) as { label: string; Icon: LucideIcon; value: string }[];
  return (
    <Reveal>
      <article id={s.id} className={`grid gap-8 lg:gap-16 lg:grid-cols-2 items-center ${ANCHOR_OFFSET}`}>
        <div className={flip ? "lg:order-2" : ""}>
          <img src={s.img} alt={s.alt} loading="lazy" decoding="async" className={`aspect-[4/3] w-full object-cover rounded-2xl ${s.imgPosition ?? ""}`} />
        </div>
        <div className={flip ? "lg:order-1" : ""}>
          <h3 className="text-3xl font-semibold">{s.title}</h3>
          <p className="mt-4 max-w-2xl text-teal-dark/80 leading-8">{s.text}</p>
          <dl className="mt-6 max-w-2xl space-y-2 border-t border-teal-dark/10 pt-5 text-[0.95rem] leading-6">
            {details.map((d) => (
              <div key={d.label} className="flex items-start gap-3">
                <dt className="shrink-0 pt-0.5 text-teal" title={d.label}>
                  <d.Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                  <span className="sr-only">{d.label}</span>
                </dt>
                <dd className="text-teal-dark/80">{d.value}</dd>
              </div>
            ))}
          </dl>
          {cta && <div className="mt-8"><a href="/#contacto" className="btn-primary">{cta}</a></div>}
        </div>
      </article>
    </Reveal>
  );
}

export default function Servicios() {
  return (
    <main>
      <Seo
        title="Servicios de Asesoría de Imagen en Alicante | Barbara Bacelle"
        description="Servicios de asesoría de imagen personal en Alicante: armocromía, estilo personal, análisis de rostro y silueta, terapia de armario y personal shopper."
        path={PATH}
        image="/armocromia-analisis-de-color-alicante.jpg"
      />
      <JsonLd data={serviciosSchema(PATH, [...A_LA_CARTA, ...PACKS])} />
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
            {A_LA_CARTA.map((s, i) => <ServiceRow key={s.id} s={s} i={i} />)}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 lg:py-32 bg-stone-lightest">
        <div className="container-brand">
          <Reveal className="max-w-3xl">
            <Eyebrow>Packs y experiencias</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-semibold leading-[1.08]">Programas completos para tu transformación</h2>
          </Reveal>
          <div className="mt-16 space-y-16 lg:space-y-20">
            {PACKS.map((s, i) => <ServiceRow key={s.id} s={s} i={i} cta="Reservar consulta" />)}
          </div>
        </div>
      </section>

      {/* Regala una experiencia */}
      <section id="regala-una-experiencia" className={`py-20 md:py-24 lg:py-32 ${ANCHOR_OFFSET}`}>
        <div className="container-brand grid gap-8 lg:gap-16 lg:grid-cols-2 items-center">
          <Reveal>
            <img src="/tarjeta-regalo-asesoria-de-imagen.jpg" alt="Tarjeta Regalo de Asesoría de Imagen" loading="lazy" decoding="async" className="aspect-square w-full object-cover rounded-2xl" />
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
            <div className="mt-8"><a href="/#contacto" className="btn-primary">Regala ahora</a></div>
          </Reveal>
        </div>
      </section>

      {/* Armonía Party */}
      <section id="armonia-party" className={`py-20 md:py-24 lg:py-32 bg-teal-dark text-white ${ANCHOR_OFFSET}`}>
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
            <div className="mt-8"><a href="/#contacto" className="btn-secondary">Reserva tu experiencia</a></div>
          </Reveal>
          <Reveal delay={100}>
            <img src="/armonia-party-analisis-de-color-en-grupo.jpg" alt="Armonía Party: experiencia grupal de análisis de color" loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover rounded-2xl" />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
