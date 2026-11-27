"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FaArrowRight, FaDownload, FaLayerGroup, FaMapMarkerAlt } from "react-icons/fa";
import { capabilities } from "@/data/engineering";
import { profile } from "@/data/profile";
import ProfileLinks from "@/components/ProfileLinks";

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

const cairoTime = new Intl.DateTimeFormat("en", { timeZone: "Africa/Cairo", hour: "2-digit", minute: "2-digit", timeZoneName: "short" });

export default function HeroSection() {
  const sectionRef = useRef(null);
  const nameRef = useRef(null);
  const contentRef = useRef(null);
  const cardsRef = useRef(null);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const update = () => setCurrentTime(cairoTime.format(new Date()));
    update();
    const timer = setInterval(update, 15_000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const timeline = gsap.timeline({ defaults: { duration: 0.55, ease: "power3.out" } });

      timeline
        .fromTo(nameRef.current, { y: 22, opacity: 0.82 }, { y: 0, opacity: 1, clearProps: "transform,opacity" })
        .fromTo(contentRef.current.children, { y: 14, opacity: 0.8 }, { y: 0, opacity: 1, stagger: 0.075, clearProps: "transform,opacity" }, 0.12)
        .fromTo(cardsRef.current.children, { y: 18, opacity: 0.8 }, { y: 0, opacity: 1, stagger: 0.1, clearProps: "transform,opacity" }, 0.3);
    }, sectionRef);

    return () => media.revert();
  }, []);

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      ref={sectionRef}
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-dark px-4 pt-14 pb-24 sm:px-6"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -top-25 -left-25 size-125 rounded-full bg-accent-cyan opacity-[0.07] blur-[220px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-30 -bottom-30 size-125 rounded-full bg-accent-violet opacity-[0.05] blur-[220px]" />
      <div aria-hidden="true" className="pointer-events-none absolute top-1/3 right-1/4 size-75 rounded-full bg-accent-indigo opacity-[0.06] blur-[180px]" />
      {particles.map(({ size, color, top, left, right, dur, delay }, index) => (
        <span key={index} aria-hidden="true" className="particle" style={{ width: size, height: size, backgroundColor: color, top, left, right, "--dur": dur, "--delay": delay }} />
      ))}

      <div className="absolute top-6 left-6 flex items-center gap-3 sm:left-10">
        <div aria-hidden="true" className="grid size-10 place-items-center rounded-xl border border-dark-elevated bg-dark-card">
          <span className="gradient-text font-mono text-sm font-bold">AS</span>
        </div>
      </div>
      <p className="mono absolute top-9 right-6 text-[10px] tracking-widest text-txt-muted sm:right-10 sm:text-[11px]">Software &amp; Product Engineering</p>

      <div className="relative z-10 mx-auto mt-8 flex w-full max-w-4xl flex-col items-center text-center sm:mt-0">
        <div ref={nameRef}>
          <h1 id="hero-title" className="mb-4 text-[clamp(2.75rem,8vw,6rem)] leading-none font-black tracking-tight">
            <span className="hero-name">{profile.name}</span>
            <span className="sr-only"> — {profile.title}</span>
          </h1>
          <p aria-hidden="true" className="mono mb-4 text-sm font-semibold tracking-[0.3em] text-txt-primary sm:text-base">{profile.title}</p>
        </div>
        <div ref={contentRef} className="flex flex-col items-center gap-4">
          <p className="text-lg font-semibold text-txt-primary">Full-Stack &amp; Mobile Development</p>
          <p className="max-w-xl text-base leading-relaxed text-txt-secondary sm:text-lg">
            I build scalable web applications, backend systems, and cross-platform mobile experiences — from application architecture, databases, and APIs to intuitive user interfaces.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#work" className="hero-btn group flex min-h-12 items-center gap-3 rounded-full bg-linear-to-r from-accent-cyan via-accent-indigo to-accent-violet px-5 py-3.5 font-extrabold sm:px-7 text-black shadow-lg shadow-accent-indigo/20">Explore Projects <FaArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-1" /></a>
            <a href={profile.resume.href} download={profile.resume.filename} className="action action-secondary !px-3.5 sm:!px-5"><FaDownload aria-hidden="true" /> Download CV</a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-5">
            <a href="#contact" className="action action-text !px-0">Get in Touch</a>
            <ProfileLinks />
          </div>
        </div>
      </div>

      <div ref={cardsRef} className="relative z-10 mt-7 flex w-full max-w-4xl flex-col gap-3 px-2 sm:mt-12 sm:gap-4 sm:flex-row">
        <div className="min-w-0 flex-1">
          <div className="hero-card h-full">
            <div className="mb-4 flex items-center justify-between">
              <p className="mono text-[10px] text-txt-muted">Location</p>
              <span aria-hidden="true" className="pulse-dot size-2 rounded-full bg-accent-cyan" />
            </div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <FaMapMarkerAlt aria-hidden="true" className="text-sm text-accent-cyan" />
              <span className="text-xl font-bold">{profile.location}</span>
              <span className="mono min-w-[12ch] whitespace-nowrap text-[10px] text-txt-muted">{currentTime}</span>
            </div>
            <p className="mono border-t border-dark-elevated pt-3 text-[10px] text-accent-cyan">Full-Stack · Backend · Mobile · E-commerce</p>
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <div className="hero-card h-full">
            <div className="mb-4 flex items-center justify-between">
              <p className="mono text-[10px] text-txt-muted">Engineering Capabilities</p>
              <FaLayerGroup aria-hidden="true" className="text-sm text-accent-cyan" />
            </div>
            <ul className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              {capabilities.filter(({ summary }) => summary).map(({ id, summary }) => (
                <li key={id} className="mono flex items-center rounded-lg border border-accent-cyan/12 bg-accent-cyan/5 px-2 py-1.5 text-[10px] leading-snug text-accent-cyan sm:px-3 sm:text-[11px]">{summary}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
