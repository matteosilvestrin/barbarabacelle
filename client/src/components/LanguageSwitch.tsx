import { LANGS, pathFor, type Lang } from "@shared/routes";
import { useI18n } from "@/i18n";

// Bandiere in SVG: le emoji-bandiera non vengono disegnate su Windows.
function FlagES() {
  return (
    <svg viewBox="0 0 3 2" width="24" height="16" aria-hidden="true" className="rounded-[2px] ring-1 ring-teal-dark/15">
      <rect width="3" height="2" fill="#AA151B" />
      <rect y="0.5" width="3" height="1" fill="#F1BF00" />
    </svg>
  );
}

function FlagIT() {
  return (
    <svg viewBox="0 0 3 2" width="24" height="16" aria-hidden="true" className="rounded-[2px] ring-1 ring-teal-dark/15">
      <rect width="1" height="2" fill="#009246" />
      <rect x="1" width="1" height="2" fill="#FFFFFF" />
      <rect x="2" width="1" height="2" fill="#CE2B37" />
    </svg>
  );
}

// Etichette nella lingua di destinazione, come d'uso negli switcher di lingua.
const OPTIONS: Record<Lang, { short: string; name: string; label: string; Flag: () => React.JSX.Element }> = {
  es: { short: "ESP", name: "Español", label: "Ver esta página en español", Flag: FlagES },
  it: { short: "ITA", name: "Italiano", label: "Vedi questa pagina in italiano", Flag: FlagIT },
};

/**
 * ESP / ITA nel menu. Il link porta alla stessa pagina nell'altra lingua
 * (la 404 porta alla home) e conserva l'ancora corrente: gli id delle sezioni
 * sono gli stessi nelle due lingue.
 */
export function LanguageSwitch({ className = "", onNavigate }: { className?: string; onNavigate?: () => void }) {
  const { lang, page, t } = useI18n();
  const target = page === "notFound" ? "home" : page;
  return (
    <ul className={`flex items-center justify-center gap-3 ${className}`} aria-label={t.nav.language}>
      {LANGS.map((l) => {
        const { short, name, label, Flag } = OPTIONS[l];
        const content = (
          <>
            <Flag />
            <span>{short}</span>
          </>
        );
        const base = "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold tracking-[0.12em]";
        return (
          <li key={l}>
            {l === lang ? (
              <span aria-current="true" title={name} className={`${base} bg-teal-lightest text-teal-dark`}>
                {content}
              </span>
            ) : (
              <a
                href={pathFor(target, l)}
                hrefLang={l}
                lang={l}
                aria-label={label}
                title={name}
                onClick={(e) => {
                  // L'ancora si legge al click: nel render (prerender) window non esiste.
                  const hash = page === "notFound" ? "" : window.location.hash;
                  if (hash) e.currentTarget.href = pathFor(target, l) + hash;
                  onNavigate?.();
                }}
                className={`${base} text-teal-dark/70 transition-colors hover:bg-teal-lightest hover:text-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2`}
              >
                {content}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
