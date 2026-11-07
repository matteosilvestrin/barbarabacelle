import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import SobreMi from "./pages/SobreMi";
import { Header, Footer, WhatsAppButton, MasterclassPopup } from "./components/site";

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

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col pb-[116px] sm:pb-0">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
      <WhatsAppButton />
      <MasterclassPopup />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path={"/"}>
        <Layout><Home /></Layout>
      </Route>
      <Route path={"/servicios-asesoria-imagen-personal-alicante"}>
        <Layout><Servicios /></Layout>
      </Route>
      <Route path={"/barbara-bacelle-asesoria-imagen-alicante"}>
        <Layout><SobreMi /></Layout>
      </Route>
      <Route path={"/404"}>
        <Layout><NotFound /></Layout>
      </Route>
      <Route component={NotFound} />
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
