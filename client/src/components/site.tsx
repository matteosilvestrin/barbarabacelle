import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { X, MessageCircle, Instagram } from "lucide-react";

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
const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/servicios-asesoria-imagen-personal-alicante", label: "Servicios" },
  { href: "/barbara-bacelle-asesoria-imagen-alicante", label: "Sobre mí" },
  { href: "/#contacto", label: "Contacto" },
];

// Variante del logo para el header: "Bacelle" en color primary (#0396A6).
// Generada a partir de logo-barbara-bacelle-asesoria-de-imgen-conciente.svg (paths 7–13).
const LOGO_SRC = "/logo-barbara-bacelle-asesoria-de-imgen-conciente-header.svg";
const LOGO_ALT = "Bárbara Bacelle — Asesoría de Imagen Personal";
const FOCUS_RING = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2";

/**
 * Toolbar flotante (copiada de la referencia http://localhost/barbarabacelle/):
 * - mobile (< sm): fija al fondo de la pantalla;
 * - sm+: sticky arriba, transparente en la parte superior de la página;
 * - se oculta al hacer scroll hacia abajo y reaparece al subir;
 * - el menú abierto es un overlay a pantalla completa.
 */
export function Header() {
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
            className={`relative mx-auto flex h-[76px] w-full max-w-[428px] overflow-hidden rounded-2xl bg-white text-teal-dark drop-shadow-[0_8px_16px_rgba(0,0,0,0.08)] transition-all duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)] ${
              surface ? "" : "sm:bg-transparent sm:drop-shadow-none"
            }`}
          >
            <nav className="mx-auto flex h-[76px] w-full items-center justify-between" aria-label="Navegación principal">
              <Link href="/" className={`inline-flex h-full items-center pl-5 pr-3 sm:pl-4 ${FOCUS_RING}`} aria-label="Ir a Inicio">
                <img src={LOGO_SRC} alt={LOGO_ALT} className="h-10 w-auto sm:h-14" />
              </Link>
              <button
                ref={toggleRef}
                type="button"
                onClick={() => setOpen(!open)}
                className={`flex h-full w-[60px] touch-manipulation items-center justify-center rounded-md ${FOCUS_RING}`}
                aria-label={open ? "Cerrar menú" : "Abrir menú"}
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
        <div className="absolute inset-0 h-full w-full bg-white/90 backdrop-blur-[3px]" />
        <div
          className="relative flex min-h-[100dvh] w-full items-center justify-center px-6 py-24"
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={() => { close(); toggleRef.current?.focus(); }}
            className={`absolute right-6 top-6 inline-flex h-12 w-12 items-center justify-center rounded-full text-teal-dark transition-colors hover:text-teal ${FOCUS_RING}`}
            aria-label="Cerrar menú"
          >
            <X size={24} aria-hidden="true" />
          </button>
          <div className="flex w-full max-w-xl flex-col items-center justify-center text-center">
            <Link href="/" onClick={close} className="mb-8 block bg-transparent" aria-label="Ir a Inicio">
              <img src={LOGO_SRC} alt={LOGO_ALT} className="mx-auto h-auto w-full max-w-[250px]" />
            </Link>
            {NAV.map((n, i) => (
              <a
                key={n.href}
                href={n.href}
                onClick={close}
                className={`${i > 0 ? "mt-2 " : ""}block rounded-xl px-6 py-3 text-2xl font-semibold text-teal-dark transition-colors hover:text-teal sm:text-3xl ${FOCUS_RING}`}
              >
                {n.label}
              </a>
            ))}
            <a
              href="/#contacto"
              onClick={close}
              className={`mt-10 inline-flex min-w-[260px] justify-center rounded-full bg-teal px-10 py-4 text-lg font-semibold text-white shadow-[0_8px_24px_rgba(3,150,166,0.08)] transition-colors hover:bg-teal-dark ${FOCUS_RING}`}
            >
              Reserva tu asesoría
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="bg-teal-dark text-white">
      <div className="container-brand py-16 grid gap-12 md:grid-cols-3">
        <div>
          <img src="/logo-barbara-bacelle-asesoria-de-imgen-conciente.svg" alt="Bárbara Bacelle — Asesoría de Imagen Personal" className="h-16 w-auto brightness-0 invert" />
          <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-xs">
            Asesoría de imagen personal en Alicante. Online y presencial.
          </p>
        </div>
        <div className="text-sm space-y-3">
          <p className="eyebrow !text-white/60 mb-2">Contacto</p>
          <p><a href="mailto:espaciodeestilo@gmail.com" className="hover:text-teal-lighter transition-colors">espaciodeestilo@gmail.com</a></p>
          <p><a href="tel:+34640907062" className="hover:text-teal-lighter transition-colors">+34 640 90 70 62</a></p>
          <p className="text-white/80">Alicante · Online</p>
        </div>
        <div className="text-sm space-y-3">
          <p className="eyebrow !text-white/60 mb-2">Sígueme</p>
          <a href="https://www.instagram.com/espaciodeestilo/" target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 hover:text-teal-lighter transition-colors">
            <Instagram size={16} /> @espaciodeestilo
          </a>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="container-brand py-6 text-xs text-white/60 flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Bárbara Bacelle · Espacio de Estilo</p>
          <p>Aviso legal · Privacidad · Cookies</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- WhatsApp ---------- */
export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/34640907062" target="_blank" rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-[136px] right-5 z-40 inline-flex sm:bottom-5 min-h-14 min-w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle size={24} />
    </a>
  );
}

