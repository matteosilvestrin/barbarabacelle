import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  COOKIE_SETTINGS_EVENT,
  GA4_ID,
  getConsent,
  loadAnalytics,
  setConsent,
} from "@/lib/analytics";

// Banner di consenso per le cookie di analisi (Google Analytics).
// Compare solo se GA4_ID è configurato e l'utente non ha ancora scelto.
// Lo stato iniziale è "nascosto": il prerender non include il banner.
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!GA4_ID) return;
    const sync = () => {
      const consent = getConsent();
      if (consent === "accepted") loadAnalytics();
      setVisible(consent === null);
    };
    sync();
    window.addEventListener(COOKIE_SETTINGS_EVENT, sync);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, sync);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-3 bottom-[132px] z-50 rounded-xl border border-stone bg-white p-5 text-teal-dark shadow-lg sm:inset-x-auto sm:bottom-5 sm:right-5 sm:max-w-md"
    >
      <p className="text-sm leading-relaxed">
        Usamos Google Analytics para saber qué páginas se visitan y mejorar el
        sitio. Solo se activa si lo aceptas. Puedes cambiar tu elección en
        cualquier momento en la{" "}
        <Link
          href="/politica-de-cookies"
          className="underline underline-offset-2"
        >
          Política de cookies
        </Link>
        .
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <Button
          type="button"
          className="bg-teal-dark text-white hover:bg-teal"
          onClick={() => {
            setConsent("accepted");
            setVisible(false);
          }}
        >
          ACEPTAR
        </Button>
        <Button
          type="button"
          variant="outline"
          className="border-teal-dark text-teal-dark hover:bg-teal-lightest"
          onClick={() => {
            setConsent("rejected");
            setVisible(false);
          }}
        >
          RECHAZAR
        </Button>
      </div>
    </div>
  );
}
