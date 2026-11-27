"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaCode, FaLaptopCode, FaBriefcase, FaUser, FaEnvelope, FaDownload } from "react-icons/fa";
import { navigation, profile } from "@/data/profile";

const icons = [FaHome, FaCode, FaLaptopCode, FaBriefcase, FaUser, FaEnvelope];
const cairoTime = new Intl.DateTimeFormat("en-GB", { timeZone: "Africa/Cairo", hour: "2-digit", minute: "2-digit", second: "2-digit" });

function Clock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => setTime(cairoTime.format(new Date()));
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span aria-hidden="true" className="mono mr-3 hidden items-center gap-1.5 whitespace-nowrap text-[10px] text-txt-muted sm:flex">
      <span className="pulse-dot size-1.5 rounded-full bg-accent-cyan" />
      EG / <span className="min-w-[8ch] tabular-nums">{time}</span>
    </span>
  );
}

const itemClass = "group relative flex size-10 shrink-0 items-center justify-center rounded-full text-base transition-[background-color,color,box-shadow,scale] duration-300 focus-visible:text-accent-cyan motion-safe:hover:scale-105 sm:size-11";

function NavLabel({ children }) {
  return <span aria-hidden="true" className="mono pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-dark-elevated px-2 py-1 text-[10px] text-txt-primary opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">{children}</span>;
}

export default function Navbar() {
  const path = usePathname();
  const [active, setActive] = useState("Home");

  useEffect(() => {
    if (path !== "/") return;

    const sections = navigation
      .map(({ label, href }) => ({ label, element: document.getElementById(href.slice(2)) }))
      .filter(({ element }) => element);
    const update = () => {
      const line = window.innerHeight * 0.5;
      let latestTop = -Infinity;
      let label = "Home";
      for (const section of sections) {
        const top = section.element.getBoundingClientRect().top;
        if (top <= line && top > latestTop) {
          latestTop = top;
          label = section.label;
        }
      }
      setActive(label);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [path]);

  return (
    <nav aria-label="Main navigation" className="floating-nav fixed left-1/2 z-50 -translate-x-1/2">
      <div className="glass glow-accent flex items-center gap-0.5 rounded-full px-2 py-2 sm:gap-1 sm:px-4 sm:py-3">
        <Clock />
        {navigation.map(({ href, label }, index) => {
          const Icon = icons[index];
          const current = path === "/" ? active === label : label === "Projects" && (path === "/projects" || path.startsWith("/work/"));
          return (
            <Link key={href} href={href} aria-label={label} aria-current={current ? "location" : undefined} className={`${itemClass} ${current ? "bg-linear-to-r from-accent-cyan via-accent-indigo to-accent-violet text-dark shadow-lg shadow-accent-indigo/30 focus-visible:text-dark motion-safe:scale-105" : "text-txt-muted hover:bg-dark-elevated hover:text-txt-primary"}`}>
              <Icon aria-hidden="true" /><NavLabel>{label}</NavLabel>
            </Link>
          );
        })}
        <a href={profile.resume.href} download={profile.resume.filename} aria-label="Download CV" className={`${itemClass} border border-accent-cyan/25 bg-accent-cyan/8 text-accent-cyan hover:bg-accent-cyan/15`}>
          <FaDownload aria-hidden="true" /><NavLabel>Download CV</NavLabel>
        </a>
      </div>
    </nav>
  );
}
