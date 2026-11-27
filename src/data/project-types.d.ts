export type ProjectFilter = "full-stack" | "backend" | "saas" | "commerce" | "mobile" | "cms" | "web" | "open-source" | "design";

export interface ArchitectureNode {
  title: string;
  detail: string;
}

export interface ArchitectureFlow {
  title: string;
  nodes: [ArchitectureNode, ArchitectureNode, ...ArchitectureNode[]];
}

export interface EngineeringCaseStudy {
  role?: string;
  requirements?: string;
  architecture?: ArchitectureFlow[];
  stack?: { layer: string; technologies: string[] }[];
  built?: string[];
  api?: string;
  data?: string;
  businessLogic?: string;
  challenges?: { title: string; detail: string }[];
  security?: string;
  performance?: string;
  decisions?: { title: string; detail: string }[];
  outcome?: string;
  contribution?: { design: string[]; frontend: string[] };
  journey?: { title: string; detail: string; src: string; alt: string }[];
  mobile?: { title: string; description: string; src: string }[];
}

export interface Project {
  title: string;
  slug: string;
  featured?: boolean;
  category: string;
  type?: string;
  filters: ProjectFilter[];
  description: string;
  image: string;
  imageAlt?: string;
  link?: string;
  originalLink?: string;
  github?: string | null;
  status?: string;
  technologies: string[];
  agency?: "design-ways" | "bowmen";
  caseStudy?: EngineeringCaseStudy;
}

export interface CatalogEntry {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt?: string;
  filters: ProjectFilter[];
  href?: string;
  link?: string;
  github?: string | null;
  status?: string;
  technologies?: string[];
  agency?: Project["agency"];
}
