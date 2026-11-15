import express from "express";
import fs from "fs";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { contactRouter } from "./contact";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Dietro un proxy (x-forwarded-*): req.ip è l'IP del client, usato dal limite del form.
  app.set("trust proxy", 1);

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

  const origin = (req: express.Request) =>
    `${req.get("x-forwarded-proto")?.split(",")[0] || "https"}://${req.get("x-forwarded-host") || req.get("host")}`;

  const prerenderedPages = (): string[] => {
    try {
      const manifest = path.join(staticPath, "prerender-manifest.json");
      return JSON.parse(fs.readFileSync(manifest, "utf8")).pages || [];
    } catch {
      return [];
    }
  };

  // Default sitemap and robots.txt (a file in client/public replaces them).
  app.get("/sitemap.xml", (req, res) => {
    const base = origin(req);
    const urls = prerenderedPages()
      .filter(page => page !== "/404")
      .map(page => `  <url><loc>${base}${encodeURI(page === "/" ? "/" : page)}</loc></url>`)
      .join("\n");
    res
      .type("application/xml")
      .send(
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
      );
  });
  app.get("/robots.txt", (req, res) => {
    res.type("text/plain").send(`User-agent: *\nAllow: /\n\nSitemap: ${origin(req)}/sitemap.xml\n`);
  });

  // Prerendered pages live at <path>/index.html; any other URL gets the
  // client-rendered shell and the router handles it in the browser.
  app.get("*", (req, res) => {
    res.setHeader("Cache-Control", "no-cache");
    let page: string | null = null;
    try {
      page = path.join(staticPath, decodeURIComponent(req.path), "index.html");
    } catch {}
    if (page && page.startsWith(staticPath + path.sep) && fs.existsSync(page)) {
      return res.sendFile(page);
    }
    const shell = path.join(staticPath, "spa.html");
    res.sendFile(fs.existsSync(shell) ? shell : path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
