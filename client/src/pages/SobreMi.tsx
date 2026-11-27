import { Reveal, Eyebrow, CTASection } from "@/components/site";
import { Seo, JsonLd } from "@/components/Seo";
import { sobreMiSchema } from "@/lib/schema";
import { useI18n } from "@/i18n";

export default function SobreMi() {
  const { lang, t } = useI18n();
  const c = t.sobreMi;
  return (
    <main>
      <Seo
        title={c.seo.title}
        description={c.seo.description}
        page="sobreMi"
        image="/barbara-bacelle-retrato-profesional-blazer-blanco-turquesa.jpg"
      />
      <JsonLd data={sobreMiSchema(lang, t)} />
      {/* Hero */}
      <section className="relative">
        <div className="grid lg:grid-cols-2 items-stretch">
          <div className="container-brand flex items-center py-16 md:py-24 lg:py-32 order-2 lg:order-1">
            <div className="max-w-xl">
              <Reveal>
                <Eyebrow>{c.hero.eyebrow}</Eyebrow>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02]">
                  {c.hero.titleBefore}{" "}
                  <span className="font-script text-teal font-medium">{c.hero.titleScript}</span>
                </h1>
                <p className="mt-8 text-teal-dark/80 md:text-lg leading-8">
                  {c.hero.text}
                </p>
              </Reveal>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <img
              src="/barbara-bacelle-retrato-profesional-blazer-blanco-turquesa.jpg"
              alt={c.hero.imgAlt}
              className="h-[440px] min-h-[440px] w-full object-cover object-[50%_15%] sm:h-[560px] sm:min-h-[560px] lg:h-full lg:min-h-[640px]"
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
              alt={c.bio.imgAlt}
              loading="lazy" decoding="async"
              className="aspect-[4/5] w-full object-cover rounded-2xl"
            />
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow>{c.bio.eyebrow}</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-semibold leading-[1.08]">
              {c.bio.title}
            </h2>
            <div className="mt-8 space-y-5 max-w-2xl text-teal-dark/80 md:text-lg leading-8">
              {c.bio.paragraphs.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
            </div>
            <div className="mt-10 flex gap-10">
              {c.bio.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-5xl font-semibold text-teal">{s.value}</p>
                  <p className="text-sm text-teal-dark/70 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection text={c.cta} />
    </main>
  );
}
