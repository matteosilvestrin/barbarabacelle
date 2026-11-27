import { SITE_URL } from "@shared/const";
import { DEFAULT_LANG, HREFLANG, LANGS, OG_LOCALE, pathFor, type PageKey } from "@shared/routes";
import { useI18n } from "@/i18n";

type SeoProps = {
  /** <title> completo della pagina. */
  title: string;
  description: string;
  /** Pagina (chiave di PAGES in shared/routes.ts): il path viene dalla lingua corrente. */
  page: PageKey;
  /** Immagine per le anteprime social, path assoluto in client/public (es. "/barbara-bacelle-asesora-de-imagen-alicante.jpg"). */
  image: string;
};

/** Dati strutturati schema.org: <script type="application/ld+json"> nel body (Google lo legge anche lì). */
export function JsonLd({ data }: { data: object }) {
  // "<" escapato: un testo con "</script>" non può chiudere il tag.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

// Meta tag per pagina. React 19 li porta nel <head> e il prerender sostituisce
// quelli di default di client/index.html (stesso name/property/rel).
// Canonical, hreflang, og:url e og:image usano URL assoluti.
// Gli hreflang stanno solo qui (non in index.html), altrimenti verrebbero duplicati.
export function Seo({ title, description, page, image }: SeoProps) {
  const { lang } = useI18n();
  const url = `${SITE_URL}${pathFor(page, lang)}`;
  const imageUrl = `${SITE_URL}${image}`;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {LANGS.map((l) => (
        <link key={l} rel="alternate" hrefLang={HREFLANG[l]} href={`${SITE_URL}${pathFor(page, l)}`} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${pathFor(page, DEFAULT_LANG)}`} />
      <meta property="og:locale" content={OG_LOCALE[lang]} />
      {LANGS.filter((l) => l !== lang).map((l) => (
        <meta key={l} property="og:locale:alternate" content={OG_LOCALE[l]} />
      ))}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </>
  );
}
