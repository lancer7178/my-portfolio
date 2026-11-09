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
import { screenCountLabel } from "@/data/figma";

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
      {detail.items?.length > 0 && <BulletList items={detail.items} />}
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="w-1.5 h-1.5 mt-2 rounded-full bg-accent-cyan shrink-0" />
          <span className="text-sm text-txt-secondary leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ProjectFacts({ project }) {
  const facts = [
    ["Role", project.role],
    ["Platform", project.platform],
    ["Deliverables", project.deliverables],
    ["Tools", project.tools],
    ["Design focus", project.focus],
  ].filter(([, value]) => value);

  return (
    <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5 pt-6 border-t border-white/10">
      {facts.map(([label, value]) => (
        <div
          key={label}
          className={label === "Design focus" ? "col-span-full" : ""}
        >
          <dt className="mono text-[10px] text-txt-secondary tracking-[0.15em] mb-1">
            {label}
          </dt>
          <dd className="text-sm text-txt-primary leading-relaxed">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

/* Numbered block, matching the case study pages. */
function StudySection({ number, title, children }) {
  return (
    <section className="mb-16 sm:mb-20">
      <p className="mono text-xs text-accent-cyan tracking-[0.3em] mb-3">
        {`// ${String(number).padStart(2, "0")}`}
      </p>
      <h2 className="text-2xl sm:text-3xl font-black font-outfit mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ScreenThumb({ screen, projectTitle, sizes, className, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View ${screen.title} full size`}
      className={`group relative block overflow-hidden rounded-xl border border-white/10 bg-dark-surface hover:border-accent-cyan/60 cursor-zoom-in transition-colors duration-300 ${className}`}
    >
      <Image
        src={screen.src}
        alt={`${projectTitle}, ${screen.title}`}
        fill
        sizes={sizes}
        className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
      />
    </button>
  );
}

function ProjectCaseStudy({ project, study, openScreens }) {
  const findScreen = (title) =>
    project.screens.find((screen) => screen.title === title);
  const flowScreens = study.userFlow?.map((step) => findScreen(step.screen));
  const decisionScreens = study.decisions?.map((d) => findScreen(d.screen));

  let number = 0;
  return (
    <div className="mb-4">
      {(study.problem || study.goals) && (
        <div className="grid lg:grid-cols-2 gap-x-16">
          {study.problem && (
            <StudySection number={++number} title="The problem">
              <p className="text-txt-secondary leading-relaxed">
                {study.problem}
              </p>
            </StudySection>
          )}
          {study.goals && (
            <StudySection number={++number} title="Design goals">
              <BulletList items={study.goals} />
            </StudySection>
          )}
        </div>
      )}

      {study.userFlow && (
        <StudySection number={++number} title="User flow">
          <p className="text-txt-secondary mb-6">
            The main journey, from signing in to collecting a reward. Select a
            step to see its screen.
          </p>
          <ol className="flex gap-3 overflow-x-auto pb-3 -mx-6 px-6 md:mx-0 md:px-0">
            {study.userFlow.map((step, index) => (
              <li
                key={step.label}
                className="shrink-0 w-28 sm:w-32 lg:w-auto lg:shrink lg:flex-1 lg:min-w-0"
              >
                <ScreenThumb
                  screen={flowScreens[index]}
                  projectTitle={project.title}
                  sizes="128px"
                  className="w-full aspect-3/5"
                  onOpen={() => openScreens(flowScreens, index)}
                />
                <p className="mt-2 text-xs sm:text-sm text-txt-primary">
                  <span className="font-mono text-accent-cyan mr-1.5">
                    {index + 1}
                  </span>
                  {step.label}
                </p>
              </li>
            ))}
          </ol>
        </StudySection>
      )}

      {study.decisions && (
        <StudySection number={++number} title="Design decisions">
          <ul className="grid md:grid-cols-2 gap-4">
            {study.decisions.map((decision, index) => (
              <li
                key={decision.title}
                className="flex gap-4 p-4 sm:p-5 rounded-2xl bg-dark-card/70 border border-white/10"
              >
                <ScreenThumb
                  screen={decisionScreens[index]}
                  projectTitle={project.title}
                  sizes="96px"
                  className="shrink-0 w-20 sm:w-24 aspect-3/5 self-start"
                  onOpen={() => openScreens(decisionScreens, index)}
                />
                <div>
                  <h3 className="text-base font-bold font-outfit text-accent-cyan mb-2">
                    {decision.title}
                  </h3>
                  <p className="text-sm text-txt-secondary leading-relaxed">
                    {decision.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </StudySection>
      )}

      {study.visualDesign && (
        <StudySection number={++number} title="Visual design">
          <p className="max-w-3xl text-txt-secondary leading-relaxed mb-6">
            {study.visualDesign.summary}
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {study.visualDesign.colors.map((color) => (
              <li
                key={color.hex}
                className="rounded-xl overflow-hidden border border-white/10 bg-dark-card"
              >
                <span
                  className="block h-20"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="block p-3">
                  <span className="block text-sm font-semibold text-txt-primary">
                    {color.name}
                  </span>
                  <span className="block text-xs text-txt-secondary">
                    {color.use}
                  </span>
                  <span className="block mt-1 font-mono text-xs text-txt-secondary">
                    {color.hex}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </StudySection>
      )}

      {study.designSystem && (
        <StudySection number={++number} title="Design system">
          <p className="max-w-3xl text-txt-secondary leading-relaxed mb-6">
            {study.designSystem.summary}
          </p>
          <ul className="columns-1 md:columns-2 gap-4">
            {study.designSystem.components.map((component) => (
              <li
                key={component.name}
                className="break-inside-avoid mb-4 p-4 rounded-2xl bg-dark-card/70 border border-white/10"
              >
                <p className="mono text-[10px] text-txt-secondary tracking-[0.15em] mb-3">
                  {component.name}
                </p>
                <Image
                  src={component.src}
                  alt={`${project.title} ${component.name}`}
                  width={component.width}
                  height={component.height}
                  sizes="(min-width: 480px) 440px, 100vw"
                  className="w-full max-w-110 h-auto mx-auto rounded-lg"
                />
              </li>
            ))}
          </ul>
        </StudySection>
      )}
    </div>
  );
}

/* A titled grid of screens with optional flow filters. A project shows its
   main gallery first, then any extra ones (e.g. an admin dashboard), each with
   its own layout. */
function ScreenGallery({
  id,
  title,
  description,
  unit,
  screens: allScreens,
  flows,
  layoutName,
  projectTitle,
  openScreens,
}) {
  const [activeFlow, setActiveFlow] = useState("all");
  const layout = LAYOUTS[layoutName];
  const screens =
    activeFlow === "all"
      ? allScreens
      : allScreens.filter((screen) => screen.flow === activeFlow);

  const filters = flows
    ? [
        { id: "all", label: "All", count: allScreens.length },
        ...flows.map((flow) => ({
          ...flow,
          count: allScreens.filter((screen) => screen.flow === flow.id).length,
        })),
      ]
    : [];

  return (
    <section aria-labelledby={`${id}-heading`}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h2
          id={`${id}-heading`}
          className="text-2xl sm:text-3xl font-black font-outfit"
        >
          {title}{" "}
          <span className="font-mono text-base font-normal text-txt-secondary">
            {screens.length}
          </span>
        </h2>
        <p className="text-sm text-txt-secondary">
          Select any {unit} to view it full size and zoom in.
        </p>
      </div>

      {description && (
        <p className="mt-3 max-w-3xl text-txt-secondary leading-relaxed">
          {description}
        </p>
      )}

      {filters.length > 0 && (
        <div
          role="group"
          aria-label={`Filter ${title} by user flow`}
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
              onClick={() => openScreens(screens, index, layout.viewerWidth)}
              className="group block w-full text-left rounded-2xl cursor-zoom-in"
            >
              <span
                className={`relative block overflow-hidden rounded-2xl border border-white/10 bg-dark-card group-hover:border-accent-cyan/60 transition-colors duration-300 ${layout.thumb}`}
              >
                <Image
                  src={screen.src}
                  alt={`${projectTitle}, ${screen.title}`}
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
  const [viewer, setViewer] = useState(null);

  const openScreens = (
    list,
    index,
    baseWidth = LAYOUTS[project.layout].viewerWidth,
  ) =>
    setViewer({
      index,
      baseWidth,
      images: list.map((screen) => ({
        ...screen,
        alt: `${project.title}, ${screen.title}. ${screen.description}`,
      })),
    });

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
              {project.caseStudy ? "UI/UX Case Study · " : ""}
              {project.category} · {screenCountLabel(project)}
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
            <ProjectFacts project={project} />
          </div>

          {project.details?.length > 0 && (
            <div className="space-y-6 p-6 rounded-2xl border border-white/10 bg-dark-card/70 self-start">
              {project.details.map((detail) => (
                <DetailBlock key={detail.label} detail={detail} />
              ))}
            </div>
          )}
        </header>

        {project.caseStudy && (
          <ProjectCaseStudy
            project={project}
            study={project.caseStudy}
            openScreens={openScreens}
          />
        )}

        <ScreenGallery
          id="gallery"
          title={project.galleryTitle}
          unit={project.unit}
          screens={project.screens}
          flows={project.flows}
          layoutName={project.layout}
          projectTitle={project.title}
          openScreens={openScreens}
        />

        {project.galleries?.map((gallery) => (
          <div key={gallery.id} className="mt-20">
            <ScreenGallery
              id={gallery.id}
              title={gallery.title}
              description={gallery.description}
              unit={gallery.unit ?? project.unit}
              screens={gallery.screens}
              flows={gallery.flows}
              layoutName={gallery.layout ?? project.layout}
              projectTitle={project.title}
              openScreens={openScreens}
            />
          </div>
        ))}

        <nav
          aria-label="More projects"
          className="mt-20 flex flex-col sm:flex-row gap-4"
        >
          <ProjectLink project={previousProject} direction="previous" />
          <ProjectLink project={nextProject} direction="next" />
        </nav>
      </div>

      {viewer && (
        <ImageViewer
          title={project.title}
          images={viewer.images}
          index={viewer.index}
          baseWidth={viewer.baseWidth}
          onIndexChange={(index) => setViewer({ ...viewer, index })}
          onClose={() => setViewer(null)}
        />
      )}
    </article>
  );
}
