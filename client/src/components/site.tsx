import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { X, MessageCircle, Instagram, Youtube } from "lucide-react";
import { LEGAL, LEGAL_PAGES } from "@/lib/legal";
import { enviarFormulario } from "@/lib/contact";
import { useI18n } from "@/i18n";
import { LanguageSwitch } from "@/components/LanguageSwitch";

/* ---------- Reveal ---------- */
export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("is-visible"); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

/* ---------- Eyebrow ---------- */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow mb-4">{children}</p>;
}

/* ---------- Header ---------- */

// Apre il popup della masterclass da qualsiasi punto del sito (es. voce del menu).
const OPEN_MASTERCLASS_EVENT = "masterclass:open";
function openMasterclass() {
  window.dispatchEvent(new Event(OPEN_MASTERCLASS_EVENT));
}

// Variante del logo para el header: "Bacelle" en color primary (#0396A6).
// Logo original bicolor; logo-barbara-bacelle-asesoria-de-imgen-consciente.svg es la misma versión toda en negro.
const LOGO_SRC = "/logo-barbara-bacelle-asesoria-de-imgen-consciente-header.svg";
const FOCUS_RING = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2";

/**
 * Toolbar flotante (copiada de la referencia http://localhost/barbarabacelle/):
 * - mobile (< sm): fija al fondo de la pantalla;
 * - sm+: sticky arriba, transparente en la parte superior de la página;
 * - se oculta al hacer scroll hacia abajo y reaparece al subir;
 * - el menú abierto es un overlay a pantalla completa.
 */