/* ---------- CTA sección ---------- */
export function CTASection() {
  return (
    <section className="bg-teal-lightest">
      <div className="container-brand py-20 md:py-24 text-center max-w-3xl mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.08]">
            ¿Empezamos a construir una imagen que te represente?
          </h2>
          <p className="mt-6 text-teal-dark/80 md:text-lg leading-8">
            Reserva una primera consulta y definimos juntas el mejor punto de partida para ti.
          </p>
          <div className="mt-10">
            <a href="/#contacto" className="btn-primary">Quiero reservar mi consulta</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Popup ---------- */
export function MasterclassPopup() {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("mc_popup_shown")) return;
    const t = setTimeout(() => { setOpen(true); sessionStorage.setItem("mc_popup_shown", "1"); }, 6000);
    return () => clearTimeout(t);
  }, []);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Masterclass gratuita">
      <div className="absolute inset-0 bg-teal-dark/50" onClick={() => setOpen(false)} />
      <div className="relative bg-white rounded-2xl overflow-hidden max-w-lg w-full p-8 md:p-10 shadow-xl">
        <button onClick={() => setOpen(false)} aria-label="Cerrar" className="absolute top-4 right-4 min-h-10 min-w-10 inline-flex items-center justify-center text-teal-dark hover:text-teal">
          <X />
        </button>
        {done ? (
          <div className="py-10 text-center">
            <p className="font-serif text-3xl font-semibold">¡Gracias!</p>
            <p className="mt-3 text-teal-dark/80">Te responderé personalmente muy pronto.</p>
          </div>
        ) : (
          <>
            <p className="eyebrow mb-3">Novedades</p>
            <h3 className="text-3xl font-semibold leading-tight">
              Recibe consejos de <span className="font-script text-teal text-4xl">estilo consciente</span> en tu email
            </h3>
            <p className="mt-4 text-sm text-teal-dark/80 leading-relaxed">
              Suscríbete y descubre cada semana claves de armocromía, estilo y silueta para sentirte segura con tu imagen.
            </p>
            <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
              <div>
                <label htmlFor="popup-nombre" className="block text-sm font-medium text-teal-dark mb-1">Nombre</label>
                <input id="popup-nombre" required placeholder="Tu nombre" className="input-brand" />
              </div>
              <div>
                <label htmlFor="popup-email" className="block text-sm font-medium text-teal-dark mb-1">Email</label>
                <input id="popup-email" type="email" required placeholder="tu@email.com" className="input-brand" />
              </div>
              <button type="submit" className="btn-primary w-full">Quiero suscribirme</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
