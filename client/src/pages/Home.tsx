import { useState } from "react";
import { Reveal, Eyebrow, CTASection } from "@/components/site";
import { Check, ChevronRight } from "lucide-react";

const SERVICIOS = [
  {
    img: "/img-session.jpg",
    alt: "Sesión de armocromía con análisis de color personalizado",
    title: "Armocromía",
    id: "armocromia",
    text: "Descubriremos tu paleta de colores única a través de un análisis de subtono, intensidad y contraste, identificando los colores que mejor armonizan con tu piel, ojos y cabello. Al final de la sesión recibirás tu paleta personalizada.",
  },
  {
    img: "/img-estilo.jpg",
    alt: "Sesión de estilo personal con coaching de imagen",
    title: "Estilo Personal",
    id: "estilo-personal",
    text: "Identificamos tus valores y la imagen que quieres proyectar, con la ayuda del coaching, para definir un estilo auténtico que refleje quién eres y cómo quieres mostrarte al mundo.",
  },
  {
    img: "/img-rostro.jpg",
    alt: "Análisis del rostro para maquillaje y peinados",
    title: "Análisis del Rostro",
    id: "analisis-del-rostro",
    text: "Analizamos características, forma y proporciones de tu rostro para identificar maquillaje, cortes, peinados y accesorios que más te favorecen.",
  },
  {
    img: "/img-silueta.jpg",
    alt: "Análisis de la silueta frente al espejo",
    title: "Análisis de la Silueta",
    id: "analisis-de-la-silueta",
    text: "Analizamos la forma de tu cuerpo e identificamos cómo equilibrar tus proporciones visualmente. Aprenderás a elegir prendas y cortes que realcen tu figura.",
  },
  {
    img: "/img-armario.jpg",
    alt: "Terapia de armario personalizada",
    title: "Terapia de Armario",
    id: "terapia-de-armario",
    text: "Redescubre tu armario y aprende a sacarle el máximo partido: qué conservar, qué renovar y qué incorporar según tu estilo, tus colores y tu silueta. Porque no necesitas más ropa, sino un armario que hable de ti.",
  },
  {
    img: "/img-shopper.jpg",
    alt: "Personal shopper presencial en boutique",
    title: "Personal Shopper Presencial",
    id: "personal-shopper",
    text: "Te acompaño a elegir las prendas que mejor se adaptan a tu estilo, morfología y presupuesto. Una experiencia de compra guiada y eficiente. Asesoramiento previo necesario.",
  },
];

const VALORES = [
  { title: "Cercanía", text: "Te acompaño desde la escucha, con empatía y sin juicios." },
  { title: "Confianza", text: "Creamos un espacio seguro para que puedas explorar tu imagen con tranquilidad." },
  { title: "Personalización", text: "No trabajo con fórmulas genéricas; diseño cada plan para ti." },
  { title: "Exclusividad", text: "Atención dedicada y cupos limitados para cuidar la calidad del proceso." },
];

const TESTIMONIOS = [
  { quote: "Fue un antes y un después. No solo cambié mi forma de vestir: ahora me siento más segura en mi día a día.", name: "Laura García" },
  { quote: "Desde la primera sesión me sentí escuchada. El Pack Estilo Consciente me ayudó a ordenar mi armario y mi imagen.", name: "María Rodríguez" },
  { quote: "Profesional y cercana. Hoy elijo mis looks con más criterio y confianza, sin complicarme.", name: "Ana Martínez" },
];

function Hero() {
  return (
    <section id="inicio" className="relative">
      <div className="grid lg:grid-cols-2 items-stretch">
        <div className="container-brand flex items-center py-16 md:py-24 lg:py-32 order-2 lg:order-1">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow>Consultora de Imagen Personal</Eyebrow>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02]">
                Tu imagen exterior es el espejo de tu interior;{" "}
                <span className="font-script text-teal font-medium">haz que hable con autenticidad.</span>
              </h1>
              <p className="mt-8 text-teal-dark/80 md:text-lg leading-8">
                Acompaño a mujeres que quieren verse bien, sentirse seguras y proyectarse con
                autenticidad, integrando imagen, actitud y estilo personal.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="/#contacto" className="btn-primary">Reservar primera consulta</a>
                <a href="/servicios-asesoria-imagen-personal-alicante" className="btn-secondary">Ver servicios</a>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="relative order-1 lg:order-2">
          <img
            src="/hero-barbara-v3.jpg"
            alt="Barbara Bacelle en la asesoría de imagen personal"
            className="h-72 w-full object-cover object-top sm:h-96 lg:h-full"
          />
        </div>
      </div>
    </section>
  );
}

