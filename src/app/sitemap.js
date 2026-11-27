import { designProjects } from "@/data/figma";
import { profile } from "@/data/profile";
import { caseStudyProjects } from "@/data/projects";

export default function sitemap() {
  const paths = [
    "/",
    "/projects",
    ...caseStudyProjects.map(({ slug }) => `/work/${slug}`),
    "/ui-ux",
    ...designProjects.map(({ id }) => `/ui-ux/${id}`),
  ];
  return paths.map((path) => ({ url: new URL(path, profile.siteUrl).href }));
}
