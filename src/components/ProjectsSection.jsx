"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { FaStar, FaExternalLinkAlt } from "react-icons/fa";

const FALLBACK_DATA_URI =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=";

function ProjectImage({ src, alt }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 bg-linear-to-br from-dark-card to-dark-surface animate-pulse" />
      )}
      <Image
        src={imgSrc || FALLBACK_DATA_URI}
        alt={alt || "Project image"}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
        onError={() => {
          setImgSrc(FALLBACK_DATA_URI);
          setIsLoading(false);
        }}
        onLoad={() => setIsLoading(false)}
        quality={85}
      />
      <div className="absolute inset-0 bg-linear-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

export default function ProjectsSection({ projects = [] }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const numberRef = useRef(null);
  const gridRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    if (typeof window === "undefined") return;
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

  useEffect(() => {
    if (!gridRef.current || typeof window === "undefined") return;
    gsap.fromTo(
      gridRef.current.children,
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      },
    );
  }, [currentPage]);

  if (!Array.isArray(projects) || projects.length === 0) {
    return (
      <section className="py-20 text-center text-txt-muted bg-dark">
        No projects to display.
      </section>
    );
  }

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const displayedProjects = projects.slice(startIdx, startIdx + itemsPerPage);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 px-6 md:px-12 bg-linear-to-b from-dark via-[#05050A] to-dark text-white overflow-hidden"
    >
      <div
        ref={numberRef}
        className="section-number top-10 right-0 sm:right-10 opacity-100"
        style={{ WebkitTextStroke: "1px rgba(34, 211, 238, 0.04)" }}
      >
        04
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-12">
          <p className="mono text-xs text-accent-cyan tracking-[0.3em] mb-4">{`// PORTFOLIO`}</p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-outfit font-black tracking-tight leading-none">
            <span className="text-white italic">SELECTED </span>
            <span className="text-outline-accent italic">WORKS</span>
          </h2>
          <div className="flex gap-2 mt-6">
            <div className="h-1 w-16 bg-linear-to-r from-accent-cyan to-accent-indigo rounded-full" />
            <div className="h-1 w-8 bg-accent-indigo/50 rounded-full" />
            <div className="h-1 w-4 bg-accent-violet/40 rounded-full" />
          </div>
          <p className="mt-6 text-txt-muted max-w-2xl text-base leading-relaxed">
            Explore a curated collection of innovative projects showcasing
            cutting-edge web technologies, creative design, and seamless user
            experiences.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid gap-3 sm:gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {displayedProjects.map((project, idx) => (
            <div
              key={`${project.title}-${currentPage}`}
              className="group relative flex flex-col rounded-2xl bg-dark-card/80 border border-dark-elevated overflow-hidden hover:border-accent-cyan/25 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <ProjectImage src={project.image} alt={project.title} />
                <div className="absolute top-3 left-3 mono text-[10px] text-white/30 bg-black/40 px-2 py-1 rounded-md backdrop-blur-sm">
                  #{String(startIdx + idx + 1).padStart(2, "0")}
                </div>
                {project.bowmen && (
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FF6B9D]/10 border border-[#FF6B9D]/25 backdrop-blur-sm">
                    <Image
                      src="/bowmen.png"
                      alt="Bowmen"
                      width={12}
                      height={12}
                      className="object-contain"
                    />
                    <span className="mono text-[9px] text-[#FF6B9D]">
                      BOWMEN
                    </span>
                  </div>
                )}
              </div>

              <div className="flex-1 flex flex-col p-4 sm:p-6 gap-3">
                <div>
                  <h3 className="text-lg font-bold font-outfit text-txt-primary group-hover:text-accent-cyan transition-colors duration-300 mb-2">
                    {project.title || "Untitled Project"}
                  </h3>
                  <div className="h-0.5 w-8 bg-linear-to-r from-accent-cyan/50 to-accent-indigo/30 rounded-full group-hover:w-14 transition-all duration-500" />
                </div>

                <p className="text-sm text-txt-muted leading-relaxed line-clamp-3 grow">
                  {project.description}
                </p>

                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-xs ${i < (project.rating || 5) ? "text-accent-cyan" : "text-dark-elevated"}`}
                    />
                  ))}
                  <span className="mono text-[10px] text-txt-muted ml-1">
                    {project.rating || 5}.0
                  </span>
                </div>

                {project.technologies?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-dark-elevated">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={`${tech}-${i}`}
                        className="px-2.5 py-1 text-[10px] mono text-accent-cyan bg-accent-cyan/5 border border-accent-cyan/12 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2.5 py-1 text-[10px] mono text-txt-muted bg-dark-card border border-dark-elevated rounded-md">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                )}

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-linear-to-r from-accent-cyan/90 via-accent-indigo/85 to-accent-violet/80 hover:from-accent-cyan hover:via-accent-indigo hover:to-accent-violet transition-all duration-300 shadow-lg shadow-accent-indigo/12 hover:shadow-accent-indigo/25 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    View Project <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-8 sm:mt-12 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`px-5 py-2.5 rounded-full mono text-xs transition-all duration-300 ${currentPage === 1 ? "bg-dark-card text-txt-muted cursor-not-allowed" : "bg-dark-card text-accent-cyan border border-accent-cyan/25 hover:border-accent-cyan/50 hover:scale-105"}`}
            >
              ← PREV
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full text-sm font-bold transition-all duration-300 ${currentPage === page ? "bg-linear-to-r from-accent-cyan via-accent-indigo to-accent-violet text-white shadow-lg shadow-accent-indigo/25" : "bg-dark-card text-txt-muted hover:text-accent-cyan hover:bg-dark-elevated"}`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className={`px-5 py-2.5 rounded-full mono text-xs transition-all duration-300 ${currentPage === totalPages ? "bg-dark-card text-txt-muted cursor-not-allowed" : "bg-dark-card text-accent-cyan border border-accent-cyan/25 hover:border-accent-cyan/50 hover:scale-105"}`}
            >
              NEXT →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
