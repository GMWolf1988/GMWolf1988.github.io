# Portfolio Site

## Background

This portfolio site was launched in January 2026 to showcase my work and establish an online presence. Initially developed with vanilla JavaScript, Tailwind CSS, and HTML, it served as a straightforward landing page with links to my repositories.

As the project grew beyond a single page, I migrated the codebase to Astro. Alongside this transition, I've been progressively converting JavaScript to TypeScript—an ongoing effort to strengthen type safety and code maintainability.

I selected Astro because it combines static site performance with a scalable, component-based architecture. This allows for reusable layouts and components, cleaner content organisation, and easier long-term maintenance. Astro's minimal-JavaScript approach ensures the site remains fast and lightweight, which is essential for both performance and search engine optimisation.

Moving to Astro has provided a solid foundation and improved developer experience, making it simpler to expand and refine the portfolio as it evolves.

## Installation

Clone the repository and install dependencies:

```sh
git clone <repository-url>
cd portfolio
npm install
```

## Project Structure

```text
portfolio/
├── public/                      # Static assets served directly
├── src/
│   ├── assets/                 # Images and media files
│   ├── components/             # Reusable Astro components
│   │   ├── Brand.astro
│   │   ├── Gallery.astro
│   │   ├── Header.astro
│   │   ├── Image.astro
│   │   ├── ProjectCard.astro
│   │   └── ThemeSwitcherModal.astro
│   ├── content/                # Content collections
│   │   ├── config.ts
│   │   └── projects/           # Individual project entries
│   ├── js/                     # JavaScript utilities
│   │   └── script.js
│   ├── layouts/                # Page layouts
│   │   └── Layout.astro
│   ├── pages/                  # Route pages
│   │   ├── index.astro
│   │   └── projects/           # Dynamic project routes
│   ├── styles/                 # Global styles
│   │   └── global.css
│   └── util/                   # TypeScript utilities
│       ├── collection.ts
│       ├── projects.ts
│       └── string.ts
├── astro.config.mjs            # Astro configuration
├── package.json
└── tsconfig.json               # TypeScript configuration
```

## Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Learn More

For more information about Astro, visit the [official documentation](https://docs.astro.build).
