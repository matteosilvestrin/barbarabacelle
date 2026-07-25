<?php require_once __DIR__ . '/functions.php'; ?>

<?php $contact = bb_contact_data(); ?>

<section id="contacto" class="bg-white py-20 md:py-24">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
        <div class="grid gap-10 md:grid-cols-2">
            <div class="animate-on-scroll" data-animate="animate__fadeInLeft">
                <h2 class="max-w-xl text-balance font-heading text-4xl font-bold leading-[1.1] text-primary-dark md:text-5xl md:leading-[1.1]">Cuéntame qué necesitas y te ayudo a elegir el mejor punto de partida</h2>
                <p class="mt-4 text-primary-dark/70">Te responderé personalmente para orientarte según tus objetivos y momento.</p>

                <div class="mt-8 space-y-4 text-sm md:text-base">
                    <p><span class="font-semibold text-primary-dark">Email</span><br><a class="transition-colors hover:text-primary" href="<?php echo bb_escape($contact['email_link']); ?>"><?php echo bb_escape($contact['email']); ?></a></p>
                    <p><span class="font-semibold text-primary-dark">Teléfono</span><br><a class="transition-colors hover:text-primary" href="<?php echo bb_escape($contact['phone_link']); ?>"><?php echo bb_escape($contact['phone']); ?></a></p>
                    <p><span class="font-semibold text-primary-dark">Instagram</span><br><a class="transition-colors hover:text-primary" href="<?php echo bb_escape($contact['instagram_url']); ?>" target="_blank" rel="noreferrer noopener"><?php echo bb_escape($contact['instagram']); ?></a></p>
                    <p><span class="font-semibold text-primary-dark">Ubicación</span><br>Online y presencial en Alicante</p>
                </div>
            </div>

            <div class="animate-on-scroll rounded-2xl bg-secondary-lightest p-6" data-animate="animate__fadeInRight">
                <form id="contact-form" class="space-y-4" action="form-submit.ajax.php" method="post" novalidate>
                    <div>
                        <label for="nombre" class="mb-1 block text-sm md:text-base font-medium text-primary-dark/85">Nombre</label>
                        <input id="nombre" name="nombre" type="text" autocomplete="name" placeholder="Tu nombre" class="w-full rounded-lg border border-secondary px-3 py-2 text-sm md:text-base focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30" aria-label="Nombre">
                    </div>
                    <div>
                        <label for="email" class="mb-1 block text-sm md:text-base font-medium text-primary-dark/85">Email</label>
                        <input id="email" name="email" type="email" autocomplete="email" spellcheck="false" placeholder="tu@email.com" class="w-full rounded-lg border border-secondary px-3 py-2 text-sm md:text-base focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30" aria-label="Email">
                    </div>
                    <div>
                        <label for="mensaje" class="mb-1 block text-sm md:text-base font-medium text-primary-dark/85">Mensaje</label>
                        <textarea id="mensaje" name="mensaje" rows="4" autocomplete="off" placeholder="Cuéntame qué te gustaría mejorar o conseguir con tu imagen…" class="w-full rounded-lg border border-secondary px-3 py-2 text-sm md:text-base focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30" aria-label="Mensaje"></textarea>
                    </div>
                    <button type="submit" class="inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" aria-label="Envía mi petición">Envía mi petición</button>
                    <p id="form-status" class="hidden text-sm font-medium" aria-live="polite"></p>
                </form>
            </div>
        </div>
    </div>
</section>
