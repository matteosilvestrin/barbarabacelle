// Dati strutturati schema.org (JSON-LD) per Google.
// I dati vengono da LEGAL (titolare, indirizzo, contatti), SITE_URL e SOCIAL,
// così non sono duplicati. Valida con https://search.google.com/test/rich-results
// Gli @id sono gli stessi in tutte le lingue (stessa attività, stessa persona);
// cambiano testi, inLanguage e URL delle pagine.
import { SITE_URL } from "@shared/const";
import { HREFLANG, LANGS, pathFor, type Lang } from "@shared/routes";
import { LEGAL } from "@/lib/legal";
import { SOCIAL } from "@/components/site";
import type { Dict } from "@/i18n";

const SAME_AS = SOCIAL.map((s) => s.href);

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const PERSON_ID = `${SITE_URL}/#barbara-bacelle`;
const WEBSITE_ID = `${SITE_URL}/#website`;

function person(lang: Lang, t: Dict) {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: LEGAL.titular,
    jobTitle: t.schema.jobTitle,
    image: `${SITE_URL}/barbara-bacelle-retrato-profesional-blazer-blanco-turquesa.jpg`,
    url: `${SITE_URL}${pathFor("sobreMi", lang)}`,
    worksFor: { "@id": BUSINESS_ID },
    sameAs: SAME_AS,
  };
}

function business(lang: Lang, t: Dict) {
  return {
    "@type": "ProfessionalService",
    "@id": BUSINESS_ID,
    name: LEGAL.titular,
    alternateName: LEGAL.nombreComercial,
    description: t.schema.businessDescription,
    url: `${SITE_URL}${pathFor("home", lang)}`,
    logo: `${SITE_URL}/logo-barbara-bacelle-asesoria-de-imgen-consciente.svg`,
    image: `${SITE_URL}/barbara-bacelle-asesora-de-imagen-alicante.jpg`,
    telephone: LEGAL.telefono,
    email: LEGAL.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avenida Condes de Soto Ameno 48",
      postalCode: "03005",
      addressLocality: "Alicante",
      addressRegion: "Alicante",
      addressCountry: "ES",
    },
    areaServed: { "@type": "City", name: "Alicante" },
    founder: { "@id": PERSON_ID },
    sameAs: SAME_AS,
  };
}

/** Home: attività, persona e sito. */
export function homeSchema(lang: Lang, t: Dict) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      business(lang, t),
      person(lang, t),
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: LEGAL.titular,
        inLanguage: LANGS.map((l) => HREFLANG[l]),
        publisher: { "@id": BUSINESS_ID },
      },
    ],
  };
}

/** Sobre mí: pagina profilo della consulente. */
export function sobreMiSchema(lang: Lang, t: Dict) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        url: `${SITE_URL}${pathFor("sobreMi", lang)}`,
        inLanguage: HREFLANG[lang],
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: { "@id": PERSON_ID },
      },
      person(lang, t),
      business(lang, t),
    ],
  };
}

type ServiceInput = { id: string; title: string; img: string };

/** Servicios: un Service per ogni blocco, con link all'ancora della pagina. */
export function serviciosSchema(lang: Lang, t: Dict, servicios: ServiceInput[]) {
  const path = pathFor("servicios", lang);
  return {
    "@context": "https://schema.org",
    "@graph": [
      business(lang, t),
      ...servicios.map((s) => ({
        "@type": "Service",
        "@id": `${SITE_URL}${path}#${s.id}`,
        name: s.title,
        url: `${SITE_URL}${path}#${s.id}`,
        image: `${SITE_URL}${s.img}`,
        serviceType: t.schema.serviceType,
        provider: { "@id": BUSINESS_ID },
        areaServed: { "@type": "City", name: "Alicante" },
      })),
    ],
  };
}
