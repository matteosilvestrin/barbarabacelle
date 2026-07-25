<?php require_once __DIR__ . '/functions.php'; ?>

<?php
$contact = bb_contact_data();
$recaptchaSiteKey = (string)bb_env('RECAPTCHA_SITE_KEY', '');
?>

<!-- Footer -->
<footer class="bg-primary-dark py-8 text-white/80">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
        <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
            <div>
                <p class="font-heading text-sm font-semibold tracking-wide text-white">Espacio de Estilo.</p>
                <p class="mt-1 text-sm text-white/60">Bárbara Bacelle · Asesoría de imagen personal online y presencial en Alicante</p>
            </div>
            <div class="space-y-1 text-sm text-white/70">
                <p><span class="font-semibold text-white">Email</span> · <a class="transition-colors hover:text-white" href="<?php echo bb_escape($contact['email_link']); ?>"><?php echo bb_escape($contact['email']); ?></a></p>
                <p><span class="font-semibold text-white">Teléfono</span> · <a class="transition-colors hover:text-white" href="<?php echo bb_escape($contact['phone_link']); ?>"><?php echo bb_escape($contact['phone']); ?></a></p>
                <p><span class="font-semibold text-white">Instagram</span> · <a class="transition-colors hover:text-white" href="<?php echo bb_escape($contact['instagram_url']); ?>" target="_blank" rel="noreferrer noopener"><?php echo bb_escape($contact['instagram']); ?></a></p>
            </div>
            <p class="text-sm text-white/60">&copy; <?php echo date('Y'); ?> Espacio de Estilo. Todos los derechos reservados.</p>
        </div>
    </div>
</footer>

<?php if ($recaptchaSiteKey !== ''): ?>
    <script src="https://www.google.com/recaptcha/api.js?render=<?php echo rawurlencode($recaptchaSiteKey); ?>" async defer></script>
<?php endif; ?>

<script>
    window.BB_FORM_CONFIG = {
        recaptchaSiteKey: <?php echo json_encode($recaptchaSiteKey, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE); ?>,
        submitUrl: <?php echo json_encode('form-submit.ajax.php', JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE); ?>,
        allowCaptchaBypass: <?php echo json_encode($recaptchaSiteKey === '' && bb_is_local_environment(), JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE); ?>
    };
</script>

<!-- Main JS -->
<script src="assets/js/main.js?v=20260725-form-ajax"></script>
</body>
</html>
