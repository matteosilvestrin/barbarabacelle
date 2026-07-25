<?php
$pageTitle = 'Servicios de Asesoría de Imagen Personal | Bárbara Bacelle en Alicante';
$pageDescription = 'Descubre todos los servicios de asesoría de imagen personal en Alicante: armocromía, estilo personal, análisis de rostro y silueta, terapia de armario y personal shopper.';
$pageKeywords = 'servicios asesoría de imagen Alicante, armocromía Alicante, personal shopper Alicante, terapia de armario Alicante, análisis de color personalizado';
$siteName = 'Espacio de Estilo';
$pageImage = 'assets/imgs/barbara-bacelle-consulente-immagine-hero.jpg';
include 'template/head.php';
?>
<?php include 'template/header.php'; ?>

<main id="main-content" class="overflow-x-hidden">
    <section id="inicio" class="relative overflow-hidden bg-secondary-light min-h-[400px] md:min-h-[620px]">
        <div class="absolute inset-y-0 right-0 hidden md:block md:w-1/2">
            <img src="assets/imgs/sessione-consulenza-immagine.jpg" alt="Sesión de asesoría de imagen personal" class="h-full w-full object-cover object-top" loading="eager">
        </div>

        <div class="relative max-w-7xl mx-auto px-6 md:px-12 h-full">
            <div class="flex w-full items-center py-[6em] md:min-h-[620px] md:w-1/2 md:py-24 md:pr-12 lg:pr-16">
                <div class="max-w-xl text-primary-dark">
                    <p class="animate-on-scroll font-heading text-sm font-semibold uppercase tracking-[0.24em] text-primary-dark/60" data-animate="animate__fadeInUp">Servicios</p>
                    <h1 class="animate-on-scroll mt-3 max-w-xl text-balance font-heading text-[3em] font-bold leading-[1.02] md:text-[3.5em]" data-animate="animate__fadeInUp">Encuentra el servicio que mejor se adapta a ti</h1>
                    <p class="animate-on-scroll mt-5 text-lg leading-relaxed text-primary-dark/70 md:text-xl" data-animate="animate__fadeInUp">Cada servicio está diseñado para acompañarte en tu proceso de transformación, desde la primera consulta hasta el resultado final.</p>
                </div>
            </div>
        </div>

        <div class="h-[300px] min-h-[300px] w-full md:hidden">
            <img src="assets/imgs/sessione-consulenza-immagine.jpg" alt="Sesión de asesoría de imagen personal" class="h-full w-full object-cover object-top" loading="eager">
        </div>
    </section>

    <section id="servicios-carta" class="bg-secondary-lightest py-20 md:py-24">
        <div class="max-w-7xl mx-auto px-6 md:px-12">
            <div class="mx-auto max-w-3xl text-center animate-on-scroll" data-animate="animate__fadeInUp">
                <h2 class="font-heading text-4xl font-bold leading-[1.1] text-primary-dark md:text-5xl md:leading-[1.1]">Mis Servicios a la Carta</h2>
                <p class="mt-4 text-primary-dark/70">Servicios individuales diseñados para trabajar un aspecto concreto de tu imagen personal. Tú eliges por dónde empezar.</p>
            </div>

            <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <article class="service-card service-card-roomy service-card-roomiest animate-on-scroll overflow-hidden rounded-2xl bg-white shadow-soft" data-animate="animate__fadeInUp">
                    <img src="assets/imgs/service-armocromia.jpg" alt="Placeholder del servicio de armocromía" class="service-image h-auto w-full object-cover" loading="lazy" width="600" height="400">
                    <div class="service-card-copy p-6">
                        <div class="service-card-static">
                            <h3 class="service-title font-heading text-2xl font-semibold text-primary-dark">Armocromía</h3>
                            <p class="service-intro mt-1 text-sm font-medium text-primary">Descubre tu paleta de colores personal</p>
                        </div>
                        <div class="service-card-reveal">
                            <p class="service-description mt-4 text-sm leading-relaxed text-primary-dark/70">Juntos descubriremos tu paleta de colores única a través de un análisis de subtono, intensidad y contraste, identificando los colores que mejor armonizan con tu piel, ojos y cabello. Conocer tus colores amigos te permite potenciar tu estilo, proyectar confianza y tomar decisiones de vestuario más acertadas. Al final de la sesión recibirás tu paleta personalizada, una guía práctica para resaltar tu belleza natural, ahorrar tiempo y dinero, y sentirte auténtico/a en cada ocasión.</p>
                        </div>
                    </div>
                </article>

                <article class="service-card animate-on-scroll overflow-hidden rounded-2xl bg-white shadow-soft" data-animate="animate__fadeInUp">
                    <img src="assets/imgs/service-estilo-personal.jpg" alt="Placeholder del servicio de estilo personal" class="service-image h-auto w-full object-cover" loading="lazy" width="600" height="400">
                    <div class="service-card-copy p-6">
                        <div class="service-card-static">
                            <h3 class="service-title font-heading text-2xl font-semibold text-primary-dark">Estilo Personal</h3>
                            <p class="service-intro mt-1 text-sm font-medium text-primary">Online o Presencial</p>
                        </div>
                        <div class="service-card-reveal">
                            <p class="service-description mt-4 text-sm leading-relaxed text-primary-dark/70">Identificamos tus valores y la imagen que quieres proyectar, con la ayuda del coaching. Trabajamos juntos para definir un estilo auténtico que refleje quién eres y cómo quieres mostrarte al mundo.</p>
                        </div>
                    </div>
                </article>

                <article class="service-card animate-on-scroll overflow-hidden rounded-2xl bg-white shadow-soft" data-animate="animate__fadeInUp">
                    <img src="assets/imgs/service-analisis-rostro.jpg" alt="Placeholder del servicio de análisis del rostro" class="service-image h-auto w-full object-cover" loading="lazy" width="600" height="400">
                    <div class="service-card-copy p-6">
                        <div class="service-card-static">
                            <h3 class="service-title font-heading text-2xl font-semibold text-primary-dark">Análisis del Rostro</h3>
                            <p class="service-intro mt-1 text-sm font-medium text-primary">Online o Presencial</p>
                        </div>
                        <div class="service-card-reveal">
                            <p class="service-description mt-4 text-sm leading-relaxed text-primary-dark/70">Analizamos características, forma y proporciones de tu rostro para identificar maquillaje, cortes, peinados y accesorios que más te favorecen. Descubre cómo potenciar tus rasgos naturales.</p>
                        </div>
                    </div>
                </article>

                <article class="service-card animate-on-scroll overflow-hidden rounded-2xl bg-white shadow-soft" data-animate="animate__fadeInUp">
                    <img src="assets/imgs/service-analisis-silueta.jpg" alt="Placeholder del servicio de análisis de la silueta" class="service-image h-auto w-full object-cover" loading="lazy" width="600" height="400">
                    <div class="service-card-copy p-6">
                        <div class="service-card-static">
                            <h3 class="service-title font-heading text-2xl font-semibold text-primary-dark">Análisis de la Silueta</h3>
                            <p class="service-intro mt-1 text-sm font-medium text-primary">Equilibra visualmente tus proporciones</p>
                        </div>
                        <div class="service-card-reveal">
                            <p class="service-description mt-4 text-sm leading-relaxed text-primary-dark/70">Analizamos la forma de tu cuerpo e identificamos cómo equilibrar tus proporciones visualmente. Aprenderás a elegir prendas y cortes que realcen tu figura y te hagan sentir segura.</p>
                        </div>
                    </div>
                </article>

                <article class="service-card animate-on-scroll overflow-hidden rounded-2xl bg-white shadow-soft" data-animate="animate__fadeInUp">
                    <img src="assets/imgs/service-terapia-armario.jpg" alt="Placeholder del servicio de terapia de armario" class="service-image h-auto w-full object-cover" loading="lazy" width="600" height="400">
                    <div class="service-card-copy p-6">
                        <div class="service-card-static">
                            <h3 class="service-title font-heading text-2xl font-semibold text-primary-dark">Terapia de Armario</h3>
                            <p class="service-intro mt-1 text-sm font-medium text-primary">1 sesión + informe</p>
                        </div>
                        <div class="service-card-reveal">
                            <p class="service-description mt-4 text-sm leading-relaxed text-primary-dark/70">Analizamos y organizamos tu armario de forma personalizada, adaptándolo a tus necesidades y características físicas para potenciar tu estilo, creando looks combinados con tus prendas y un lookbook exclusivo. (Asesoramiento previo necesario)</p>
                        </div>
                    </div>
                </article>

                <article class="service-card animate-on-scroll overflow-hidden rounded-2xl bg-white shadow-soft" data-animate="animate__fadeInUp">
                    <img src="assets/imgs/service-personal-shopper-presencial.jpg" alt="Placeholder del servicio de personal shopper presencial" class="service-image h-auto w-full object-cover" loading="lazy" width="600" height="400">
                    <div class="service-card-copy p-6">
                        <div class="service-card-static">
                            <h3 class="service-title font-heading text-2xl font-semibold text-primary-dark">Personal Shopper Presencial</h3>
                            <p class="service-intro mt-1 text-sm font-medium text-primary">Compra con criterio, estilo y propósito</p>
                        </div>
                        <div class="service-card-reveal">
                            <p class="service-description mt-4 text-sm leading-relaxed text-primary-dark/70">Te acompaño a elegir las prendas que mejor se adaptan a tu estilo, morfología y presupuesto. Una experiencia de compra guiada y eficiente para que construyas un armario con propósito. (Asesoramiento previo necesario)</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <section id="propuestas-transformacion" class="bg-white py-20 md:py-24">
        <div class="max-w-7xl mx-auto px-6 md:px-12">
            <div class="mx-auto max-w-3xl text-center animate-on-scroll" data-animate="animate__fadeInUp">
                <h2 class="font-heading text-4xl font-bold leading-[1.1] text-primary-dark md:text-5xl md:leading-[1.1]">Mis Propuestas de Transformación</h2>
                <p class="mt-4 text-primary-dark/70">Programas integrales que combinan varias áreas de la imagen personal para un cambio profundo y duradero.</p>
            </div>

            <div class="mt-12 grid gap-8 md:grid-cols-2">
                <article class="service-card service-card-roomy service-card-tint service-card-transform animate-on-scroll overflow-hidden rounded-2xl bg-primary-lighter shadow-soft" data-animate="animate__fadeInUp">
                    <img src="assets/imgs/service-tu-mejor-version.jpg" alt="Placeholder del servicio tu mejor versión" class="service-image h-auto w-full object-cover" loading="lazy" width="600" height="400">
                    <div class="service-card-copy p-8">
                        <div class="service-card-static">
                            <h3 class="service-title font-heading text-2xl font-semibold text-primary-dark">Tu Mejor Versión</h3>
                            <p class="service-intro mt-1 text-sm font-medium text-primary">Face Shape &amp; Body Shape</p>
                        </div>
                        <div class="service-card-reveal">
                            <p class="service-description mt-4 text-sm leading-relaxed text-primary-dark/85">Trabajamos el estilo personal con coaching, automaquillaje personalizado, corte y peinado personalizado, face shape para rostro, cortes y accesorios, body shape para cuerpo y proporciones, armocromía para descubrir los tonos que armonizan contigo y consejos prácticos con informe. También incluye asesoría exprés presencial de una hora, coaching y preguntas, clase de automaquillaje y tips fáciles para tu día a día.</p>
                        </div>
                    </div>
                </article>

                <article class="service-card service-card-tint service-card-transform animate-on-scroll overflow-hidden rounded-2xl bg-primary-lighter shadow-soft" data-animate="animate__fadeInUp">
                    <img src="assets/imgs/service-tu-armario-ideal.jpg" alt="Placeholder del servicio tu armario ideal" class="service-image h-auto w-full object-cover" loading="lazy" width="600" height="400">
                    <div class="service-card-copy p-8">
                        <div class="service-card-static">
                            <h3 class="service-title font-heading text-2xl font-semibold text-primary-dark">Tu Armario Ideal</h3>
                            <p class="service-intro mt-1 text-sm font-medium text-primary">Transformación completa de armario</p>
                        </div>
                        <div class="service-card-reveal">
                            <p class="service-description mt-4 text-sm leading-relaxed text-primary-dark/85">Descubrimos tu estilo y morfología, identificamos tu subtono cálido o frío y realizamos una terapia de armario de 3 horas presencial. También trabajamos la organización personalizada de tu armario, la creación de looks combinados con tus prendas, un lookbook exclusivo y un informe con tips para tu día a día. (Asesoramiento previo necesario)</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <section id="eventos" class="bg-secondary-lightest py-20 md:py-24">
        <div class="max-w-7xl mx-auto px-6 md:px-12">
            <div class="mx-auto max-w-3xl text-center animate-on-scroll" data-animate="animate__fadeInUp">
                <h2 class="font-heading text-4xl font-bold leading-[1.1] text-primary-dark md:text-5xl md:leading-[1.1]">Asesoría para Eventos</h2>
                <p class="mt-4 text-primary-dark/70">Experiencias únicas de imagen personal para celebraciones, regalos y momentos especiales.</p>
            </div>

            <div class="mt-12 grid gap-6 md:grid-cols-2">
                <article class="service-card service-card-roomy service-card-event animate-on-scroll overflow-hidden rounded-2xl bg-white shadow-soft" data-animate="animate__fadeInUp">
                    <img src="assets/imgs/service-asesoramiento-imagen-eventos.jpg" alt="Placeholder del servicio de asesoramiento de imagen para eventos" class="service-image h-auto w-full object-cover" loading="lazy" width="600" height="400">
                    <div class="service-card-copy p-6">
                        <span class="inline-flex items-center self-start rounded-full bg-primary-lightest px-2.5 py-0.5 text-xs font-medium text-primary-dark ring-1 ring-inset ring-primary/15">EXPERIENCE</span>
                        <div class="service-card-static">
                            <h3 class="service-title font-heading text-2xl font-semibold text-primary-dark">Asesoramiento de Imagen para Eventos</h3>
                            <p class="service-intro mt-1 text-sm font-medium text-primary">Tu look ideal para una ocasión especial</p>
                        </div>
                        <div class="service-card-reveal">
                            <p class="service-description mt-4 text-sm leading-relaxed text-primary-dark/85">Trabajamos el estilo personal para el evento, body shape para definir el tipo de vestuario, face shape para peinados y accesorios, armocromía para encontrar los tonos de tu look ideal y protocolo según el nivel de formalidad. Como servicios opcionales, puedes añadir peluquería y maquillaje el día del evento, así como personal shopper para encontrar tu look ideal.</p>
                        </div>
                    </div>
                </article>

                <article class="service-card service-card-roomy service-card-event animate-on-scroll overflow-hidden rounded-2xl bg-white shadow-soft" data-animate="animate__fadeInUp">
                    <img src="assets/imgs/service-bridal-experience.jpg" alt="Placeholder del servicio bridal experience" class="service-image h-auto w-full object-cover" loading="lazy" width="600" height="400">
                    <div class="service-card-copy p-6">
                        <span class="inline-flex items-center self-start rounded-full bg-primary-lightest px-2.5 py-0.5 text-xs font-medium text-primary-dark ring-1 ring-inset ring-primary/15">EXPERIENCE</span>
                        <div class="service-card-static">
                            <h3 class="service-title font-heading text-2xl font-semibold text-primary-dark">Bridal Experience</h3>
                            <p class="service-intro mt-1 text-sm font-medium text-primary">Acompañamiento integral para tu gran día</p>
                        </div>
                        <div class="service-card-reveal">
                            <p class="service-description mt-4 text-sm leading-relaxed text-primary-dark/85">Trabajamos autoestima y bienestar emocional, estilo personal para tu boda, morfología para vestidos y cortes, visagismo para colores y formas y armocromía para el gran día. Como servicios opcionales, puedes añadir peluquería y maquillaje el día de la boda, así como personal shopper para encontrar tu vestido ideal.</p>
                        </div>
                    </div>
                </article>

                <article class="service-card service-card-roomy service-card-roomiest service-card-event animate-on-scroll overflow-hidden rounded-2xl bg-white shadow-soft" data-animate="animate__fadeInUp">
                    <img src="assets/imgs/service-regala-experiencia.jpg" alt="Placeholder del servicio regala una experiencia" class="service-image h-auto w-full object-cover" loading="lazy" width="600" height="400">
                    <div class="service-card-copy p-6">
                        <span class="inline-flex items-center self-start rounded-full bg-primary-lightest px-2.5 py-0.5 text-xs font-medium text-primary-dark ring-1 ring-inset ring-primary/15">EXPERIENCE</span>
                        <div class="service-card-static">
                            <h3 class="service-title font-heading text-2xl font-semibold text-primary-dark">Regala una Experiencia</h3>
                            <p class="service-intro mt-1 text-sm font-medium text-primary">Tarjeta Regalo de Asesoría de Imagen</p>
                        </div>
                        <div class="service-card-reveal">
                            <p class="service-description mt-4 text-sm leading-relaxed text-primary-dark/70">Regala algo realmente especial: una Tarjeta Regalo de Asesoría de Imagen para que esa persona querida pueda sentirse segura, auténtica y llena de bienestar. Es una experiencia personalizada donde, con cariño y profesionalidad, la acompañamos a descubrir su estilo único, potenciar su confianza y conectar con su belleza interior y exterior. Un regalo lleno de significado que inspira y empodera, perfecto para mujeres que quieren cuidar su imagen y autoestima desde un enfoque cercano y lleno de buena energía.</p>
                        </div>
                    </div>
                </article>

                <article class="service-card service-card-event animate-on-scroll overflow-hidden rounded-2xl bg-white shadow-soft" data-animate="animate__fadeInUp">
                    <img src="assets/imgs/service-armonia-party.jpg" alt="Placeholder del servicio armonía party" class="service-image h-auto w-full object-cover" loading="lazy" width="600" height="400">
                    <div class="service-card-copy p-6">
                        <span class="inline-flex items-center self-start rounded-full bg-primary-lightest px-2.5 py-0.5 text-xs font-medium text-primary-dark ring-1 ring-inset ring-primary/15">EXPERIENCE</span>
                        <div class="service-card-static">
                            <h3 class="service-title font-heading text-2xl font-semibold text-primary-dark">Armonía Party</h3>
                            <p class="service-intro mt-1 text-sm font-medium text-primary">Experiencia grupal para celebrar</p>
                        </div>
                        <div class="service-card-reveal">
                            <p class="service-description mt-4 text-sm leading-relaxed text-primary-dark/70">Celebra tu evento de una manera única y divertida con una experiencia de belleza personalizada para ti y tus amigas. Durante la sesión, realizamos un análisis de color y maquillaje adaptado a cada participante, para que todas descubran su mejor paleta de colores y luzcan radiantes. Disfrutaréis de un ambiente cercano y divertido, con un pequeño picoteo y momentos de aprendizaje sobre estilo, imagen y cuidado personal. Porque regalar confianza y bienestar es el mejor regalo que puedes hacer.</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <?php include 'template/contacto.php'; ?>
</main>

<?php include 'template/footer.php'; ?>
