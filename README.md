# Finance Mastery v0.7 — Personal Study Layer

New in v0.7: select theory text inside any lesson and choose **Highlight**, **Comment**, or **Flashcard**. Highlights/comments and personal flashcards are stored locally in the browser, can be reviewed in **Notes & Highlights**, and can be exported/imported as JSON backups. Personal study content never changes or replaces the source-grounded academic content.

Finance Mastery v0.6.3 — blank-page hotfix

Fixes missing runtime helpers and switches illustration URLs to root-relative-safe bundled assets for GitHub Pages.

# Finance Mastery v0.6.2 Visual Update

This build fixes the broken illustration issue by placing the five website illustration files directly in the repository root. When uploading to GitHub, make sure these files are present next to `index.html`:

- `fm-hero.webp`
- `fm-financial-system.webp`
- `fm-tvm.webp`
- `fm-risk.webp`
- `fm-ratios.webp`

The update also adds small module/lesson icons, chapter banner images, and a redesigned homepage hero section.

---

Finance Mastery v0.6.1

Illustrated interface update: added custom finance-themed illustrations to the dashboard, module pages, and lesson pages.

# Finance Mastery v0.5 — GitHub Pages

This build integrates the newly uploaded LTTC notes and past-exam archive while preserving the source hierarchy.

## What changed
- Version: **0.5**
- Lessons: **69** across 7 course modules
- Practice questions: **390**
- Past-exam normalized/adapted questions: **66**
- Formula objects: **31**
- Flashcards / glossary terms: **42**
- Source records: **21**

### New source layer
1. `LTTC_Financial market_HKT.pdf` — supporting notes for money, financial instruments, markets, institutions, regulation, and money-market instruments.
2. `LTTC_Time value and money_HKT.pdf` — supporting worked explanations for TVM, compounding, annuities, loans, NPV/IRR, and financing.
3. `5 bộ đề năm trước LTTC.pdf` — recurring exam-pattern archive.
4. `b8a68131-ba7a-483d-ad77-4694d59eb1e3.pdf` — scanned prior final.

## New learning features
- New lessons on **Money & Payment Systems**, **Financial Instruments**, **Well-Run Markets & Regulation**, and **Two-Asset Portfolio Risk**.
- Each major module shows **Past-exam signals**: recurring ways the topic is tested.
- Practice now includes **Past Exam Drill** as a separate origin filter.
- Exam Mode now includes a dedicated **Past-exam drill**.
- Expanded loan-payoff, amortization, continuous-compounding, money-market yield, portfolio-risk, and reverse-DuPont coverage.

## Source policy
Official lecture and instructor-commented Q&A remain primary. The HKT files are supporting notes and prior papers are exam evidence. Past-paper questions are normalized/adapted rather than treated as theory or copied blindly.

## GitHub Pages
Upload the **contents** of this folder to the repository root. Keep `.nojekyll`. If GitHub Pages is already configured for `main / (root)`, committing these files updates the existing site URL automatically.


See `ANNOTATION_GUIDE.md` for the new v0.7 personal study workflow.
