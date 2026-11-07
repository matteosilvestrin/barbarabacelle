import { Reveal, Eyebrow, CTASection } from "@/components/site";
import { Seo } from "@/components/Seo";

export default function SobreMi() {
  return (
    <main>
      <Seo
        title="Barbara Bacelle | Consultora de Imagen Personal en Alicante"
        description="Conoce a Barbara Bacelle, consultora de imagen consciente con 20 años de experiencia en Alicante. Te acompaño a descubrir tu estilo único y potenciar tu autenticidad."
        path="/barbara-bacelle-asesoria-imagen-alicante"
        image="/barbara-bacelle-asesora-de-imagen-alicante.jpg"
      />
      {/* Hero */}
      <section className="relative">
        <div className="grid lg:grid-cols-2 items-stretch">
          <div className="container-brand flex items-center py-16 md:py-24 lg:py-32 order-2 lg:order-1">
            <div className="max-w-xl">
              <Reveal>
                <Eyebrow>Quién soy</Eyebrow>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02]">
                  Soy Barbara Bacelle,{" "}
                  <span className="font-script text-teal font-medium">consultora de imagen consciente</span>
                </h1>
                <p className="mt-8 text-teal-dark/80 md:text-lg leading-8">
                  Italiana de origen, establecida en Alicante. Acompaño a mujeres a descubrir su
                  mejor versión a través de la imagen personal.
                </p>
              </Reveal>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <img
              src="/barbara-bacelle-asesora-de-imagen-alicante.jpg"
              alt="Barbara Bacelle, consultora de imagen consciente"
              className="h-72 w-full object-cover object-top sm:h-96 lg:h-full"
            />
          </div>
        </div>
      </section>

      {/* Biografía */}
      <section className="py-20 md:py-24 lg:py-32 bg-stone-lightest">
        <div className="container-brand grid gap-10 lg:gap-16 lg:grid-cols-2 items-center">
          <Reveal>
            <img
              src="/armocromia-analisis-de-color-alicante.jpg"
              alt="Sesión de armocromía con análisis de color personalizado"
              loading="lazy" decoding="async"
              className="aspect-[4/5] w-full object-cover rounded-2xl"
            />
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>Mi historia</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-semibold leading-[1.08]">
              Más de 20 años de pasión por la belleza
            </h2>
            <div className="mt-8 space-y-5 max-w-2xl text-teal-dark/80 md:text-lg leading-8">
              <p>
                Soy Barbara, consultora de imagen consciente, italiana de nacimiento, con 20
                años de experiencia en el sector de la belleza y la peluquería y 6 años dedicada
                específicamente a la consultoría de imagen consciente. Mi formación en Italian
                Image Institute de Milán y mi especialización me permiten combinar análisis de color, estilo
                y silueta para ofrecer un asesoramiento personalizado que ayuda a cada persona a
                descubrir y potenciar su imagen única.
              </p>
              <p>
                Mi enfoque va más allá de la apariencia: trabajo desde el bienestar interior
                hacia la proyección externa, integrando técnicas de autoconocimiento, coaching
                de imagen y acompañamiento cercano. Creo firmemente que la verdadera imagen
                surge del equilibrio entre cuerpo y mente, y que proyectar confianza y
                autenticidad es la base de una presencia sólida y coherente.
              </p>
              <p>
                Si buscas consultoría de imagen para potenciar tu imagen personal, aumentar tu
                confianza o proyectar tu mejor versión, encontrarás en mí un espacio profesional
                y cercano. Te acompaño en todo el proceso, desde el análisis de color y
                armocromía hasta el desarrollo de estilo, silueta y autoconocimiento.
              </p>
            </div>
            <div className="mt-10 flex gap-10">
              <div>
                <p className="font-serif text-5xl font-semibold text-teal">+20</p>
                <p className="text-sm text-teal-dark/70 mt-1">años de experiencia</p>
              </div>
              <div>
                <p className="font-serif text-5xl font-semibold text-teal">+500</p>
                <p className="text-sm text-teal-dark/70 mt-1">clientas felices</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection text="Reserva una primera consulta y descubramos juntas cómo empezar este camino." />
    </main>
  );
}
