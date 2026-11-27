import { useState } from "react";
import { Reveal, Eyebrow, CTASection, PrivacyConsent, HoneypotField } from "@/components/site";
import { enviarFormulario } from "@/lib/contact";
import { Seo, JsonLd } from "@/components/Seo";
import { homeSchema } from "@/lib/schema";
import { useI18n } from "@/i18n";
import type { HomeCardId } from "@/i18n/es";
import { Check, ChevronRight } from "lucide-react";

// Immagini e ancore (uguali in tutte le lingue); i testi sono in t.home.servicios.cards.
// L'id è l'ancora del blocco nella pagina Servicios.
const SERVICIOS: { id: HomeCardId; img: string }[] = [
  { id: "armocromia", img: "/armocromia-analisis-de-color-alicante.jpg" },
  { id: "estilo-personal", img: "/estilo-personal-coaching-de-imagen.jpg" },
  { id: "analisis-del-rostro", img: "/analisis-del-rostro-visagismo-maquillaje.jpg" },
  { id: "analisis-de-la-silueta", img: "/analisis-de-la-silueta-body-shape.jpg" },
  { id: "terapia-de-armario", img: "/terapia-de-armario-organizacion.jpg" },
  { id: "personal-shopper", img: "/personal-shopper-alicante.jpg" },
];

function Hero() {
  const { t, href } = useI18n();
  const c = t.home.hero;
  return (
    <section id="inicio" className="relative">
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
                <a href={href("home", "contacto")} className="btn-primary">{c.ctaPrimary}</a>
                <a href={href("servicios")} className="btn-secondary">{c.ctaSecondary}</a>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="relative order-1 lg:order-2">
          <img
            src="/barbara-bacelle-asesora-de-imagen-alicante.jpg"
            alt={c.imgAlt}
            className="h-72 w-full object-cover object-top sm:h-96 lg:h-full"
          />
        </div>
      </div>
    </section>
  );
}

