"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { skillCategories } from "@/data/skills";

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const numberRef = useRef(null);
  const gridRef = useRef(null);

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
        gridRef.current?.children || [],
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 px-6 md:px-12 bg-linear-to-b from-dark via-dark-surface to-dark text-white overflow-hidden scroll-mt-20"
    >
      <div
        ref={numberRef}
        className="section-number top-10 right-0 sm:right-10 opacity-100"
        style={{ WebkitTextStroke: "1px rgba(129, 140, 248, 0.04)" }}
      >
        04
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div ref={headerRef} className="mb-16">
          <p className="mono text-xs text-accent-cyan tracking-[0.3em] mb-4">
            {"// TECH STACK"}
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-outfit font-black tracking-tight leading-none">
            <span className="text-white">SKILL </span>
            <span className="text-outline-accent">SET</span>
          </h2>
          <div className="flex gap-2 mt-6">
            <div className="h-1 w-16 bg-linear-to-r from-accent-cyan to-accent-indigo rounded-full" />
            <div className="h-1 w-8 bg-accent-indigo/50 rounded-full" />
            <div className="h-1 w-4 bg-accent-violet/40 rounded-full" />
          </div>
          <p className="mt-6 text-txt-muted max-w-2xl text-base leading-relaxed">
            The tools I actually use to build products — grouped by how they fit
            into the work, not ranked by a number.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {skillCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="group p-5 sm:p-6 rounded-2xl bg-dark-card/70 border border-dark-elevated hover:border-accent-cyan/25 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-base font-bold font-outfit text-txt-primary">
                  {category.label}
                </span>
                <span className="mono text-[10px] text-accent-cyan">
                  {category.tag}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1.5 text-xs mono text-txt-secondary bg-dark-card/60 border border-dark-elevated rounded-lg group-hover:border-accent-cyan/20 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
