"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function AboutSection({ intro = [], steps = [] }) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const numberRef = useRef(null);
  const stepsRef = useRef(null);

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
      gsap.fromTo(
        stepsRef.current?.children || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          scrollTrigger: {
            trigger: stepsRef.current,
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
      id="about"
      ref={sectionRef}
      className="relative py-16 sm:py-20 px-6 md:px-12 bg-dark text-white overflow-hidden scroll-mt-20"
    >
      <div
        ref={numberRef}
        className="section-number top-10 left-0 sm:left-10 opacity-100"
        style={{ WebkitTextStroke: "1px rgba(34, 211, 238, 0.04)" }}
      >
        05
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div ref={headerRef} className="mb-10">
          <p className="mono text-xs text-accent-cyan tracking-[0.3em] mb-4">
            {"// THE PROFILE"}
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-outfit font-black tracking-tight leading-none">
            <span className="text-white">ABOUT &amp; MY </span>
            <span className="text-outline-accent">APPROACH</span>
          </h2>
          <div className="flex gap-2 mt-6">
            <div className="h-1 w-16 bg-linear-to-r from-accent-cyan to-accent-indigo rounded-full" />
            <div className="h-1 w-8 bg-accent-indigo/50 rounded-full" />
            <div className="h-1 w-4 bg-accent-violet/40 rounded-full" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-4 mb-10">
          {intro.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base sm:text-lg text-txt-secondary leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <ol
          ref={stepsRef}
          aria-label="My design and build process"
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4"
        >
          {steps.map((step) => (
            <li
              key={step.step}
              className="flex lg:block gap-4 p-4 sm:p-5 rounded-2xl bg-dark-card/70 border border-dark-elevated hover:border-accent-cyan/30 transition-colors duration-500"
            >
              <span className="mono text-2xl font-black text-outline-accent shrink-0">
                {step.step}
              </span>
              <div className="lg:mt-3">
                <h3 className="text-lg font-bold font-outfit text-accent-cyan">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-txt-secondary leading-relaxed">
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
