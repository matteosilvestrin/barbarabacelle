import { SITE_URL } from "@shared/const";

type SeoProps = {
  /** <title> completo della pagina. */
  title: string;
  description: string;
  /** Path della pagina, es. "/" o "/servicios-asesoria-imagen-personal-alicante". */
  path: string;
  /** Immagine per le anteprime social, path assoluto in client/public (es. "/barbara-bacelle-asesora-de-imagen-alicante.jpg"). */
  image: string;
};

// Meta tag per pagina. React 19 li porta nel <head> e il prerender sostituisce
// quelli di default di client/index.html (stesso name/property/rel).
// Canonical, og:url e og:image usano URL assoluti.
export function Seo({ title, description, path, image }: SeoProps) {
  const url = `${SITE_URL}${path}`;
  const imageUrl = `${SITE_URL}${image}`;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
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