function Unica() {
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-stone-lightest">
      <div className="container-brand grid gap-10 lg:gap-16 lg:grid-cols-2 items-center">
        <Reveal>
          <img
            src="/img-teal.jpg"
            alt="Sesión de asesoría de imagen personal"
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover rounded-2xl"
          />
        </Reveal>
        <Reveal delay={100}>
          <Eyebrow>Mi enfoque</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.08]">Lo que hace única mi asesoría</h2>
          <p className="mt-8 max-w-2xl text-teal-dark/80 md:text-lg leading-8">
            Mi enfoque no es convencional: combino asesoría de imagen consciente con un toque
            profesional de peluquería, creando una experiencia integral que potencia tu
            autenticidad y seguridad.
          </p>
          <p className="mt-5 max-w-2xl text-teal-dark/80 md:text-lg leading-8">
            Cada sesión trabaja sobre tu estilo, color y silueta para que tu imagen externa
            refleje tu confianza y proyecte coherencia y profesionalidad, tanto en tu vida
            personal como profesional.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Valores() {
  return (
    <section className="py-20 md:py-24 lg:py-32">
      <div className="container-brand">
        <Reveal className="max-w-3xl">
          <Eyebrow>Valores</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.08]">Más que una asesora, una aliada</h2>
          <p className="mt-6 text-teal-dark/80 md:text-lg leading-8">
            Cada proceso se adapta a tu historia, tus objetivos y tu ritmo.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {VALORES.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="border-t-2 border-teal pt-6">
                <h3 className="text-2xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-teal-dark/80 leading-7">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiciosIntro() {
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-stone-lightest">
      <div className="container-brand">
        <Reveal className="max-w-3xl">
          <Eyebrow>Servicios</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.08]">Encuentra el servicio que mejor se adapta a ti</h2>
          <p className="mt-6 text-teal-dark/80 md:text-lg leading-8">
            Cada servicio está diseñado para acompañarte en tu proceso de transformación, desde
            la primera consulta hasta el resultado final.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 80}>
              {/* Hover sulla card: zoom lento dell'immagine dentro la cornice (DESIGN.md › Motion). */}
              <article className="group/card rounded-2xl bg-white overflow-hidden h-full flex flex-col">
                {/* Foto cliccabile verso la stessa ancora di "Descubre más". È un duplicato del link
                    testuale, quindi resta fuori dal tab e dagli screen reader (tabIndex -1, aria-hidden). */}
                <a
                  href={`/servicios-asesoria-imagen-personal-alicante#${s.id}`}
                  className="block overflow-hidden"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <img
                    src={s.img} alt={s.alt} loading="lazy" decoding="async"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover/card:scale-105 motion-reduce:transition-none motion-reduce:group-hover/card:scale-100"
                  />
                </a>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm text-teal-dark/80 leading-7 flex-1">{s.text}</p>
                  {/* <a> normale (non Link di wouter): il caricamento completo fa scorrere il browser all'ancora. */}
                  <a
                    href={`/servicios-asesoria-imagen-personal-alicante#${s.id}`}
                    className="group mt-6 inline-flex items-center gap-2 self-start rounded-sm font-semibold text-teal transition-colors hover:text-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
                    aria-label={`Descubre más sobre ${s.title}`}
                  >
                    Descubre más
                    <ChevronRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="/servicios-asesoria-imagen-personal-alicante" className="btn-secondary">
            Descubre todos los packs y experiencias
          </a>
        </div>
      </div>
    </section>
  );
}

function Testimonios() {
  return (
    <section className="py-20 md:py-24 lg:py-32">
      <div className="container-brand">
        <Reveal className="max-w-3xl">
          <Eyebrow>Testimonios</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.08]">Lo que dicen mis clientas</h2>
        </Reveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {TESTIMONIOS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="rounded-2xl bg-stone-lightest p-6 md:p-8 h-full flex flex-col">
                <blockquote className="text-teal-dark/90 leading-8 flex-1">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-lightest text-teal-dark">
                    <Check size={16} />
                  </span>
                  <span className="font-medium text-teal-dark">{t.name}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contacto" className="py-20 md:py-24 lg:py-32 bg-teal-dark text-white scroll-mt-20">
      <div className="container-brand grid gap-12 lg:gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow !text-white/70 mb-4">Contacto</p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.08] !text-white">
            Cuéntame qué necesitas y te ayudo a elegir el mejor punto de partida
          </h2>
          <p className="mt-6 text-white/80 md:text-lg leading-8 max-w-xl">
            Te responderé personalmente para orientarte según tus objetivos y momento.
          </p>
          <div className="mt-10 space-y-3 text-white/90">
            <p><a href="mailto:espaciodeestilo@gmail.com" className="hover:text-teal-lighter transition-colors">espaciodeestilo@gmail.com</a></p>
            <p><a href="tel:+34640907062" className="hover:text-teal-lighter transition-colors">+34 640 90 70 62</a></p>
            <p className="text-white/70">Online y presencial en Alicante</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          {sent ? (
            <div className="rounded-2xl bg-white/10 p-8 md:p-10 text-center">
              <p className="font-serif text-3xl font-semibold">¡Gracias por escribirme!</p>
              <p className="mt-3 text-white/80">He recibido tu petición y te responderé personalmente muy pronto.</p>
            </div>
          ) : (
            <form className="rounded-2xl bg-white p-6 md:p-10 space-y-5" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div>
                <label htmlFor="c-nombre" className="block text-sm font-medium text-teal-dark mb-1">Nombre</label>
                <input id="c-nombre" required placeholder="Tu nombre" className="input-brand" />
              </div>
              <div>
                <label htmlFor="c-email" className="block text-sm font-medium text-teal-dark mb-1">Email</label>
                <input id="c-email" type="email" required placeholder="tu@email.com" className="input-brand" />
              </div>
              <div>
                <label htmlFor="c-mensaje" className="block text-sm font-medium text-teal-dark mb-1">Mensaje</label>
                <textarea id="c-mensaje" required rows={5} placeholder="Cuéntame qué te gustaría mejorar o conseguir con tu imagen…" className="input-brand !min-h-0 py-3 resize-none" />
              </div>
              <button type="submit" className="btn-primary w-full">Envía mi petición</button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Unica />
      <Valores />
      <ServiciosIntro />
      <Testimonios />
      <CTASection />
      <Contacto />
    </main>
  );
}
