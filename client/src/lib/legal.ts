import type { Lang, PageKey } from "@shared/routes";

// Dati del titolare per le pagine legali (Aviso legal, Privacidad, Cookies).
// Fonte: politica di privacy del sito precedente (barbarabacelle.es/politica-de-privacidad/).
// Da far verificare al titolare prima della pubblicazione.
export const LEGAL = {
  titular: "Barbara Bacelle",
  nombreComercial: "Espacio de Estilo by Barbara Bacelle",
  nif: "Y6099219R",
  domicilio: {
    es: "Avenida Condes de Soto Ameno 48, 03005 Alicante (España)",
    it: "Avenida Condes de Soto Ameno 48, 03005 Alicante (Spagna)",
  } satisfies Record<Lang, string>,
  email: "hola@barbarabacelle.es",
  telefono: "+34 640 90 70 62",
  telefonoHref: "tel:+34640907062",
  actividad: "Asesoría de imagen personal",
  dominio: "barbarabacelle.es",
  // Date fisse (niente new Date() nel render: il sito è prerenderizzato).
  // La versione italiana è una traduzione di cortesia della versione spagnola: stessa data.
  actualizado: {
    es: "21 de noviembre de 2026",
    it: "21 novembre 2026",
  } satisfies Record<Lang, string>,
};

/** Pagine legali linkate nel footer, nell'ordine; le etichette sono in t.legalLinks. */
export const LEGAL_PAGES = ["avisoLegal", "privacidad", "cookies"] as const satisfies readonly PageKey[];
