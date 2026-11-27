# Abdulatif Selem

Software Developer based in Cairo, Egypt. My work covers full-stack applications, backend systems, mobile development, and headless commerce.

[Live portfolio](https://abdullatif-selem.vercel.app) · [Project catalog](https://abdullatif-selem.vercel.app/projects) · [Design Lab](https://abdullatif-selem.vercel.app/ui-ux)

## Featured engineering work

| Project | Focus |
| --- | --- |
| [Parallax](https://abdullatif-selem.vercel.app/work/parallax) | Agency SaaS with Kanban, role-based access, client approvals and project-linked invoicing |
| [Rahlet Umrah](https://abdullatif-selem.vercel.app/work/rahlet-umrah) | Bilingual travel marketplace and visa-dependent booking workflow |
| [Underground Heritage](https://abdullatif-selem.vercel.app/work/underground-heritage) | Headless WooCommerce storefront with product variations, cart and demo checkout |
| [Aetheris](https://abdullatif-selem.vercel.app/work/aetheris) | Interactive graph editor with browser persistence and account-based cloud storage |
| [Sato Pharma](https://abdullatif-selem.vercel.app/work/sato-pharmacy) | Bilingual pharmaceutical catalog and corporate content |
| [Medizen](https://abdullatif-selem.vercel.app/work/medizen) | Healthcare website powered by headless WordPress |

## Local development

Use Node.js 20.9 or later and npm.

```bash
npm ci
npm run dev
```

Visit [localhost:3000](http://localhost:3000). Run `npm run typecheck` to check the content models, `npm run lint` to check the code, and `npm run build` to create the production build. Run `npm start` to serve that build locally.

## Project structure

- `src/app/` contains the homepage, project catalog, engineering case studies, Design Lab, and metadata routes.
- `src/components/` contains shared sections, filtering, contact interactions, architecture diagrams, and the screenshot viewer.
- `src/data/profile.js` holds the professional identity, links and CV reference.
- `src/data/engineering.js` holds capabilities, expertise, experience, and the development approach.
- `src/data/featured-projects.js` and `src/data/projects.js` hold the engineering projects, with optional case-study fields defined in `src/data/project-types.d.ts`.
- `src/data/figma.js` holds the Design Lab projects and gallery data. Screenshots and smaller previews live in `public/`.

Add a project’s verified categories and references with its data entry. Add an optional `caseStudy` to publish a page at `/work/<slug>`. Order featured entries in `featured-projects.js`. Preserve existing slugs so inbound links keep working.
