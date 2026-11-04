"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaArrowRight,
  FaExpand,
  FaExternalLinkAlt,
} from "react-icons/fa";
import ImageViewer from "@/components/ImageViewer";
import { categoryLabel, screenCountLabel } from "@/data/figma";

const LAYOUTS = {
  mobile: {
    grid: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
    thumb: "aspect-3/5",
    sizes:
      "(min-width: 1280px) 290px, (min-width: 1024px) 23vw, (min-width: 640px) 31vw, 46vw",
    viewerWidth: 440,
  },
  web: {
    grid: "sm:grid-cols-2 lg:grid-cols-3",
    thumb: "aspect-4/3",
    sizes: "(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw",
    viewerWidth: 1100,
  },
};

function DetailBlock({ detail }) {
  return (
    <div>
      <h2 className="mono text-xs text-accent-cyan tracking-[0.2em] mb-3">
        {detail.label}
      </h2>
      {detail.text && (
        <p className="text-sm text-txt-secondary leading-relaxed">
          {detail.text}
        </p>
      )}
      {detail.items?.length > 0 && (
        <ul className="space-y-2">
          {detail.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 mt-2 rounded-full bg-accent-cyan shrink-0" />
              <span className="text-sm text-txt-secondary leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ProjectLink({ project, direction }) {
  const isNext = direction === "next";
  return (
    <Link
      href={`/ui-ux/${project.id}`}
      className={`group flex-1 p-5 rounded-2xl border border-white/10 bg-dark-card hover:border-accent-cyan/50 transition-colors duration-300 ${
        isNext ? "text-right" : ""
      }`}
    >
      <span className="block mono text-xs text-txt-secondary mb-1">
        {isNext ? "Next project" : "Previous project"}
      </span>
      <span
        className={`flex items-center gap-2 text-lg font-bold font-outfit text-txt-primary group-hover:text-accent-cyan transition-colors duration-200 ${
          isNext ? "justify-end" : ""
        }`}
      >
        {!isNext && <FaArrowLeft aria-hidden="true" className="text-sm" />}
        {project.title}
        {isNext && <FaArrowRight aria-hidden="true" className="text-sm" />}
      </span>
    </Link>
  );
}

export default function DesignProjectGallery({
  project,
  previousProject,
  nextProject,
}) {
  const [activeFlow, setActiveFlow] = useState("all");
  const [viewerIndex, setViewerIndex] = useState(null);

  const layout = LAYOUTS[project.layout];
  const screens =
    activeFlow === "all"
      ? project.screens
      : project.screens.filter((screen) => screen.flow === activeFlow);

  const filters = project.flows
    ? [
        { id: "all", label: "All", count: project.screens.length },
        ...project.flows.map((flow) => ({
          ...flow,
          count: project.screens.filter((screen) => screen.flow === flow.id)
            .length,
        })),
      ]
    : [];

  const viewerImages = screens.map((screen) => ({
    ...screen,
    alt: `${project.title}, ${screen.title}. ${screen.description}`,
  }));

  return (
    <article className="relative pt-16 sm:pt-20 pb-28 px-6 md:px-12 bg-dark text-white overflow-hidden">
      {/* Ambient glow, as on the case study pages */}
      <div className="absolute -top-24 -left-24 w-125 h-125 bg-accent-cyan blur-[220px] opacity-[0.06] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <nav
          aria-label="Back"
          className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-10"
        >
          <Link
            href="/ui-ux"
            className="inline-flex items-center gap-2 min-h-11 mono text-xs text-txt-secondary hover:text-accent-cyan transition-colors"
          >
            <FaArrowLeft aria-hidden="true" className="text-[10px]" /> All
            designs
          </Link>
          <Link
            href="/"
            className="inline-flex items-center min-h-11 mono text-xs text-txt-secondary hover:text-accent-cyan transition-colors"
          >
            Portfolio home
          </Link>
        </nav>

        <header className="grid lg:grid-cols-[minmax(0,1fr)_24rem] gap-10 lg:gap-16 mb-16">
          <div>
            <p className="mono text-[11px] text-accent-cyan tracking-[0.2em] mb-4">
              {categoryLabel(project)} · {screenCountLabel(project)}
            </p>
            <h1 className="text-4xl sm:text-6xl font-black font-outfit tracking-tight leading-none mb-5">
              {project.title}
            </h1>
            <p className="max-w-2xl text-lg text-txt-secondary leading-relaxed">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
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
                  Open in Figma
                  <FaExternalLinkAlt aria-hidden="true" className="text-xs" />
                </a>
              )}
            </div>
          </div>

          {project.details?.length > 0 && (
            <div className="space-y-6 p-6 rounded-2xl border border-white/10 bg-dark-card/70">
              {project.details.map((detail) => (
                <DetailBlock key={detail.label} detail={detail} />
              ))}
            </div>
          )}
        </header>

        <section aria-labelledby="gallery-heading">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h2
              id="gallery-heading"
              className="text-2xl sm:text-3xl font-black font-outfit"
            >
              {project.galleryTitle}
            </h2>
            <p className="text-sm text-txt-secondary">
              Select any {project.unit} to view it full size and zoom in.
            </p>
          </div>

          {filters.length > 0 && (
            <div
              role="group"
              aria-label="Filter by user flow"
              className="mt-5 flex flex-wrap gap-2"
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
                    <span
                      className={isActive ? "opacity-60" : "text-txt-secondary"}
                    >
                      {filter.count}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          <ul className={`mt-6 grid gap-3 sm:gap-5 ${layout.grid}`}>
            {screens.map((screen, index) => (
              <li key={screen.src}>
                <button
                  type="button"
                  onClick={() => setViewerIndex(index)}
                  className="group block w-full text-left rounded-2xl cursor-zoom-in"
                >
                  <span
                    className={`relative block overflow-hidden rounded-2xl border border-white/10 bg-dark-card group-hover:border-accent-cyan/60 transition-colors duration-300 ${layout.thumb}`}
                  >
                    <Image
                      src={screen.src}
                      alt={`${project.title}, ${screen.title}`}
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
        </section>

        <nav
          aria-label="More projects"
          className="mt-20 flex flex-col sm:flex-row gap-4"
        >
          <ProjectLink project={previousProject} direction="previous" />
          <ProjectLink project={nextProject} direction="next" />
        </nav>
      </div>

      {viewerIndex !== null && (
        <ImageViewer
          title={project.title}
          images={viewerImages}
          index={viewerIndex}
          baseWidth={layout.viewerWidth}
          onIndexChange={setViewerIndex}
          onClose={() => setViewerIndex(null)}
        />
      )}
    </article>
  );
}
