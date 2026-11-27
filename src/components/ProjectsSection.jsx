import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import ProjectCatalog from "@/components/ProjectCatalog";
import SectionHeading from "@/components/SectionHeading";
import { projectFilters } from "@/data/catalog";

export default function ProjectsSection({ entries, standalone = false }) {
  const id = standalone ? "catalog" : "projects";
  return (
    <section id={id} aria-labelledby={standalone ? "projects-page-title" : "selected-title"} className="relative overflow-hidden bg-linear-to-b from-dark via-[#05050A] to-dark scroll-mt-8">
      {!standalone && <span aria-hidden="true" className="section-number top-10 right-0 sm:right-10">03</span>}
      <div className="section-wrap section-space relative z-10">
        {!standalone && <SectionHeading id="selected-title" label="Selected Work" accent="Projects" italic description="Additional development work, including open-source utilities, mobile, corporate websites, and independent experiments.">Selected Software</SectionHeading>}
        <ProjectCatalog entries={entries} filters={projectFilters} id={id} />
        {!standalone && <Link href="/projects" className="action action-secondary mt-6">See the Complete Project Catalog <FaArrowRight aria-hidden="true" /></Link>}
      </div>
    </section>
  );
}
