import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { screenCountLabel } from "@/data/figma";
import SectionHeading from "@/components/SectionHeading";

/* Tall phone screens lose too much when cropped into a wide card, so a mobile
   project without its own cover shows a row of its real screens instead. */
function ProjectCover({ project, isWide }) {
  if (!project.cover && project.layout === "mobile") {
    return (
      <span className="absolute inset-0 flex justify-center gap-3 sm:gap-4 px-5 pt-6 bg-linear-to-b from-white/6 to-transparent">
        {project.screens.slice(0, 4).map((screen, index) => (
          <span
            key={screen.src}
            className={`relative h-full flex-1 max-w-44 overflow-hidden rounded-t-xl border border-b-0 border-white/10 ${
              index === 3 ? "hidden sm:block" : ""
            }`}
          >
            <Image
              src={screen.src}
              alt={`${project.title}, ${screen.title}`}
              fill
              sizes="176px"
              className="object-cover object-top"
            />
          </span>
        ))}
      </span>
    );
  }

  return (
    <Image
      src={project.cover ?? project.screens[0].src}
      alt={`${project.title} design preview`}
      fill
      sizes={
        isWide
          ? "(min-width: 768px) 800px, 100vw"
          : "(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
      }
      className="project-image object-cover object-top"
    />
  );
}

function ProjectCard({ project, isWide, compact }) {
  return (
    <li className={isWide ? "md:col-span-2" : ""}>
      <Link
        href={`/ui-ux/${project.id}`}
        className="group panel-hover flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-dark-card"
      >
        <span
          className={`relative block overflow-hidden bg-dark-surface ${
            compact ? "h-40 sm:h-48" : "h-52 sm:h-60 lg:h-64"
          }`}
        >
          <ProjectCover project={project} isWide={isWide} />
        </span>
        <span
          className={`flex-1 flex flex-col ${compact ? "p-4 sm:p-5" : "p-5 sm:p-6"}`}
        >
          <span className="mono text-[11px] text-accent-cyan tracking-[0.15em]">
            {project.category}
            {project.role ? ` · ${project.role}` : ""}
          </span>
          <span className="mt-2 text-xl sm:text-2xl font-bold font-outfit project-title text-txt-primary">
            {project.title}
          </span>
          <span
            className={`mt-2 flex-1 text-sm text-txt-secondary leading-relaxed ${
              compact ? "line-clamp-2" : "line-clamp-3"
            }`}
          >
            {project.description}
          </span>
          {project.focus && !compact && (
            <span className="mt-3 text-sm text-txt-primary leading-relaxed">
              <span className="text-txt-secondary">Focus: </span>
              {project.focus}
            </span>
          )}
          <span className="mt-4 pt-4 flex items-center justify-between gap-3 border-t border-white/10 text-sm">
            <span className="text-txt-secondary">
              {project.platform ? `${project.platform} · ` : ""}
              {screenCountLabel(project)}
            </span>
            <span className="inline-flex items-center gap-2 font-semibold text-txt-primary group-hover:text-accent-cyan transition-colors duration-200">
              {project.caseStudy ? "View case study" : "Explore"}
              <FaArrowRight
                aria-hidden="true"
                className="text-xs motion-safe:group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </span>
          </span>
        </span>
      </Link>
    </li>
  );
}

/* ─── Main Section ─── */
export default function UiUxFigmaSection({ summary, projects, process = [], compact = false }) {
  return (
    <section id="uiux" aria-labelledby={compact ? "design-lab-title" : "design-projects-title"} className="relative overflow-hidden bg-linear-to-b from-dark via-[#05050A] to-dark">
      {compact && <span aria-hidden="true" className="section-number top-10 left-0 sm:left-10">04</span>}
      <div className="section-wrap section-space relative z-10">
        {compact ? (
          <SectionHeading id="design-lab-title" label="UI/UX Design" accent="Lab" italic description={summary}>Design</SectionHeading>
        ) : (
          <h2 id="design-projects-title" className="sr-only">Design Projects</h2>
        )}

        <ul className={`grid gap-5 md:grid-cols-2 ${compact ? "" : "lg:grid-cols-3"}`}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} isWide={!compact && index === 0} compact={compact} />
          ))}
        </ul>

        {compact && (
          <Link href="/ui-ux" className="action action-secondary mt-6">
            Explore the Design Lab <FaArrowRight aria-hidden="true" />
          </Link>
        )}

        {!!process.length && (
          <div className="mt-12">
            <h3 className="mb-5 text-2xl font-bold">Design Approach</h3>
            <ol className="grid gap-5 md:grid-cols-3">
              {process.map((item) => (
                <li key={item.title} className="rounded-xl border border-white/10 bg-dark-card p-5">
                  <h4 className="mb-2 text-lg font-bold">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-txt-secondary">{item.description}</p>
                  {!!item.points?.length && (
                    <ul className="mt-4 list-disc space-y-2 border-t border-white/10 pt-4 pl-4 text-sm text-txt-secondary marker:text-accent-cyan">
                      {item.points.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
}
