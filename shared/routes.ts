// Mappa delle pagine per lingua: unica fonte per router, link, switcher di lingua,
// hreflang, prerender e sitemap. Lo spagnolo resta senza prefisso, l'italiano sotto /it.

export const LANGS = ["es", "it"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "es";

/** Codici per hreflang e og:locale. */
export const HREFLANG: Record<Lang, string> = { es: "es-ES", it: "it-IT" };
export const OG_LOCALE: Record<Lang, string> = { es: "es_ES", it: "it_IT" };

export const PAGES = {
  home: { es: "/", it: "/it" },
  servicios: {
    es: "/servicios-asesoria-imagen-personal-alicante",
    it: "/it/servizi-consulenza-immagine-personale-alicante",
  },
  sobreMi: {
    es: "/barbara-bacelle-asesoria-imagen-alicante",
    it: "/it/barbara-bacelle-consulenza-immagine-alicante",
  },
  avisoLegal: { es: "/aviso-legal", it: "/it/note-legali" },
  privacidad: { es: "/politica-de-privacidad", it: "/it/informativa-privacy" },
  cookies: { es: "/politica-de-cookies", it: "/it/politica-cookie" },
  notFound: { es: "/404", it: "/it/404" },
} as const satisfies Record<string, Record<Lang, string>>;

export type PageKey = keyof typeof PAGES;
export const PAGE_KEYS = Object.keys(PAGES) as PageKey[];

/** Path della pagina nella lingua indicata, con ancora opzionale (senza "#"). */
export function pathFor(page: PageKey, lang: Lang, hash?: string): string {
  const path: string = PAGES[page][lang];
  return hash ? `${path}#${hash}` : path;
}

/** Lingua di un path: /it e /it/... sono italiano, tutto il resto spagnolo. */
export function langOf(path: string): Lang {
  return path === "/it" || path.startsWith("/it/") ? "it" : DEFAULT_LANG;
}

/** Pagina corrispondente a un path (senza query né hash), o null. */
export function pageOf(path: string): PageKey | null {
  const clean = path.replace(/\/+$/, "") || "/";
  for (const page of PAGE_KEYS) {
    for (const lang of LANGS) {
      if (PAGES[page][lang] === clean) return page;
    }
  }
  return null;
}
