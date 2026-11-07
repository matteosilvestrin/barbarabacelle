// Build-time prerender (runs after `vite build`, see package.json "build").
//
// Renders every page to real HTML in dist/public/<path>/index.html, so search
// engines, AI crawlers and link previews (WhatsApp, LinkedIn, X...) see the
// content, and visitors see the page before the JavaScript loads. In the
// browser React then hydrates that HTML, so the site works exactly as before.
//
// Pages found: "/", every static <Route path="..."> in client/src/App.tsx,
// `prerenderRoutes` exported by client/src/entry-server.tsx, and every internal
// link (<a href="/...">) on a rendered page, so /blog/:slug pages linked from
// the blog list are included.
//
// Fail-soft by design: a page that can't render on the server (it reads
// window, document or localStorage while rendering) keeps the client-rendered
// shell and gets a warning; if anything else goes wrong the site is still built
// exactly as before. This script never fails the build.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const MAX_PAGES = 500;
const TIME_LIMIT_MS = 120_000;

const root = process.cwd();
const outDir = path.join(root, "dist/public");
const ssrDir = path.join(root, "dist/ssr");
const appFile = path.join(root, "client/src/App.tsx");

// React 19 emits the <title>, <meta> and <link> tags a page renders as a run
// at the very start of its output; only that run belongs in <head> (an
// <svg><title> or <meta itemProp> further down stays where it is).
const HOISTED =
  /^(?:<title\b[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*>|<link\b[^>]*>|<style\b[^>]*data-precedence[^>]*>[\s\S]*?<\/style>|<script\b[^>]*\basync\b[^>]*><\/script>)/;

function splitHead(html) {
  const tags = [];
  let rest = html;
  for (let m = rest.match(HOISTED); m; m = rest.match(HOISTED)) {
    tags.push(m[0]);
    rest = rest.slice(m[0].length);
  }
  return { tags, body: rest };
}

const attr = (tag, name) =>
  tag.match(new RegExp(`\\s${name}="([^"]*)"`, "i"))?.[1];

// Drops the template's version of every head tag the page sets itself.
function withPageHead(template, tags) {
  let head = template;
  for (const tag of tags) {
    if (tag.startsWith("<title")) {
      head = head.replace(/<title\b[^>]*>[\s\S]*?<\/title>\s*/i, "");
      continue;
    }
    const key = tag.startsWith("<meta")
      ? attr(tag, "name")
        ? ["name", attr(tag, "name")]
        : attr(tag, "property")
          ? ["property", attr(tag, "property")]
          : null
      : attr(tag, "rel") === "canonical"
        ? ["rel", "canonical"]
        : null;
    if (!key) continue;
    const [name, value] = key;
    const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    head = head.replace(
      new RegExp(`<(meta|link)\\b[^>]*\\s${name}="${escaped}"[^>]*>\\s*`, "gi"),
      "",
    );
  }
  return head.replace("</head>", `  ${tags.join("\n    ")}\n  </head>`);
}

function normalizePath(href) {
  const clean = href.split(/[?#]/)[0].replace(/\/{2,}/g, "/");
  if (!clean.startsWith("/") || /\.[a-z0-9]{1,8}$/i.test(clean)) return null;
  const trimmed = clean.replace(/\/+$/, "") || "/";
  if (/(^|\/)\.\.?(\/|$)/.test(trimmed)) return null;
  try {
    return decodeURI(trimmed);
  } catch {
    return null;
  }
}

function seedRoutes(extra) {
  const seeds = new Set(["/"]);
  try {
    const source = fs.readFileSync(appFile, "utf8");
    for (const m of source.matchAll(/path=\{?\s*["'`](\/[^"'`]*)["'`]/g)) {
      if (!/[:*(]/.test(m[1])) seeds.add(m[1]);
    }
  } catch {}
  for (const route of extra || []) {
    const normalized = typeof route === "string" && normalizePath(route);
    if (normalized) seeds.add(normalized);
  }
  return [...seeds];
}

async function main() {
  const started = Date.now();
  const indexFile = path.join(outDir, "index.html");
  const template = fs.readFileSync(indexFile, "utf8");
  if (!template.includes('<div id="root"></div>')) {
    console.warn('[prerender] skipped: dist/public/index.html has no empty <div id="root"></div>.');
    return;
  }
  // The client-rendered shell, served for any URL without a prerendered page.
  fs.writeFileSync(path.join(outDir, "spa.html"), template);

  const { build } = await import("vite");
  await build({
    configFile: path.join(root, "vite.config.ts"),
    logLevel: "warn",
    // Bundle dependencies too, so packages that import CSS or ship only ESM work.
    ssr: { noExternal: true },
    build: {
      ssr: "src/entry-server.tsx",
      outDir: ssrDir,
      emptyOutDir: true,
      copyPublicDir: false,
    },
  });
  const entry = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

  const queue = seedRoutes(entry.prerenderRoutes);
  const seen = new Set();
  const skipped = [];
  const emptyTitles = [];
  const pages = [];
  while (queue.length && pages.length < MAX_PAGES) {
    if (Date.now() - started > TIME_LIMIT_MS) {
      console.warn(`[prerender] time limit reached after ${pages.length} page(s); the rest stay client-rendered.`);
      break;
    }
    const url = queue.shift();
    if (seen.has(url)) continue;
    seen.add(url);
    let html;
    try {
      html = await entry.render(url);
    } catch (error) {
      skipped.push(`${url}: ${String(error?.message || error).split("\n")[0]}`);
      continue;
    }
    for (const m of html.matchAll(/<a\b[^>]*\shref="(\/[^"]*)"/g)) {
      const next = normalizePath(m[1].replace(/&amp;/g, "&"));
      if (next && !seen.has(next)) queue.push(next);
    }
    const { tags: pageTags, body } = splitHead(html);
    // React renders <title>{name} | Brand</title> (more than one child) as an
    // empty title: keep the site's default and report it.
    const tags = pageTags.filter(
      (tag) => !/^<title\b[^>]*>\s*<\/title>$/i.test(tag),
    );
    if (tags.length < pageTags.length) emptyTitles.push(url);
    const page = withPageHead(template, tags).replace(
      '<div id="root"></div>',
      `<div id="root">${body}</div>`,
    );
    const file = url === "/" ? indexFile : path.join(outDir, url, "index.html");
    const relative = path.relative(outDir, file);
    if (relative.startsWith("..") || path.isAbsolute(relative)) continue;
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, page);
    pages.push(url);
  }

  fs.writeFileSync(
    path.join(outDir, "prerender-manifest.json"),
    JSON.stringify({ pages }, null, 2),
  );
  console.log(`[prerender] ${pages.length} page(s) prerendered in ${((Date.now() - started) / 1000).toFixed(1)}s.`);
  for (const line of skipped) {
    console.warn(`[prerender] not prerendered (stays client-rendered) ${line}. Move code that reads window, document or localStorage into useEffect.`);
  }
  if (emptyTitles.length) {
    console.warn(`[prerender] empty <title> on ${emptyTitles.join(", ")} (the site's default title is used). A <title> needs one string child: write <title>{\`\${name} | Brand\`}</title>, not <title>{name} | Brand</title>.`);
  }
}

try {
  await main();
} catch (error) {
  console.warn(`[prerender] skipped, the site stays client-rendered: ${String(error?.message || error).split("\n")[0]}`);
} finally {
  fs.rmSync(ssrDir, { recursive: true, force: true });
}
