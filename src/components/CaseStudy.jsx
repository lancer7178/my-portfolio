import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

const FALLBACK_DATA_URI =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=";

function Block({ label, title, children }) {
  return (
    <section className="mb-14">
      <p className="mono text-xs text-accent-cyan tracking-[0.3em] mb-3">
        {label}
      </p>
      <h2 className="text-2xl sm:text-3xl font-black font-outfit text-white mb-5">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function CaseStudy({ project }) {
  const cs = project.caseStudy || {};

  return (
    <article className="relative py-16 sm:py-24 px-6 md:px-12 bg-dark text-white overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -top-24 -left-24 w-125 h-125 bg-accent-cyan blur-[220px] opacity-[0.06] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -right-24 w-125 h-125 bg-accent-violet blur-[220px] opacity-[0.05] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 mono text-xs text-txt-muted hover:text-accent-cyan transition-colors mb-10"
        >
          <FaArrowLeft className="text-[10px]" /> Back to work
        </Link>

        {/* Header */}
        <header className="mb-10">
          <p className="mono text-[11px] text-accent-cyan tracking-[0.2em] mb-4">
            {project.category}
          </p>
          <h1 className="text-4xl sm:text-6xl font-black font-outfit capitalize tracking-tight leading-none mb-5">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-txt-secondary leading-relaxed">
            {project.tagline}
          </p>
        </header>

        {/* Cover image */}
        <div className="relative w-full aspect-16/9 rounded-2xl overflow-hidden border border-dark-elevated mb-14">
          <Image
            src={project.image || FALLBACK_DATA_URI}
            alt={`${project.title} interface`}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover object-top"
            quality={90}
            priority
          />
        </div>

        {cs.problem && (
          <Block label="// 01" title="The problem">
            <p className="text-txt-secondary leading-relaxed">{cs.problem}</p>
          </Block>
        )}

        {cs.idea && (
          <Block label="// 02" title="The idea">
            <p className="text-txt-secondary leading-relaxed">{cs.idea}</p>
          </Block>
        )}

        {cs.built?.length > 0 && (
          <Block label="// 03" title="What I built">
            <ul className="space-y-3">
              {cs.built.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-linear-to-r from-accent-cyan to-accent-indigo flex-shrink-0" />
                  <span className="text-txt-secondary leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Block>
        )}

        {cs.decisions?.length > 0 && (
          <Block label="// 04" title="Key decisions">
            <div className="grid gap-4">
              {cs.decisions.map((d, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-dark-card/70 border border-dark-elevated"
                >
                  <h3 className="text-base font-bold font-outfit text-accent-cyan mb-2">
                    {d.title}
                  </h3>
                  <p className="text-sm text-txt-muted leading-relaxed">
                    {d.detail}
                  </p>
                </div>
              ))}
            </div>
          </Block>
        )}

        {cs.technology?.length > 0 && (
          <Block label="// 05" title="Technology">
            <div className="flex flex-wrap gap-2">
              {cs.technology.map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="px-3 py-1.5 text-xs mono text-accent-cyan bg-accent-cyan/5 border border-accent-cyan/12 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Block>
        )}

        {cs.outcome && (
          <Block label="// 06" title="Result">
            <p className="text-txt-secondary leading-relaxed">{cs.outcome}</p>
          </Block>
        )}

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-dark-elevated">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white bg-linear-to-r from-accent-cyan/90 via-accent-indigo/85 to-accent-violet/80 hover:from-accent-cyan hover:via-accent-indigo hover:to-accent-violet transition-all duration-300 shadow-lg shadow-accent-indigo/12"
            >
              View live project
              <FaExternalLinkAlt className="text-[11px] transition-transform group-hover:translate-x-1" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-txt-secondary bg-dark-card border border-dark-elevated hover:border-accent-cyan/40 hover:text-accent-cyan transition-all duration-300"
            >
              Source <FaGithub className="text-sm" />
            </a>
          )}
          <Link
            href="/#work"
            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-accent-cyan bg-accent-cyan/5 border border-accent-cyan/15 hover:border-accent-cyan/50 transition-all duration-300"
          >
            More work <FaArrowRight className="text-[11px]" />
          </Link>
        </div>
      </div>
    </article>
  );
}
