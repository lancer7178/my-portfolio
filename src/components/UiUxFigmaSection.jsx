"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { categoryLabel, screenCountLabel } from "@/data/figma";

/* Tall phone screens lose too much when cropped into a wide card, so a mobile
   project without its own cover shows a row of its real screens instead. */
function ProjectCover({ project, isWide }) {
  if (!project.cover && project.layout === "mobile") {
    return (
      <span className="absolute inset-0 flex justify-center gap-3 sm:gap-4 px-5 pt-6 bg-linear-to-b from-white/6 to-transparent">
        {project.screens.slice(0, 4).map((screen, index) => (
          <span
            key={screen.src}
            className={`relative h-full flex-1 max-w-44 overflow-hidden rounded-t-xl border border-b-0 border-white/10 ${
              index === 3 ? "hidden sm:block" : ""
            }`}
          >
            <Image
              src={screen.src}
              alt={`${project.title}, ${screen.title}`}
              fill
              sizes="176px"
              className="object-cover object-top"
            />
          </span>
        ))}
      </span>
    );
  }

  return (
    <Image
      src={project.cover ?? project.screens[0].src}
      alt={`${project.title} design preview`}
      fill
      sizes={
        isWide
          ? "(min-width: 768px) 800px, 100vw"
          : "(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
      }
      className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
    />
  );
}

function ProjectCard({ project, isWide }) {
  return (
    <li className={isWide ? "md:col-span-2" : ""}>
      <Link
        href={`/ui-ux/${project.id}`}
        className="group flex flex-col h-full rounded-2xl overflow-hidden border border-white/10 bg-dark-card hover:border-accent-cyan/50 transition-colors duration-300"
      >
        <span className="relative block h-52 sm:h-60 lg:h-64 overflow-hidden bg-dark-surface">
          <ProjectCover project={project} isWide={isWide} />
        </span>
        <span className="flex-1 flex flex-col p-5 sm:p-6">
          <span className="mono text-[11px] text-accent-cyan tracking-[0.15em]">
            {categoryLabel(project)}
          </span>
          <span className="mt-2 text-xl sm:text-2xl font-bold font-outfit text-txt-primary group-hover:text-accent-cyan transition-colors duration-200">
            {project.title}
          </span>
          <span className="mt-2 flex-1 text-sm text-txt-secondary leading-relaxed line-clamp-3">
            {project.description}
          </span>
          <span className="mt-4 pt-4 flex items-center justify-between gap-3 border-t border-white/10 text-sm">
            <span className="text-txt-secondary">
              {screenCountLabel(project)}
            </span>
            <span className="inline-flex items-center gap-2 font-semibold text-txt-primary group-hover:text-accent-cyan transition-colors duration-200">
              Explore
              <FaArrowRight
                aria-hidden="true"
                className="text-xs group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </span>
          </span>
        </span>
      </Link>
    </li>
  );
}

/* ─── Main Section ─── */
export default function UiUxFigmaSection({
  summary,
  projects = [],
  process = [],
  showHeader = true,
}) {
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

        {/* The first project spans two columns, so five cards fill the grid. */}
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isWide={index === 0}
            />
          ))}
        </ul>

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
