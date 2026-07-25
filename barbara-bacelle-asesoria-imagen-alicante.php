<?php
$pageTitle = 'Bárbara Bacelle | Consultora de Imagen Personal en Alicante';
$pageDescription = 'Conoce a Bárbara Bacelle, consultora de imagen consciente con 20 años de experiencia en Alicante. Te acompaño a descubrir tu estilo único y potenciar tu autenticidad.';
$pageKeywords = 'consultora de imagen Alicante, Bárbara Bacelle, asesora de imagen personal Alicante, armocromía Alicante';
$siteName = 'Espacio de Estilo';
$pageImage = 'assets/imgs/barbara-bacelle-consulente-immagine-profilo.jpg';
include 'template/head.php';
?>
<?php include 'template/header.php'; ?>

<main id="main-content" class="overflow-x-hidden">
    <section id="inicio" class="relative overflow-hidden bg-secondary-light min-h-[400px] md:min-h-[620px]">
        <div class="absolute inset-y-0 right-0 hidden md:block md:w-1/2">
            <img src="assets/imgs/barbara-bacelle-consulente-immagine-hero.jpg" alt="Bárbara Bacelle, consultora de imagen consciente" class="h-full w-full object-cover object-top" loading="eager">
        </div>

        <div class="relative max-w-7xl mx-auto px-6 md:px-12 h-full">
            <div class="flex w-full items-center py-[6em] md:min-h-[620px] md:w-1/2 md:py-24 md:pr-12 lg:pr-16">
                <div class="max-w-xl text-primary-dark">
                    <p class="animate-on-scroll font-heading text-sm font-semibold uppercase tracking-[0.24em] text-primary-dark/60" data-animate="animate__fadeInUp">Conóceme</p>
                    <h1 class="animate-on-scroll mt-3 max-w-xl text-balance font-heading text-[3em] font-bold leading-[1.02] md:text-[3.5em]" data-animate="animate__fadeInUp">Soy Bárbara Bacelle, consultora de imagen consciente</h1>
                    <p class="animate-on-scroll mt-5 text-lg leading-relaxed text-primary-dark/70 md:text-xl" data-animate="animate__fadeInUp">Italiana de origen, afincada en Alicante. Acompaño a mujeres a descubrir su mejor versión a través de la imagen personal.</p>
                </div>
            </div>
        </div>

        <div class="h-[300px] min-h-[300px] w-full md:hidden">
            <img src="assets/imgs/barbara-bacelle-consulente-immagine-hero.jpg" alt="Bárbara Bacelle, consultora de imagen consciente" class="h-full w-full object-cover object-top" loading="eager">
        </div>
    </section>

    <section class="bg-secondary-lightest py-20 md:py-24">
        <div class="max-w-7xl mx-auto px-6 md:px-12">
            <div class="grid gap-10 md:grid-cols-2 md:items-center">
                <div class="animate-on-scroll" data-animate="animate__fadeInLeft">
                    <img src="assets/imgs/barbara-bacelle-consulente-immagine-profilo.jpg" alt="Bárbara Bacelle - Consultora de imagen personal en Alicante" width="1280" height="1920" loading="lazy" class="w-full rounded-2xl shadow-soft">
                </div>
                <div class="animate-on-scroll" data-animate="animate__fadeInRight">
                    <h2 class="max-w-xl text-balance font-heading text-4xl font-bold leading-[1.1] text-primary-dark md:text-5xl md:leading-[1.1]">Más de 20 años dedicada a la belleza y la imagen personal</h2>
                    <p class="mt-4 text-base leading-relaxed text-primary-dark/85">Soy Bárbara, consultora de imagen consciente, italiana de nacimiento, con 20 años de experiencia en el sector de la belleza y la estética y 5 años dedicada específicamente a la consultoría de imagen consciente. Mi formación en Milán y mi especialización en armocromía me permiten combinar análisis de color, estilo y silueta para ofrecer un asesoramiento personalizado que ayuda a cada persona a descubrir y potenciar su imagen única.</p>
                    <p class="mt-4 text-base leading-relaxed text-primary-dark/85">Mi enfoque va más allá de la apariencia: trabajo desde el bienestar interior hacia la proyección externa, integrando técnicas de autoconocimiento, coaching de imagen y acompañamiento cercano. Creo firmemente que la verdadera imagen surge del equilibrio entre cuerpo y mente, y que proyectar confianza y autenticidad es la base de una presencia sólida y coherente.</p>
                    <p class="mt-4 text-base leading-relaxed text-primary-dark/85">Si buscas consultoría de imagen para potenciar tu imagen personal, aumentar tu confianza o proyectar tu mejor versión, encontrarás en mí un espacio profesional y cercano. Te acompaño en todo el proceso, desde el análisis de color y armocromía hasta el desarrollo de estilo, silueta y autoconocimiento.</p>
                    <div class="mt-8 flex flex-wrap items-start gap-x-10 gap-y-6 md:gap-x-14">
                        <div>
                            <p class="stat-counter font-heading text-5xl font-extrabold leading-none tracking-tight text-primary-dark md:text-6xl" data-target="20" data-prefix="+">+0</p>
                            <p class="mt-2 text-sm font-medium tracking-wide text-primary-dark/85 md:text-base">Años de experiencia</p>
                        </div>
                        <div>
                            <p class="stat-counter font-heading text-5xl font-extrabold leading-none tracking-tight text-primary-dark md:text-6xl" data-target="500" data-prefix="+">+0</p>
                            <p class="mt-2 text-sm font-medium tracking-wide text-primary-dark/85 md:text-base">Clientas felices</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php include 'template/contacto.php'; ?>
</main>

<?php include 'template/footer.php'; ?>
