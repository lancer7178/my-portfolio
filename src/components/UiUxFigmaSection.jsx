"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const FALLBACK_DATA_URI =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=";

/* ─── 3D Tilt Card Hook ─── */
function useTilt(intensity = 15) {
  const ref = useRef(null);
  const [style, setStyle] = useState({
    transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
    transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
  });

  const onMouseMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -intensity;
      const rotateY = ((x - centerX) / centerX) * intensity;
      setStyle({
        transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03,1.03,1.03)`,
        transition: "transform 0.1s ease-out",
      });
    },
    [intensity],
  );

  const onMouseLeave = useCallback(() => {
    setStyle({
      transform:
        "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
      transition: "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
    });
  }, []);

  return { ref, style, onMouseMove, onMouseLeave };
}

/* ─── 3D Experience Card ─── */
function ExperienceCard({ item, idx }) {
  const { ref, style, onMouseMove, onMouseLeave } = useTilt(12);
  const icons = ["✦", "◆", "▲"];

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={style}
      className="tilt-card group relative flex flex-col rounded-2xl overflow-hidden p-6 sm:p-8 cursor-pointer"
      initial={{ opacity: 0, y: 40, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.12, duration: 0.6, ease: "easeOut" }}
    >
      {/* Glow orb */}
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent-cyan rounded-full blur-[60px] opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none" />

      {/* Step number */}
      <div className="flex items-center gap-3 mb-3">
        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-br from-accent-cyan/15 to-accent-indigo/10 border border-accent-cyan/20 text-accent-cyan text-sm font-bold font-mono">
          {String(idx + 1).padStart(2, "0")}
        </span>
        <span className="text-lg text-accent-cyan/60">
          {icons[idx % icons.length]}
        </span>
      </div>

      <h3 className="text-lg font-bold font-outfit text-txt-primary group-hover:text-accent-cyan transition-colors duration-300 mb-2">
        {item.title}
      </h3>
      <div className="h-0.5 w-10 bg-linear-to-r from-accent-cyan/50 to-accent-indigo/30 rounded-full group-hover:w-16 transition-all duration-500 mb-4" />
      <p className="text-sm text-txt-muted leading-relaxed flex-1">
        {item.description}
      </p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-accent-cyan/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.article>
  );
}

/* ─── 3D Project Card ─── */
function ProjectCard3D({ project, idx, isActive, onSelect }) {
  const { ref, style, onMouseMove, onMouseLeave } = useTilt(10);

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={style}
      className={`project-card-3d group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer ${
        isActive ? "ring-1 ring-accent-cyan/40" : ""
      }`}
      initial={{ opacity: 0, y: 50, rotateY: -8 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
    >
      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden bg-linear-to-br from-dark-card to-dark-surface">
        <Image
          src={project.image || FALLBACK_DATA_URI}
          alt={project.title}
          width={640}
          height={280}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          unoptimized={!project.image || project.image.startsWith("http")}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-dark via-dark/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        {/* Type badge */}
        <span className="absolute top-3 left-3 mono text-[10px] text-white/70 bg-black/50 px-2.5 py-1 rounded-lg backdrop-blur-md border border-white/5">
          {project.type || "DESIGN"}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6 gap-3 bg-[#0A0A14]/90">
        <h4 className="text-lg font-bold font-outfit text-txt-primary group-hover:text-accent-cyan transition-colors duration-300">
          {project.title}
        </h4>
        <div className="h-0.5 w-8 bg-linear-to-r from-accent-cyan/50 to-accent-indigo/30 rounded-full group-hover:w-14 transition-all duration-500" />
        <p className="text-sm text-txt-muted leading-relaxed grow line-clamp-3">
          {project.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 pt-3 border-t border-dark-elevated/60">
          {(project.embedUrl || project.liveEmbedUrl) && (
            <button
              type="button"
              onClick={() => onSelect(idx)}
              className="flex-1 px-4 py-2.5 rounded-xl font-semibold text-sm text-white bg-linear-to-r from-accent-cyan/90 via-accent-indigo/85 to-accent-violet/80 hover:from-accent-cyan hover:via-accent-indigo hover:to-accent-violet transition-all duration-300 shadow-lg shadow-accent-indigo/12 hover:shadow-accent-indigo/25 hover:scale-[1.03] active:scale-95"
            >
              Preview
            </button>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center px-4 py-2.5 rounded-xl font-semibold text-sm text-accent-cyan bg-accent-cyan/5 border border-accent-cyan/12 hover:border-accent-cyan/50 hover:bg-accent-cyan/10 transition-all duration-300 hover:scale-[1.03] active:scale-95"
            >
              Open Figma
            </a>
          )}
        </div>
      </div>

      {/* Hover glow effect */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          boxShadow:
            "inset 0 0 60px rgba(34,211,238,0.04), 0 8px 32px rgba(34,211,238,0.08)",
        }}
      />
    </motion.article>
  );
}

/* ─── Main Section ─── */
export default function UiUxFigmaSection({
  summary,
  uiuxExperience = [],
  figmaProjects = [],
  figmaEmbedUrl,
}) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const activeProject = figmaProjects[activeProjectIndex];
  const activeEmbedUrl =
    activeProject?.embedUrl || activeProject?.liveEmbedUrl || figmaEmbedUrl;

  const projectsWithEmbed = useMemo(
    () =>
      figmaProjects.filter(
        (project) => project?.embedUrl || project?.liveEmbedUrl,
      ),
    [figmaProjects],
  );

  return (
    <section
      id="uiux"
      className="relative pt-20 md:pt-1 pb-6 md:pb-20 px-6 md:px-12 bg-linear-to-b from-dark via-[#05050A] to-dark text-white overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-1/4 w-125 h-125 bg-accent-indigo blur-[250px] opacity-[0.04] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-accent-cyan blur-[200px] opacity-[0.05] rounded-full pointer-events-none" />

      {/* Orbiting dots */}
      <div className="orbit-container absolute top-20 right-20 w-32 h-32 pointer-events-none hidden lg:block">
        <span
          className="orbit-dot"
          style={{ "--orbit-size": "60px", "--orbit-dur": "8s" }}
        />
        <span
          className="orbit-dot"
          style={{
            "--orbit-size": "60px",
            "--orbit-dur": "8s",
            animationDelay: "4s",
          }}
        />
      </div>
      <div className="orbit-container absolute bottom-40 left-10 w-24 h-24 pointer-events-none hidden lg:block">
        <span
          className="orbit-dot"
          style={{ "--orbit-size": "44px", "--orbit-dur": "6s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mono text-xs text-accent-cyan tracking-[0.3em] mb-4">{`// UI/UX & FIGMA`}</p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-outfit font-black tracking-tight leading-none">
            <span className="text-white italic">DESIGN </span>
            <span className="text-outline-accent italic">PROJECTS</span>
          </h2>
          <div className="flex gap-2 mt-6">
            <div className="h-1 w-16 bg-linear-to-r from-accent-cyan to-accent-indigo rounded-full" />
            <div className="h-1 w-8 bg-accent-indigo/50 rounded-full" />
            <div className="h-1 w-4 bg-accent-violet/40 rounded-full" />
          </div>
          <p className="mt-6 text-lg text-txt-secondary max-w-2xl leading-relaxed">
            Explore the thinking behind my interfaces.
          </p>
          <p className="mt-3 text-txt-muted max-w-2xl text-base leading-relaxed">
            {summary ||
              "A complete showcase of my design workflow, Figma projects, and user-centered process from idea to handoff."}
          </p>
        </motion.div>

        {/* ─── Experience / Process Steps ─── */}
        {uiuxExperience.length > 0 && (
          <div className="mb-16">
            <motion.p
              className="mono text-xs text-accent-indigo tracking-[0.3em] mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >{`// DESIGN PROCESS`}</motion.p>

            <div className="relative grid md:grid-cols-3 gap-5">
              {/* Connector line (desktop) */}
              <div className="step-connector hidden md:block absolute top-8.5 left-[calc(16.66%+20px)] right-[calc(16.66%+20px)] h-0.5" />

              {uiuxExperience.map((item, idx) => (
                <ExperienceCard
                  key={`${item.title}-${idx}`}
                  item={item}
                  idx={idx}
                />
              ))}
            </div>
          </div>
        )}

        {/* ─── Figma Live Preview ─── */}
        {activeEmbedUrl && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mono text-xs text-accent-cyan tracking-[0.3em] mb-4">{`// LIVE PREVIEW`}</p>
            <h3 className="text-2xl font-bold font-outfit text-white mb-6">
              Figma Interactive Preview
            </h3>
            <div className="preview-frame rounded-2xl p-1 sm:p-1.5 overflow-hidden">
              <div className="bg-dark-surface rounded-xl p-2 sm:p-3">
                {/* Window chrome */}
                <div className="flex items-center gap-2.5 mb-3 px-1">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
                  <span className="flex-1 mx-4 h-6 rounded-md bg-dark-card border border-dark-elevated" />
                </div>
                <iframe
                  title={activeProject?.title || "Figma Project Preview"}
                  src={activeEmbedUrl}
                  className="w-full h-65 sm:h-90 lg:h-120 rounded-lg"
                  allowFullScreen
                  style={{ border: "1px solid rgba(34, 211, 238, 0.08)" }}
                />
              </div>
            </div>
            {activeProject?.title && (
              <div className="mt-4 text-sm text-txt-muted">
                Now viewing:{" "}
                <span className="text-accent-cyan font-semibold">
                  {activeProject.title}
                </span>
              </div>
            )}
          </motion.div>
        )}

        {/* ─── Project Gallery ─── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mono text-xs text-accent-cyan tracking-[0.3em] mb-3">{`// PORTFOLIO`}</p>
            <h3 className="text-3xl font-bold font-outfit text-white mb-6">
              Design Collection
            </h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {figmaProjects.map((project, idx) => (
              <ProjectCard3D
                key={`${project.title}-${idx}`}
                project={project}
                idx={idx}
                isActive={activeProjectIndex === idx}
                onSelect={setActiveProjectIndex}
              />
            ))}
          </div>

          {projectsWithEmbed.length === 0 && figmaProjects.length > 0 && (
            <p className="mt-4 text-sm text-txt-muted">
              Add an embed URL to your project object to enable live preview
              switching.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
