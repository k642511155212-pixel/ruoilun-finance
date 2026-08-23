# Finance Mastery v1.0 — Content & Function Audit

## Product principles preserved

- Seven-module TCH 302 structure.
- Vanilla HTML/CSS/JavaScript SPA suitable for GitHub Pages.
- Hash routing and local-browser persistence.
- Learn, Practice, Question Bank, Mistake Notebook, Notes & Highlights, Flashcards, Formula Sheet, Calculators, Exam Mode, Progress & Analytics, Glossary, Saved, Sources and Settings.
- Immediate practice feedback, mistake capture, concept-review links and timed exam mode.
- Existing key principles and the 600-question bank remain intact.

## Theory revision standard

Every lesson keeps its original key principle, then adds a richer study layer:

1. learning objective;
2. key principle;
3. priority-source indicator where applicable;
4. numbered deep explanation;
5. bilingual key terms;
6. typeset formula(s), variables and usage conditions;
7. original course/worked example;
8. additional step-by-step applied examples;
9. common exam traps;
10. exam focus and source provenance.

All **48/48 lessons** have enhancement records in `study-content.js`.

## Hoàng Kim Thanh priority pass

The following supplied study-note groups are explicitly prioritized where relevant:

- Chapter 0 — Introduction to Finance;
- Chapter 2 / 2.1 — Time Value of Money;
- Chapter 3 — Financial Markets;
- Money Market / Money Market Securities comparison / Treasury Bill Auctions;
- Chapter 4 — Valuation of Securities.

Personal contact information that appeared in the study files is intentionally not reproduced in the website.

## Formula-system correction

Previous formula cards displayed equations as raw text/code. v1.0 adds:

- MathJax display notation;
- proper fractions, summations, exponents and subscripts;
- responsive horizontal overflow for long equations;
- variable dictionary;
- “Use when” guidance;
- “Exam trap / Watch out” guidance.

## Notes-system correction

The old note view was essentially a simple card list. v1.0 adds:

- overview statistics;
- search;
- module filter;
- annotation-type filter;
- structured note editor in a dialog;
- optional linked highlight color;
- edit/delete;
- open exact lesson context;
- JSON export;
- improved multi-node quote anchoring inside a logical text block.

## Scroll-jump bug

Root cause: the old completion action called the SPA `render()` function, whose normal behavior resets scroll to the top.

Fix: `Mark lesson complete` now updates LocalStorage and the button state **in place without calling render()**. Other actions that need re-rendering can use the `preserveScroll` option.

## Validation performed

- JavaScript syntax checked with Node for `data.js`, `study-content.js`, `annotations.js` and `app.js`.
- 7 modules / 48 lessons / 600 questions / 25 formula records retained.
- 48/48 lessons have enhancement records.
- Question IDs remain unique and existing question data is not rewritten by the v1.0 study layer.
- Static deployment requires no backend or compilation.
