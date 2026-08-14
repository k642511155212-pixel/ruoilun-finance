# Finance Mastery v0.5 — QA Report

## Static checks
- `node --check data.js`: PASS
- `node --check app.js`: PASS
- All question IDs unique: PASS
- All question concepts point to existing lessons: PASS
- All MCQ answer indexes valid: PASS
- All module lesson IDs resolve: PASS

## Render smoke test
A minimal browser-state harness rendered these routes without runtime errors:
- Dashboard
- Money: Functions & Payment System
- Financial Instruments
- Markets module
- Well-Run Markets & Regulation
- Risk module
- Two-Asset Portfolio Risk
- Practice
- Question Bank
- Exam Mode
- Sources

Past Exam Drill pool: **66 questions**
Past Exam Mode initialization: **20 questions / 25 minutes**

## Data counts
- Lessons: **69**
- Questions: **390**
- Past-exam normalized/adapted questions: **66**
- Formulas: **31**
- Flashcards / glossary entries: **42**
- Source records: **21**

## Source-policy checks
- New HKT files are labeled supporting notes, not official course answers.
- Prior papers are labeled exam-practice sources, not theory authority.
- Past-paper items with ambiguous scan wording were normalized/adapted with explicit assumptions.
- No external web knowledge was added to the academic content in this build.


## v0.6.2 visual QA
- Root-level hero/banner WebP assets added for GitHub Pages reliability.
- Inline SVG icons require no external assets.
- Image failure fallbacks prevent broken-alt-text layouts.
- Chapter banners and homepage hero are responsive.
