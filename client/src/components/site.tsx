import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Menu, X, MessageCircle, Instagram } from "lucide-react";

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

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm">
      <div className="container-brand flex items-center justify-between py-4">
        <Link href="/" aria-label="Espacio de Estilo — inicio">
          <img src="/logo-barbara-bacelle.png" alt="Bárbara Bacelle — Asesoría de Imagen Personal" className="h-12 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-teal-dark transition-colors duration-300 hover:text-teal">
              {n.label}
            </a>
          ))}
          <a href="/#contacto" className="btn-primary !min-h-11 text-sm">Reservar consulta</a>
        </nav>
        <button
          className="lg:hidden inline-flex min-h-12 min-w-12 items-center justify-center text-teal-dark"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Abrir menú"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="lg:hidden bg-white border-t border-stone-light px-6 pb-6 pt-2 flex flex-col gap-1" aria-label="Menú móvil">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-base text-teal-dark">
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="bg-teal-dark text-white">
      <div className="container-brand py-16 grid gap-12 md:grid-cols-3">
        <div>
          <img src="/logo-barbara-bacelle.png" alt="Bárbara Bacelle — Asesoría de Imagen Personal" className="h-16 w-auto" />
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
      className="fixed bottom-5 right-5 z-50 inline-flex min-h-14 min-w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
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
