"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaArrowLeft,
  FaArrowRight,
  FaExpand,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";

const LAYOUTS = {
  mobile: {
    unit: "screen",
    grid: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
    thumb: "aspect-3/5",
    sizes:
      "(min-width: 1280px) 290px, (min-width: 1024px) 23vw, (min-width: 640px) 31vw, 46vw",
    viewerWidth: "max-w-110",
    viewerSizes: "(min-width: 440px) 440px, 100vw",
  },
  web: {
    unit: "page",
    grid: "sm:grid-cols-2 lg:grid-cols-3",
    thumb: "aspect-4/3",
    sizes: "(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw",
    viewerWidth: "max-w-5xl",
    viewerSizes: "(min-width: 1024px) calc(100vw - 26rem), 100vw",
  },
};

/* ─── Full-size viewer (native <dialog> gives focus trapping and Esc) ─── */
function ScreenViewer({ project, screens, index, onIndexChange, onClose }) {
  const dialogRef = useRef(null);
  const scrollRef = useRef(null);
  const touchStart = useRef(null);

  const layout = LAYOUTS[project.layout];
  const screen = screens[index];
  const hasMany = screens.length > 1;
  const step = (delta) =>
    onIndexChange((index + delta + screens.length) % screens.length);
  const neighbours = hasMany
    ? [
        screens[(index + 1) % screens.length],
        screens[(index - 1 + screens.length) % screens.length],
      ]
    : [];

  useEffect(() => {
    const dialog = dialogRef.current;
    const previouslyFocused = document.activeElement;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;

    if (!dialog.open) dialog.showModal();
    root.style.overflow = "hidden";

    return () => {
      root.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
      previouslyFocused?.focus?.({ preventScroll: true });
    };
  }, []);

  // Tall designs scroll inside the viewer, so always start each one at the top.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [index]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  };

  const handleTouchStart = (e) => {
    const touch = e.changedTouches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e) => {
    if (!touchStart.current) return;
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStart.current.x;
    const dy = touch.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      step(dx < 0 ? 1 : -1);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      aria-label={`${project.title} designs`}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onKeyDown={handleKeyDown}
      className="fixed inset-0 m-0 w-screen h-dvh max-w-none max-h-none bg-dark/95 text-white backdrop-blur-sm"
    >
      <div className="flex flex-col lg:flex-row w-full h-full">
        <div
          ref={scrollRef}
          tabIndex={0}
          aria-label="Design image, scrollable"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="flex-1 min-h-0 overflow-y-auto px-4 pt-4 lg:py-8"
        >
          <Image
            key={screen.src}
            src={screen.src}
            alt={`${project.title}, ${screen.title}. ${screen.description}`}
            width={screen.width}
            height={screen.height}
            sizes={layout.viewerSizes}
            priority
            className={`mx-auto w-full h-auto rounded-xl ${layout.viewerWidth}`}
          />
          {/* Load the next and previous designs early so paging feels instant. */}
          {neighbours.map((item) => (
            <Image
              key={`preload-${item.src}`}
              src={item.src}
              alt=""
              width={item.width}
              height={item.height}
              sizes={layout.viewerSizes}
              loading="eager"
              className="hidden"
            />
          ))}
        </div>

        <div className="shrink-0 lg:w-96 flex flex-col gap-3 lg:gap-5 p-4 lg:p-8 border-t lg:border-t-0 lg:border-l border-white/10 bg-dark-surface">
          <div className="flex items-center justify-between">
            <p className="text-sm text-txt-secondary" aria-live="polite">
              {project.title}: {index + 1} of {screens.length}
            </p>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="flex items-center justify-center w-11 h-11 shrink-0 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 transition-colors duration-200"
            >
              <FaTimes aria-hidden="true" />
            </button>
          </div>

          <div className="lg:flex-1">
            <h4 className="text-lg lg:text-2xl font-bold font-outfit">
              {screen.title}
            </h4>
            <p className="mt-1 lg:mt-3 text-sm lg:text-base text-txt-secondary leading-relaxed">
              {screen.description}
            </p>
          </div>

          {hasMany && (
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => step(-1)}
                className="flex-1 flex items-center justify-center gap-2 min-h-11 rounded-xl border border-white/15 bg-white/5 text-sm font-semibold hover:bg-white/15 transition-colors duration-200"
              >
                <FaArrowLeft aria-hidden="true" /> Previous
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                className="flex-1 flex items-center justify-center gap-2 min-h-11 rounded-xl bg-accent-cyan text-dark text-sm font-semibold hover:bg-accent-cyan/85 transition-colors duration-200"
              >
                Next <FaArrowRight aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}

/* ─── One project: its details and every screen, filterable by flow ─── */
function ProjectGallery({ project, previewCount }) {
  const [activeFlow, setActiveFlow] = useState("all");
  const [expanded, setExpanded] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(null);

  const layout = LAYOUTS[project.layout];
  const screens =
    activeFlow === "all"
      ? project.screens
      : project.screens.filter((screen) => screen.flow === activeFlow);
  const isTruncated = !expanded && screens.length > previewCount;
  const visibleScreens = isTruncated ? screens.slice(0, previewCount) : screens;

  const filters = project.flows
    ? [
        { id: "all", label: "All screens", count: project.screens.length },
        ...project.flows.map((flow) => ({
          ...flow,
          count: project.screens.filter((screen) => screen.flow === flow.id)
            .length,
        })),
      ]
    : [];

  return (
    <div className="mt-10">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold text-accent-cyan mb-2">
          {project.type}
        </p>
        <h3 className="text-3xl sm:text-4xl font-bold font-outfit text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-base sm:text-lg text-txt-secondary leading-relaxed">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs text-txt-primary bg-white/5 border border-white/10"
            >
              {tag}
            </span>
          ))}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 min-h-11 px-3 text-sm font-semibold text-accent-cyan hover:text-white transition-colors duration-200"
            >
              Open in Figma <FaExternalLinkAlt aria-hidden="true" className="text-xs" />
            </a>
          )}
        </div>
      </div>

      {filters.length > 0 && (
        <div
          role="group"
          aria-label="Filter screens by flow"
          className="mt-8 flex flex-wrap gap-2"
        >
          {filters.map((filter) => {
            const isActive = activeFlow === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFlow(filter.id)}
                className={`min-h-11 px-4 rounded-full text-sm font-semibold border transition-colors duration-200 ${
                  isActive
                    ? "bg-white border-white text-dark"
                    : "bg-white/5 border-white/10 text-txt-primary hover:bg-white/10"
                }`}
              >
                {filter.label}{" "}
                <span className={isActive ? "opacity-60" : "text-txt-secondary"}>
                  {filter.count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      <p className="mt-6 text-sm text-txt-secondary">
        Select any {layout.unit} to see it full size.
      </p>

      <ul className={`mt-4 grid gap-3 sm:gap-5 ${layout.grid}`}>
        {visibleScreens.map((screen, index) => (
          <li key={screen.src}>
            <button
              type="button"
              onClick={() => setViewerIndex(index)}
              className="group block w-full text-left rounded-2xl"
            >
              <span
                className={`relative block overflow-hidden rounded-2xl border border-white/10 bg-dark-card group-hover:border-accent-cyan/60 transition-colors duration-300 ${layout.thumb}`}
              >
                <Image
                  src={screen.src}
                  alt={screen.description}
                  fill
                  sizes={layout.sizes}
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
                <span className="absolute top-2 right-2 flex items-center justify-center w-8 h-8 rounded-full bg-black/70 text-white text-xs opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200">
                  <FaExpand aria-hidden="true" />
                </span>
              </span>
              <span className="block mt-2 px-1 text-sm font-semibold text-txt-primary group-hover:text-accent-cyan transition-colors duration-200">
                {screen.title}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {isTruncated && (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="min-h-11 px-6 rounded-xl text-sm font-semibold text-dark bg-accent-cyan hover:bg-accent-cyan/85 transition-colors duration-200"
          >
            Show all {screens.length} {layout.unit}s
          </button>
        </div>
      )}

      {viewerIndex !== null && (
        <ScreenViewer
          project={project}
          screens={screens}
          index={viewerIndex}
          onIndexChange={setViewerIndex}
          onClose={() => setViewerIndex(null)}
        />
      )}
    </div>
  );
}

/* ─── Main Section ─── */
export default function UiUxFigmaSection({
  summary,
  projects = [],
  process = [],
  showHeader = true,
  previewCount = Infinity,
}) {
  const [activeId, setActiveId] = useState(projects[0]?.id);
  const activeProject = projects.find((project) => project.id === activeId);

  return (
    <section
      id="uiux"
      className="relative py-20 px-6 md:px-12 bg-linear-to-b from-dark via-[#05050A] to-dark text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {showHeader ? (
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mono text-xs text-accent-cyan tracking-[0.3em] mb-4">{`// UI/UX DESIGN`}</p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-outfit font-black tracking-tight leading-none">
              <span className="text-white italic">DESIGN </span>
              <span className="text-outline-accent italic">PROJECTS</span>
            </h2>
            {summary && (
              <p className="mt-6 text-lg text-txt-secondary max-w-3xl leading-relaxed">
                {summary}
              </p>
            )}
          </motion.div>
        ) : (
          <h2 className="sr-only">Design projects</h2>
        )}

        <div
          role="group"
          aria-label="Choose a project"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"
        >
          {projects.map((project) => {
            const isActive = project.id === activeId;
            const unit = LAYOUTS[project.layout].unit;
            const count = project.screens.length;
            return (
              <button
                key={project.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveId(project.id)}
                className={`text-left rounded-2xl overflow-hidden border-2 bg-dark-card transition-colors duration-200 ${
                  isActive
                    ? "border-accent-cyan"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <span className="relative block aspect-video bg-dark-surface">
                  <Image
                    src={project.screens[0].src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 240px, (min-width: 768px) 33vw, 50vw"
                    className="object-cover object-top"
                  />
                </span>
                <span className="block p-3">
                  <span className="block text-sm sm:text-base font-bold font-outfit text-txt-primary">
                    {project.title}
                  </span>
                  <span className="block mt-0.5 text-xs text-txt-secondary">
                    {count} {unit}
                    {count === 1 ? "" : "s"}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* The key resets filters and "show all" when switching projects. */}
        {activeProject && (
          <ProjectGallery
            key={activeProject.id}
            project={activeProject}
            previewCount={previewCount}
          />
        )}

        {process.length > 0 && (
          <div className="mt-20">
            <h3 className="text-3xl font-bold font-outfit text-white mb-6">
              How I design
            </h3>
            <ol
              className={`grid gap-5 ${
                process.length === 4
                  ? "sm:grid-cols-2 lg:grid-cols-4"
                  : "md:grid-cols-3"
              }`}
            >
              {process.map((item, index) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-dark-card p-6"
                >
                  <p className="font-mono text-sm font-bold text-accent-cyan mb-2">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h4 className="text-lg font-bold font-outfit text-txt-primary mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-txt-secondary leading-relaxed">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
}
