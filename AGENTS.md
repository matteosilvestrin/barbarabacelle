# AGENTS.md — Barbara Bacelle Website

Guidelines for AI coding agents working in this repository.

## Project Overview

Static presentation website for a freelance **personal image consultant** (Barbara Bacelle).
Built with **PHP includes**, **HTML5**, **JavaScript (vanilla)**, and **Tailwind CSS (CDN)**.
Served via **XAMPP** on Windows — no build tools, no npm, no bundler.

## Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Server    | Apache (XAMPP) — PHP 8.x            |
| Markup    | PHP + HTML5                         |
| Styling   | Tailwind CSS v3 via Play CDN        |
| JS        | Vanilla ES6+ (no frameworks)        |
| Fonts     | Google Fonts (Inter, Playfair Display) |

## Directory Structure

```
barbarabacelle3/
├── index.php              # Main entry — includes partials, contains page sections
├── .htaccess              # Apache mod_rewrite — clean URLs without .php extension
├── inc/                   # Reusable PHP partials
│   ├── head.php           # <!DOCTYPE>, <head>, Tailwind CDN, fonts, opens <body>
│   ├── header.php         # <header> with sticky nav, mobile hamburger menu
│   └── footer.php         # <footer>, loads main.js, closes </body></html>
├── assets/
│   ├── css/custom.css     # Non-Tailwind overrides and custom animations
│   ├── js/main.js         # All client-side JavaScript
│   └── imgs/              # Optimized images (WebP/PNG/SVG)
├── documentation/         # Implementation history logs (YYYYMMDD-HHMM-feature-name.md)
├── _MATERIALS/            # Reference files — DO NOT modify or commit
├── .opencode/
│   ├── agents/            # Sub-agents (orchestrator + specialists)
│   └── skills/            # Reusable procedures and checklists
├── .gitignore
└── AGENTS.md              # This file
```

## Build / Run / Test Commands

There is **no build step**. The site runs directly on XAMPP's Apache server.

```bash
# View the site (XAMPP must be running with Apache started)
# Open in browser:
http://localhost/barbarabacelle3/

# Validate PHP syntax for a single file
php -l index.php
php -l inc/head.php

# Validate all PHP files recursively
find . -name "*.php" -not -path "./_MATERIALS/*" -exec php -l {} \;

# On Windows PowerShell equivalent
Get-ChildItem -Recurse -Filter *.php -Exclude _MATERIALS | ForEach-Object { php -l $_.FullName }
```

There are **no automated tests** in this project. Manual browser testing is the verification method.
Always visually verify changes at `http://localhost/barbarabacelle3/` after editing.

## Tailwind CSS Configuration

Tailwind is loaded via CDN in `inc/head.php`. Configuration is **inline** — there is no `tailwind.config.js` file.

Brand theme is defined in the `<script>` block inside `inc/head.php`:

