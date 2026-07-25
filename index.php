<?php
$pageTitle = 'Bárbara Bacelle | Asesoría de Imagen Personal en Alicante';
$pageDescription = 'Asesoría de imagen personal en Alicante. Bárbara Bacelle te ayuda a descubrir tu estilo auténtico con armocromía, análisis de silueta y acompañamiento personalizado.';
$pageKeywords = 'asesoría de imagen personal Alicante, consultora de imagen Alicante, estilo consciente, armocromía Alicante, análisis de color';
$siteName = 'Espacio de Estilo';
$pageImage = 'assets/imgs/barbara-bacelle-consulente-immagine-hero.jpg';
include 'template/head.php';
?>
<?php include 'template/header.php'; ?>

<main id="main-content" class="overflow-x-hidden">
    <section id="inicio" class="relative overflow-hidden bg-secondary-light min-h-[400px] md:min-h-[620px]">
        <div class="absolute inset-y-0 right-0 hidden md:block md:w-1/2">
            <img src="assets/imgs/barbara-bacelle-consulente-immagine-hero.jpg" alt="Bárbara Bacelle en la asesoría de imagen personal" class="h-full w-full object-cover object-top" loading="eager">
        </div>

        <div class="relative max-w-7xl mx-auto px-6 md:px-12 h-full">
            <div class="flex w-full items-center py-[6em] md:min-h-[620px] md:w-1/2 md:py-24 md:pr-12 lg:pr-16">
                <div class="max-w-xl text-primary-dark">
                    <p class="animate-on-scroll font-heading text-sm font-semibold uppercase tracking-[0.24em] text-primary-dark/60" data-animate="animate__fadeInUp">Consultora de Imagen Personal</p>
                    <h1 class="animate-on-scroll mt-4 max-w-xl text-balance font-heading text-[3.5em] font-bold leading-[1.02]" data-animate="animate__fadeInUp">Tu imagen exterior es el espejo de tu interior; haz que hable con autenticidad.</h1>
                    <p class="animate-on-scroll mt-6 text-lg leading-relaxed text-primary-dark/70 md:text-xl" data-animate="animate__fadeInUp">Acompaño a mujeres que quieren verse bien, sentirse seguras y proyectarse con autenticidad, integrando imagen, actitud y estilo personal.</p>
                    <div class="animate-on-scroll mt-8 flex flex-wrap gap-4" data-animate="animate__fadeInUp">
                        <a href="#contacto" class="inline-flex items-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" aria-label="Reservar primera consulta">Reservar primera consulta</a>
                        <a href="<?= $basePath ?>/servicios-asesoria-imagen-personal-alicante" class="inline-flex items-center rounded-full border border-primary/30 px-6 py-3 text-base font-semibold text-primary-dark transition-colors hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" aria-label="Ver servicios">Ver servicios</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="h-[300px] min-h-[300px] w-full md:hidden">
            <img src="assets/imgs/barbara-bacelle-consulente-immagine-hero.jpg" alt="Bárbara Bacelle en la asesoría de imagen personal" class="h-full w-full object-cover object-top" loading="eager">
        </div>
    </section>

    <section id="unica" class="bg-primary-lighter py-20 md:py-24">
        <div class="max-w-7xl mx-auto px-6 md:px-12">
            <div class="grid gap-10 md:grid-cols-2 md:items-center">
                <div class="animate-on-scroll" data-animate="animate__fadeInLeft">
                    <img src="assets/imgs/sessione-consulenza-immagine.jpg" alt="Sesión de asesoría de imagen personal" width="1024" height="1024" loading="lazy" class="w-full rounded-2xl shadow-soft">
                </div>
                <div class="animate-on-scroll" data-animate="animate__fadeInRight">
                    <h2 class="max-w-xl text-balance font-heading text-4xl font-bold leading-[1.1] text-primary-dark md:text-5xl md:leading-[1.1]">Lo que hace única mi asesoría</h2>
                    <p class="mt-4 text-lg leading-relaxed text-primary-dark/70 md:text-xl">Mi enfoque no es convencional: combino asesoría de imagen consciente con un toque profesional de peluquería, creando una experiencia integral que potencia tu autenticidad y seguridad.</p>
                    <p class="mt-4 text-base leading-relaxed text-primary-dark/85">Cada sesión trabaja sobre tu estilo, color y silueta para que tu imagen externa refleje tu confianza y proyecte coherencia y profesionalidad, tanto en tu vida personal como profesional.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="valores" class="bg-secondary-lightest py-20 md:py-24">
        <div class="max-w-7xl mx-auto px-6 md:px-12">
            <div class="mx-auto max-w-3xl text-center animate-on-scroll" data-animate="animate__fadeInUp">
                <h2 class="font-heading text-4xl font-bold leading-[1.1] text-primary-dark md:text-5xl md:leading-[1.1]">Más que una asesora, una aliada</h2>
                <p class="mt-4 text-primary-dark/70">Cada proceso se adapta a tu historia, tus objetivos y tu ritmo.</p>
            </div>

            <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <article class="animate-on-scroll rounded-2xl bg-white p-6 text-center shadow-soft" data-animate="animate__fadeInUp">
                    <p class="mx-auto mb-4 h-px w-10 bg-primary" aria-hidden="true"></p>
                    <h3 class="mt-4 font-heading text-xl font-semibold text-primary-dark">Cercanía</h3>
                    <p class="mt-2 text-base text-primary-dark/70">Te acompaño desde la escucha, con empatía y sin juicios.</p>
                </article>
                <article class="animate-on-scroll rounded-2xl bg-primary-lighter p-6 text-center shadow-soft" data-animate="animate__fadeInUp">
                    <p class="mx-auto mb-4 h-px w-10 bg-primary" aria-hidden="true"></p>
                    <h3 class="mt-4 font-heading text-xl font-semibold text-primary-dark">Confianza</h3>
                    <p class="mt-2 text-base text-primary-dark/70">Creamos un espacio seguro para que puedas explorar tu imagen con tranquilidad.</p>
                </article>
                <article class="animate-on-scroll rounded-2xl bg-white p-6 text-center shadow-soft" data-animate="animate__fadeInUp">
                    <p class="mx-auto mb-4 h-px w-10 bg-primary" aria-hidden="true"></p>
                    <h3 class="mt-4 font-heading text-xl font-semibold text-primary-dark">Personalización</h3>
                    <p class="mt-2 text-base text-primary-dark/70">No trabajo con fórmulas genéricas; diseño cada plan para ti.</p>
                </article>
                <article class="animate-on-scroll rounded-2xl bg-primary-lighter p-6 text-center shadow-soft" data-animate="animate__fadeInUp">
                    <p class="mx-auto mb-4 h-px w-10 bg-primary" aria-hidden="true"></p>
                    <h3 class="mt-4 font-heading text-xl font-semibold text-primary-dark">Exclusividad</h3>
                    <p class="mt-2 text-base text-primary-dark/70">Atención dedicada y cupos limitados para cuidar la calidad del proceso.</p>
                </article>
            </div>
        </div>
    </section>

    <section id="cta" class="relative overflow-hidden bg-primary-dark py-20 text-center text-white md:py-24">
        <div class="absolute -left-16 top-10 h-40 w-40 rounded-full bg-primary-lighter/20"></div>
        <div class="absolute -right-16 -bottom-10 h-48 w-48 rounded-full bg-primary-lightest/10"></div>
        <div class="relative max-w-3xl mx-auto px-6 animate-on-scroll" data-animate="animate__fadeInUp">
            <h2 class="max-w-2xl mx-auto text-balance font-script text-[3em] leading-[1.1]">¿Empezamos a construir una imagen que te represente?</h2>
            <p class="mt-5 text-white/80">Reserva una primera consulta y definimos juntas el mejor punto de partida para ti.</p>
            <a href="#contacto" class="mt-8 inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary-dark shadow-soft transition-colors hover:bg-primary-lightest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-dark" aria-label="Quiero reservar mi consulta">Quiero reservar mi consulta</a>
        </div>
    </section>


    <section id="testimonios" class="bg-white py-20 md:py-24">
        <div class="max-w-7xl mx-auto px-6 md:px-12">
            <div class="mx-auto max-w-3xl text-center animate-on-scroll" data-animate="animate__fadeInUp">
                <h2 class="font-heading text-4xl font-bold leading-[1.1] text-primary-dark md:text-5xl md:leading-[1.1]">Experiencias reales de mis clientas</h2>
                <p class="mt-4 text-primary-dark/70">Historias de mujeres que hoy se sienten más seguras con su imagen.</p>
            </div>
            <div class="mt-12 grid gap-6 md:grid-cols-3">
                <article class="animate-on-scroll rounded-2xl bg-white p-7 shadow-soft" data-animate="animate__fadeInUp">
                    <p class="text-sm font-semibold text-primary">Testimonio</p>
                    <p class="mt-4 text-base leading-relaxed text-primary-dark/70">"Fue un antes y un después. No solo cambié mi forma de vestir: ahora me siento más segura en mi día a día."</p>
                    <p class="mt-5 text-base font-semibold text-primary-dark">Laura García</p>
                </article>
                <article class="animate-on-scroll rounded-2xl bg-white p-7 shadow-soft" data-animate="animate__fadeInUp">
                    <p class="text-sm font-semibold text-primary">Testimonio</p>
                    <p class="mt-4 text-base leading-relaxed text-primary-dark/70">"Desde la primera sesión me sentí escuchada. El Pack Estilo Consciente me ayudó a ordenar mi armario y mi imagen."</p>
                    <p class="mt-5 text-base font-semibold text-primary-dark">María Rodríguez</p>
                </article>
                <article class="animate-on-scroll rounded-2xl bg-white p-7 shadow-soft" data-animate="animate__fadeInUp">
                    <p class="text-sm font-semibold text-primary">Testimonio</p>
                    <p class="mt-4 text-base leading-relaxed text-primary-dark/70">"Profesional y cercana. Hoy elijo mis looks con más criterio y confianza, sin complicarme."</p>
                    <p class="mt-5 text-base font-semibold text-primary-dark">Ana Martínez</p>
                </article>
            </div>
        </div>
    </section>


    <?php include 'template/contacto.php'; ?>
</main>

<?php include 'template/footer.php'; ?>
