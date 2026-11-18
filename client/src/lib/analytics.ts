// Google Analytics (GA4) con consenso esplicito.
// L'ID di misurazione viene da GA4_ID (.env o ambiente di build) ed è iniettato
// nel client da vite.config.ts al momento del build: se manca, nulla viene caricato.
//
// Regole:
// - gtag.js si carica solo dopo "Aceptar" (mai al primo caricamento della pagina);
// - la scelta è salvata in localStorage (cookie_consent) per non richiederla ad ogni visita;
// - "Rechazar" disattiva la misurazione tramite ga-disable-<ID>.
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

export function getConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
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
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
  } catch {}
  if (GA4_ID) {
    (window as unknown as GtagWindow)[`ga-disable-${GA4_ID}`] = value === "rejected";
  }
  if (value === "accepted") loadAnalytics();
}

// Riapre il banner dalla Política de cookies.
export function openCookieSettings() {
  clearConsent();
  window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT));
}
