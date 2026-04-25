# Aggiornamento Modelli Subagenti OpenCode

**Data:** 2026-04-04 17:42

## Riepilogo

Aggiornati tutti i subagenti locali del progetto in `.opencode/agents/` per usare un unico modello:

- `model: gpt-5.3-codex`

Obiettivo: uniformare il comportamento dei subagenti ed evitare errori legati a provider/modelli non disponibili (`opus`, `sonnet`, `haiku`).

## File modificati

- `.opencode/agents/code-reviewer.md`
- `.opencode/agents/copywriter.md`
- `.opencode/agents/fullstack-developer.md`
- `.opencode/agents/layout-designer.md`
- `.opencode/agents/performance-engineer.md`
- `.opencode/agents/php-pro.md`
- `.opencode/agents/seo-specialist.md`
- `.opencode/agents/ui-designer.md`

## Dettagli modifica

- Sostituita in ogni file la riga `model: ...` precedente con `model: gpt-5.3-codex`.
- Verifica post-modifica completata su tutti i file `.opencode/agents/*.md`.

## Note operative

- Le skills restano in `.agents/skills/` come location canonica.
- Per nuove installazioni skills, usare la policy definita in `AGENTS.md`:
  - `npx skills add <repo-or-url> --skill <skill-name> --agent opencode --yes`
