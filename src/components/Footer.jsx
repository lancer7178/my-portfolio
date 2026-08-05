import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

export default function Footer({ year, name }) {
  return (
    <footer className="relative w-full py-12 pb-28 bg-[#05050A] text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-accent-cyan/15 to-transparent" />

      <div className="flex items-center justify-center gap-4 mb-6">
        <a href="https://github.com/lancer7178" target="_blank" rel="noopener noreferrer"
          className="p-3 rounded-full bg-dark-card border border-dark-elevated text-txt-muted hover:text-accent-cyan hover:border-accent-cyan/25 transition-all duration-300 hover:scale-110" aria-label="GitHub">
          <FaGithub className="text-lg" />
        </a>
        <a href="https://linkedin.com/in/abdul-atif-selem-8521a7281" target="_blank" rel="noopener noreferrer"
          className="p-3 rounded-full bg-dark-card border border-dark-elevated text-txt-muted hover:text-accent-indigo hover:border-accent-indigo/25 transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
          <FaLinkedin className="text-lg" />
        </a>
      </div>

      <p className="text-xs text-txt-muted mono flex items-center justify-center gap-1.5">
        © {year} {name} — Made with <FaHeart className="text-accent-cyan text-[10px]" /> All rights reserved.
      </p>
    </footer>
  );
}
