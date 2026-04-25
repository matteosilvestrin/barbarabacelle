# URL Pulite (.htaccess) e Migrazione a Spagnolo

**Data:** 2026-04-04 17:00

## Riepilogo

Predisposto il sistema di routing con URL pulite via .htaccess e migrata
tutta l'interfaccia da italiano a spagnolo.

## Modifiche

### Nuovo file
- `.htaccess` — RewriteEngine con regola generica: `/pagename` -> `pagename.php`

### File modificati
- `inc/head.php` — lang="es", meta description e title in spagnolo
- `inc/header.php` — navigazione in spagnolo, link con URL assolute pulite
- `inc/footer.php` — copyright in spagnolo
- `index.php` — tutte le sezioni rinominate in spagnolo
- `AGENTS.md` — aggiornate convenzioni (lingua, .htaccess, URL, pattern nuove pagine)

## Note
- Il .htaccess gestisce automaticamente qualsiasi nuova pagina futura
- Per aggiungere una pagina basta creare `nome-pagina.php` nella root
- La URL `/barbarabacelle3/nome-pagina` funzionera senza modifiche al .htaccess
