# SZLYANA — Your personal study space

A responsive, lavender-and-pink study dashboard built with HTML, CSS, and vanilla JavaScript. It is designed to deploy as a static site on GitHub Pages.

## Run locally
1. Extract the ZIP.
2. Open `index.html` in a modern browser, or serve the folder with a local static server.
3. Data is saved in that browser using `localStorage`.

## Deploy to GitHub Pages
1. Create a GitHub repository (for example, `szlyana`).
2. Upload the contents of this folder so `index.html` is at the repository root.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**, select your main branch and `/ (root)`, then save.
5. Wait for GitHub Pages to publish your site and open the URL it provides.

## Features working in this browser-only starter
- Responsive dashboard, sidebar navigation, mobile menu, and light/dark theme.
- Add multiple files, drag and drop, paste notes, and save public URLs as references.
- Local text extraction for `.txt`, `.md`, and `.csv`.
- Library search, subject/type filters, sorting, material viewer, and delete confirmation.
- Text-based starter flashcard generation, flipping, navigation, shuffle, and self-rated review scheduling.
- Basic source-statement practice quizzes, scoring, saved results, and mistake notebook.
- Editable personal notes, task planner, Pomodoro-style focus timer, progress page, and JSON data export.
- Reduced-motion support and keyboard focus styles.

## Important limitations
- **Unlimited uploads are not literally unlimited.** Browser storage, device storage, memory, and file sizes impose limits. Large file contents are not stored in localStorage; this starter stores extracted text for supported text files and metadata for other formats.
- PDF, DOCX, PPTX, and image uploads are saved as library entries, but text extraction/OCR is not included in this static starter. Add suitable parsers or a backend.
- Quiz/flashcard creation is a simple text-based helper, not a language model. Review generated content before relying on it.
- The AI Tutor explicitly labels its response as a demo. Real AI calls require a backend or serverless function that keeps API keys in server-side environment variables.
- Browser-local data does not sync between devices. Clearing browser data can remove the library and progress.
- A GitHub Pages URL is public. **It does not make the site private to one person.** For girlfriend-only access, use a private repository only for source-code privacy (published Pages access may still be public depending on your plan/setup) or put the site behind real authentication/access control. Do not put passwords or private API keys in frontend JavaScript.

## Suggested next implementation stage
1. Add a secure backend/serverless endpoint for AI requests.
2. Add authenticated cloud storage and database rules if cross-device sync or private materials are needed.
3. Add PDF/DOCX/PPTX extraction and OCR.
4. Improve question generation and add explicit edit/review screens for generated flashcards and quiz questions.

## Project structure
- `index.html`
- `css/styles.css`
- `css/responsive.css`
- `css/themes.css`
- `js/storage.js`
- `js/library.js`
- `js/flashcards.js`
- `js/quizzes.js`
- `js/focus-room.js`
- `js/navigation.js`
- `js/app.js`

External font loading uses Google Fonts; fallback fonts are configured.
