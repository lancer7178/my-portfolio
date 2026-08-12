"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  FaMapMarkerAlt,
  FaClock,
  FaLayerGroup,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";
import { coreStack } from "@/data/skills";

const particles = [
  {
    size: 3,
    color: "var(--accent-cyan)",
    top: "12%",
    left: "8%",
    dur: "7s",
    delay: "0s",
  },
  {
    size: 2,
    color: "var(--accent-indigo)",
    top: "25%",
    right: "12%",
    dur: "5s",
    delay: "1s",
  },
  {
    size: 4,
    color: "var(--accent-violet)",
    top: "60%",
    left: "15%",
    dur: "8s",
    delay: "0.5s",
  },
  {
    size: 2,
    color: "var(--accent-cyan)",
    top: "75%",
    right: "20%",
    dur: "6s",
    delay: "2s",
  },
  {
    size: 3,
    color: "var(--accent-indigo)",
    top: "40%",
    left: "85%",
    dur: "9s",
    delay: "1.5s",
  },
  {
    size: 2,
    color: "var(--accent-violet)",
    top: "18%",
    left: "45%",
    dur: "6.5s",
    delay: "3s",
  },
  {
    size: 3,
    color: "var(--accent-cyan)",
    top: "80%",
    left: "55%",
    dur: "7.5s",
    delay: "0.8s",
  },
  {
    size: 2,
    color: "var(--accent-indigo)",
    top: "50%",
    left: "5%",
    dur: "5.5s",
    delay: "2.5s",
  },
];

export default function HeroSection({
  name = "Abdulatif",
  subtitle = "I build digital products where engineering, interface design, and product thinking meet.",
  cvLink = "/Abdulatif_Selem_CV.pdf",
}) {
  const sectionRef = useRef(null);
  const nameRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef(null);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }) + " EET",
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        nameRef.current,
        { y: 60, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2 },
      );
      tl.fromTo(
        contentRef.current?.children || [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 },
        "-=0.5",
      );
      tl.fromTo(
        cardsRef.current?.children || [],
        { y: 30, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.2 },
        "-=0.6",
      );

      // Particles fade in
      gsap.fromTo(
        ".particle",
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          stagger: 0.15,
          ease: "back.out(1.4)",
          delay: 0.8,
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark px-4 sm:px-6 pt-6 pb-24"
    >
      {/* Ambient Glow */}
      <div className="absolute -top-25 -left-25 w-125 h-125 bg-accent-cyan blur-[220px] opacity-[0.07] rounded-full pointer-events-none" />
      <div className="absolute -bottom-30 -right-30 w-125 h-125 bg-accent-violet blur-[220px] opacity-[0.05] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-75 h-75 bg-accent-indigo blur-[180px] opacity-[0.06] rounded-full pointer-events-none" />

      {/* Floating Particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            top: p.top,
            left: p.left,
            right: p.right,
            "--dur": p.dur,
            "--delay": p.delay,
          }}
        />
      ))}

      {/* Top bar */}
      <div className="absolute top-6 left-6 sm:left-10 flex items-center gap-3">
        <div className="w-10 h-10 bg-dark-card border border-dark-elevated rounded-xl flex items-center justify-center">
          <span className="bg-linear-to-r from-accent-cyan to-accent-indigo bg-clip-text text-transparent font-bold text-sm font-mono">
            AS
          </span>
        </div>
      </div>
      <div className="absolute top-6 right-6 sm:right-10">
        <span className="mono text-[11px] text-txt-muted tracking-widest">
          PRODUCT-MINDED BUILDER
        </span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mt-12 sm:mt-0">
        <div ref={nameRef}>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-outfit font-black tracking-tight leading-none mb-4">
            <span className="hero-name cursor-pointer">{name}</span>
          </h2>
          <p className="mono text-xs sm:text-sm text-txt-muted tracking-[0.3em] mb-6">
            FRONTEND ENGINEER — CREATIVE DEVELOPER
          </p>
        </div>

        <div ref={contentRef} className="flex flex-col items-center gap-6">
          <p className="text-base sm:text-lg text-txt-secondary max-w-xl leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#work"
              className="hero-btn group flex items-center gap-3 px-8 py-4 bg-linear-to-r from-accent-cyan via-accent-indigo to-accent-violet text-black font-extrabold font-outfit rounded-full shadow-lg shadow-accent-indigo/20"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("work");
                if (el)
                  window.scrollTo({
                    top: el.offsetTop - 20,
                    behavior: "smooth",
                  });
              }}
            >
              VIEW MY WORK
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={cvLink}
              download
              className="flex items-center gap-2 px-6 py-4 rounded-full bg-dark-card border border-dark-elevated text-txt-primary hover:border-accent-cyan/40 hover:text-accent-cyan mono text-sm transition-all duration-300"
            >
              <FaDownload className="text-xs" /> DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div
        ref={cardsRef}
        className="relative z-10 flex flex-col sm:flex-row gap-4 mt-12 sm:mt-16 w-full max-w-4xl px-2"
      >
        {/* Telemetry Card */}
        <div className="flex-1 hero-card">
          <div className="flex items-center justify-between mb-4">
            <span className="mono text-[10px] text-txt-muted">
              TELEMETRY / ACTIVE
            </span>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-accent-cyan rounded-full pulse-dot" />
              <span className="w-2 h-2 bg-accent-cyan/30 rounded-full" />
            </div>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <FaMapMarkerAlt className="text-accent-cyan text-sm" />
            <span className="text-xl font-bold font-outfit">EGYPT, EG</span>
          </div>
          <div className="flex items-center gap-2 text-txt-muted text-sm">
            <FaClock className="text-xs" />
            <span className="mono text-xs">{currentTime}</span>
          </div>
        </div>

        {/* Core Stack Card */}
        <div className="flex-1 hero-card">
          <div className="flex items-center justify-between mb-4">
            <span className="mono text-[10px] text-txt-muted">
              CORE STACK / DAILY
            </span>
            <FaLayerGroup className="text-accent-cyan text-sm" />
          </div>
          <div className="flex flex-wrap gap-2">
            {coreStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs mono text-accent-cyan bg-accent-cyan/5 border border-accent-cyan/12 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="mono text-[10px] text-txt-muted mt-4 leading-relaxed">
            The tools I reach for to turn ideas into products.
          </p>
        </div>
      </div>
    </section>
  );
}
