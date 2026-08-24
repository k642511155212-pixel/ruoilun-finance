# Finance Mastery — TCH 302 · v2.0

A static, GitHub Pages-ready study system for **Principles of Finance (TCH 302)**.

## What v2.0 contains

- 7 modules and 48 lessons; the original key principles and lesson routes are preserved.
- A three-part **Conceptual Deep Dive** in every lesson: mechanism, application logic and diagnostic reasoning.
- **41 readable timelines** for cash flows, loans, annuities, projects, securities, market processes, retirement and the cash conversion cycle.
- Timelines are split into clearly labelled rows (and into fewer columns on small screens) rather than forcing every event onto one line.
- **144 guided problems** embedded in lessons: exactly 3 per lesson at Easy, Intermediate and Advanced levels.
- Every guided problem includes a starting hint, numbered solution method, final answer and explanation of why the method works.
- 600 existing practice questions remain available in Practice, Question Bank, Mistake Notebook and Exam Mode.
- Formula Sheet expanded from 25 to **39 typeset formulas**, including growing annuity, rate conversion, loan balance, holding-period return, portfolio risk and firm-health formulas.
- Source clarifications correct overstatements found in study notes without discarding the course framing.

## Core utilities preserved

- Dashboard, Learn, Practice, Question Bank and Mistake Notebook
- Notes & Highlights with linked context, search, filters, editing and export
- Personal Flashcards, Formula Sheet and Calculators
- Exam Mode, Progress & Analytics, Glossary, Saved, Sources and Settings
- LocalStorage persistence, hash routing and zero-build GitHub Pages deployment
- In-place lesson completion; marking a lesson complete does not jump to the top

## Files added in v2.0

- `deep-content-core.js` — formula expansion and safe merge helpers
- `deep-intro.js`
- `deep-tvm.js`
- `deep-personal.js`
- `deep-markets.js`
- `deep-valuation.js`
- `deep-risk.js`
- `deep-health.js`

The new files extend `data.js` and `study-content.js`; they do not overwrite the original question bank or principles.

## Deploy to GitHub Pages

1. Upload **all files in this folder** to the repository root.
2. In GitHub, open **Settings → Pages**.
3. Select deployment from the `main` branch and the repository root.
4. Open the generated Pages URL.

No `npm install`, build command or backend is required. Formula rendering uses MathJax from jsDelivr, so an internet connection is required for the typeset equation graphics.
