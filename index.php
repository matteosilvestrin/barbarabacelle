<?php
$pageTitle = 'Tu Estilo | Asesoría de Imagen Personal';
$pageDescription = 'Asesoría de imagen personal para mujeres que desean sentirse auténticas y seguras. Servicio personalizado integrando cuerpo, mente y estilo.';
$pageKeywords = 'asesoría de imagen personal, consultora de imagen, estilo consciente, armocromía, trainer de imagen';
$siteName = 'Espacio de Estilo';
$pageImage = 'assets/imgs/barbara-bacelle-consulente-immagine-hero.jpg';
include 'inc/head.php';
?>
<?php include 'inc/header.php'; ?>

<main id="main-content" class="overflow-x-hidden">
    <section id="inicio" class="relative flex min-h-screen items-center pt-24">
        <div class="absolute inset-0">
            <img src="assets/imgs/barbara-bacelle-consulente-immagine-hero.jpg" alt="Bárbara - Trainer de imagen personal" width="1920" height="1440" fetchpriority="high" class="h-full w-full object-cover object-top">
            <div class="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/75 to-primary-light/35"></div>
        </div>
        <div class="relative max-w-7xl mx-auto px-6 md:px-12 w-full">
            <div class="max-w-2xl text-white">
                <p class="animate-on-scroll font-heading text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100" data-animate="animate__fadeInUp">Consultora de Imagen Personal</p>
                <h1 class="animate-on-scroll mt-4 max-w-xl text-balance font-heading text-4xl font-bold leading-tight md:text-6xl" data-animate="animate__fadeInUp">Tu imagen, en coherencia con quién eres</h1>
                <p class="animate-on-scroll mt-6 text-base leading-relaxed text-cyan-50 md:text-lg" data-animate="animate__fadeInUp">Acompaño a mujeres que quieren verse bien, sentirse seguras y proyectarse con autenticidad, integrando imagen, actitud y estilo personal.</p>
                <div class="animate-on-scroll mt-8 flex flex-wrap gap-4" data-animate="animate__fadeInUp">
                    <a href="#servicios" class="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-dark transition-colors hover:bg-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark" aria-label="Ver servicios">Ver servicios</a>
                    <a href="#contacto" class="inline-flex items-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark" aria-label="Reservar primera consulta">Reservar primera consulta</a>
                </div>
            </div>
        </div>
    </section>

    <section id="servicios" class="bg-surface-light py-20 md:py-24">
        <div class="max-w-7xl mx-auto px-6 md:px-12">
            <div class="mx-auto max-w-3xl text-center animate-on-scroll" data-animate="animate__fadeInUp">
                <p class="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-primary">Servicios</p>
                <h2 class="mt-3 font-heading text-3xl font-bold text-primary-dark md:text-4xl">¿Cómo puedo ayudarte?</h2>
                <p class="mt-4 text-slate-600">Cada mujer tiene una historia, un ritmo y una forma de expresarse. Por eso, cada servicio se adapta a tus necesidades y objetivos.</p>
            </div>

            <div class="mt-12 grid gap-6 md:grid-cols-2">
                <article class="animate-on-scroll rounded-2xl border border-slate-200 bg-white p-8 shadow-soft" data-animate="animate__fadeInUp">
                    <span class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-primary" aria-hidden="true">
                        <svg class="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h7m-7 4h10M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"></path></svg>
                    </span>
                    <h3 class="mt-4 font-heading text-xl font-semibold text-primary-dark">Asesoría Express</h3>
                    <p class="mt-1 text-sm font-medium text-primary">Online y Presencial</p>
                    <p class="mt-4 text-[15px] leading-relaxed text-slate-600">Una sesión breve y enfocada para resolver dudas concretas sobre estilo, colorimetría o looks para una ocasión especial.</p>
                    <ul class="mt-4 space-y-2 text-sm text-slate-700">
                        <li>• Diagnóstico rápido de imagen</li>
                        <li>• Recomendaciones accionables al momento</li>
                        <li>• Guía breve personalizada</li>
                    </ul>
                </article>

                <article class="animate-on-scroll rounded-2xl border border-slate-200 bg-white p-8 shadow-soft" data-animate="animate__fadeInUp">
                    <span class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-primary" aria-hidden="true">
                        <svg class="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m9-9H3"></path></svg>
                    </span>
                    <h3 class="mt-4 font-heading text-xl font-semibold text-primary-dark">Armonía de Imagen</h3>
                    <p class="mt-1 text-sm font-medium text-primary">Online y Presencial</p>
                    <p class="mt-4 text-[15px] leading-relaxed text-slate-600">Análisis completo de colorimetría, silueta, rostro y estilo personal para descubrir lo que realmente te favorece.</p>
                    <ul class="mt-4 space-y-2 text-sm text-slate-700">
                        <li>• Armocromía y colorimetría aplicada</li>
                        <li>• Análisis de silueta y facciones</li>
                        <li>• Base de estilo personal</li>
                    </ul>
                </article>

                <article class="animate-on-scroll rounded-2xl border border-slate-200 bg-white p-8 shadow-soft" data-animate="animate__fadeInUp">
                    <span class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-primary" aria-hidden="true">
                        <svg class="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16"></path></svg>
                    </span>
                    <h3 class="mt-4 font-heading text-xl font-semibold text-primary-dark">Pack Estilo Consciente</h3>
                    <p class="mt-1 text-sm font-medium text-primary">Online y Presencial</p>
                    <p class="mt-4 text-[15px] leading-relaxed text-slate-600">Un proceso integral para ordenar tu imagen con criterio, desde tu morfología hasta un armario cápsula funcional.</p>
                    <ul class="mt-4 space-y-2 text-sm text-slate-700">
                        <li>• Análisis global de imagen</li>
                        <li>• Armario cápsula alineado a tu vida real</li>
                        <li>• Acompañamiento personalizado</li>
                    </ul>
                </article>

                <article class="animate-on-scroll rounded-2xl border border-slate-200 bg-white p-8 shadow-soft" data-animate="animate__fadeInUp">
                    <span class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-primary" aria-hidden="true">
                        <svg class="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg>
                    </span>
                    <h3 class="mt-4 font-heading text-xl font-semibold text-primary-dark">Tu Mejor Versión</h3>
                    <p class="mt-1 text-sm font-medium text-primary">Programa Premium</p>
                    <p class="mt-4 text-[15px] leading-relaxed text-slate-600">Mi programa más completo para alinear imagen, seguridad y presencia con seguimiento continuo.</p>
                    <ul class="mt-4 space-y-2 text-sm text-slate-700">
                        <li>• Proceso de transformación integral</li>
                        <li>• Coaching de imagen y actitud</li>
                        <li>• Seguimiento estratégico</li>
                    </ul>
                </article>
            </div>
        </div>
    </section>

    <section class="bg-white py-20 md:py-24">
        <div class="max-w-7xl mx-auto px-6 md:px-12">
            <div class="mx-auto max-w-3xl text-center animate-on-scroll" data-animate="animate__fadeInUp">
                <p class="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-primary">¿Por qué trabajar conmigo?</p>
                <h2 class="mt-3 font-heading text-3xl font-bold text-primary-dark md:text-4xl">Más que una asesora, una aliada</h2>
                <p class="mt-4 text-slate-600">Cada proceso se adapta a tu historia, tus objetivos y tu ritmo.</p>
            </div>

            <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <article class="animate-on-scroll rounded-2xl bg-surface p-6 text-center shadow-soft" data-animate="animate__zoomIn">
                    <span class="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white" aria-hidden="true">♡</span>
                    <h3 class="mt-4 font-heading text-lg font-semibold text-primary-dark">Cercanía</h3>
                    <p class="mt-2 text-sm text-slate-600">Te acompaño desde la escucha, con empatía y sin juicios.</p>
                </article>
                <article class="animate-on-scroll rounded-2xl bg-surface p-6 text-center shadow-soft" data-animate="animate__zoomIn">
                    <span class="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white" aria-hidden="true">◌</span>
                    <h3 class="mt-4 font-heading text-lg font-semibold text-primary-dark">Confianza</h3>
                    <p class="mt-2 text-sm text-slate-600">Creamos un espacio seguro para que puedas explorar tu imagen con tranquilidad.</p>
                </article>
                <article class="animate-on-scroll rounded-2xl bg-surface p-6 text-center shadow-soft" data-animate="animate__zoomIn">
                    <span class="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white" aria-hidden="true">✧</span>
                    <h3 class="mt-4 font-heading text-lg font-semibold text-primary-dark">Personalización</h3>
                    <p class="mt-2 text-sm text-slate-600">No trabajo con fórmulas genéricas; diseño cada plan para ti.</p>
                </article>
                <article class="animate-on-scroll rounded-2xl bg-surface p-6 text-center shadow-soft" data-animate="animate__zoomIn">
                    <span class="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white" aria-hidden="true">☼</span>
                    <h3 class="mt-4 font-heading text-lg font-semibold text-primary-dark">Exclusividad</h3>
                    <p class="mt-2 text-sm text-slate-600">Atención dedicada y cupos limitados para cuidar la calidad del proceso.</p>
                </article>
            </div>
        </div>
    </section>

    <section class="relative overflow-hidden bg-gradient-to-r from-primary to-primary-dark py-20 text-center text-white md:py-24">
        <div class="absolute -left-16 top-10 h-40 w-40 rounded-full bg-cyan-300/20"></div>
        <div class="absolute -right-16 -bottom-10 h-48 w-48 rounded-full bg-cyan-100/10"></div>
        <div class="relative max-w-3xl mx-auto px-6 animate-on-scroll" data-animate="animate__fadeInUp">
            <h2 class="max-w-2xl mx-auto text-balance font-heading text-3xl font-bold md:text-5xl">¿Empezamos a construir una imagen que te represente?</h2>
            <p class="mt-5 text-cyan-50">Reserva una primera consulta y definimos juntas el mejor punto de partida para ti.</p>
            <a href="#contacto" class="mt-8 inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary-dark shadow-soft transition-colors hover:bg-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark" aria-label="Quiero reservar mi consulta">Quiero reservar mi consulta</a>
        </div>
    </section>

    <section id="sobre-mi" class="bg-surface py-20 md:py-24">
        <div class="max-w-7xl mx-auto px-6 md:px-12">
            <div class="grid gap-10 md:grid-cols-2 md:items-center">
                <div class="animate-on-scroll" data-animate="animate__fadeInLeft">
                    <img src="assets/imgs/barbara-bacelle-consulente-immagine-profilo.jpg" alt="Bárbara - Trainer de imagen personal" width="1280" height="1920" loading="lazy" class="w-full rounded-2xl shadow-soft">
                </div>
                <div class="animate-on-scroll" data-animate="animate__fadeInRight">
                    <p class="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-primary">Sobre mí</p>
                    <h2 class="mt-3 max-w-xl text-balance font-heading text-3xl font-bold text-primary-dark md:text-4xl">Soy Bárbara Bacelle, consultora y trainer de imagen personal</h2>
                    <p class="mt-4 text-sm leading-relaxed text-slate-700">Italiana de origen y afincada en España, acompaño a mujeres en procesos de asesoría de imagen personal con una mirada integral.</p>
                    <p class="mt-4 text-sm leading-relaxed text-slate-700">Mi enfoque va más allá de la apariencia: trabajamos imagen, confianza y bienestar para que te sientas alineada contigo.</p>
                    <p class="mt-4 text-sm leading-relaxed text-slate-700">Combino experiencia en estética y belleza con herramientas de colorimetría, análisis facial y corporal, y estilo personal.</p>
                    <p class="mt-4 text-sm leading-relaxed text-slate-700">Mi objetivo es ayudarte a tomar decisiones de imagen con claridad, autenticidad y seguridad, en tu día a día.</p>
                    <div class="mt-8 flex flex-wrap items-start gap-x-10 gap-y-6 md:gap-x-14">
                        <div>
                            <p class="stat-counter font-heading text-5xl font-extrabold leading-none tracking-tight text-primary-dark md:text-6xl" data-target="20" data-prefix="+">+0</p>
                            <p class="mt-2 text-sm font-medium tracking-wide text-slate-700 md:text-base">Años de experiencia</p>
                        </div>
                        <div>
                            <p class="stat-counter font-heading text-5xl font-extrabold leading-none tracking-tight text-primary-dark md:text-6xl" data-target="500" data-prefix="+">+0</p>
                            <p class="mt-2 text-sm font-medium tracking-wide text-slate-700 md:text-base">Clientas felices</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="testimonios" class="bg-white py-20 md:py-24">
        <div class="max-w-7xl mx-auto px-6 md:px-12">
            <div class="mx-auto max-w-3xl text-center animate-on-scroll" data-animate="animate__fadeInUp">
                <p class="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-primary">Testimonios</p>
                <h2 class="mt-3 font-heading text-3xl font-bold text-primary-dark md:text-4xl">Experiencias reales de mis clientas</h2>
                <p class="mt-4 text-slate-600">Historias de mujeres que hoy se sienten más seguras con su imagen.</p>
            </div>
            <div class="mt-12 grid gap-6 md:grid-cols-3">
                <article class="animate-on-scroll rounded-2xl border border-slate-200 bg-white p-7 shadow-soft" data-animate="animate__fadeInUp">
                    <p class="text-primary">★★★★★</p>
                    <p class="mt-4 text-sm leading-relaxed text-slate-600">"Fue un antes y un después. No solo cambié mi forma de vestir: ahora me siento más segura en mi día a día."</p>
                    <p class="mt-5 text-sm font-semibold text-primary-dark">Laura García</p>
                </article>
                <article class="animate-on-scroll rounded-2xl border border-slate-200 bg-white p-7 shadow-soft" data-animate="animate__fadeInUp">
                    <p class="text-primary">★★★★★</p>
                    <p class="mt-4 text-sm leading-relaxed text-slate-600">"Desde la primera sesión me sentí escuchada. El Pack Estilo Consciente me ayudó a ordenar mi armario y mi imagen."</p>
                    <p class="mt-5 text-sm font-semibold text-primary-dark">María Rodríguez</p>
                </article>
                <article class="animate-on-scroll rounded-2xl border border-slate-200 bg-white p-7 shadow-soft" data-animate="animate__fadeInUp">
                    <p class="text-primary">★★★★★</p>
                    <p class="mt-4 text-sm leading-relaxed text-slate-600">"Profesional y cercana. Hoy elijo mis looks con más criterio y confianza, sin complicarme."</p>
                    <p class="mt-5 text-sm font-semibold text-primary-dark">Ana Martínez</p>
                </article>
            </div>
        </div>
    </section>

    <section id="galeria" class="bg-surface-dark py-20 md:py-24">
        <div class="max-w-7xl mx-auto px-6 md:px-12">
            <div class="mx-auto max-w-3xl text-center animate-on-scroll" data-animate="animate__fadeInUp">
                <p class="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-primary">Galería</p>
                <h2 class="mt-3 font-heading text-3xl font-bold text-primary-dark md:text-4xl">Procesos y resultados</h2>
                <p class="mt-4 text-slate-600">Una muestra visual de asesorías de imagen personal y estilo consciente.</p>
            </div>
            <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <img src="assets/imgs/trasformazione-stile-personale.jpg" alt="Transformación de estilo personal" width="1024" height="1024" loading="lazy" class="animate-on-scroll h-56 w-full rounded-xl object-cover" data-animate="animate__fadeInUp">
                <img src="assets/imgs/analisi-armocromia-palette-colori.jpg" alt="Análisis de color y paleta profesional" width="1024" height="1024" loading="lazy" class="animate-on-scroll h-56 w-full rounded-xl object-cover" data-animate="animate__fadeInUp">
                <img src="assets/imgs/sessione-consulenza-immagine.jpg" alt="Sesión de asesoría de imagen" width="1024" height="1024" loading="lazy" class="animate-on-scroll h-56 w-full rounded-xl object-cover" data-animate="animate__fadeInUp">
                <img src="assets/imgs/risultato-consulenza-stile.jpg" alt="Resultado de asesoría de estilo" width="1024" height="1024" loading="lazy" class="animate-on-scroll h-56 w-full rounded-xl object-cover" data-animate="animate__fadeInUp">
            </div>
        </div>
    </section>

    <section id="contacto" class="bg-white py-20 md:py-24">
        <div class="max-w-7xl mx-auto px-6 md:px-12">
            <div class="grid gap-10 md:grid-cols-2">
                <div class="animate-on-scroll" data-animate="animate__fadeInLeft">
                    <p class="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-primary">Contacto</p>
                    <h2 class="mt-3 max-w-xl text-balance font-heading text-3xl font-bold text-primary-dark md:text-4xl">Cuéntame qué necesitas y te ayudo a elegir el mejor punto de partida</h2>
                    <p class="mt-4 text-slate-600">Te responderé personalmente para orientarte según tus objetivos y momento.</p>

                    <div class="mt-8 space-y-4 text-sm">
                        <p><span class="font-semibold text-primary-dark">Email</span><br>espaciodeestilo@gmail.com</p>
                        <p><span class="font-semibold text-primary-dark">Teléfono</span><br>+34 640 90 70 62</p>
                        <p><span class="font-semibold text-primary-dark">Instagram</span><br>@espaciodeestilo</p>
                        <p><span class="font-semibold text-primary-dark">Ubicación</span><br>Online y presencial en Alicante</p>
                    </div>
                </div>

                <div class="animate-on-scroll rounded-2xl border border-slate-200 bg-white p-6 shadow-soft" data-animate="animate__fadeInRight">
                    <form class="space-y-4" action="#" method="post">
                        <div>
                            <label for="nombre" class="mb-1 block text-sm font-medium text-slate-700">Nombre</label>
                            <input id="nombre" name="nombre" type="text" autocomplete="name" placeholder="Tu nombre" class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30" aria-label="Nombre">
                        </div>
                        <div>
                            <label for="email" class="mb-1 block text-sm font-medium text-slate-700">Email</label>
                            <input id="email" name="email" type="email" autocomplete="email" spellcheck="false" placeholder="tu@email.com" class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30" aria-label="Email">
                        </div>
                        <div>
                            <label for="servicio" class="mb-1 block text-sm font-medium text-slate-700">Servicio de interés</label>
                            <select id="servicio" name="servicio" autocomplete="off" class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30" aria-label="Servicio de interés">
                                <option>Selecciona un servicio</option>
                                <option>Asesoría Express</option>
                                <option>Pack Estilo Consciente</option>
                            </select>
                        </div>
                        <div>
                            <label for="mensaje" class="mb-1 block text-sm font-medium text-slate-700">Mensaje</label>
                            <textarea id="mensaje" name="mensaje" rows="4" autocomplete="off" placeholder="Cuéntame qué te gustaría mejorar o conseguir con tu imagen…" class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30" aria-label="Mensaje"></textarea>
                        </div>
                        <button type="submit" class="inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" aria-label="Quiero recibir asesoramiento">Quiero recibir asesoramiento</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include 'inc/footer.php'; ?>
