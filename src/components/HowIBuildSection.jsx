"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function HowIBuildSection({ steps = [] }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
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
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  if (!Array.isArray(steps) || steps.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 md:px-12 bg-linear-to-b from-dark via-[#05050A] to-dark text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        <div ref={headerRef} className="mb-14">
          <p className="mono text-xs text-accent-cyan tracking-[0.3em] mb-4">{`// FROM IDEA TO INTERFACE`}</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-black tracking-tight leading-none">
            <span className="text-white">HOW I </span>
            <span className="text-outline-accent">BUILD</span>
          </h2>
          <div className="flex gap-2 mt-6">
            <div className="h-1 w-16 bg-linear-to-r from-accent-cyan to-accent-indigo rounded-full" />
            <div className="h-1 w-8 bg-accent-indigo/50 rounded-full" />
            <div className="h-1 w-4 bg-accent-violet/40 rounded-full" />
          </div>
        </div>

        <ol
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5"
        >
          {steps.map((step) => (
            <li
              key={step.step}
              className="group relative p-5 rounded-2xl bg-dark-card/70 border border-dark-elevated hover:border-accent-cyan/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-accent-cyan/5 via-transparent to-accent-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <span className="mono text-2xl font-black text-outline-accent">
                  {step.step}
                </span>
                <h3 className="mt-4 text-lg font-bold font-outfit text-accent-cyan">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-txt-muted leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
