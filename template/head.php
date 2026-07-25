<?php
$pageTitle = isset($pageTitle) ? $pageTitle : 'Bárbara Bacelle | Consultora de imagen';
$pageDescription = isset($pageDescription) ? $pageDescription : 'Bárbara Bacelle - Consultora de imagen personal';
$pageKeywords = isset($pageKeywords) ? $pageKeywords : 'consultora de imagen, imagen personal, asesoría de estilo, colorimetría, branding personal';
$siteName = isset($siteName) ? $siteName : 'Bárbara Bacelle';

$scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
$host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'localhost';
$requestUri = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '/';

$basePath = rtrim(dirname($_SERVER['SCRIPT_NAME']), '\\/');
if ($basePath === '.' || $basePath === '/') { $basePath = ''; }

$pageUrl = isset($pageUrl) ? $pageUrl : $scheme . '://' . $host . $requestUri;
$pageCanonical = isset($pageCanonical) ? $pageCanonical : strtok($pageUrl, '?');
$pageOgType = isset($pageOgType) ? $pageOgType : 'website';
$pageImage = isset($pageImage) ? $pageImage : 'assets/imgs/barbara-bacelle-consulente-immagine-hero.jpg';
$normalizedPageImage = '/' . ltrim($pageImage, '/');
$pageImageUrl = preg_match('/^https?:\/\//i', $pageImage) ? $pageImage : $scheme . '://' . $host . $normalizedPageImage;
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#1F5C63">
    <meta name="description" content="<?php echo htmlspecialchars($pageDescription, ENT_QUOTES, 'UTF-8'); ?>">
    <meta name="keywords" content="<?php echo htmlspecialchars($pageKeywords, ENT_QUOTES, 'UTF-8'); ?>">
    <meta name="robots" content="index, follow">
    <meta name="author" content="Bárbara Bacelle">
    <link rel="canonical" href="<?php echo htmlspecialchars($pageCanonical, ENT_QUOTES, 'UTF-8'); ?>">

    <!-- Open Graph -->
    <meta property="og:locale" content="es_ES">
    <meta property="og:type" content="<?php echo htmlspecialchars($pageOgType, ENT_QUOTES, 'UTF-8'); ?>">
    <meta property="og:site_name" content="<?php echo htmlspecialchars($siteName, ENT_QUOTES, 'UTF-8'); ?>">
    <meta property="og:title" content="<?php echo htmlspecialchars($pageTitle, ENT_QUOTES, 'UTF-8'); ?>">
    <meta property="og:description" content="<?php echo htmlspecialchars($pageDescription, ENT_QUOTES, 'UTF-8'); ?>">
    <meta property="og:url" content="<?php echo htmlspecialchars($pageCanonical, ENT_QUOTES, 'UTF-8'); ?>">
    <meta property="og:image" content="<?php echo htmlspecialchars($pageImageUrl, ENT_QUOTES, 'UTF-8'); ?>">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo htmlspecialchars($pageTitle, ENT_QUOTES, 'UTF-8'); ?>">
    <meta name="twitter:description" content="<?php echo htmlspecialchars($pageDescription, ENT_QUOTES, 'UTF-8'); ?>">
    <meta name="twitter:image" content="<?php echo htmlspecialchars($pageImageUrl, ENT_QUOTES, 'UTF-8'); ?>">
    <title><?php echo htmlspecialchars($pageTitle, ENT_QUOTES, 'UTF-8'); ?></title>

    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: {
                            lightest: '#DCFAFA',
                            lighter: '#8BD3D1',
                            light: '#3FA7A3',
                            DEFAULT: '#1F5C63',
                            dark: '#163A40',
                        },
                        secondary: {
                            lightest: '#F1F8FA',
                            light: '#E2E9EB',
                            DEFAULT: '#BFC7C9',
                        },
                    },
                    fontFamily: {
                        sans: ['DM Sans', 'sans-serif'],
                        heading: ['Cormorant Garamond', 'serif'],
                        script: ['Dancing Script', 'cursive'],
                    },
                    boxShadow: {
                        soft: '0 8px 24px rgba(31, 92, 99, 0.08)',
                    },
                }
            }
        }
    </script>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=Cormorant+Garamond:wght@500;600;700&family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

    <!-- Animate.css -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" integrity="sha512-c42qTSw/wPZ3/5LBzD+Bw5f7bSF2oxou6wEb+I/lqeaKV5FDIfMvvRp772y4jcJLKuGUOpbJMdg/BTl50fJYAw==" crossorigin="anonymous" referrerpolicy="no-referrer">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="assets/css/custom.css?v=20260707-service-intro-swap">
</head>
<body class="font-sans text-primary-dark bg-white">
    <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-primary-dark focus:shadow-soft">
        Saltar al contenido principal
    </a>
