<?php

if (!function_exists('bb_root_path')) {
    function bb_root_path(): string
    {
        return dirname(__DIR__);
    }
}

if (!function_exists('bb_load_env')) {
    function bb_load_env(): array
    {
        static $env = null;

        if ($env !== null) {
            return $env;
        }

        $env = array();
        $envPath = bb_root_path() . DIRECTORY_SEPARATOR . '.env';

        if (is_file($envPath)) {
            $lines = file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

            if ($lines !== false) {
                foreach ($lines as $line) {
                    $line = trim($line);

                    if ($line === '' || $line[0] === '#') {
                        continue;
                    }

                    $separatorPosition = strpos($line, '=');

                    if ($separatorPosition === false) {
                        continue;
                    }

                    $key = trim(substr($line, 0, $separatorPosition));
                    $value = trim(substr($line, $separatorPosition + 1));

                    if ($value !== '') {
                        $firstCharacter = substr($value, 0, 1);
                        $lastCharacter = substr($value, -1);

                        if (($firstCharacter === '"' || $firstCharacter === "'") && $lastCharacter === $firstCharacter) {
                            $value = substr($value, 1, -1);
                        }
                    }

                    $env[$key] = stripcslashes($value);
                }
            }
        }

        foreach ($env as $key => $value) {
            $runtimeValue = getenv($key);

            if ($runtimeValue !== false && $runtimeValue !== '') {
                $env[$key] = $runtimeValue;
            }
        }

        return $env;
    }
}

if (!function_exists('bb_env')) {
    function bb_env(string $key, ?string $default = null): ?string
    {
        $env = bb_load_env();

        if (array_key_exists($key, $env) && $env[$key] !== '') {
            return $env[$key];
        }

        $runtimeValue = getenv($key);

        if ($runtimeValue !== false && $runtimeValue !== '') {
            return $runtimeValue;
        }

        return $default;
    }
}

if (!function_exists('bb_escape')) {
    function bb_escape(string $value): string
    {
        return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
    }
}

if (!function_exists('bb_site_url')) {
    function bb_site_url(string $path = ''): string
    {
        $configuredSiteUrl = bb_env('SITE_URL', '');

        if ($configuredSiteUrl !== '') {
            $baseUrl = rtrim($configuredSiteUrl, '/');
        } else {
            $scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
            $host = isset($_SERVER['HTTP_HOST']) && $_SERVER['HTTP_HOST'] !== '' ? $_SERVER['HTTP_HOST'] : 'localhost';
            $scriptName = isset($_SERVER['SCRIPT_NAME']) ? $_SERVER['SCRIPT_NAME'] : '/';
            $basePath = rtrim(str_replace('\\', '/', dirname($scriptName)), '/.');
            $baseUrl = $scheme . '://' . $host . ($basePath !== '' ? $basePath : '');
        }

        $path = ltrim($path, '/');

        if ($path === '') {
            return $baseUrl;
        }

        return $baseUrl . '/' . $path;
    }
}

if (!function_exists('bb_asset_url')) {
    function bb_asset_url(string $path): string
    {
        return bb_site_url($path);
    }
}

if (!function_exists('bb_is_local_environment')) {
    function bb_is_local_environment(): bool
    {
        $host = (string)parse_url(bb_site_url(), PHP_URL_HOST);

        return in_array($host, array('localhost', '127.0.0.1', '::1'), true);
    }
}

if (!function_exists('bb_normalize_phone')) {
    function bb_normalize_phone(string $phone): string
    {
        return preg_replace('/[^0-9+]/', '', $phone) ?? $phone;
    }
}

if (!function_exists('bb_normalize_instagram_url')) {
    function bb_normalize_instagram_url(string $instagram): string
    {
        $instagram = trim($instagram);

        if ($instagram === '') {
            return 'https://www.instagram.com/';
        }

        if (preg_match('#^https?://#i', $instagram)) {
            return $instagram;
        }

        $handle = ltrim($instagram, '@');

        return 'https://www.instagram.com/' . rawurlencode($handle) . '/';
    }
}

