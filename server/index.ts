import express from "express";
import fs from "fs";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { contactRouter } from "./contact";
import { SITE_URL } from "../shared/const";
import { DEFAULT_LANG, HREFLANG, LANGS, langOf, pageOf, pathFor } from "../shared/routes";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Dietro un proxy (x-forwarded-*): req.ip è l'IP del client, usato dal limite del form.
  app.set("trust proxy", 1);

  // Dominio canonico con www: barbarabacelle.es -> 301 su SITE_URL (stesso path e query).
  // Solo per quell'host esatto, così localhost e altri host restano invariati.
  const canonicalHost = new URL(SITE_URL).host;
  const bareHost = canonicalHost.replace(/^www\./, "");
  app.use((req, res, next) => {
    const host = (req.get("x-forwarded-host") || req.get("host") || "").split(",")[0].trim().toLowerCase();
    if (host === bareHost && host !== canonicalHost) {
      return res.redirect(301, `${SITE_URL}${req.originalUrl}`);
    }
    next();
  });

  // URL del sito precedente ancora indicizzati da Google: 301 sulla pagina che li sostituisce.
  const legacyRedirects: Record<string, string> = {
    "/e-book-define-tu-estilo-personal-asesoria-de-imagen-personal": pathFor("servicios", "es"),
    "/asesoria-de-imagen-personal-on-line": pathFor("servicios", "es"),
  };
  app.use((req, res, next) => {
    const target = legacyRedirects[req.path.toLowerCase().replace(/\/+$/, "")];
    if (target && (req.method === "GET" || req.method === "HEAD")) {
      return res.redirect(301, `${SITE_URL}${target}`);
    }
    next();
  });

  // Form di contatto (POST /api/contact).
  app.use(contactRouter);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  // Hashed build assets never change; pages are revalidated on every visit.
  app.use(
    express.static(staticPath, {
      redirect: false,
      setHeaders: (res, filePath) => {
        res.setHeader(
          "Cache-Control",
          filePath.includes(`${path.sep}assets${path.sep}`)
            ? "public, max-age=31536000, immutable"
            : "no-cache"
        );
      },
    })
  );

  const prerenderedPages = (): string[] => {
    try {
      const manifest = path.join(staticPath, "prerender-manifest.json");
      return JSON.parse(fs.readFileSync(manifest, "utf8")).pages || [];
    } catch {
      return [];
    }
  };

  // Default sitemap and robots.txt (a file in client/public replaces them).
  // URLs use SITE_URL, like canonical and og:url, whatever host the request came on.
  // Every page with translations lists them (and x-default) as xhtml:link alternates,
  // the same pairs as the hreflang tags in the pages.
  app.get("/sitemap.xml", (_req, res) => {
    const base = SITE_URL;
    const abs = (p: string) => `${base}${encodeURI(p)}`;
    const urls = prerenderedPages()
      .filter(path => pageOf(path) !== "notFound")
      .map(path => {
        const page = pageOf(path);
        const alternates = page
          ? [
              ...LANGS.map(l => `    <xhtml:link rel="alternate" hreflang="${HREFLANG[l]}" href="${abs(pathFor(page, l))}"/>`),
              `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(pathFor(page, DEFAULT_LANG))}"/>`,
            ]
          : [];
        return [`  <url>`, `    <loc>${abs(path)}</loc>`, ...alternates, `  </url>`].join("\n");
      })
      .join("\n");
    res
      .type("application/xml")
      .send(
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`
      );
  });
  app.get("/robots.txt", (_req, res) => {
    res.type("text/plain").send(`User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
  });

  // Prerendered pages live at <path>/index.html. Every route is prerendered, so
  // any other URL is a real 404: status 404 + the prerendered /404 page
  // (noindex), not a 200 that Google would treat as a soft 404. The 404 page is in
  // the language of the URL (/it/... gets the Italian one).
  app.get("*", (req, res) => {
    res.setHeader("Cache-Control", "no-cache");
    const notFoundPath = pathFor("notFound", langOf(req.path));
    let page: string | null = null;
    try {
      page = path.join(staticPath, decodeURIComponent(req.path), "index.html");
    } catch {}
    if (pageOf(req.path) !== "notFound" && page && page.startsWith(staticPath + path.sep) && fs.existsSync(page)) {
      return res.sendFile(page);
    }
    const localized = path.join(staticPath, notFoundPath, "index.html");
    const notFound = fs.existsSync(localized) ? localized : path.join(staticPath, "404", "index.html");
    const shell = path.join(staticPath, "spa.html");
    res
      .status(404)
      .sendFile(
        fs.existsSync(notFound)
          ? notFound
          : fs.existsSync(shell)
            ? shell
            : path.join(staticPath, "index.html")
      );
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
