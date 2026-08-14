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
