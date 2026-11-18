// Dati del titolare per le pagine legali (Aviso legal, Privacidad, Cookies).
// Fonte: politica di privacy del sito precedente (barbarabacelle.es/politica-de-privacidad/).
// Da far verificare al titolare prima della pubblicazione.
export const LEGAL = {
  titular: "Barbara Bacelle",
  nombreComercial: "Espacio de Estilo by Barbara Bacelle",
  nif: "Y6099219R",
  domicilio: "Avenida Condes de Soto Ameno 48, 03005 Alicante (España)",
  email: "hola@barbarabacelle.es",
  telefono: "+34 640 90 70 62",
  telefonoHref: "tel:+34640907062",
  actividad: "Asesoría de imagen personal",
  dominio: "barbarabacelle.es",
  // Data fissa (niente new Date() nel render: il sito è prerenderizzato).
  actualizado: "18 de noviembre de 2026",
};

export const LEGAL_LINKS = [
  { href: "/aviso-legal", label: "Aviso legal" },
  { href: "/politica-de-privacidad", label: "Privacidad" },
  { href: "/politica-de-cookies", label: "Cookies" },
];
