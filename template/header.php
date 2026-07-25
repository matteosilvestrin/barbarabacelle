<!-- Header / Navegación -->
<header id="site-toolbar" class="toolbar-sticky-root toolbar-sticky">
    <div class="toolbar-spacer">
        <div id="toolbar-wrapper" class="toolbar-wrapper mx-auto h-[76px] w-full max-w-[428px] rounded-2xl text-primary-dark transition-all duration-500 ease-[cubic-bezier(0.165,0.84,0.44,1)]">
            <div class="toolbar-inner py-1">
                <nav class="toolbar-nav mx-auto flex h-[76px] w-full items-center justify-between" aria-label="Navegación principal">
                    <a href="<?= $basePath ?>/" class="toolbar-logo-placeholder inline-flex h-full items-center pl-5 pr-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" aria-label="Ir a Inicio">
                        <img src="assets/imgs/logo-barbarabacelle-asesoria_de_imagen_alicante.png" alt="Bárbara Bacelle, asesoría de imagen" class="h-[120px] w-auto">
                    </a>

                    <button id="menu-toggle" class="toolbar-button flex h-full w-[60px] touch-manipulation items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" aria-label="Abrir menú" aria-controls="mobile-menu" aria-expanded="false">
                        <span class="toolbar-menu-icon inline-flex flex-col gap-1.5">
                            <span class="block h-0.5 w-5 bg-current transition-transform" id="hamburger-top"></span>
                            <span class="block h-0.5 w-5 bg-current transition-opacity" id="hamburger-mid"></span>
                            <span class="block h-0.5 w-5 bg-current transition-transform" id="hamburger-bot"></span>
                        </span>
                    </button>
                </nav>
            </div>
        </div>
    </div>

    <div id="mobile-menu" class="pointer-events-none fixed inset-0 z-[70] hidden h-screen w-screen min-h-[100dvh] overflow-y-auto opacity-0 transition-opacity duration-300" aria-hidden="true">
        <div class="absolute inset-0 h-full w-full bg-white/90 backdrop-blur-[3px]"></div>
        <div class="relative flex min-h-[100dvh] w-full items-center justify-center px-6 py-24">
            <button id="menu-close" type="button" class="absolute right-6 top-6 inline-flex h-12 w-12 items-center justify-center rounded-full text-2xl text-primary-dark transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" aria-label="Cerrar menú">
                <i class="bi bi-x-lg" aria-hidden="true"></i>
            </button>
            <div class="flex w-full max-w-xl flex-col items-center justify-center text-center">
                <a href="<?= $basePath ?>/" class="mb-8 block bg-transparent" aria-label="Ir a Inicio">
                    <img src="assets/imgs/logo-barbarabacelle-asesoria_de_imagen_alicante.png" alt="Bárbara Bacelle, asesoría de imagen" class="mx-auto h-auto w-full" style="max-width:250px">
                </a>
                <a href="<?= $basePath ?>/" class="block rounded-xl px-6 py-3 text-2xl font-semibold text-primary-dark transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:text-3xl" aria-label="Ir a Inicio">Inicio</a>
                <a href="<?= $basePath ?>/servicios-asesoria-imagen-personal-alicante" class="mt-2 block rounded-xl px-6 py-3 text-2xl font-semibold text-primary-dark transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:text-3xl" aria-label="Ir a Servicios">Servicios</a>
                <a href="<?= $basePath ?>/barbara-bacelle-asesoria-imagen-alicante" class="mt-2 block rounded-xl px-6 py-3 text-2xl font-semibold text-primary-dark transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:text-3xl" aria-label="Ir a Sobre Mí">Sobre Mí</a>
                <a href="<?= $basePath ?>/#contacto" class="mt-2 block rounded-xl px-6 py-3 text-2xl font-semibold text-primary-dark transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:text-3xl" aria-label="Ir a Contacto">Contacto</a>
                <a href="<?= $basePath ?>/#contacto" class="mt-10 inline-flex min-w-[260px] justify-center rounded-full bg-primary px-10 py-4 text-lg font-semibold text-white shadow-soft transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" aria-label="Reservar cita">
                    Reserva tu asesoría
                </a>
            </div>
        </div>
    </div>
</header>
