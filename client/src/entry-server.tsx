import { renderToString } from "react-dom/server";
import { Router } from "wouter";
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

/**
 * Extra pages to prerender that nothing links to and that aren't a static
 * <Route path> in App.tsx (e.g. "/blog/my-unlinked-post"). Linked pages and
 * static routes are found automatically.
 */
export const prerenderRoutes: string[] = [];
