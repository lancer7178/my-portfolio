import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const agencies = {
  "design-ways": { label: "Design Ways", logo: "/logo-company/design-ways.png" },
  bowmen: { label: "Bowmen Marketing", logo: "/logo-company/bowmen.png" },
};

export function ProjectPreview({ item, className = "", sizes }) {
  const agency = item.agency && agencies[item.agency];
  const preview = (
    <div className={`relative w-full overflow-hidden border-b border-white/10 bg-dark-elevated ${className}`}>
      <Image
        src={item.image}
        alt={item.imageAlt || `${item.title} interface preview`}
        fill
        sizes={sizes}
        className="project-image object-cover object-top"
      />
      {agency && (
        <span className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-dark/95 px-2.5 py-1 text-xs text-white">
          <Image src={agency.logo} alt="" width={14} height={14} className="size-3.5 object-contain" />
          {agency.label}
        </span>
      )}
    </div>
  );
  // The matching text action below remains the keyboard-accessible link.
  if (item.href) return <Link href={item.href} tabIndex={-1} className="block">{preview}</Link>;
  if (item.link) return <a href={item.link} target="_blank" rel="noopener noreferrer" tabIndex={-1} className="block">{preview}</a>;
  return preview;
}

export function ProjectActions({ item }) {
  return (
    <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
      {item.href && <Link href={item.href} className="action action-primary" aria-label={`View ${item.title} case study`}>Case Study <FaArrowRight aria-hidden="true" data-action-icon="arrow" /></Link>}
      {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" className="action action-live" aria-label={`Open ${item.title} live site in a new tab`}>Live Site <FaExternalLinkAlt aria-hidden="true" data-action-icon="external" /></a>}
      {item.github && <a href={item.github} target="_blank" rel="noopener noreferrer" className="action action-text" aria-label={`Open ${item.title} source on GitHub in a new tab`}><FaGithub aria-hidden="true" /> Source</a>}
      {item.status && <span className="max-w-full text-sm text-txt-muted">{item.status}</span>}
    </div>
  );
}

export default function ProjectCard({ item }) {
  const tech = item.technologies;
  return (
    <article className="panel-hover flex h-full flex-col overflow-hidden rounded-2xl border border-dark-elevated bg-dark-card/70">
      <ProjectPreview item={item} className="aspect-2/1" sizes="(min-width: 1280px) 384px, (min-width: 768px) 48vw, 100vw" />
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="section-label">{item.category}</p>
        <h3 className="project-title mt-1.5 text-xl leading-tight font-bold">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-txt-secondary">{item.description}</p>
        {!!tech?.length && <p className="mt-3 text-xs leading-relaxed text-txt-muted">{tech.slice(0, 5).join(" · ")}</p>}
        <ProjectActions item={item} />
      </div>
    </article>
  );
}