if (!function_exists('bb_contact_data')) {
    function bb_contact_data(): array
    {
        $email = (string)bb_env('CONTACT_EMAIL', 'espaciodeestilo@gmail.com');
        $phone = (string)bb_env('CONTACT_PHONE', '+34 640 90 70 62');
        $instagram = (string)bb_env('CONTACT_INSTAGRAM', '@espaciodeestilo');

        return array(
            'email' => $email,
            'phone' => $phone,
            'instagram' => $instagram,
            'email_link' => 'mailto:' . $email,
            'phone_link' => 'tel:' . bb_normalize_phone($phone),
            'instagram_url' => bb_normalize_instagram_url($instagram),
        );
    }
}

if (!function_exists('bb_http_post_form')) {
    function bb_http_post_form(string $url, array $fields): array
    {
        $payload = http_build_query($fields, '', '&');

        if (function_exists('curl_init')) {
            $handle = curl_init($url);

            if ($handle === false) {
                return array('ok' => false, 'error' => 'No se pudo inicializar la conexión HTTP.');
            }

            curl_setopt_array($handle, array(
                CURLOPT_POST => true,
                CURLOPT_POSTFIELDS => $payload,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_TIMEOUT => 15,
                CURLOPT_HTTPHEADER => array(
                    'Content-Type: application/x-www-form-urlencoded',
                ),
            ));

            $responseBody = curl_exec($handle);

            if ($responseBody === false) {
                $error = curl_error($handle);
                curl_close($handle);

                return array('ok' => false, 'error' => $error !== '' ? $error : 'No se pudo realizar la petición HTTP.');
            }

            $statusCode = (int)curl_getinfo($handle, CURLINFO_HTTP_CODE);
            curl_close($handle);

            return array('ok' => $statusCode >= 200 && $statusCode < 300, 'body' => $responseBody, 'status' => $statusCode);
        }

        $context = stream_context_create(array(
            'http' => array(
                'method' => 'POST',
                'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
                'content' => $payload,
                'timeout' => 15,
                'ignore_errors' => true,
            ),
        ));

        $responseBody = @file_get_contents($url, false, $context);

        if ($responseBody === false) {
            return array('ok' => false, 'error' => 'No se pudo realizar la petición HTTP.');
        }

        $statusCode = 500;

        if (isset($http_response_header) && is_array($http_response_header)) {
            foreach ($http_response_header as $headerLine) {
                if (preg_match('/^HTTP\/\S+\s+(\d+)/', $headerLine, $matches)) {
                    $statusCode = (int)$matches[1];
                    break;
                }
            }
        }

        return array('ok' => $statusCode >= 200 && $statusCode < 300, 'body' => $responseBody, 'status' => $statusCode);
    }
}

if (!function_exists('bb_verify_recaptcha_v3')) {
    function bb_verify_recaptcha_v3(string $token, string $expectedAction): array
    {
        $secretKey = (string)bb_env('RECAPTCHA_SECRET_KEY', '');

        if ($secretKey === '' && bb_is_local_environment()) {
            return array('ok' => true, 'score' => 1.0, 'hostname' => 'localhost', 'bypassed' => true);
        }

        if ($secretKey === '') {
            return array('ok' => false, 'error' => 'La clave secreta de reCAPTCHA no está configurada.');
        }

        $verification = bb_http_post_form('https://www.google.com/recaptcha/api/siteverify', array(
            'secret' => $secretKey,
            'response' => $token,
            'remoteip' => isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : '',
        ));

        if (empty($verification['ok'])) {
            return array('ok' => false, 'error' => 'No se ha podido verificar reCAPTCHA.');
        }

        $payload = json_decode((string)($verification['body'] ?? ''), true);

        if (!is_array($payload) || empty($payload['success'])) {
            return array('ok' => false, 'error' => 'La verificación de reCAPTCHA no es válida.');
        }

        $score = isset($payload['score']) ? (float)$payload['score'] : 0.0;
        $action = isset($payload['action']) ? (string)$payload['action'] : '';
        $hostname = isset($payload['hostname']) ? (string)$payload['hostname'] : '';
        $expectedHost = parse_url((string)bb_site_url(), PHP_URL_HOST);

        if ($action !== $expectedAction) {
            return array('ok' => false, 'error' => 'La acción de reCAPTCHA no coincide.');
        }

        if ($score < 0.5) {
            return array('ok' => false, 'error' => 'No hemos podido validar la solicitud.');
        }

        if ($expectedHost !== null && $expectedHost !== '' && $hostname !== '' && strcasecmp($hostname, $expectedHost) !== 0) {
            return array('ok' => false, 'error' => 'El dominio de reCAPTCHA no coincide.');
        }

        return array('ok' => true, 'score' => $score, 'hostname' => $hostname);
    }
}

