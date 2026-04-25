# Site URL Root-Relative — Rimozione /barbarabacelle3/

**Data:** 2026-04-04 17:30

## Riepilogo

Rimossi tutti i riferimenti hardcoded a `/barbarabacelle3/` da link e asset.
Il sito ora punta alla root del dominio (`/`) ed e pronto per la produzione.

## Modifiche

### File modificati
- `.htaccess` — rimossa `RewriteBase /barbarabacelle3/`, rewrite ora indipendente dalla cartella
- `inc/header.php` — tutti i link aggiornati: logo -> `/`, nav -> `/#quien-soy`, `/#servicios`, ecc.
- `AGENTS.md` — aggiunta regola "mai hardcodare /barbarabacelle3/", aggiornati esempi URL

### File non modificati (gia corretti)
- `inc/head.php` — usava gia path relativi (`assets/css/custom.css`)
- `inc/footer.php` — usava gia path relativi (`assets/js/main.js`)

## Note
- In produzione (dominio root): tutto funziona con `/`, `/quien-soy`, ecc.
- In test locale (sottocartella XAMPP): aprire `http://localhost/barbarabacelle3/` — gli asset relativi si caricano, i link nav puntano a root localhost
