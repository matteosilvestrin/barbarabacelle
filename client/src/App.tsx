import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { LANGS, PAGE_KEYS, langOf, pathFor, type Lang, type PageKey } from "@shared/routes";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import SobreMi from "./pages/SobreMi";
import AvisoLegal from "./pages/AvisoLegal";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import PoliticaCookies from "./pages/PoliticaCookies";
import NoteLegali from "./pages/it/NoteLegali";
import InformativaPrivacy from "./pages/it/InformativaPrivacy";
import PoliticaCookie from "./pages/it/PoliticaCookie";
import { Header, Footer, WhatsAppButton, MasterclassPopup } from "./components/site";
import { CookieBanner } from "./components/CookieBanner";
import { LangProvider } from "./i18n";

import { useEffect } from "react";

// useLocation() di wouter non include l'hash: va letto da window.location.
// Con un'ancora (es. /servicios-...#armocromia) porta il blocco in vista
// rispettando il suo scroll-margin; altrimenti torna in cima.
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const target = hash ? document.getElementById(decodeURIComponent(hash)) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Layout({ lang, page, children }: { lang: Lang; page: PageKey; children: React.ReactNode }) {
  return (
    <LangProvider lang={lang} page={page}>
      <div className="min-h-screen flex flex-col pb-[116px] sm:pb-0">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <WhatsAppButton />
        <MasterclassPopup />
        <CookieBanner />
      </div>
    </LangProvider>
  );
}

// Pagine con testi da dizionario: stesso componente per tutte le lingue.
// Le pagine legali hanno un componente per lingua (testo lungo, si rivede meglio così).
const PAGE_COMPONENTS: Record<PageKey, Record<Lang, React.ComponentType>> = {
  home: { es: Home, it: Home },
  servicios: { es: Servicios, it: Servicios },
  sobreMi: { es: SobreMi, it: SobreMi },
  avisoLegal: { es: AvisoLegal, it: NoteLegali },
  privacidad: { es: PoliticaPrivacidad, it: InformativaPrivacy },
  cookies: { es: PoliticaCookies, it: PoliticaCookie },
  notFound: { es: NotFound, it: NotFound },
};

// Stesso albero di /404 (o /it/404): il server serve l'HTML prerenderizzato della 404
// nella lingua dell'URL, e l'idratazione deve trovare lo stesso layout.
function CatchAll() {
  const [location] = useLocation();
  return (
    <Layout lang={langOf(location)} page="notFound">
      <NotFound />
    </Layout>
  );
}

function Router() {
  return (
    <Switch>
      {LANGS.flatMap((lang) =>
        PAGE_KEYS.map((page) => {
          const Page = PAGE_COMPONENTS[page][lang];
          return (
            <Route key={`${lang}:${page}`} path={pathFor(page, lang)}>
              <Layout lang={lang} page={page}><Page /></Layout>
            </Route>
          );
        })
      )}
      <Route>
        <CatchAll />
      </Route>
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <TooltipProvider>
        <Toaster />
        <ScrollToTop />
        <Router />
      </TooltipProvider>
    </ErrorBoundary>
  );
}
