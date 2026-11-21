// Google Analytics (GA4) con consenso esplicito.
// L'ID di misurazione viene da GA4_ID (.env o ambiente di build) ed è iniettato
// nel client da vite.config.ts al momento del build: se manca, nulla viene caricato.
//
// Regole:
// - gtag.js si carica solo dopo "Aceptar" (mai al primo caricamento della pagina);
// - la scelta è salvata in localStorage (cookie_consent) con la data, vale 12 mesi;
// - "Rechazar" disattiva la misurazione tramite ga-disable-<ID> e cancella _ga/_ga_*.
// Tutto va chiamato solo da useEffect o da event handler (il sito è prerenderizzato).

declare const __GA4_ID__: string;

export const GA4_ID: string = typeof __GA4_ID__ === "string" ? __GA4_ID__ : "";

export const COOKIE_CONSENT_KEY = "cookie_consent";
export const COOKIE_SETTINGS_EVENT = "cookie-settings-open";

export type Consent = "accepted" | "rejected";

type GtagWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  [key: string]: unknown;
};

// Validità della scelta: dopo 12 mesi il banner viene riproposto
// (l'AEPD raccomanda di non superare i 24 mesi). Va tenuto allineato al testo
// della Política de cookies.
export const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

// Formato salvato: {"value":"accepted"|"rejected","date":<ms>}.
// Il vecchio formato (solo "accepted"/"rejected", senza data) vale come
// "nessuna scelta", così il banner viene riproposto una volta.
export function getConsent(): Consent | null {
  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { value?: unknown; date?: unknown };
    const { value, date } = parsed ?? {};
    if (value !== "accepted" && value !== "rejected") return null;
    if (typeof date !== "number" || Date.now() - date > CONSENT_MAX_AGE_MS) {
      return null;
    }
    return value;
  } catch {
    return null;
  }
}

// Cancella i cookie di Google Analytics (_ga, _ga_<ID>) quando si revoca il
// consenso. gtag.js li scrive sul dominio di livello più alto possibile
// (es. .barbarabacelle.es), quindi si prova su host e domini padre.
function deleteAnalyticsCookies() {
  const names = document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((name) => name === "_ga" || name.startsWith("_ga_"));
  if (names.length === 0) return;
  const parts = window.location.hostname.split(".");
  const domains = [""];
  for (let i = 0; i < parts.length - 1; i++) {
    domains.push(`; domain=.${parts.slice(i).join(".")}`);
  }
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
    }
  }
}

export function clearConsent() {
  try {
    window.localStorage.removeItem(COOKIE_CONSENT_KEY);
  } catch {}
}

let loaded = false;

export function loadAnalytics() {
  if (!GA4_ID || loaded) return;
  loaded = true;
  const w = window as unknown as GtagWindow;
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // gtag.js richiede l'oggetto "arguments", non un array.
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments);
  };
  w.gtag("js", new Date());
  w.gtag("config", GA4_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_ID)}`;
  document.head.appendChild(script);
}

export function setConsent(value: Consent) {
  try {
    window.localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({ value, date: Date.now() }),
    );
  } catch {}
  if (GA4_ID) {
    (window as unknown as GtagWindow)[`ga-disable-${GA4_ID}`] = value === "rejected";
  }
  if (value === "accepted") loadAnalytics();
  else deleteAnalyticsCookies();
}

// Riapre il banner dalla Política de cookies.
export function openCookieSettings() {
  clearConsent();
  window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT));
}
