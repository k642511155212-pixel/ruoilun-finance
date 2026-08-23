# Finance Mastery — TCH 302 · v1.0

A static, GitHub Pages-ready study system for **Principles of Finance (TCH 302)**.

## Preserved product architecture

- Dashboard, Learn, Practice, Question Bank, Mistake Notebook
- Notes & Highlights, personal Flashcards, Formula Sheet
- Calculators, Exam Mode, Progress & Analytics, Glossary, Saved, Sources, Settings
- 7 modules, 48 lessons, 600 practice questions and 25 core formulas
- LocalStorage persistence; no backend and no build step
- Hash routing for GitHub Pages

## v1.0 study upgrades

- **All 48 lessons** now have an additional source-aligned study layer without replacing the original key principles.
- Hoàng Kim Thanh's supplied notes are treated as priority material where they overlap the course: Introduction to Finance, TVM, Financial Markets, Money Market and Security Valuation.
- Lessons use a clearer hierarchy: Key Principle → Deep Explanation → Key Terms → Typeset Formulas → Core Example → Step-by-step Applied Examples → Exam Traps → Exam Focus.
- Formula notation is rendered with **MathJax** instead of raw code-like strings. Every formula includes variable definitions, when-to-use guidance and an exam warning.
- Notes & Highlights is rebuilt as a searchable study notebook with statistics, filters, edit/delete, contextual jump-back and JSON export.
- Annotation anchoring is more resilient and can handle selections across inline formatting inside one logical paragraph/block.
- **Mark lesson complete no longer re-renders the page**, so clicking it does not jump the user back to the top.

## Deploy

1. Upload all files to the repository root.
2. GitHub → **Settings → Pages**.
3. Deploy from the `main` branch / root.
4. Open the Pages URL.

No `npm install`, build command or server is required.

> Formula rendering loads MathJax from jsDelivr, so the published page needs normal Internet access to display mathematical notation.