function Unica() {
  const c = useI18n().t.home.unica;
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-stone-lightest">
      <div className="container-brand grid gap-10 lg:gap-16 lg:grid-cols-2 items-center">
        <Reveal>
          <img
            src="/espacio-de-estilo-textura-teal.jpg"
            alt={c.imgAlt}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover rounded-2xl"
          />
        </Reveal>
        <Reveal delay={100}>
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.08]">{c.title}</h2>
          <p className="mt-8 max-w-2xl text-teal-dark/80 md:text-lg leading-8">{c.p1}</p>
          <p className="mt-5 max-w-2xl text-teal-dark/80 md:text-lg leading-8">{c.p2}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Valores() {
  const c = useI18n().t.home.valores;
  return (
    <section className="py-20 md:py-24 lg:py-32">
      <div className="container-brand">
        <Reveal className="max-w-3xl">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.08]">{c.title}</h2>
          <p className="mt-6 text-teal-dark/80 md:text-lg leading-8">{c.text}</p>
        </Reveal>
        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {c.items.map((v, i) => (
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
  const { t, href } = useI18n();
  const c = t.home.servicios;
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-stone-lightest">
      <div className="container-brand">
        <Reveal className="max-w-3xl">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.08]">{c.title}</h2>
          <p className="mt-6 text-teal-dark/80 md:text-lg leading-8">{c.text}</p>
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICIOS.map((s, i) => {
            const card = c.cards[s.id];
            return (
            <Reveal key={s.id} delay={(i % 3) * 80}>
              {/* Hover sulla card: zoom lento dell'immagine dentro la cornice (DESIGN.md › Motion). */}
              <article className="group/card rounded-2xl bg-white overflow-hidden h-full flex flex-col">
                {/* Foto cliccabile verso la stessa ancora di "Descubre más". È un duplicato del link
                    testuale, quindi resta fuori dal tab e dagli screen reader (tabIndex -1, aria-hidden). */}
                <a
                  href={href("servicios", s.id)}
                  className="block overflow-hidden"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <img
                    src={s.img} alt={card.alt} loading="lazy" decoding="async"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover/card:scale-105 motion-reduce:transition-none motion-reduce:group-hover/card:scale-100"
                  />
                </a>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-semibold">{card.title}</h3>
                  <p className="mt-3 text-sm text-teal-dark/80 leading-7 flex-1">{card.text}</p>
                  {/* <a> normale (non Link di wouter): il caricamento completo fa scorrere il browser all'ancora. */}
                  <a
                    href={href("servicios", s.id)}
                    className="group mt-6 inline-flex items-center gap-2 self-start rounded-sm font-semibold text-teal transition-colors hover:text-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
                    aria-label={c.moreAria(card.title)}
                  >
                    {c.more}
                    <ChevronRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <a href={href("servicios")} className="btn-secondary">
            {c.all}
          </a>
        </div>
      </div>
    </section>
  );
}

function Testimonios() {
  const c = useI18n().t.home.testimonios;
  return (
    <section className="py-20 md:py-24 lg:py-32">
      <div className="container-brand">
        <Reveal className="max-w-3xl">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.08]">{c.title}</h2>
        </Reveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {c.items.map((t, i) => (
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
  const { lang, t } = useI18n();
  const c = t.home.contacto;
  const f = t.form;
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(false);
    const ok = await enviarFormulario(e.currentTarget, "contacto", lang);
    setSending(false);
    if (ok) setSent(true);
    else setError(true);
  }

  return (
    <section id="contacto" className="py-20 md:py-24 lg:py-32 bg-teal-dark text-white scroll-mt-20">
      <div className="container-brand grid gap-12 lg:gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow !text-white/70 mb-4">{c.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.08] !text-white">
            {c.title}
          </h2>
          <p className="mt-6 text-white/80 md:text-lg leading-8 max-w-xl">
            {c.text}
          </p>
          <div className="mt-10 space-y-3 text-white/90">
            <p><a href="mailto:hola@barbarabacelle.es" className="hover:text-teal-lighter transition-colors">hola@barbarabacelle.es</a></p>
            <p><a href="tel:+34640907062" className="hover:text-teal-lighter transition-colors">+34 640 90 70 62</a></p>
            <p className="text-white/70">{c.place}</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          {sent ? (
            <div className="rounded-2xl bg-white/10 p-8 md:p-10 text-center">
              <p className="font-serif text-3xl font-semibold">{c.thanksTitle}</p>
              <p className="mt-3 text-white/80">{c.thanksText}</p>
            </div>
          ) : (
            <form className="relative rounded-2xl bg-white p-6 md:p-10 space-y-5" onSubmit={onSubmit}>
              <HoneypotField />
              <div>
                <label htmlFor="c-nombre" className="block text-sm font-medium text-teal-dark mb-1">{f.nombre}</label>
                <input id="c-nombre" name="nombre" required placeholder={f.nombrePh} className="input-brand" />
              </div>
              <div>
                <label htmlFor="c-email" className="block text-sm font-medium text-teal-dark mb-1">{f.email}</label>
                <input id="c-email" name="email" type="email" required placeholder={f.emailPh} className="input-brand" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-ciudad" className="block text-sm font-medium text-teal-dark mb-1">{f.ciudad} <span className="font-normal text-teal-dark/60">{f.opcional}</span></label>
                  <input id="c-ciudad" name="ciudad" placeholder={f.ciudadPh} className="input-brand" />
                </div>
                <div>
                  <label htmlFor="c-telefono" className="block text-sm font-medium text-teal-dark mb-1">{f.telefono} <span className="font-normal text-teal-dark/60">{f.opcional}</span></label>
                  <input id="c-telefono" name="telefono" type="tel" placeholder={f.telefonoPh} className="input-brand" />
                </div>
              </div>
              <div>
                <label htmlFor="c-mensaje" className="block text-sm font-medium text-teal-dark mb-1">{c.mensaje}</label>
                <textarea id="c-mensaje" name="mensaje" required rows={5} placeholder={c.mensajePh} className="input-brand !min-h-0 py-3 resize-none" />
              </div>
              <PrivacyConsent id="c-privacidad" finalidad={c.finalidad} />
              {error && (
                <p role="alert" className="text-sm text-red-700">
                  {c.error}
                </p>
              )}
              <button type="submit" disabled={sending} className="btn-primary w-full disabled:opacity-60">
                {sending ? f.sending : c.submit}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  const { lang, t } = useI18n();
  return (
    <main>
      <Seo
        title={t.home.seo.title}
        description={t.home.seo.description}
        page="home"
        image="/barbara-bacelle-asesora-de-imagen-alicante.jpg"
      />
      <JsonLd data={homeSchema(lang, t)} />
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
