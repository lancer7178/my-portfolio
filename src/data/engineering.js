/** @typedef {{ id: string, label: string, skills: string[] }} SkillCategory */
/** @typedef {{ id: string, title: string, description: string, summary?: string }} Capability */

/** @type {Capability[]} */
export const capabilities = [
  { id: "full-stack", title: "Full-Stack Development", summary: "Full-Stack Development", description: "Build end-to-end web applications, SaaS products and business management systems." },
  { id: "backend", title: "Backend & API Development", summary: "Backend & APIs", description: "Develop server-side applications, REST APIs, business logic and integrations with Node.js and Express.js." },
  { id: "database", title: "Database Management", description: "Model application data and relationships, and manage persistent storage in relational databases." },
  { id: "mobile", title: "Mobile Application Development", summary: "Mobile Development", description: "Develop cross-platform mobile applications with Flutter and React Native." },
  { id: "cms", title: "CMS Development", summary: "CMS & E-commerce", description: "Build content-driven sites with WordPress and Elementor, and connect headless CMS content to custom applications through REST APIs." },
  { id: "commerce", title: "E-commerce Development", description: "Develop WooCommerce storefronts with catalogs, product variations, carts and checkout workflows." },
  { id: "performance", title: "Performance & Optimization", description: "Improve Core Web Vitals, responsive behavior, accessibility and technical SEO." },
  { id: "product", title: "Product Engineering", description: "Translate product requirements into maintainable software with user-centered interactions." },
];

/** @type {SkillCategory[]} */
export const skillCategories = [
  { id: "backend", label: "Backend Development", skills: ["Node.js", "Express.js", "REST API Development", "API Integration", "Server-Side Development", "Business Logic"] },
  { id: "full-stack", label: "Frontend Development", skills: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Redux Toolkit"] },
  { id: "mobile", label: "Mobile Development", skills: ["React Native", "Flutter", "Dart"] },
  { id: "database", label: "Databases & Storage", skills: ["PostgreSQL", "MySQL", "Firebase", "Relational Database Concepts", "Data Management"] },
  { id: "cms", label: "CMS & E-commerce", skills: ["WordPress", "Elementor", "WooCommerce", "WordPress REST API", "Headless WordPress", "Headless CMS"] },
  { id: "tools", label: "Developer Tools & Deployment", skills: ["Git", "GitHub", "Docker", "Vercel", "Debugging", "Browser Developer Tools"] },
  { id: "performance", label: "Performance & Optimization", skills: ["Core Web Vitals", "Technical SEO", "Responsive Design", "Accessibility", "Web Performance"] },
  { id: "product", label: "UI/UX & Product Design", skills: ["Figma", "UI/UX Design", "Design Systems", "Prototyping", "User-Centered Design", "Framer Motion", "GSAP"] },
];

/** @typedef {{ company: string, role: string, start: string, end?: string, location: string, bullets: string[], technologies: string[], projects: { title: string, href: string }[] }} Experience */

/** @type {Experience[]} */
export const experiences = [
  {
    company: "Design Ways",
    role: "Software Developer",
    start: "2026-07",
    location: "Cairo, Egypt",
    bullets: [
      "Develop and maintain responsive React and Next.js applications, from implementation through debugging and refinement.",
      "Contribute to backend features, REST API integrations and cross-platform mobile development with Flutter.",
      "Translate business and product requirements into working features, applying UI/UX principles to improve usability and accessibility.",
    ],
    technologies: ["React", "Next.js", "Flutter", "REST APIs", "Figma"],
    projects: [
      { title: "Sato Pharma", href: "/work/sato-pharmacy" },
      { title: "Shara", href: "/ui-ux/shara" },
      { title: "Rahlet Umrah", href: "/work/rahlet-umrah" },
    ],
  },
  {
    company: "Bowmen Marketing",
    role: "Front-End Developer",
    start: "2025-01",
    end: "2026-03",
    location: "Cairo, Egypt",
    bullets: [
      "Built and maintained 5+ responsive marketing websites with Next.js and Tailwind CSS.",
      "Improved performance scores by 30% across company websites through Core Web Vitals optimization.",
      "Integrated REST APIs and headless WordPress for dynamic content and bilingual websites.",
      "Designed and built the Underground Heritage WooCommerce storefront with a demo checkout.",
    ],
    technologies: ["Next.js", "Tailwind CSS", "REST APIs", "WordPress", "WooCommerce"],
    projects: [
      { title: "Medizen", href: "/work/medizen" },
      { title: "Underground Heritage", href: "/work/underground-heritage" },
    ],
  },
];

export const buildProcess = [
  { title: "Understand the Problem", detail: "Identify business requirements, user needs, key workflows and technical constraints." },
  { title: "Plan the Architecture", detail: "Define application boundaries, data flow, integrations and technology choices before implementation." },
  { title: "Develop the Solution", detail: "Build maintainable frontend, backend, mobile and CMS features according to the project’s requirements." },
  { title: "Integrate & Validate", detail: "Connect APIs, databases and external services. Check business rules, invalid inputs and failure states." },
  { title: "Test & Optimize", detail: "Verify behavior, performance, accessibility and responsive layouts across devices." },
  { title: "Deploy & Improve", detail: "Deploy the application and use feedback and real requirements to guide the next iteration." },
];

export const aboutIntro = [
  "I’m a software developer working across full-stack web applications, backend systems and cross-platform mobile development. I use React and Next.js for application interfaces, Node.js and Express.js for server-side work, and relational databases for persistent application data.",
  "My work spans agency operations, booking, corporate platforms and headless commerce. I work with WordPress, Elementor and WooCommerce when a project needs a content or commerce platform, and with Flutter and React Native for mobile development.",
  "My background in UI/UX and product design helps me translate requirements into usable software, collaborate with designers and make accessibility part of implementation.",
];

export const designLabDescription =
  "An exploration of product design, design systems, and user-centered experiences that complement my software engineering practice.";
