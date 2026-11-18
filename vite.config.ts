import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "path";
import { defineConfig, loadEnv } from "vite";

// jsxLocPlugin tags elements with their source location (data-loc) for the
// dev preview only; production builds and prerendered pages don't need it.
const plugins = [
  react(),
  tailwindcss(),
  { ...jsxLocPlugin(), apply: "serve" as const },
];

export default defineConfig(({ mode }) => {
  // GA4_ID: ID di misurazione Google Analytics (G-XXXXXXXXXX), da .env o dall'ambiente di build.
  // Vite espone al client solo le variabili VITE_*, quindi lo iniettiamo con define.
  const env = loadEnv(mode, path.resolve(import.meta.dirname), "");
  return {
    define: {
      __GA4_ID__: JSON.stringify((env.GA4_ID || "").trim()),
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },
    envDir: path.resolve(import.meta.dirname),
    root: path.resolve(import.meta.dirname, "client"),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },
    server: {
      port: 3000,
      strictPort: false, // Will find next available port if 3000 is busy
      host: true,
      // In dev i form inviano a /api: lo inoltriamo al server Express (pnpm start o un server su PORT 3001).
      proxy: { "/api": `http://localhost:${process.env.API_PORT || 3001}` },
      allowedHosts: true, // Allow all hosts for sandbox preview
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
