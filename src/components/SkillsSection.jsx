"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const skillCategories = [
  {
    label: "FRONTEND / CORE",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "React Native", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
    ],
  },
  {
    label: "STYLING / DESIGN",
    skills: [
      { name: "Tailwind CSS", level: 95 },
      { name: "CSS / SCSS", level: 92 },
      { name: "Figma", level: 85 },
      { name: "UI/UX Design", level: 88 },
    ],
  },
  {
    label: "TOOLS / OTHER",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "WordPress", level: 85 },
      { name: "RESTful APIs", level: 88 },
      { name: "Node.js", level: 86 },
      { name: "Express.js", level: 84 },
      { name: "PostgreSQL", level: 82 },
      { name: "Framer Motion", level: 82 },
    ],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const numberRef = useRef(null);
  const gridRef = useRef(null);
  const barsRef = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
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

      barsRef.current.forEach((bar) => {
        if (!bar) return;
        const target = bar.dataset.level;
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${target}%`,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 px-6 md:px-12 bg-gradient-to-b from-[#06060A] via-[#08080F] to-[#06060A] text-white overflow-hidden"
    >
      <div
        ref={numberRef}
        className="section-number top-10 right-0 sm:right-10 opacity-100"
        style={{ WebkitTextStroke: "1px rgba(129, 140, 248, 0.04)" }}
      >
        02
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div ref={headerRef} className="mb-20">
          <p className="mono text-xs text-[#22D3EE] tracking-[0.3em] mb-4">
            {"// TECH STACK"}
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-outfit font-black tracking-tight leading-none">
            <span className="text-white">SKILL </span>
            <span className="text-outline-accent">SET</span>
          </h2>
          <div className="flex gap-2 mt-6">
            <div className="h-1 w-16 bg-gradient-to-r from-[#22D3EE] to-[#818CF8] rounded-full" />
            <div className="h-1 w-8 bg-[#818CF8]/50 rounded-full" />
            <div className="h-1 w-4 bg-[#C084FC]/40 rounded-full" />
          </div>
        </div>

        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {skillCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="group p-4 sm:p-6 rounded-2xl bg-[#10101A]/70 border border-[#1A1A2C] hover:border-[#22D3EE]/25 transition-all duration-500 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="mono text-[10px] text-[#555570]">
                  {category.label}
                </span>
                <span className="mono text-[10px] text-[#22D3EE]">
                  CAPACITY
                </span>
              </div>
              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => {
                  const globalIdx = catIdx * 5 + skillIdx;
                  return (
                    <div key={skillIdx}>
                      <div className="flex justify-between mono text-xs mb-2">
                        <span className="text-[#EAEAEF] font-medium">
                          {skill.name}
                        </span>
                        <span className="text-[#555570]">{skill.level}%</span>
                      </div>
                      <div className="capacity-bar">
                        <div
                          ref={(el) => (barsRef.current[globalIdx] = el)}
                          data-level={skill.level}
                          className="capacity-fill"
                          style={{ width: 0 }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3 justify-center">
          {[
            "HTML",
            "CSS",
            "SCSS",
            "Bootstrap",
            "jQuery",
            "JavaScript",
            "TypeScript",
            "React",
            "React Native",
            "Next.js",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "Tailwind CSS",
            "Framer Motion",
            "GSAP",
            "Three.js",
            "WordPress",
            "PHP",
            "MySQL",
            "Firebase",
            "Strapi",
            "REST APIs",
            "Git / GitHub",
            "Figma",
            "C++",
            "Responsive Design",
            "SEO",
            "UI/UX Design",
            "Problem Solving",
            "Animation & Motion",
            "Component Libraries",
          ].map((skill, idx) => (
            <span
              key={idx}
              className="px-4 py-2 text-xs mono text-[#8888A0] bg-[#10101A]/50 border border-[#1A1A2C] rounded-full hover:border-[#22D3EE]/30 hover:text-[#22D3EE] transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