- **Colors**: `brand-light` (#F5F0EB), `brand` (#C4A882), `brand-dark` (#8B6F4E)
- **Fonts**: `font-sans` = Inter, `font-display` = Playfair Display

To modify brand colors or fonts, edit the `tailwind.config` object in `inc/head.php`.
Always use Tailwind utility classes. Only use `assets/css/custom.css` when Tailwind cannot achieve the desired effect.

## Code Style Guidelines

### PHP

- Use `include` (not `require`) for partials unless the partial is critical
- PHP partials in `inc/` are **fragments**
  - `head.php` may include a small PHP prelude for dynamic SEO variables, then opens `<!DOCTYPE html>` through `<body>`
  - `footer.php` closes `</body></html>` — does NOT open them
- Use `<?php echo ... ?>` for inline PHP expressions (e.g., dynamic year in footer)
- No classes, no namespaces, no Composer — this is a simple procedural site
- Keep PHP logic minimal; this is primarily a static presentation site

### HTML

- Language attribute: `lang="es"` (Spanish)
- Semantic HTML5 elements: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`
- Each page section uses `<section id="section-name">` for anchor navigation
- Section IDs use **kebab-case** in Spanish: `quien-soy`, `servicios`, `portfolio`, `contactos`
- Internal links use **clean URLs** (no `.php` extension): `/quien-soy`, not `quien-soy.php`
- **Never hardcode `/barbarabacelle3/`** in links or asset paths — the site root is `/`
- All interactive elements must have `aria-label` attributes for accessibility
- Content wrapper pattern: `<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">`
- Indent with **4 spaces** (no tabs)

### CSS (custom.css)

- Only for styles that Tailwind cannot handle (animations, scroll-behavior, etc.)
- Use section comment headers: `/* Section Name */`
- Keep this file minimal — prefer Tailwind utility classes in HTML

### JavaScript

- Vanilla ES6+ only — no jQuery, no frameworks, no npm packages
- Single entry point: `assets/js/main.js` (loaded at end of `<body>` via `footer.php`)
- Wrap all code in `DOMContentLoaded` listener
- Use `const`/`let` (never `var`)
- Use arrow functions for callbacks
- Use `document.getElementById()` / `document.querySelectorAll()` for DOM access
- camelCase for variables and functions
- Descriptive section comments: `// ---- Section Name ----`
- JSDoc comment block at top of file

### Tailwind Classes

- Mobile-first responsive: default → `sm:` → `md:` → `lg:`
- Use brand colors: `text-brand-dark`, `bg-brand-light`, `bg-brand`, `hover:bg-brand`
- Use brand fonts: `font-sans` (body text), `font-display` (headings)
- Common transitions: `transition-colors`, `transition-transform`, `transition-opacity`
- Sticky header: `sticky top-0 z-50`

## Naming Conventions

| Item              | Convention     | Example                    |
|-------------------|----------------|----------------------------|
| PHP files         | kebab-case     | `head.php`, `header.php`   |
| CSS files         | kebab-case     | `custom.css`               |
| JS files          | kebab-case     | `main.js`                  |
| HTML IDs          | kebab-case     | `menu-toggle`, `quien-soy` |
| JS variables      | camelCase      | `menuToggle`, `mobileMenu` |
| CSS classes       | Tailwind utils | `bg-brand-dark`, `py-20`   |
| Image files       | kebab-case     | `hero-background.webp`     |
| Section names     | Spanish        | `quien-soy`, `servicios`   |
| Doc log files     | `YYYYMMDD-HHMM-kebab-case.md` | `20260404-1630-menu-mobile.md` |

## Orchestrator & Sub-Agent System

This project uses a **sub-agent architecture** managed through `.opencode/agents/`.

### Agent routing

| Type | File | Responsibility |
|------|------|----------------|
| Orchestrator | `.opencode/agents/barbara_orchestrator.md` | Routes requests to the right sub-agent |
| Specialist | `.opencode/agents/code-reviewer.md` | Code quality and security review |
| Specialist | `.opencode/agents/ui-designer.md` | Visual design, UI, layout |
| Specialist | `.opencode/agents/fullstack-developer.md` | End-to-end feature implementation |
| Skill | `.opencode/skills/*.md` | Procedural checklists and repeatable audits |

### How it works

1. The **orchestrator** evaluates incoming requests against sub-agent descriptions
2. It delegates to the best-matching **specialist agent**
3. The specialist executes the task and reports back
4. The orchestrator returns the final result to the user

### Skill usage

Skills are loaded via the standard skill system:
```bash
npx skills add <repo-or-url> --skill <skill-name> --agent opencode --yes
```

Project skills can be stored in `.opencode/skills/` for project-specific procedures.

## Important Rules

1. **DO NOT touch `_MATERIALS/`** — reference-only folder, not part of the site
2. **DO NOT add npm/node_modules** — this project has no build toolchain
3. **DO NOT replace Tailwind CDN** with a build-based setup unless explicitly asked
4. **DO NOT add PHP frameworks** (Laravel, Symfony) — keep it simple procedural PHP
5. **Always test responsively** — the site must work on mobile (hamburger menu) and desktop
6. **Keep partials balanced** — `head.php` opens tags that `footer.php` closes
7. **Images go in `assets/imgs/`** — use optimized formats (WebP preferred, PNG/SVG fallback)
8. **All user-facing text is in Spanish**
9. **Escape output** — use `htmlspecialchars()` for any dynamic/user-supplied content in PHP
10. **Accessible markup** — include `aria-label` on interactive elements, `alt` on images
11. **Document implementations** — after completing a new feature or significant implementation, **always ask the user** whether to create a documentation log file in `documentation/`. If confirmed, create `documentation/YYYYMMDD-HHMM-feature-name.md`. If declined, skip and move on

## File Editing Patterns

### Adding a new page section
1. Add the `<section>` block in `index.php` inside `<main>`
2. Add navigation link in `inc/header.php` (both desktop and mobile menus)
3. Follow the existing pattern: `<section id="name" class="py-20">` with content wrapper

### Adding a new standalone page
1. Create `pagename.php` in root (e.g., `quien-soy.php`, `contactos.php`)
2. Include `inc/head.php` at top, `inc/footer.php` at bottom
3. Include `inc/header.php` after head
4. Update nav links in `inc/header.php` using clean URLs (`/pagename`)
5. The `.htaccess` rewrite rule handles `/pagename` → `pagename.php` automatically — no extra config needed

### Modifying brand theme
1. Edit `tailwind.config` in `inc/head.php` (colors, fonts, spacing)
2. If adding Google Fonts, update the `<link>` tag in `inc/head.php`

### Documenting a new implementation
1. After completing a feature or significant change, **ask the user** if they want a doc log
2. If confirmed, create `documentation/YYYYMMDD-HHMM-feature-name.md` (kebab-case, Italian time)
3. Include in the file: date, summary of changes, files modified, and any relevant notes
4. If the user declines, skip — do not create the file
