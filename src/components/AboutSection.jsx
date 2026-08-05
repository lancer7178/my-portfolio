"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaCheckCircle, FaCompass } from "react-icons/fa";

export default function AboutSection({ intro, values, approach }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const numberRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef(null);

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
      gsap.fromTo(
        contentRef.current?.children || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
      gsap.fromTo(
        cardsRef.current?.children || [],
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 px-6 md:px-12 bg-dark text-white overflow-hidden"
    >
      <div
        ref={numberRef}
        className="section-number top-10 left-0 sm:left-10 opacity-100"
        style={{ WebkitTextStroke: "1px rgba(34, 211, 238, 0.04)" }}
      >
        01
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div ref={headerRef} className="mb-20">
          <p className="mono text-xs text-accent-cyan tracking-[0.3em] mb-4">
            {"// THE PROFILE"}
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-outfit font-black tracking-tight leading-none">
            <span className="text-white">ABOUT </span>
            <span className="text-outline-accent">ME</span>
          </h2>
          <div className="flex gap-2 mt-6">
            <div className="h-1 w-16 bg-linear-to-r from-accent-cyan to-accent-indigo rounded-full" />
            <div className="h-1 w-8 bg-accent-indigo/50 rounded-full" />
            <div className="h-1 w-4 bg-accent-violet/40 rounded-full" />
          </div>
        </div>

        <div ref={contentRef} className="space-y-12 mb-20">
          <p className="text-lg sm:text-xl text-txt-secondary leading-relaxed max-w-3xl">
            {intro}
          </p>
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-accent-indigo mb-6 font-outfit">
              <FaCheckCircle className="text-accent-cyan" /> Core Values
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {values.map((value, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-dark-card/60 border border-dark-elevated hover:border-accent-cyan/25 transition-all duration-300"
                >
                  <span className="w-2 h-2 mt-2 bg-linear-to-r from-accent-cyan to-accent-indigo rounded-full flex-shrink-0" />
                  <span className="text-txt-secondary text-sm">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-xl font-bold text-accent-violet mb-8 font-outfit">
            <FaCompass className="text-accent-cyan" /> My Approach
          </h3>
          <div
            ref={cardsRef}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {approach.map((phase, idx) => (
              <div
                key={idx}
                className="group relative p-4 sm:p-6 rounded-lg sm:rounded-2xl bg-dark-card border border-dark-elevated hover:border-accent-cyan/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-accent-cyan/5 via-transparent to-accent-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10">
                  <div className="mono text-[10px] text-txt-muted mb-3">
                    SYS.{String(idx + 1).padStart(2, "0")}
                  </div>
                  <h4 className="text-lg font-bold text-accent-cyan mb-3 font-outfit">
                    {phase.title}
                  </h4>
                  <p className="text-txt-muted text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