if (!function_exists('bb_smtp_read_response')) {
    function bb_smtp_read_response($socket): array
    {
        $responseLines = array();
        $code = 0;

        while (($line = fgets($socket, 515)) !== false) {
            $responseLines[] = rtrim($line, "\r\n");

            if (preg_match('/^(\d{3})([ -])/', $line, $matches)) {
                $code = (int)$matches[1];

                if ($matches[2] === ' ') {
                    break;
                }
            }
        }

        return array('code' => $code, 'message' => implode("\n", $responseLines));
    }
}

if (!function_exists('bb_smtp_write_command')) {
    function bb_smtp_write_command($socket, string $command, array $expectedCodes): array
    {
        fwrite($socket, $command . "\r\n");
        $response = bb_smtp_read_response($socket);

        if (!in_array($response['code'], $expectedCodes, true)) {
            return array('ok' => false, 'error' => $response['message']);
        }

        return array('ok' => true, 'response' => $response);
    }
}

if (!function_exists('bb_send_smtp_mail')) {
    function bb_send_smtp_mail(array $smtp, array $message): array
    {
        $host = trim((string)($smtp['host'] ?? ''));
        $port = (int)($smtp['port'] ?? 587);
        $username = (string)($smtp['username'] ?? '');
        $password = (string)($smtp['password'] ?? '');
        $encryption = strtolower(trim((string)($smtp['encryption'] ?? 'tls')));
        $fromEmail = trim((string)($smtp['from_email'] ?? ''));
        $fromName = trim((string)($smtp['from_name'] ?? ''));
        $toEmail = trim((string)($message['to_email'] ?? ''));
        $toName = trim((string)($message['to_name'] ?? ''));
        $replyToEmail = trim((string)($message['reply_to_email'] ?? ''));
        $replyToName = trim((string)($message['reply_to_name'] ?? ''));
        $subject = trim((string)($message['subject'] ?? ''));
        $htmlBody = (string)($message['html'] ?? '');
        $bccEmail = trim((string)($message['bcc_email'] ?? ''));

        if ($host === '' || $fromEmail === '' || $toEmail === '' || $subject === '' || $htmlBody === '') {
            return array('ok' => false, 'error' => 'Faltan datos SMTP o del mensaje.');
        }

        $transportHost = ($encryption === 'ssl' && $port !== 0) ? 'ssl://' . $host : $host;
        $socket = @stream_socket_client($transportHost . ':' . $port, $errno, $errstr, 15, STREAM_CLIENT_CONNECT);

        if (!is_resource($socket)) {
            return array('ok' => false, 'error' => 'No se pudo conectar al servidor SMTP.');
        }

        stream_set_timeout($socket, 15);

        $response = bb_smtp_read_response($socket);

        if ($response['code'] !== 220) {
            fclose($socket);

            return array('ok' => false, 'error' => $response['message']);
        }

        $hostname = parse_url((string)bb_site_url(), PHP_URL_HOST);

        if ($hostname === null || $hostname === '') {
            $hostname = 'localhost';
        }

        $ehlo = bb_smtp_write_command($socket, 'EHLO ' . $hostname, array(250));

        if (empty($ehlo['ok'])) {
            fclose($socket);

            return array('ok' => false, 'error' => $ehlo['error']);
        }

        if ($encryption === 'tls') {
            $startTls = bb_smtp_write_command($socket, 'STARTTLS', array(220));

            if (empty($startTls['ok'])) {
                fclose($socket);

                return array('ok' => false, 'error' => $startTls['error']);
            }

            if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                fclose($socket);

                return array('ok' => false, 'error' => 'No se pudo iniciar TLS.');
            }

            $ehlo = bb_smtp_write_command($socket, 'EHLO ' . $hostname, array(250));

            if (empty($ehlo['ok'])) {
                fclose($socket);

                return array('ok' => false, 'error' => $ehlo['error']);
            }
        }

        if ($username !== '') {
            $auth = bb_smtp_write_command($socket, 'AUTH LOGIN', array(334));

            if (empty($auth['ok'])) {
                fclose($socket);

                return array('ok' => false, 'error' => $auth['error']);
            }

            $userResponse = bb_smtp_write_command($socket, base64_encode($username), array(334));

            if (empty($userResponse['ok'])) {
                fclose($socket);

                return array('ok' => false, 'error' => $userResponse['error']);
            }

            $passwordResponse = bb_smtp_write_command($socket, base64_encode($password), array(235));

            if (empty($passwordResponse['ok'])) {
                fclose($socket);

                return array('ok' => false, 'error' => $passwordResponse['error']);
            }
        }

        $mailFrom = bb_smtp_write_command($socket, 'MAIL FROM:<' . $fromEmail . '>', array(250));

        if (empty($mailFrom['ok'])) {
            fclose($socket);

            return array('ok' => false, 'error' => $mailFrom['error']);
        }

        $recipients = array(
            array('email' => $toEmail, 'name' => $toName),
        );

        if ($bccEmail !== '') {
            $recipients[] = array('email' => $bccEmail, 'name' => '');
        }

        foreach ($recipients as $recipient) {
            $rcpt = bb_smtp_write_command($socket, 'RCPT TO:<' . $recipient['email'] . '>', array(250, 251));

            if (empty($rcpt['ok'])) {
                fclose($socket);

                return array('ok' => false, 'error' => $rcpt['error']);
            }
        }

        $dataCommand = bb_smtp_write_command($socket, 'DATA', array(354));

        if (empty($dataCommand['ok'])) {
            fclose($socket);

            return array('ok' => false, 'error' => $dataCommand['error']);
        }

        $encodedSubject = function_exists('mb_encode_mimeheader') ? mb_encode_mimeheader($subject, 'UTF-8', 'B', "\r\n") : $subject;
        $encodedFromName = $fromName !== '' && function_exists('mb_encode_mimeheader') ? mb_encode_mimeheader($fromName, 'UTF-8', 'B', "\r\n") : $fromName;
        $encodedToName = $toName !== '' && function_exists('mb_encode_mimeheader') ? mb_encode_mimeheader($toName, 'UTF-8', 'B', "\r\n") : $toName;
        $encodedReplyToName = $replyToName !== '' && function_exists('mb_encode_mimeheader') ? mb_encode_mimeheader($replyToName, 'UTF-8', 'B', "\r\n") : $replyToName;

        $headers = array(
            'Date: ' . date(DATE_RFC2822),
            'From: ' . ($encodedFromName !== '' ? $encodedFromName . ' <' . $fromEmail . '>' : $fromEmail),
            'To: ' . ($encodedToName !== '' ? $encodedToName . ' <' . $toEmail . '>' : $toEmail),
            'Reply-To: ' . ($encodedReplyToName !== '' ? $encodedReplyToName . ' <' . $replyToEmail . '>' : $replyToEmail),
            'Subject: ' . $encodedSubject,
            'MIME-Version: 1.0',
            'Content-Type: text/html; charset=UTF-8',
            'Content-Transfer-Encoding: quoted-printable',
            'X-Mailer: PHP/' . PHP_VERSION,
        );

        $bodyLines = explode("\n", quoted_printable_encode($htmlBody));

        foreach ($bodyLines as &$bodyLine) {
            if (isset($bodyLine[0]) && $bodyLine[0] === '.') {
                $bodyLine = '.' . $bodyLine;
            }
        }

        unset($bodyLine);

        $smtpMessage = implode("\r\n", $headers) . "\r\n\r\n" . implode("\r\n", $bodyLines) . "\r\n.\r\n";

        fwrite($socket, $smtpMessage);
        $finalResponse = bb_smtp_read_response($socket);

        fwrite($socket, "QUIT\r\n");
        fclose($socket);

        if (!in_array($finalResponse['code'], array(250), true)) {
            return array('ok' => false, 'error' => $finalResponse['message']);
        }

        return array('ok' => true);
    }
}
