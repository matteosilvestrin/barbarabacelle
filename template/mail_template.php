<?php

require_once __DIR__ . '/functions.php';

if (!function_exists('bb_render_mail_template')) {
    function bb_render_mail_template(array $data): string
    {
        $contact = isset($data['contact']) && is_array($data['contact']) ? $data['contact'] : bb_contact_data();
        $siteUrl = rtrim((string)($data['site_url'] ?? bb_site_url()), '/');
        $logoUrl = $siteUrl !== '' ? $siteUrl . '/assets/imgs/logo-barbarabacelle-asesoria_de_imagen_alicante.png' : '/assets/imgs/logo-barbarabacelle-asesoria_de_imagen_alicante.png';
        $name = bb_escape((string)($data['name'] ?? ''));
        $email = bb_escape((string)($data['email'] ?? ''));
        $message = nl2br(bb_escape((string)($data['message'] ?? '')));
        $subject = bb_escape((string)($data['subject'] ?? bb_env('MAIL_SUBJECT', 'Nuevo mensaje desde Espacio de Estilo')));
        $phone = bb_escape((string)($contact['phone'] ?? ''));
        $phoneLink = bb_escape((string)($contact['phone_link'] ?? ''));
        $contactEmail = bb_escape((string)($contact['email'] ?? ''));
        $contactEmailLink = bb_escape((string)($contact['email_link'] ?? ''));
        $instagram = bb_escape((string)($contact['instagram'] ?? ''));
        $instagramUrl = bb_escape((string)($contact['instagram_url'] ?? ''));
        $sentAt = bb_escape((string)($data['sent_at'] ?? date('d/m/Y H:i')));

        ob_start();
        ?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $subject; ?></title>
</head>
<body style="margin:0; padding:0; background:#F1F7F8; font-family:Arial, Helvetica, sans-serif; color:#02636D;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#F1F7F8; padding:32px 16px;">
        <tr>
            <td align="center">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:640px; background:#FFFFFF; border-radius:20px; overflow:hidden;">
                    <tr>
                        <td style="padding:32px 32px 20px; text-align:center; border-bottom:1px solid #E1E8EA;">
                            <img src="<?php echo $logoUrl; ?>" alt="Espacio de Estilo by Barbara Bacelle" width="220" style="display:block; margin:0 auto 12px; max-width:220px; width:100%; height:auto;">
                            <p style="margin:0; font-size:12px; letter-spacing:0.16em; text-transform:uppercase; color:#0396A6;">Espacio de Estilo</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:32px;">
                            <p style="margin:0 0 12px; font-size:18px; line-height:1.5; font-weight:700;">Hola <?php echo $name !== '' ? $name : 'cliente'; ?>, gracias por escribirnos.</p>
                            <p style="margin:0 0 24px; font-size:15px; line-height:1.7; color:#02636D;">Nuestro equipo responderá lo antes posible.</p>

                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; margin:0 0 24px;">
                                <tr>
                                    <td style="padding:12px 0; border-top:1px solid #E1E8EA; font-size:14px; line-height:1.6;"><strong>Nombre:</strong> <?php echo $name; ?></td>
                                </tr>
                                <tr>
                                    <td style="padding:12px 0; border-top:1px solid #E1E8EA; font-size:14px; line-height:1.6;"><strong>Email:</strong> <?php echo $email; ?></td>
                                </tr>
                                <tr>
                                    <td style="padding:12px 0; border-top:1px solid #E1E8EA; font-size:14px; line-height:1.6;"><strong>Mensaje:</strong><br><?php echo $message; ?></td>
                                </tr>
                            </table>

                            <p style="margin:0; font-size:12px; line-height:1.7; color:#0396A6;">Mensaje enviado automáticamente desde el formulario de contacto.</p>
                            <p style="margin:8px 0 0; font-size:12px; line-height:1.7; color:#02636D;">Asunto fijo: <?php echo $subject; ?></p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:0 32px 32px;">
                            <div style="background:#F1F7F8; border-radius:16px; padding:20px 22px;">
                                <p style="margin:0 0 12px; font-size:12px; letter-spacing:0.14em; text-transform:uppercase; color:#0396A6;">Contacto</p>
                                <p style="margin:0; font-size:14px; line-height:1.8; color:#02636D;">
                                    <strong>Email:</strong> <a href="<?php echo $contactEmailLink; ?>" style="color:#0396A6; text-decoration:none;"><?php echo $contactEmail; ?></a><br>
                                    <strong>Teléfono:</strong> <a href="<?php echo $phoneLink; ?>" style="color:#0396A6; text-decoration:none;"><?php echo $phone; ?></a><br>
                                    <strong>Instagram:</strong> <a href="<?php echo $instagramUrl; ?>" style="color:#0396A6; text-decoration:none;"><?php echo $instagram; ?></a>
                                </p>
                                <p style="margin:16px 0 0; font-size:12px; line-height:1.7; color:#02636D;">Espacio de Estilo · Bárbara Bacelle</p>
                                <p style="margin:4px 0 0; font-size:12px; line-height:1.7; color:#02636D;">Enviado el <?php echo $sentAt; ?></p>
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
        <?php

        return (string)ob_get_clean();
    }
}
