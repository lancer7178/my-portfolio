import { designProjects } from "./figma";

/** @type {{ id: import("./project-types").ProjectFilter, label: string }[]} */
export const projectFilters = [
  { id: "full-stack", label: "Full-Stack" },
  { id: "backend", label: "Backend" },
  { id: "saas", label: "SaaS" },
  { id: "commerce", label: "E-commerce" },
  { id: "mobile", label: "Mobile" },
  { id: "cms", label: "CMS" },
  { id: "web", label: "Web Applications" },
  { id: "open-source", label: "Open Source" },
  { id: "design", label: "Design" },
];

/**
 * The catalogue only receives fields it needs for filtering and cards.
 * @param {import("./project-types").Project[]} projects
 * @returns {import("./project-types").CatalogEntry[]}
 */
export function toCatalogEntries(projects) {
  return projects.map(({ slug, title, category, description, image, imageAlt, filters, link, github, caseStudy, status, technologies, agency }) => ({
    id: slug, title, category, description, image, imageAlt, filters, link, github, status, technologies, agency,
    href: caseStudy ? `/work/${slug}` : undefined,
  }));
}

/** @type {import("./project-types").CatalogEntry[]} */
export const designCatalogEntries = designProjects.map((project) => ({
  id: `design-${project.id}`,
  title: project.title,
  category: `Design Lab · ${project.category}`,
  description: project.description,
  image: project.cover ?? project.screens[0].src,
  imageAlt: `${project.title} design preview`,
  filters: ["design"],
  href: `/ui-ux/${project.id}`,
}));
