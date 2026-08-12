"use client";

import { useState, useEffect } from "react";
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope } from "react-icons/fa";

const navItems = [
  { icon: <FaHome />, label: "Home", href: "#hero" },
  { icon: <FaBriefcase />, label: "Work", href: "#work" },
  { icon: <FaUser />, label: "About", href: "#about" },
  { icon: <FaCode />, label: "Skills", href: "#skills" },
  { icon: <FaEnvelope />, label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [currentTime, setCurrentTime] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace("#", ""));
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const offset = el.offsetTop - 20;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex items-center gap-1 px-4 py-3 rounded-full glass glow-accent">
        <span className="hidden sm:flex items-center gap-1.5 mono text-[10px] text-txt-muted mr-3 whitespace-nowrap">
          <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full pulse-dot" />
          EG / {currentTime}
        </span>

        {navItems.map((item) => {
          const isActive = activeSection === item.href.replace("#", "");
          return (
            <button
              key={item.label}
              onClick={() => handleClick(item.href)}
              title={item.label}
              className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 group ${
                isActive
                  ? "bg-linear-to-r from-accent-cyan via-accent-indigo to-accent-violet text-white scale-110 shadow-lg shadow-accent-indigo/30"
                  : "text-txt-muted hover:text-txt-primary hover:bg-dark-elevated"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-[10px] mono bg-dark-elevated text-txt-primary opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