export function Header() {
  const { t, href } = useI18n();
  const nav = [
    { href: href("home"), label: t.nav.home },
    { href: href("servicios"), label: t.nav.servicios },
    { href: href("sobreMi"), label: t.nav.sobreMi },
    { href: href("home", "contacto"), label: t.nav.contacto },
  ];
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Ocultar al bajar / mostrar al subir.
  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (y < 24) setHidden(false);
      else if (y > last + 2) setHidden(true);
      else if (y < last - 2) setHidden(false);
      last = y;
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menú abierto: bloquear scroll, cerrar con Escape o al pasar a desktop.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); toggleRef.current?.focus(); }
    };
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);
  const surface = open || scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 bottom-0 z-50 h-[116px] transition-transform duration-400 ease-[ease] sm:sticky sm:top-0 sm:bottom-auto ${
          hidden && !open ? "translate-y-[116px] sm:-translate-y-[116px]" : ""
        }`}
      >
        <div className="box-content h-[76px] p-5">
          <div
            // Vidrio esmerilado (.glass en index.css). Sombra hacia arriba en mobile (toolbar
            // abajo) y hacia abajo en sm+ (toolbar arriba). En desktop, en la parte superior
            // de la página, la toolbar es transparente y sin blur.
            className={`glass relative mx-auto flex h-[76px] w-full max-w-[428px] overflow-hidden rounded-2xl text-teal-dark shadow-[0_-6px_20px_rgba(0,0,0,0.10)] transition-[background-color,box-shadow,-webkit-backdrop-filter,backdrop-filter] duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)] sm:shadow-[0_8px_16px_rgba(0,0,0,0.08)] ${
              surface ? "" : "sm:bg-transparent sm:shadow-none sm:backdrop-filter-none"
            }`}
          >
            <nav className="mx-auto flex h-[76px] w-full items-center justify-between" aria-label={t.nav.label}>
              {/* Logo a 0.5em (8px) del borde de la píldora (arriba, abajo e izquierda): ocupa la altura restante. */}
              <Link href={href("home")} className={`inline-flex h-full min-w-0 items-center py-[0.5em] pl-[0.5em] pr-3 ${FOCUS_RING}`} aria-label={t.nav.goHome}>
                <img src={LOGO_SRC} alt={t.logoAlt} className="h-full w-auto max-w-full object-contain object-left" />
              </Link>
              <button
                ref={toggleRef}
                type="button"
                onClick={() => setOpen(!open)}
                className={`flex h-full w-[60px] touch-manipulation items-center justify-center rounded-md ${FOCUS_RING}`}
                aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
                aria-controls="mobile-menu"
                aria-expanded={open}
              >
                <span className="inline-flex flex-col gap-1.5" aria-hidden="true">
                  <span className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
                  <span className={`block h-0.5 w-5 rounded-full bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
                  <span className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
                </span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[70] h-screen min-h-[100dvh] w-screen overflow-y-auto duration-300 ${
          // Al abrir, visibility cambia al instante (para poder enfocar el botón de cierre);
          // al cerrar, espera al fade de opacidad.
          open ? "visible opacity-100 transition-opacity" : "pointer-events-none invisible opacity-0 transition-[opacity,visibility]"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="absolute inset-0 h-full w-full glass [--glass-blur:16px] [--glass-saturate:1.3]" />
        <div
          className="relative flex min-h-[100dvh] w-full items-center justify-center px-6 py-24"
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={() => { close(); toggleRef.current?.focus(); }}
            className={`absolute right-6 top-6 inline-flex h-12 w-12 items-center justify-center rounded-full text-teal-dark transition-colors hover:text-teal ${FOCUS_RING}`}
            aria-label={t.nav.closeMenu}
          >
            <X size={24} aria-hidden="true" />
          </button>
          <div className="flex w-full max-w-xl flex-col items-center justify-center text-center">
            <Link href={href("home")} onClick={close} className="mb-8 block bg-transparent" aria-label={t.nav.goHome}>
              <img src={LOGO_SRC} alt={t.logoAlt} className="mx-auto h-auto w-full max-w-[250px]" />
            </Link>
            {nav.map((n, i) => (
              <a
                key={n.href}
                href={n.href}
                onClick={close}
                className={`${i > 0 ? "mt-2 " : ""}block rounded-xl px-6 py-3 text-2xl font-semibold text-teal-dark transition-colors hover:text-teal sm:text-3xl ${FOCUS_RING}`}
              >
                {n.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => { close(); openMasterclass(); }}
              className={`mt-2 block rounded-xl px-6 py-3 text-2xl font-semibold text-teal-dark transition-colors hover:text-teal sm:text-3xl ${FOCUS_RING}`}
            >
              {t.nav.masterclass}
            </button>
            <a
              href={href("home", "contacto")}
              onClick={close}
              className={`mt-10 inline-flex min-w-[260px] justify-center rounded-full bg-teal px-10 py-4 text-lg font-semibold text-white shadow-[0_8px_24px_rgba(3,150,166,0.08)] transition-colors hover:bg-teal-dark ${FOCUS_RING}`}
            >
              {t.nav.reserva}
            </a>
            <LanguageSwitch className="mt-8" onNavigate={close} />
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- Footer ---------- */
// Lucide non ha l'icona di TikTok: glifo da Simple Icons (CC0), riempito con currentColor.
function TikTokIcon({ size = 16, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

export const SOCIAL = [
  { name: "Instagram", href: "https://www.instagram.com/espaciodeestilo/", handle: "@espaciodeestilo", Icon: Instagram },
  { name: "TikTok", href: "https://www.tiktok.com/@espaciodeestilo", handle: "@espaciodeestilo", Icon: TikTokIcon },
  { name: "YouTube", href: "https://www.youtube.com/@espaciodeestilo4404", handle: "@espaciodeestilo4404", Icon: Youtube },
];

export function Footer() {
  const { t, href } = useI18n();
  return (
    <footer className="bg-teal-dark text-white">
      <div className="container-brand py-16 grid gap-12 md:grid-cols-3">
        <div>
          <img src="/logo-barbara-bacelle-asesoria-de-imgen-consciente.svg" alt={t.logoAlt} className="h-16 w-auto brightness-0 invert" />
          <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-xs">
            {t.footer.tagline}
          </p>
        </div>
        <div className="text-sm space-y-3">
          <p className="eyebrow !text-white/60 mb-2">{t.footer.contacto}</p>
          <p><a href="mailto:hola@barbarabacelle.es" className="hover:text-teal-lighter transition-colors">hola@barbarabacelle.es</a></p>
          <p><a href="tel:+34640907062" className="hover:text-teal-lighter transition-colors">+34 640 90 70 62</a></p>
          <p className="text-white/80">{t.footer.place}</p>
        </div>
        <div className="text-sm">
          <p className="eyebrow !text-white/60 mb-2">{t.footer.follow}</p>
          <ul className="mt-3 space-y-3">
            {SOCIAL.map(({ name, href, handle, Icon }) => (
              <li key={name}>
                <a href={href} target="_blank" rel="noreferrer"
                   className="inline-flex items-center gap-2 hover:text-teal-lighter transition-colors">
                  <Icon size={16} aria-hidden="true" />
                  <span className="sr-only">{name}: </span>
                  {handle}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="container-brand py-6 text-xs text-white/60 flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Barbara Bacelle · Espacio de Estilo</p>
          <nav aria-label={t.footer.legalNav}>
            <ul className="flex flex-wrap gap-x-2">
              {LEGAL_PAGES.map((page, i) => (
                <li key={page} className="flex gap-x-2">
                  {i > 0 && <span aria-hidden="true">·</span>}
                  <Link href={href(page)} className="hover:text-white transition-colors">{t.legalLinks[page]}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

/* ---------- WhatsApp ---------- */
export function WhatsAppButton() {
  const { t } = useI18n();
  return (
    <a
      href="https://wa.me/34640907062" target="_blank" rel="noreferrer"
      aria-label={t.whatsapp}
      className="fixed bottom-[136px] right-5 z-40 inline-flex sm:bottom-5 min-h-14 min-w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle size={24} />
    </a>
  );
}

/* ---------- CTA sección ---------- */
export function CTASection({ text }: { text?: string }) {
  const { t, href } = useI18n();
  return (
    <section className="bg-teal-lightest">
      <div className="container-brand py-20 md:py-24 text-center max-w-3xl mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.08]">
            {t.cta.title}
          </h2>
          <p className="mt-6 text-teal-dark/80 md:text-lg leading-8">
            {text ?? t.cta.text}
          </p>
          <div className="mt-10">
            <a href={href("home", "contacto")} className="btn-primary">{t.cta.button}</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Honeypot anti-spam (form) ---------- */
// Campo invisibile per le persone: i bot lo riempiono e il server scarta la richiesta. Non rimuoverlo.
export function HoneypotField() {
  const { t } = useI18n();
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-0 overflow-hidden">
      <label>
        {t.form.honeypot}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

/* ---------- Consenso privacy (form) ---------- */
// Casella obbligatoria + informazione di base RGPD (primo livello) sotto ai form.
// Il link apre la privacy in una nuova scheda per non perdere i dati già scritti.
export function PrivacyConsent({ id, finalidad }: { id: string; finalidad: string }) {
  const { t, href } = useI18n();
  return (
    <div className="space-y-2">
      <div className="flex items-start gap-3">
        <input
          id={id}
          name="privacidad"
          type="checkbox"
          required
          className="mt-1 size-4 shrink-0 cursor-pointer accent-teal"
        />
        <label htmlFor={id} className="text-sm text-teal-dark leading-6">
          {t.form.privacyAccept}
          <a
            href={href("privacidad")}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-teal underline underline-offset-2 hover:text-teal-dark"
          >
            {t.form.privacyLink}
          </a>
          .
        </label>
      </div>
      <p className="text-xs text-teal-dark/70 leading-5">
        {t.form.privacyInfo(LEGAL.titular, finalidad)}
      </p>
    </div>
  );
}

/* ---------- Popup ---------- */
export function MasterclassPopup() {
  const { lang, t } = useI18n();
  const p = t.popup;
  const f = t.form;
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(false);
    const ok = await enviarFormulario(e.currentTarget, "masterclass", lang);
    setSending(false);
    if (ok) setDone(true);
    else setError(true);
  }

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    // Apertura manuale (menu): annulla l'apertura automatica programmata.
    const onOpen = () => { clearTimeout(timer); setOpen(true); };
    window.addEventListener(OPEN_MASTERCLASS_EVENT, onOpen);
    if (!sessionStorage.getItem("mc_popup_shown")) {
      timer = setTimeout(() => { setOpen(true); sessionStorage.setItem("mc_popup_shown", "1"); }, 6000);
    }
    return () => {
      clearTimeout(timer);
      window.removeEventListener(OPEN_MASTERCLASS_EVENT, onOpen);
    };
  }, []);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={p.ariaLabel}>
      {/* Scrim tintado con el mismo blur del menú; sin soporte de backdrop-filter queda solo el tinte. */}
      <div
        className="absolute inset-0 bg-teal-dark/50 backdrop-blur-lg backdrop-saturate-[1.3] [@media(prefers-reduced-transparency:reduce)]:bg-teal-dark/85 [@media(prefers-reduced-transparency:reduce)]:backdrop-filter-none"
        onClick={() => setOpen(false)}
      />
      <div className="relative bg-white rounded-2xl overflow-hidden max-w-lg w-full p-8 md:p-10 shadow-xl">
        <button onClick={() => setOpen(false)} aria-label={p.close} className="absolute top-4 right-4 min-h-10 min-w-10 inline-flex items-center justify-center text-teal-dark hover:text-teal">
          <X />
        </button>
        {done ? (
          <div className="py-10 text-center">
            <p className="font-serif text-3xl font-semibold">{p.thanksTitle}</p>
            <p className="mt-3 text-teal-dark/80">{p.thanksText}</p>
          </div>
        ) : (
          <>
            <p className="eyebrow mb-3">{p.eyebrow}</p>
            <h3 className="text-3xl font-semibold leading-tight">
              {p.titleBefore}<span className="font-script text-teal text-4xl">{p.titleScript}</span>{p.titleAfter}
            </h3>
            <p className="mt-4 text-sm text-teal-dark/80 leading-relaxed">
              {p.text}
            </p>
            <form className="relative mt-6 space-y-4" onSubmit={onSubmit}>
              <HoneypotField />
              <div>
                <label htmlFor="popup-nombre" className="block text-sm font-medium text-teal-dark mb-1">{f.nombre}</label>
                <input id="popup-nombre" name="nombre" required placeholder={f.nombrePh} className="input-brand" />
              </div>
              <div>
                <label htmlFor="popup-email" className="block text-sm font-medium text-teal-dark mb-1">{f.email}</label>
                <input id="popup-email" name="email" type="email" required placeholder={f.emailPh} className="input-brand" />
              </div>
              <div>
                <label htmlFor="popup-ciudad" className="block text-sm font-medium text-teal-dark mb-1">{f.ciudad} <span className="font-normal text-teal-dark/60">{f.opcional}</span></label>
                <input id="popup-ciudad" name="ciudad" placeholder={f.ciudadPh} className="input-brand" />
              </div>
              <PrivacyConsent id="popup-privacidad" finalidad={p.finalidad} />
              {error && (
                <p role="alert" className="text-sm text-red-700">
                  {p.error}
                </p>
              )}
              <button type="submit" disabled={sending} className="btn-primary w-full disabled:opacity-60">
                {sending ? f.sending : p.submit}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
