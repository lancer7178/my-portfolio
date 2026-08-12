"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const FALLBACK_DATA_URI =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=";

export default function FeaturedWorkSection({ projects = [] }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const numberRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

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
      gsap.fromTo(
        cardsRef.current?.children || [],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  if (!Array.isArray(projects) || projects.length === 0) return null;

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative py-20 px-6 md:px-12 bg-dark text-white overflow-hidden scroll-mt-20"
    >
      <div
        ref={numberRef}
        className="section-number top-10 left-0 sm:left-10 opacity-100"
        style={{ WebkitTextStroke: "1px rgba(34, 211, 238, 0.04)" }}
      >
        01
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div ref={headerRef} className="mb-14 sm:mb-20">
          <p className="mono text-xs text-accent-cyan tracking-[0.3em] mb-4">{`// FEATURED WORK`}</p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-outfit font-black tracking-tight leading-none">
            <span className="text-white italic">FEATURED </span>
            <span className="text-outline-accent italic">WORK</span>
          </h2>
          <div className="flex gap-2 mt-6">
            <div className="h-1 w-16 bg-linear-to-r from-accent-cyan to-accent-indigo rounded-full" />
            <div className="h-1 w-8 bg-accent-indigo/50 rounded-full" />
            <div className="h-1 w-4 bg-accent-violet/40 rounded-full" />
          </div>
          <p className="mt-6 text-txt-muted max-w-2xl text-base leading-relaxed">
            The three products that best represent how I think and build — from
            SaaS systems to privacy-first UX and client-side engineering.
          </p>
        </div>

        <div ref={cardsRef} className="flex flex-col gap-8 sm:gap-12">
          {projects.map((project, idx) => (
            <article
              key={project.slug}
              className="group grid lg:grid-cols-2 gap-6 lg:gap-10 items-center rounded-2xl sm:rounded-3xl bg-dark-card/70 border border-dark-elevated hover:border-accent-cyan/25 transition-all duration-500 overflow-hidden p-4 sm:p-6"
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
                  src={project.image || FALLBACK_DATA_URI}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  quality={85}
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 mono text-[11px] text-white/70 bg-black/50 px-2.5 py-1 rounded-lg backdrop-blur-md border border-white/5">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </Link>

              {/* Content */}
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <p className="mono text-[11px] text-accent-cyan tracking-[0.2em] mb-3">
                  {project.category}
                </p>
                <h3 className="text-2xl sm:text-3xl font-black font-outfit capitalize text-txt-primary group-hover:text-accent-cyan transition-colors duration-300 mb-3">
                  {project.title}
                </h3>
                <p className="text-base text-txt-secondary leading-relaxed mb-5">
                  {project.tagline}
                </p>

                {project.technologies?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={`${tech}-${i}`}
                        className="px-2.5 py-1 text-[10px] mono text-accent-cyan bg-accent-cyan/5 border border-accent-cyan/12 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`/work/${project.slug}`}
                    className="group/btn flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white bg-linear-to-r from-accent-cyan/90 via-accent-indigo/85 to-accent-violet/80 hover:from-accent-cyan hover:via-accent-indigo hover:to-accent-violet transition-all duration-300 shadow-lg shadow-accent-indigo/12 hover:shadow-accent-indigo/25"
                  >
                    Read case study
                    <FaArrowRight className="text-xs transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-accent-cyan bg-accent-cyan/5 border border-accent-cyan/15 hover:border-accent-cyan/50 hover:bg-accent-cyan/10 transition-all duration-300"
                    >
                      Live <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-txt-secondary bg-dark-card border border-dark-elevated hover:border-accent-cyan/40 hover:text-accent-cyan transition-all duration-300"
                    >
                      GitHub <FaGithub className="text-sm" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
