"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function SkillsExperienceSection({
  skills = [],
  experiences = [],
}) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const numberRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(numberRef.current, {
        y: -60,
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
        contentRef.current?.children || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-16 sm:py-20 px-6 md:px-12 bg-linear-to-b from-dark via-dark-surface to-dark text-white overflow-hidden scroll-mt-20"
    >
      <div
        ref={numberRef}
        className="section-number top-10 right-0 sm:right-10 opacity-100"
        style={{ WebkitTextStroke: "1px rgba(192, 132, 252, 0.04)" }}
      >
        06
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div ref={headerRef} className="mb-10">
          <p className="mono text-xs text-accent-cyan tracking-[0.3em] mb-4">
            {"// JOURNEY"}
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-outfit font-black tracking-tight leading-none">
            <span className="text-white">SKILLS &amp; </span>
            <span className="text-outline-accent">EXPERIENCE</span>
          </h2>
          <div className="flex gap-2 mt-6">
            <div className="h-1 w-16 bg-linear-to-r from-accent-cyan to-accent-indigo rounded-full" />
            <div className="h-1 w-8 bg-accent-indigo/50 rounded-full" />
            <div className="h-1 w-4 bg-accent-violet/40 rounded-full" />
          </div>
        </div>

        <div
          ref={contentRef}
          className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-8 lg:gap-12 items-start"
        >
          {/* Skills */}
          <div id="skills" className="scroll-mt-20">
            <h3 className="text-xl font-bold font-outfit text-white mb-4">
              Skills
            </h3>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {skills.map((category) => (
                <li
                  key={category.label}
                  className="p-4 rounded-2xl bg-dark-card/70 border border-dark-elevated hover:border-accent-cyan/25 transition-colors duration-500"
                >
                  <h4 className="text-sm font-bold font-outfit text-accent-cyan mb-3">
                    {category.label}
                  </h4>
                  <ul className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="px-2.5 py-1 text-[11px] mono text-txt-secondary bg-dark-card/60 border border-dark-elevated rounded-md"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience timeline */}
          <div>
            <h3 className="text-xl font-bold font-outfit text-white mb-4">
              Experience
            </h3>
            <ol className="relative">
              <div className="absolute left-2 top-0 bottom-0 w-px bg-linear-to-b from-accent-cyan/30 via-accent-indigo/30 to-accent-violet/15" />
              {experiences.map((exp) => (
                <li
                  key={exp.role}
                  className="relative pl-8 pb-6 last:pb-0"
                >
                  <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-dark border-2 border-accent-cyan flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                  </div>

                  <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-1 mb-2">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold font-outfit text-white">
                        {exp.role}
                      </h4>
                      <p className="mono text-[10px] text-txt-secondary">
                        {exp.company}
                      </p>
                    </div>
                    <span className="mono text-[10px] text-accent-indigo bg-accent-indigo/10 px-2.5 py-0.5 rounded-full border border-accent-indigo/20 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {exp.context && (
                    <p className="text-sm text-txt-primary leading-relaxed mb-2">
                      {exp.context}
                    </p>
                  )}

                  <ul className="space-y-1.5">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 mt-2 rounded-full bg-linear-to-r from-accent-cyan to-accent-indigo shrink-0" />
                        <span className="text-sm text-txt-secondary leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {exp.products?.length > 0 && (
                    <p className="mt-2 text-sm text-txt-secondary leading-relaxed">
                      <span className="text-txt-primary font-semibold">
                        Worked on:{" "}
                      </span>
                      {exp.products.join(", ")}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
