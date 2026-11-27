import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import ProjectsSection from "@/components/ProjectsSection";
import { designCatalogEntries, toCatalogEntries } from "@/data/catalog";
import { projects } from "@/data/projects";
import { pageMetadata } from "@/data/seo";

const description = "Browse full-stack applications, backend systems, commerce, mobile, open-source work, and selected product design studies.";

export const metadata = pageMetadata({ path: "/projects", title: "Software Projects", description });

export default function ProjectsPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <header className="section-wrap pt-10 sm:pt-16">
        <Link href="/#work" className="action action-text !px-0 text-accent-cyan"><FaArrowLeft aria-hidden="true" /> Featured Projects</Link>
        <h1 id="projects-page-title" className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">Project Catalog</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-txt-secondary">{description}</p>
      </header>
      <ProjectsSection standalone entries={[...toCatalogEntries(projects), ...designCatalogEntries]} />
    </main>
  );
}
