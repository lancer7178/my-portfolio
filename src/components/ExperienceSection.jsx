"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function ExperienceSection({ experiences = [] }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const numberRef = useRef(null);
  const timelineRef = useRef(null);

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
        timelineRef.current?.children || [],
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: timelineRef.current,
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
      id="experience"
      ref={sectionRef}
      className="relative py-20 px-6 md:px-12 bg-[#06060A] text-white overflow-hidden"
    >
      <div
        ref={numberRef}
        className="section-number top-10 left-0 sm:left-10 opacity-100"
        style={{ WebkitTextStroke: "1px rgba(192, 132, 252, 0.04)" }}
      >
        03
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div ref={headerRef} className="mb-16 sm:mb-20">
          <p className="mono text-xs text-[#22D3EE] tracking-[0.3em] mb-3 sm:mb-4">
            {"// JOURNEY"}
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-outfit font-black tracking-tight leading-none">
            <span className="text-white">EXPER</span>
            <span className="text-outline-accent">IENCE</span>
          </h2>
          <div className="flex gap-2 mt-6">
            <div className="h-1 w-16 bg-gradient-to-r from-[#22D3EE] to-[#818CF8] rounded-full" />
            <div className="h-1 w-8 bg-[#818CF8]/50 rounded-full" />
            <div className="h-1 w-4 bg-[#C084FC]/40 rounded-full" />
          </div>
        </div>

        <div ref={timelineRef} className="relative space-y-0">
          <div className="absolute left-2 sm:left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#22D3EE]/30 via-[#818CF8]/30 to-[#C084FC]/15" />

          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-10 sm:pl-12 md:pl-16 pb-10 sm:pb-12 last:pb-0"
            >
              <div className="absolute left-2 sm:left-4 md:left-6 top-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#06060A] border-2 border-[#22D3EE] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#22D3EE]" />
              </div>

              <div className="group p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl bg-[#10101A] border border-[#1A1A2C] hover:border-[#22D3EE]/25 transition-all duration-500">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-3">
                  <div>
                    <div className="mono text-[9px] sm:text-[10px] text-[#555570] mb-1">
                      SYS.{String(idx + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold font-outfit text-white group-hover:text-[#22D3EE] transition-colors duration-300">
                      {exp.title}
                    </h3>
                  </div>
                  <span className="mono text-[8px] sm:text-[10px] text-[#818CF8] bg-[#818CF8]/10 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-[#818CF8]/20 whitespace-nowrap self-start sm:self-auto">
                    {exp.role}
                  </span>
                </div>
                <p className="text-[#AAAABD] text-xs sm:text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
