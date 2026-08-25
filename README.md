# zuòi lùn Finance Mastery — TCH 302 · v3.2

A static, GitHub Pages-ready learning system for **Principles of Finance (TCH 302)**. The site teaches in English, places accurate Vietnamese translations beside key terms, and combines deep theory with active recall, worked solutions, timelines and exam practice.

## What is new in v3.2

- Original hand-painted hero landscape that puts emotional warmth before product framing.
- Softer, sentence-case hero typography and wider spacing so the opening message feels calm rather than corporate.
- A pastel peach, blush, lavender and sand story layered over the exact Duna core UI palette.
- Responsive art direction: the live headline remains readable while the painted scene becomes the visual focus on larger screens and a soft backdrop on mobile.

- Exact Duna-derived core palette throughout the interface: electric blue `#0000EE`, black `#000000`, brown-black `#292421`, and warm off-white `#F7F7F5`.
- Header mascot logo is now rendered as a real image with a CSS fallback and repository-relative URL, so it remains visible on GitHub Pages subpaths.

- Complete visual redesign using Duna's high-contrast editorial language: off-white canvas, black learning surfaces, electric-blue action color, oversized typography, generous spacing and modular grids.
- Shared **zuòi lùn** mascot, wordmark, favicon, Apple touch icon and installable web-app icons, aligned with the Accounting Mastery brand family.
- **144 section self-checks** — one after every conceptual deep-dive section in all 48 lessons.
- Every self-check includes an answer field, a question-specific guided answer, a reasoning checklist and a local confidence marker (`Review` / `Clear`).
- **48 inline applied knowledge checks** — one per lesson, with immediate feedback and an explanation for every option.
- Vietnamese key-term support is placed beside the relevant conceptual section and retained in the full bilingual term grid and glossary.
- Global search across lessons, questions, formulas and glossary terms (`Ctrl/⌘ K` or `/`).
- Header progress indicator and a clearer path from theory → self-check → guided practice → exam practice.
- Practice feedback now explains why each option is correct or incorrect instead of showing only the correct result.

## Complete learning content

- 7 modules and 48 deep lessons.
- 144 conceptual deep-dive sections.
- 144 direct model answers for section self-checks.
- 41 readable timelines. Long timelines wrap into labelled rows instead of being compressed onto one line.
- 144 guided problems: Easy, Intermediate and Advanced in every lesson.
- 600 practice questions with explanations, filters, mistakes and exam use.
- 39 typeset formula families plus interactive calculators.

## Core utilities preserved

- Dashboard, Learn, Practice and Question Bank
- Mistake Notebook and option-by-option feedback
- Notes, highlights, linked comments and export
- Personal flashcards with spaced-review controls
- Formula Sheet and calculators
- Exam Mode and Progress & Analytics
- Bilingual Glossary, Saved items, Sources and Settings
- LocalStorage persistence, hash routing and responsive layout

## Deploy to GitHub Pages

1. Upload **all files and folders in this package** to the repository root.
2. Open **Settings → Pages → Build and deployment**.
3. Choose **GitHub Actions**. The included workflow deploys automatically after a push to `main`.

You can also choose **Deploy from a branch → main / root** because this is a static HTML/CSS/JavaScript website. No package installation, framework build or backend is required.

## Important files

- `index.html` — application shell, brand metadata and script loading order.
- `styles.css` — responsive visual system and v3.0 editorial theme.
- `app.js` — routes, learning interactions, self-check persistence and global search.
- `section-answers.js` — 144 question-specific guided self-check answers.
- `data.js`, `study-content.js`, `deep-*.js` — original course data plus deep theory, timelines, formulas and guided problems.
- `assets/` — zuòi lùn logo and application icons.
- `.github/workflows/deploy-pages.yml` — GitHub Pages deployment workflow.

## Local data

Progress, answers, mistakes, self-check drafts, confidence markers, notes, highlights, flashcards and settings are stored in the learner's browser. Clearing browser storage resets those records.

Math formulas use MathJax from jsDelivr. An internet connection is required for MathJax rendering; the learning content and all other application logic are included in the repository.
