# Finance Mastery v0.8 QA Report

## Annotation rebuild
- Replaced the v0.7 per-render selection handler with a persistent global annotation layer modeled on Accounting Mastery v6.1.
- Floating toolbar keeps the browser text selection alive on toolbar click (`mousedown.preventDefault`).
- Quote anchoring uses exact selected text + prefix/suffix context.
- Highlight rendering uses `<mark>` segments and is applied immediately after saving.
- Four semantic colors: Important, Exam trap, Understood/example, Definition.
- Comment editor, highlight recoloring, deletion, and flashcard conversion integrated.
- Notes page provides module/color/search filtering, jump-to-theory, edit, flashcard conversion, backup export/import.
- Personal flashcards integrate with the existing Finance Mastery flashcard and spaced-review system.
- Legacy v0.7 annotation fields are migrated where possible.

## Static validation
- `node --check app.js`: PASS
- `node --check data.js`: PASS
- `node --check annotations.js`: PASS
- `index.html` loads `data.js` → `annotations.js` → `app.js` in dependency order.
- GitHub Pages remains static-only; no backend dependency added.
# Visual asset hotfix — v3.4

- Root cause confirmed: the page referenced `assets/...`, but the ZIP placed the visual files at repository root and did not include an `assets/` directory.
- Restored the complete `assets/` directory with the header logo, watercolor hero, favicon variants, app icons, and social preview image.
- Browser verification passed: the header logo renders at its intrinsic width and the hero artwork loads at 1586 × 992 with full opacity.
- GitHub Pages-safe relative paths are preserved.

# Accounting-style embedded asset fix — v3.5

- Compared the implementation against the supplied working Accounting Mastery ZIP.
- Embedded the header logo directly in `index.html`, matching Accounting Mastery's self-contained logo strategy.
- Converted the watercolor hero to an optimized WebP and embedded it directly in `styles.css`, matching Accounting Mastery's self-contained hero strategy.
- Removed the runtime hero `<img>` dependency, so the visible hero no longer relies on a repository subpath or an `assets/` request.
- Browser QA confirmed that the inline logo loads and that the inline hero background renders with `background-size: cover`.
