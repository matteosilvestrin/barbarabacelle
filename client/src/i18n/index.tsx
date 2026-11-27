import { createContext, useContext, useEffect } from "react";
import { DEFAULT_LANG, pathFor, type Lang, type PageKey } from "@shared/routes";
import { es } from "./es";
import { it } from "./it";

export type Dict = typeof es;
const DICTS: Record<Lang, Dict> = { es, it };

type I18n = {
  lang: Lang;
  /** Pagina corrente (chiave di PAGES), per lo switcher di lingua e i meta SEO. */
  page: PageKey;
  t: Dict;
  /** Link a una pagina nella lingua corrente, con ancora opzionale (senza "#"). */
  href: (page: PageKey, hash?: string) => string;
};

const I18nContext = createContext<I18n>({
  lang: DEFAULT_LANG,
  page: "home",
  t: DICTS[DEFAULT_LANG],
  href: (page, hash) => pathFor(page, DEFAULT_LANG, hash),
});

// Lingua e pagina arrivano dalla route (App.tsx), non dal browser: così il prerender
// e l'idratazione producono lo stesso HTML.
export function LangProvider({ lang, page, children }: { lang: Lang; page: PageKey; children: React.ReactNode }) {
  // <html lang> nell'HTML statico lo scrive il prerender; qui resta allineato
  // quando si naviga lato client tra le due lingue.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  const value: I18n = {
    lang,
    page,
    t: DICTS[lang],
    href: (target, hash) => pathFor(target, lang, hash),
  };
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
