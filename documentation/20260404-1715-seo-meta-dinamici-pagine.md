## SEO Meta Dinamici per Pagina

**Data:** 2026-04-04 17:15

### Riepilogo

Implementata la gestione dinamica dei meta SEO (`title`, `description`, `keywords`) in modo che ogni pagina possa definire i propri valori senza centralizzare la configurazione.

### Modifiche effettuate

- `inc/head.php`
  - Aggiunti fallback per `$pageTitle`, `$pageDescription`, `$pageKeywords`.
  - Sostituiti i meta statici con output dinamico via PHP.
  - Aggiunto escaping con `htmlspecialchars(..., ENT_QUOTES, 'UTF-8')` su title e meta per sicurezza output.
- `index.php`
  - Definite le variabili SEO specifiche della home prima di includere `inc/head.php`.

### File coinvolti

- `inc/head.php`
- `index.php`

### Pattern per le prossime pagine

Ogni nuova pagina (es. `quien-soy.php`, `contactos.php`) deve impostare le variabili SEO all'inizio del file, prima dell'include di `inc/head.php`:

```php
<?php
$pageTitle = 'Titolo pagina';
$pageDescription = 'Descrizione pagina';
$pageKeywords = 'keyword 1, keyword 2, keyword 3';
include 'inc/head.php';
?>
```

### Verifica

- Validazione PHP eseguita con successo sui file aggiornati.
- Verificata la presenza dei meta renderizzati nella pagina home.
