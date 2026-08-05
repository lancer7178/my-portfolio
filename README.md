# Abdulatif Selem — Portfolio

Personal portfolio site for Abdulatif Selem, a front-end developer. Built with the Next.js App Router and showcasing projects, skills, experience, and UI/UX design work.

**Live:** [abdullatif-selem.vercel.app](https://abdullatif-selem.vercel.app/)

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/) (CSS-first `@theme` config)
- [GSAP](https://gsap.com/) + [Framer Motion](https://www.framer.com/motion/) for animation
- [EmailJS](https://www.emailjs.com/) for the contact form

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
  app/            # Routes (App Router): layout, home page, /ui-ux
  components/     # Section and UI components
  data/           # Static content (projects, experience, about, figma)
  styles/         # Global CSS and Tailwind theme
public/           # Images, CV, and other static assets
```

## Sections

- Hero, About, Skills, Experience, and Projects on the home page
- A dedicated `/ui-ux` page for Figma design work and process
- Contact form wired to EmailJS
