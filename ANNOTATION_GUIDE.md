# Finance Mastery v0.8 — Personal Annotation Layer

The annotation interaction is modeled on the user-provided `Accounting Mastery v6.1 Annotations` reference.

## How to use
1. Open any lesson in **Learn**.
2. Select a phrase, sentence, formula explanation, worked-example step, or theory paragraph.
3. A floating toolbar appears with:
   - **Highlight** — default yellow.
   - **Comment** — highlight + personal note.
   - **Flashcard** — turn the selection into a personal flashcard.
   - Four semantic highlight colors:
     - Yellow: Important
     - Red: Exam trap
     - Green: Understood / example
     - Blue: Definition
4. Click an existing highlight to edit its color/comment, create a flashcard, or delete it.
5. Use **Notes & Highlights** in the sidebar to search/filter all annotations and jump back to their lesson.
6. Personal flashcards appear in the normal **Flashcards** page and use the existing spaced-review workflow.

## Persistence and resilience
- Uses the existing `finance-mastery-state-v2` browser storage key, so v0.7 progress and personal study data remain compatible.
- New annotations store the exact selected quote plus nearby prefix/suffix text. This makes highlights more resilient when lesson wording is edited slightly in future releases.
- Existing v0.7 highlights are migrated automatically when possible.
- Export/import backup is available on the Notes page.

## Selection rule
For stable rendering, one annotation is limited to one readable theory block (for example one paragraph, list item, theory card, formula box, or callout). This is the same design principle used by the Accounting Mastery reference.
