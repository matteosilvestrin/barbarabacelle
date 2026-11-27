import { Reveal, Eyebrow, CTASection } from "@/components/site";
import { Seo, JsonLd } from "@/components/Seo";
import { serviciosSchema } from "@/lib/schema";
import { useI18n } from "@/i18n";
import type { ServiceId } from "@/i18n/es";
import { BookOpen, Clock, MapPin, type LucideIcon } from "lucide-react";

// Immagini e ancore (uguali in tutte le lingue); i testi sono in t.servicios.items.
type Servicio = {
  id: ServiceId;
  img: string;
  /** Clase Tailwind object-position para fotos que no se recortan bien al centro. */
  imgPosition?: string;
};

const A_LA_CARTA: Servicio[] = [
  { id: "armocromia", img: "/armocromia-analisis-de-color-alicante.jpg" },
  { id: "estilo-personal", img: "/estilo-personal-coaching-de-imagen.jpg" },
  { id: "analisis-del-rostro", img: "/analisis-del-rostro-visagismo-maquillaje.jpg" },
  { id: "analisis-de-la-silueta", img: "/analisis-de-la-silueta-body-shape.jpg" },
  { id: "terapia-de-armario", img: "/terapia-de-armario-organizacion.jpg" },
  { id: "personal-shopper", img: "/personal-shopper-alicante.jpg" },
];

const PACKS: Servicio[] = [
  { id: "tu-mejor-version", img: "/estilo-personal-coaching-de-imagen.jpg" },
  {
    id: "tu-imagen-tu-marca",
    img: "/tu-imagen-tu-marca-coaching-imagen-profesional.jpg",
    // Foto vertical: el recorte 4:3 se desplaza hacia arriba para no cortar el rostro.
    imgPosition: "object-[50%_20%]",
  },
  { id: "tu-armario-ideal", img: "/terapia-de-armario-organizacion.jpg" },
  { id: "eventos", img: "/asesoria-de-imagen-para-eventos.jpg" },
  { id: "bridal-experience", img: "/bridal-experience-asesoria-de-imagen-novias.jpg" },
];

function Hero() {
  const { t, href } = useI18n();
  const c = t.servicios.hero;
  return (
    <section className="relative">
      <div className="grid lg:grid-cols-2 items-stretch">
        <div className="container-brand flex items-center py-16 md:py-24 lg:py-32 order-2 lg:order-1">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow>{c.eyebrow}</Eyebrow>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02]">
                {c.titleBefore}{" "}
                <span className="font-script text-teal font-medium">{c.titleScript}</span>
              </h1>
              <p className="mt-8 text-teal-dark/80 md:text-lg leading-8">
                {c.text}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href={href("home", "contacto")} className="btn-primary">{c.cta}</a>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="relative order-1 lg:order-2">
          <img
            src="/armocromia-analisis-de-color-alicante.jpg"
            alt={c.imgAlt}
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
  const { t, href } = useI18n();
  const labels = t.servicios.labels;
  const text = t.servicios.items[s.id];
  const flip = i % 2 === 1;
  const details = [
    { label: labels.modalidad, Icon: MapPin, value: text.modalidad },
    text.duracion && { label: labels.duracion, Icon: Clock, value: text.duracion },
    text.incluye && { label: labels.incluye, Icon: BookOpen, value: text.incluye },
  ].filter(Boolean) as { label: string; Icon: LucideIcon; value: string }[];
  return (
    <Reveal>
      <article id={s.id} className={`grid gap-8 lg:gap-16 lg:grid-cols-2 items-center ${ANCHOR_OFFSET}`}>
        <div className={flip ? "lg:order-2" : ""}>
          <img src={s.img} alt={text.alt} loading="lazy" decoding="async" className={`aspect-[4/3] w-full object-cover rounded-2xl ${s.imgPosition ?? ""}`} />
        </div>
        <div className={flip ? "lg:order-1" : ""}>
          <h3 className="text-3xl font-semibold">{text.title}</h3>
          <p className="mt-4 max-w-2xl text-teal-dark/80 leading-8">{text.text}</p>
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
          {cta && <div className="mt-8"><a href={href("home", "contacto")} className="btn-primary">{cta}</a></div>}
        </div>
      </article>
    </Reveal>
  );
}

