# Tech Stack: Descomplica DEV Na Gringa

## Frontend
- **HTML5:** Semantic HTML structure for SEO and accessibility.
- **Tailwind CSS 4.1.x:** Utility-first CSS framework for styling, configured with custom brand colors (`brand-dark`, `brand-blue`, `brand-cyan`, `brand-indigo`) and the 'Outfit' font family.
- **JavaScript (Vanilla):** Minimal JavaScript for interactive elements (e.g., mobile menu).

## Development & Tooling
- **Deno:** Used as the primary task runner and local server.
    - `deno task build`: Executes Tailwind CLI via `npm:tailwindcss@3.4.17`.
    - `deno task start`: Serves the static files using `@std/http/file_server`.

## Project Structure
- `index.html`: Main entry point.
- `css/input.css` & `css/output.css`: Tailwind source and generated styles.
- `js/main.js`: Client-side logic.
- `img/`: Optimized assets (WebP format prioritized).
