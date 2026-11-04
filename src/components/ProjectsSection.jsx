"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";

const FALLBACK_DATA_URI =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=";

const AGENCIES = {
  bowmen: { label: "BOWMEN", logo: "/logo-company/bowmen.png" },
  "design-ways": { label: "DESIGN WAYS", logo: "/logo-company/design-ways.png" },
};

// Six fill two rows of the desktop grid. Phones show one column, so four per page.
const PER_PAGE = 6;
const PER_PAGE_PHONE = 4;
const PHONE_QUERY = "(max-width: 767px)";
// Technologies shown on a card; any others are summed up as "+2". Three fit on one line.
const MAX_TECH = 3;

const subscribeToPhone = (onChange) => {
  const query = window.matchMedia(PHONE_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
};

function useIsPhone() {
  return useSyncExternalStore(
    subscribeToPhone,
    () => window.matchMedia(PHONE_QUERY).matches,
    () => false,
  );
}

function ProjectImage({ src, alt }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 bg-linear-to-br from-dark-card to-dark-surface animate-pulse" />
      )}
      <Image
        src={imgSrc || FALLBACK_DATA_URI}
        alt={alt || "Project image"}
        fill
        sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
        className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
        onError={() => {
          setImgSrc(FALLBACK_DATA_URI);
          setIsLoading(false);
        }}
        onLoad={() => setIsLoading(false)}
        quality={85}
      />
    </>
  );
}

