<!-- Header / Navegación -->
<header class="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
    <nav class="max-w-7xl mx-auto px-6 md:px-12" aria-label="Navegación principal">
        <div class="flex h-20 items-center justify-between">
            <a href="#inicio" class="font-heading text-xl font-bold tracking-tight text-primary-dark transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:text-2xl">
                Espacio de Estilo.
            </a>

            <ul class="hidden lg:flex items-center gap-8">
                <li><a href="#inicio" class="rounded-md text-sm font-medium text-slate-600 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" aria-label="Ir a Inicio">Inicio</a></li>
                <li><a href="#servicios" class="rounded-md text-sm font-medium text-slate-600 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" aria-label="Ir a Servicios">Servicios</a></li>
                <li><a href="#sobre-mi" class="rounded-md text-sm font-medium text-slate-600 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" aria-label="Ir a Sobre Mí">Sobre Mí</a></li>
                <li><a href="#testimonios" class="rounded-md text-sm font-medium text-slate-600 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" aria-label="Ir a Testimonios">Testimonios</a></li>
                <li><a href="#galeria" class="rounded-md text-sm font-medium text-slate-600 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" aria-label="Ir a Galería">Galería</a></li>
                <li><a href="#contacto" class="rounded-md text-sm font-medium text-slate-600 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" aria-label="Ir a Contacto">Contacto</a></li>
            </ul>

            <a href="#contacto" class="hidden lg:inline-flex rounded-full bg-gradient-to-r from-primary to-primary-light px-6 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" aria-label="Reservar cita">
                Reservar Cita
            </a>

            <button id="menu-toggle" class="lg:hidden flex h-8 w-8 touch-manipulation flex-col items-center justify-center space-y-1.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" aria-label="Abrir menú" aria-controls="mobile-menu" aria-expanded="false">
                <span class="block w-6 h-0.5 bg-primary-dark transition-transform" id="hamburger-top"></span>
                <span class="block w-6 h-0.5 bg-primary-dark transition-opacity" id="hamburger-mid"></span>
                <span class="block w-6 h-0.5 bg-primary-dark transition-transform" id="hamburger-bot"></span>
            </button>
        </div>

        <div id="mobile-menu" class="pointer-events-none fixed inset-0 z-[70] hidden h-screen w-screen min-h-[100dvh] overflow-y-auto opacity-0 transition-opacity duration-300 lg:hidden" aria-hidden="true">
            <div class="absolute inset-0 h-full w-full bg-white/90 backdrop-blur-[3px]"></div>
            <div class="relative flex min-h-[100dvh] w-full items-center justify-center px-6 py-24">
                <div class="flex w-full max-w-xl flex-col items-center justify-center text-center">
                    <a href="#inicio" class="block rounded-xl px-6 py-3 text-3xl font-semibold text-primary-dark transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:text-4xl" aria-label="Ir a Inicio">Inicio</a>
                    <a href="#servicios" class="mt-2 block rounded-xl px-6 py-3 text-3xl font-semibold text-primary-dark transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:text-4xl" aria-label="Ir a Servicios">Servicios</a>
                    <a href="#sobre-mi" class="mt-2 block rounded-xl px-6 py-3 text-3xl font-semibold text-primary-dark transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:text-4xl" aria-label="Ir a Sobre Mí">Sobre Mí</a>
                    <a href="#testimonios" class="mt-2 block rounded-xl px-6 py-3 text-3xl font-semibold text-primary-dark transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:text-4xl" aria-label="Ir a Testimonios">Testimonios</a>
                    <a href="#galeria" class="mt-2 block rounded-xl px-6 py-3 text-3xl font-semibold text-primary-dark transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:text-4xl" aria-label="Ir a Galería">Galería</a>
                    <a href="#contacto" class="mt-2 block rounded-xl px-6 py-3 text-3xl font-semibold text-primary-dark transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:text-4xl" aria-label="Ir a Contacto">Contacto</a>
                    <a href="#contacto" class="mt-10 inline-flex min-w-[260px] justify-center rounded-full bg-gradient-to-r from-primary to-primary-light px-10 py-4 text-lg font-semibold text-white shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" aria-label="Reservar cita">
                        Reserva tu asesoría
                    </a>
                </div>
            </div>
        </div>
    </nav>
</header>
