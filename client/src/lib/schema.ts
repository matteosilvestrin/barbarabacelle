// Dati strutturati schema.org (JSON-LD) per Google.
// I dati vengono da LEGAL (titolare, indirizzo, contatti), SITE_URL e SOCIAL,
// così non sono duplicati. Valida con https://search.google.com/test/rich-results
import { SITE_URL } from "@shared/const";
import { LEGAL } from "@/lib/legal";
import { SOCIAL } from "@/components/site";

const SAME_AS = SOCIAL.map((s) => s.href);

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const PERSON_ID = `${SITE_URL}/#barbara-bacelle`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: LEGAL.titular,
  jobTitle: "Asesora de imagen personal",
  image: `${SITE_URL}/barbara-bacelle-retrato-profesional-blazer-blanco-turquesa.jpg`,
  url: `${SITE_URL}/barbara-bacelle-asesoria-imagen-alicante`,
  worksFor: { "@id": BUSINESS_ID },
  sameAs: SAME_AS,
};

const business = {
  "@type": "ProfessionalService",
  "@id": BUSINESS_ID,
  name: LEGAL.titular,
  alternateName: LEGAL.nombreComercial,
  description:
    "Asesoría de imagen personal en Alicante: armocromía, estilo personal, análisis de rostro y silueta, terapia de armario y personal shopper.",
  url: `${SITE_URL}/`,
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

/** Home: attività, persona e sito. */
export const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    business,
    person,
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: LEGAL.titular,
      inLanguage: "es-ES",
      publisher: { "@id": BUSINESS_ID },
    },
  ],
};

/** Sobre mí: pagina profilo della consulente. */
export const sobreMiSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      url: `${SITE_URL}/barbara-bacelle-asesoria-imagen-alicante`,
      inLanguage: "es-ES",
      isPartOf: { "@id": WEBSITE_ID },
      mainEntity: { "@id": PERSON_ID },
    },
    person,
    business,
  ],
};

type ServiceInput = { id: string; title: string; img: string };

/** Servicios: un Service per ogni blocco, con link all'ancora della pagina. */
export function serviciosSchema(path: string, servicios: ServiceInput[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      business,
      ...servicios.map((s) => ({
        "@type": "Service",
        "@id": `${SITE_URL}${path}#${s.id}`,
        name: s.title,
        url: `${SITE_URL}${path}#${s.id}`,
        image: `${SITE_URL}${s.img}`,
        serviceType: "Asesoría de imagen personal",
        provider: { "@id": BUSINESS_ID },
        areaServed: { "@type": "City", name: "Alicante" },
      })),
    ],
  };
}
