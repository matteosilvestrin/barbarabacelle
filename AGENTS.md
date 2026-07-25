# AGENTS.md

## Project Shape
- Static marketing site for `Espacio de Estilo by Barbara Bacelle`.
- Intended stack: `PHP 8.x` on `Apache (XAMPP)`, `HTML5`, `Vanilla JS`, `Tailwind CSS v3 via Play CDN`.
- Keep the project deployable as plain files on `barbarabacelle.es`.
- There is no `PRODUCT.md` in this project; primary project/site references live in this `AGENTS.md` file.

## Hard Constraints
- Do not add `npm`, `node_modules`, bundlers, or a Tailwind build step.
- Do not introduce PHP frameworks or a Composer app structure.
- Do not modify `_MATERIALS/`; it is reference-only.
- Keep all user-facing copy in Spanish.
- Do not hardcode `/barbarabacelle4/` in links or asset paths.

## Agent Skills
- Project-specific agent skills are allowed in `.agents/skills/`.
- These are markdown instruction files only (no runtime code, no dependencies).
- Do not add skills that require `npm`, `node_modules`, or external tooling.
- `.agents/` is excluded from version control via `.gitignore`.

## Paths and Routing
- Reusable PHP partials belong in `template/`.
- Images belong in `assets/imgs/`.
- Use clean URLs without `.php` in internal links when routing is added.

## Styling and JS
- Prefer Tailwind utility classes.
- Use `assets/css/custom.css` only for overrides or effects Tailwind cannot express cleanly.
- Keep client-side code in `assets/js/main.js`.

## Design System
- `DESIGN.md` is the binding source of truth for every design detail, including brand essence, visual direction, colors, typography, logos, symbols, imagery, layout, components, motion, accessibility, and quality bar.
- When changing UI, copy presentation, spacing, styling, imagery, animation, or any visual rule, consult and follow `DESIGN.md` first.
- If `AGENTS.md` and `DESIGN.md` appear to disagree on a design detail, follow `DESIGN.md`; keep `AGENTS.md` authoritative only for project shape, stack, paths, routing, tooling, and hard operational constraints.
- Colors are defined as Tailwind custom tokens: `primary-{lightest/lighter/light/DEFAULT/dark}`, `secondary-{lightest/light/DEFAULT}`.
- No `bg-surface` — use `bg-secondary-lightest` or `bg-primary-lightest` instead.
- No `text-slate-*` — use `text-primary-dark` with opacity for hierarchy.
- No gradient text or backgrounds.
- No `border` + `shadow` on the same card (ghost-card pattern banned).

## File Manifest (post-design)
- `DESIGN.md` — visual system reference (palette, typography, spacing, motion)
- `assets/imgs/logo-barbarabacelle-asesoria_de_imagen_alicante.png` — primary brand logo for navbar, hero, and footer

## Current Gaps
- The repository currently has no verified build, lint, typecheck, or test commands.
