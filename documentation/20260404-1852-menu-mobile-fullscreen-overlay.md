# Log Implementazione

- Data: 2026-04-04 18:52
- Feature: menu mobile fullscreen overlay con blur

## Summary of changes

- Aggiornato il comportamento della navigazione mobile per attivarsi sotto `1024px` (`lg`).
- Trasformato il menu mobile da dropdown inline a overlay fullscreen sovrapposto al sito.
- Centrati i link di navigazione e aumentata la leggibilita con tipografia piu ampia.
- Aggiunto sfondo scuro con effetto blur per sfocare il contenuto sottostante.
- Inserito un pannello centrale chiaro con CTA primaria ben evidente.
- Bloccato lo scroll del body mentre il menu e aperto.
- Gestita la chiusura del menu tramite click sui link, tasto `Escape` e ritorno a viewport desktop.

## Files modified

- `inc/header.php`
- `assets/js/main.js`

## Dettagli implementativi

- `inc/header.php`
  - navigazione desktop e CTA header spostate da breakpoint `md` a `lg`
  - hamburger attivo sotto `lg`
  - overlay mobile reso `fixed inset-0` con `z-index` superiore all'header
  - backdrop con `bg-slate-950/45` e `backdrop-blur-2xl`
  - pannello menu centrale con sfondo bianco, bordi morbidi e shadow elevata
  - link menu allineati al centro con corpo tipografico grande (`text-2xl` / `sm:text-3xl`)
  - CTA `Reservar Cita` centrata e ben visibile

- `assets/js/main.js`
  - apertura overlay con rimozione di `hidden`, `pointer-events-none`, `opacity-0`
  - aggiunta/rimozione di `overflow-hidden` al `body`
  - chiusura animata con timeout coerente con `duration-300`
  - aggiornamento `aria-hidden`
  - chiusura su click link, tasto `Escape` e resize a `>= 1024px`

## Verification

- Verifica sintassi PHP completata con successo:
  - `php -l inc/header.php`
  - `php -l index.php`
- Verifica responsive eseguita in viewport tablet/mobile.
- Apertura overlay confermata con:
  - voci centrate
  - sfondo sfocato
  - CTA visibile
  - scroll pagina bloccato

## Notes

- Il nuovo menu migliora usabilita e percezione premium su tablet e mobile.
- La soluzione mantiene la struttura del sito invariata e non introduce dipendenze aggiuntive.
