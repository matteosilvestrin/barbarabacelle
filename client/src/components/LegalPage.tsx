import { Eyebrow } from "@/components/site";
import { Seo } from "@/components/Seo";
import { LEGAL } from "@/lib/legal";

type LegalPageProps = {
  title: string;
  seoTitle: string;
  description: string;
  path: string;
  children: React.ReactNode;
};

// Layout comune delle pagine legali: intestazione breve e testo editoriale in una colonna.
// Gli stili dei contenuti (h2, p, ul, a, table) sono applicati dal wrapper, così le pagine
// scrivono solo HTML semantico.
export function LegalPage({
  title,
  seoTitle,
  description,
  path,
  children,
}: LegalPageProps) {
  return (
    <main>
      <Seo
        title={seoTitle}
        description={description}
        path={path}
        image="/barbara-bacelle-asesora-de-imagen-alicante.jpg"
      />
      <section className="bg-stone-lightest">
        <div className="container-brand py-16 md:py-20">
          <Eyebrow>Información legal</Eyebrow>
          <h1 className="text-4xl md:text-5xl font-semibold leading-[1.08]">
            {title}
          </h1>
          <p className="mt-4 text-sm text-teal-dark/70">
            Última actualización: {LEGAL.actualizado}
          </p>
        </div>
      </section>
      <section className="py-14 md:py-20">
        <div className="container-brand">
          <div
            className="max-w-3xl text-teal-dark/80 leading-8
            [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-semibold [&_h2]:leading-tight [&_h2]:text-teal-dark
            [&_h2:first-child]:mt-0
            [&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:font-sans [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-teal-dark
            [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6
            [&_a]:font-medium [&_a]:text-teal [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-teal-dark
            [&_strong]:font-semibold [&_strong]:text-teal-dark
            [&_table]:mt-4 [&_table]:w-full [&_table]:text-left [&_table]:text-sm
            [&_th]:border-b [&_th]:border-teal-dark/15 [&_th]:py-2 [&_th]:pr-4 [&_th]:font-semibold [&_th]:text-teal-dark
            [&_td]:border-b [&_td]:border-teal-dark/10 [&_td]:py-2 [&_td]:pr-4 [&_td]:align-top"
          >
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}
