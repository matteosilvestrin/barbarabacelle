<?php

require_once __DIR__ . '/template/functions.php';
require_once __DIR__ . '/template/mail_template.php';

header('Content-Type: application/json; charset=UTF-8');

function bb_json_response(array $payload, int $statusCode = 200): void
{
    http_response_code($statusCode);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    bb_json_response(array('ok' => false, 'message' => 'Método no permitido.'), 405);
}

$name = trim((string)($_POST['nombre'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$message = trim((string)($_POST['mensaje'] ?? ''));
$recaptchaToken = trim((string)($_POST['recaptcha_token'] ?? ''));

if ($name === '' || $email === '' || $message === '') {
    bb_json_response(array('ok' => false, 'message' => 'Completa nombre, email y mensaje.'), 422);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    bb_json_response(array('ok' => false, 'message' => 'Introduce un email válido.'), 422);
}

if ($recaptchaToken === '' && !bb_is_local_environment()) {
    bb_json_response(array('ok' => false, 'message' => 'No se ha podido validar reCAPTCHA.'), 422);
}

if ($recaptchaToken !== '') {
    $recaptchaCheck = bb_verify_recaptcha_v3($recaptchaToken, 'contact_form');

    if (empty($recaptchaCheck['ok'])) {
        bb_json_response(array('ok' => false, 'message' => $recaptchaCheck['error'] ?? 'No se ha podido validar reCAPTCHA.'), 422);
    }
}

$contact = bb_contact_data();
$subject = (string)bb_env('MAIL_SUBJECT', 'Nuevo mensaje desde Espacio de Estilo');
$siteUrl = bb_site_url();
$senderName = (string)bb_env('SMTP_FROM_NAME', 'Espacio de Estilo');
$senderEmail = (string)bb_env('SMTP_FROM_EMAIL', $contact['email']);

$body = bb_render_mail_template(array(
    'name' => $name,
    'email' => $email,
    'message' => $message,
    'subject' => $subject,
    'contact' => $contact,
    'site_url' => $siteUrl,
    'sent_at' => date('d/m/Y H:i'),
));

$smtpResult = bb_send_smtp_mail(array(
    'host' => (string)bb_env('SMTP_HOST', ''),
    'port' => (string)bb_env('SMTP_PORT', '587'),
    'username' => (string)bb_env('SMTP_USERNAME', ''),
    'password' => (string)bb_env('SMTP_PASSWORD', ''),
    'encryption' => (string)bb_env('SMTP_ENCRYPTION', 'tls'),
    'from_email' => $senderEmail,
    'from_name' => $senderName,
), array(
    'to_email' => $email,
    'to_name' => $name,
    'reply_to_email' => $email,
    'reply_to_name' => $name,
    'subject' => $subject,
    'html' => $body,
    'bcc_email' => (string)bb_env('ADMIN_BCC_EMAIL', ''),
));

if (empty($smtpResult['ok'])) {
    bb_json_response(array('ok' => false, 'message' => 'No se ha podido enviar el mensaje. Inténtalo de nuevo.'), 500);
}

bb_json_response(array('ok' => true, 'message' => 'Gracias. Tu mensaje ha sido enviado correctamente.'));