function ProjectCard({ project }) {
  const agency = AGENCIES[project.agency];
  const technologies = project.technologies ?? [];
  const hiddenTech = technologies.slice(MAX_TECH);

  const image = (
    <>
      <ProjectImage src={project.image} alt={`${project.title} preview`} />
      <span className="absolute inset-0 bg-linear-to-t from-dark-card/50 via-transparent to-transparent" />
    </>
  );
  const imageClass =
    "relative block w-full aspect-2/1 overflow-hidden border-b border-dark-elevated";

  return (
    <article className="group relative flex flex-col rounded-2xl bg-dark-card/70 border border-dark-elevated overflow-hidden hover:border-accent-cyan/30 transition-colors duration-500">
      {/* The title and buttons below hold the same links for keyboard users. */}
      {project.caseStudy ? (
        <Link
          href={`/work/${project.slug}`}
          tabIndex={-1}
          aria-hidden="true"
          className={imageClass}
        >
          {image}
        </Link>
      ) : project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden="true"
          className={imageClass}
        >
          {image}
        </a>
      ) : (
        <div className={imageClass}>{image}</div>
      )}

      {agency && (
        <span className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 border border-white/15 backdrop-blur-sm">
          <Image
            src={agency.logo}
            alt=""
            width={12}
            height={12}
            className="object-contain"
          />
          <span className="mono text-[9px] text-white">{agency.label}</span>
        </span>
      )}

      <div className="flex-1 flex flex-col p-5">
        {project.category && (
          <p
            title={project.category}
            className="mono text-[10px] text-accent-cyan tracking-[0.15em] truncate"
          >
            {project.category}
          </p>
        )}
        <h3 className="mt-2 text-xl font-bold font-outfit capitalize text-txt-primary group-hover:text-accent-cyan transition-colors duration-300">
          {project.title || "Untitled Project"}
        </h3>
        {/* The wrapper grows to keep the tech and buttons level across a row.
            The text itself mustn't, or it spills past its three-line limit. */}
        <div className="mt-2 flex-1">
          <p className="text-sm text-txt-secondary leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {technologies.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {technologies.slice(0, MAX_TECH).map((tech) => (
              <li
                key={tech}
                className="px-2.5 py-1 text-[10px] mono text-accent-cyan bg-accent-cyan/5 border border-accent-cyan/12 rounded-md"
              >
                {tech}
              </li>
            ))}
            {hiddenTech.length > 0 && (
              <li
                title={hiddenTech.join(", ")}
                className="px-2.5 py-1 text-[10px] mono text-txt-secondary bg-dark-card border border-dark-elevated rounded-md"
              >
                <span aria-hidden="true">+{hiddenTech.length}</span>
                <span className="sr-only">{hiddenTech.join(", ")}</span>
              </li>
            )}
          </ul>
        )}

        <div className="mt-4 pt-4 border-t border-dark-elevated">
          <div className="flex flex-wrap items-center gap-2">
            {project.caseStudy && (
              <Link
                href={`/work/${project.slug}`}
                aria-label={`Read the ${project.title} case study`}
                className="group/btn inline-flex items-center gap-2 min-h-11 px-4 rounded-full font-semibold text-sm text-white bg-linear-to-r from-accent-cyan/90 via-accent-indigo/85 to-accent-violet/80 hover:from-accent-cyan hover:via-accent-indigo hover:to-accent-violet transition-all duration-300"
              >
                Case study
                <FaArrowRight
                  aria-hidden="true"
                  className="text-xs transition-transform group-hover/btn:translate-x-0.5"
                />
              </Link>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live, opens in a new tab`}
                className="inline-flex items-center gap-2 min-h-11 px-4 rounded-full font-semibold text-sm text-accent-cyan bg-accent-cyan/5 border border-accent-cyan/15 hover:border-accent-cyan/50 hover:bg-accent-cyan/10 transition-all duration-300"
              >
                Live
                <FaExternalLinkAlt aria-hidden="true" className="text-[10px]" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function Pagination({ page, totalPages, onPageChange }) {
  const stepClass = (isDisabled) =>
    `inline-flex items-center gap-2 min-h-11 min-w-11 justify-center sm:px-5 rounded-full mono text-xs border transition-colors duration-300 ${
      isDisabled
        ? "bg-dark-card text-txt-muted border-dark-elevated cursor-not-allowed"
        : "bg-dark-card text-accent-cyan border-accent-cyan/25 hover:border-accent-cyan/50"
    }`;

  return (
    <nav
      aria-label="Selected work pages"
      className="flex flex-wrap items-center justify-center gap-2"
    >
      {/* aria-disabled, not disabled, so keyboard focus isn't lost on the last page. */}
      <button
        type="button"
        onClick={() => onPageChange(page - 1)}
        aria-disabled={page === 1}
        aria-label="Previous page"
        className={stepClass(page === 1)}
      >
        <FaArrowLeft aria-hidden="true" className="text-[10px]" />
        <span className="hidden sm:inline">PREV</span>
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => {
        const isCurrent = number === page;
        return (
          <button
            key={number}
            type="button"
            onClick={() => onPageChange(number)}
            aria-current={isCurrent ? "page" : undefined}
            aria-label={`Page ${number}`}
            className={`w-11 h-11 rounded-full text-sm font-bold transition-colors duration-300 ${
              isCurrent
                ? "bg-linear-to-r from-accent-cyan via-accent-indigo to-accent-violet text-black shadow-lg shadow-accent-indigo/25"
                : "bg-dark-card border border-dark-elevated text-txt-secondary hover:text-accent-cyan hover:border-accent-cyan/40"
            }`}
          >
            {number}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => onPageChange(page + 1)}
        aria-disabled={page === totalPages}
        aria-label="Next page"
        className={stepClass(page === totalPages)}
      >
        <span className="hidden sm:inline">NEXT</span>
        <FaArrowRight aria-hidden="true" className="text-[10px]" />
      </button>
    </nav>
  );
}

export default function ProjectsSection({ projects = [] }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const numberRef = useRef(null);
  const gridRef = useRef(null);
  const isFirstRender = useRef(true);
  const isPhone = useIsPhone();
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = isPhone ? PER_PAGE_PHONE : PER_PAGE;
  const totalPages = Math.max(1, Math.ceil(projects.length / perPage));
  // Resizing can leave fewer pages than the one being viewed.
  const page = Math.min(currentPage, totalPages);
  const startIndex = (page - 1) * perPage;
  const pageProjects = projects.slice(startIndex, startIndex + perPage);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(numberRef.current, {
        y: -80,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
      gsap.fromTo(
        headerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Fade the new page in, but not on first load, when it's off screen anyway.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(
      gridRef.current?.children || [],
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.45,
        stagger: 0.05,
        ease: "power3.out",
        clearProps: "transform,opacity",
      },
    );
  }, [page]);

  if (!Array.isArray(projects) || projects.length === 0) {
    return (
      <section className="py-20 text-center text-txt-muted bg-dark">
        No projects to display.
      </section>
    );
  }

  const goToPage = (nextPage) => {
    if (nextPage < 1 || nextPage > totalPages || nextPage === page) return;
    setCurrentPage(nextPage);
    // The controls sit below the grid, so bring the new page's first card back.
    gridRef.current?.scrollIntoView({ block: "start" });
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-16 sm:py-20 px-6 md:px-12 bg-linear-to-b from-dark via-[#05050A] to-dark text-white overflow-hidden scroll-mt-20"
    >
      <div
        ref={numberRef}
        className="section-number top-10 right-0 sm:right-10 opacity-100"
        style={{ WebkitTextStroke: "1px rgba(34, 211, 238, 0.04)" }}
      >
        03
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-10">
          <p className="mono text-xs text-accent-cyan tracking-[0.3em] mb-4">{`// SELECTED WORK`}</p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-outfit font-black tracking-tight leading-none">
            <span className="text-white italic">SELECTED </span>
            <span className="text-outline-accent italic">WORK</span>
          </h2>
          <div className="flex gap-2 mt-6">
            <div className="h-1 w-16 bg-linear-to-r from-accent-cyan to-accent-indigo rounded-full" />
            <div className="h-1 w-8 bg-accent-indigo/50 rounded-full" />
            <div className="h-1 w-4 bg-accent-violet/40 rounded-full" />
          </div>
          <p className="mt-6 text-txt-secondary max-w-2xl text-base leading-relaxed">
            Client and independent work across corporate, healthcare, commerce
            and interactive web.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3 scroll-mt-8"
        >
          {pageProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-8 flex flex-col items-center gap-3">
            <Pagination
              page={page}
              totalPages={totalPages}
              onPageChange={goToPage}
            />
            <p
              aria-live="polite"
              className="mono text-[11px] text-txt-secondary"
            >
              Showing {startIndex + 1}–{startIndex + pageProjects.length} of{" "}
              {projects.length} projects
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