export default function Servicios() {
  const { lang, t, href } = useI18n();
  const c = t.servicios;
  const schemaItems = [...A_LA_CARTA, ...PACKS].map((s) => ({ id: s.id, img: s.img, title: c.items[s.id].title }));
  return (
    <main>
      <Seo
        title={c.seo.title}
        description={c.seo.description}
        page="servicios"
        image="/armocromia-analisis-de-color-alicante.jpg"
      />
      <JsonLd data={serviciosSchema(lang, t, schemaItems)} />
      <Hero />

      <section className="py-20 md:py-24 lg:py-32">
        <div className="container-brand">
          <Reveal className="max-w-3xl">
            <Eyebrow>{c.aLaCarta.eyebrow}</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-semibold leading-[1.08]">{c.aLaCarta.title}</h2>
            <p className="mt-6 text-teal-dark/80 md:text-lg leading-8">{c.aLaCarta.text}</p>
          </Reveal>
          <div className="mt-16 space-y-16 lg:space-y-20">
            {A_LA_CARTA.map((s, i) => <ServiceRow key={s.id} s={s} i={i} />)}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 lg:py-32 bg-stone-lightest">
        <div className="container-brand">
          <Reveal className="max-w-3xl">
            <Eyebrow>{c.packs.eyebrow}</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-semibold leading-[1.08]">{c.packs.title}</h2>
          </Reveal>
          <div className="mt-16 space-y-16 lg:space-y-20">
            {PACKS.map((s, i) => <ServiceRow key={s.id} s={s} i={i} cta={c.packs.cta} />)}
          </div>
        </div>
      </section>

      {/* Regala una experiencia */}
      <section id="regala-una-experiencia" className={`py-20 md:py-24 lg:py-32 ${ANCHOR_OFFSET}`}>
        <div className="container-brand grid gap-8 lg:gap-16 lg:grid-cols-2 items-center">
          <Reveal>
            <img src="/tarjeta-regalo-asesoria-de-imagen.jpg" alt={c.regala.imgAlt} loading="lazy" decoding="async" className="aspect-square w-full object-cover rounded-2xl" />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow mb-4">{c.regala.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-semibold leading-[1.08]">{c.regala.title}</h2>
            <p className="mt-3 font-script text-3xl text-teal">{c.regala.subtitle}</p>
            <p className="mt-6 max-w-2xl text-teal-dark/80 leading-8">{c.regala.text}</p>
            <div className="mt-8"><a href={href("home", "contacto")} className="btn-primary">{c.regala.cta}</a></div>
          </Reveal>
        </div>
      </section>

      {/* Armonía Party */}
      <section id="armonia-party" className={`py-20 md:py-24 lg:py-32 bg-teal-dark text-white ${ANCHOR_OFFSET}`}>
        <div className="container-brand grid gap-8 lg:gap-16 lg:grid-cols-2 items-center">
          <Reveal>
            <p className="eyebrow !text-white/70 mb-4">{c.party.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-semibold leading-[1.08] !text-white">{c.party.title}</h2>
            <p className="mt-3 font-script text-3xl text-teal-lighter">{c.party.subtitle}</p>
            <p className="mt-6 max-w-2xl text-white/80 leading-8">{c.party.text}</p>
            <div className="mt-8"><a href={href("home", "contacto")} className="btn-secondary">{c.party.cta}</a></div>
          </Reveal>
          <Reveal delay={100}>
            <img src="/armonia-party-analisis-de-color-en-grupo.jpg" alt={c.party.imgAlt} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover rounded-2xl" />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
