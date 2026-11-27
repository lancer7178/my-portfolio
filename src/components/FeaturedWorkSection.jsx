import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";

export default function FeaturedWorkSection({ projects = [] }) {
  if (!Array.isArray(projects) || projects.length === 0) return null;

  return (
    <section
      id="work"
      aria-labelledby="featured-title"
      className="relative py-16 sm:py-20 px-6 md:px-12 bg-dark text-white overflow-hidden scroll-mt-20"
    >
      <div
        aria-hidden="true"
        className="section-number top-10 left-0 sm:left-10 opacity-100"
        style={{ WebkitTextStroke: "1px rgba(34, 211, 238, 0.04)" }}
      >
        02
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading id="featured-title" label="Featured work" accent="Projects" italic description="Independent applications and client work across SaaS, booking, headless commerce and content platforms.">
          Featured Engineering
        </SectionHeading>

        <div className="flex flex-col gap-5 sm:gap-7">
          {projects.map((project, idx) => (
            <article
              key={project.slug}
              data-reveal
              className="group panel-hover grid min-w-0 items-center gap-5 overflow-hidden rounded-2xl border border-dark-elevated bg-dark-card/70 p-4 sm:gap-6 sm:rounded-3xl sm:p-6 lg:grid-cols-2 lg:gap-9"
            >
              {/* Image */}
              <Link
                href={`/work/${project.slug}`}
                aria-label={`Read the ${project.title} case study`}
                className={`relative block w-full aspect-16/10 rounded-xl sm:rounded-2xl overflow-hidden ${
                  idx % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt || `${project.title} preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="project-image object-cover object-top"
                  quality={85}
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark/70 via-transparent to-transparent" />
                <span aria-hidden="true" className="absolute top-3 left-3 mono text-[11px] text-white/70 bg-black/50 px-2.5 py-1 rounded-lg backdrop-blur-md border border-white/5">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </Link>

              {/* Content */}
              <div className={`min-w-0 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="mono text-[11px] text-accent-cyan tracking-[0.2em] mb-3">
                  {project.category}
                </p>
                <h3 className="text-2xl sm:text-3xl font-black font-outfit capitalize project-title text-txt-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-base text-txt-secondary leading-relaxed mb-5">
                  {project.description}
                </p>

                <p className="mb-3 text-sm text-txt-muted">{project.type}</p>
                {project.caseStudy?.role && (
                  <p className="mb-3 text-sm leading-relaxed text-txt-secondary"><span className="font-semibold text-txt-primary">My role:</span> {project.caseStudy.role}</p>
                )}
                {!!project.caseStudy?.built?.length && (
                  <ul className="mb-4 grid list-disc gap-x-5 gap-y-1 pl-4 text-sm leading-relaxed text-txt-secondary marker:text-accent-cyan sm:grid-cols-2">
                    {project.caseStudy.built.slice(0, 4).map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                )}
                <p className="mb-5 text-sm text-txt-muted">{project.technologies.join(" · ")}</p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`/work/${project.slug}`}
                    className="action action-primary"
                  >
                    Read case study
                    <FaArrowRight aria-hidden="true" data-action-icon="arrow" />
                  </Link>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action action-live"
                    >
                      Live <FaExternalLinkAlt aria-hidden="true" data-action-icon="external" />
                    </a>
                  )}
                  {project.status && <span className="text-sm text-txt-muted">{project.status}</span>}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action action-secondary"
                    >
                      GitHub <FaGithub aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <Link href="/projects" className="action action-primary mt-8">Browse All Projects <FaArrowRight aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
