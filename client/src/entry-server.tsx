import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import { LANGS, PAGE_KEYS, langOf, pathFor } from "@shared/routes";
import App from "./App";

/**
 * Renders one page to HTML at build time (scripts/prerender.mjs), so crawlers
 * and link previews get real content. Runs in Node: code that reads window,
 * document or localStorage must live in useEffect / event handlers.
 */
export function render(url: string) {
  return renderToString(
    <Router ssrPath={url}>
      <App />
    </Router>
  );
}

/** Valore di <html lang> per una URL: il prerender lo scrive nell'HTML statico. */
export function htmlLang(url: string) {
  return langOf(url);
}

/**
 * Pages to prerender. The routes in App.tsx are generated from shared/routes.ts,
 * so the prerender can't find them in the source: every page in every language
 * is listed here. Linked pages are still found automatically.
 */
export const prerenderRoutes: string[] = LANGS.flatMap((lang) => PAGE_KEYS.map((page) => pathFor(page, lang)));
