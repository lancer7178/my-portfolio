import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import CaseStudyJourney from "@/components/CaseStudyJourney";
import { ProjectActions } from "@/components/ProjectCard";

function Block({ title, children }) {
  return (
    <section className="border-t border-white/10 pt-6 sm:pt-8">
      <h2 className="mb-3 text-2xl sm:text-3xl font-extrabold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}

function TextBlock({ title, text }) {
  return text ? <Block title={title}><p className="max-w-3xl leading-relaxed text-txt-secondary">{text}</p></Block> : null;
}

function BulletList({ items }) {
  return (
    <ul className="ml-5 list-disc space-y-2 leading-relaxed text-txt-secondary marker:text-accent-cyan">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

function Notes({ title, items }) {
  if (!items?.length) return null;

  return (
    <Block title={title}>
      <dl className="grid gap-4 sm:grid-cols-2">
        {items.map(({ title, detail }) => (
          <div key={title} className="rounded-xl border border-white/12 bg-dark-card p-4 sm:p-5">
            <dt className="font-bold text-txt-primary">{title}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-txt-secondary">{detail}</dd>
          </div>
        ))}
      </dl>
    </Block>
  );
}

export default function CaseStudy({ project }) {
  const { title, category, type, description, image, imageAlt, caseStudy } = project;

  return (
    <article className="relative section-wrap max-w-3xl py-16 sm:py-24">
      <Link href="/projects" className="action action-text !px-0 text-accent-cyan"><FaArrowLeft aria-hidden="true" /> All Projects</Link>
      <header className="mt-5 mb-7 sm:mb-9">
        <p className="mono mb-4 text-[11px] tracking-[0.2em] text-accent-cyan">{category}</p>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">{title}</h1>
        {type && <p className="mt-3 text-sm text-txt-muted">{type}</p>}
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-txt-secondary">{description}</p>
        <ProjectActions item={project} />
      </header>
      <div className="relative aspect-16/9 overflow-hidden rounded-2xl border border-dark-elevated bg-dark-elevated">
        <Image src={image} alt={imageAlt || `${title} interface preview`} fill sizes="(min-width: 1024px) 960px, 100vw" className="object-cover object-top" preload />
      </div>

      <div className="mt-8 grid gap-7 sm:mt-12 sm:gap-10">
        <TextBlock title="My Engineering Role" text={caseStudy.role} />
        {caseStudy.contribution && (
          <Block title="Contribution by Discipline">
            <div className="grid gap-4 sm:grid-cols-2">
              <div><h3 className="mb-2 font-bold">Product Design</h3><BulletList items={caseStudy.contribution.design} /></div>
              <div><h3 className="mb-2 font-bold">Frontend Engineering</h3><BulletList items={caseStudy.contribution.frontend} /></div>
            </div>
          </Block>
        )}
        <TextBlock title="Business Requirements" text={caseStudy.requirements} />
        {!!caseStudy.architecture?.length && <Block title="System Architecture"><ArchitectureDiagram flows={caseStudy.architecture} /></Block>}
        {!!caseStudy.stack?.length && (
          <Block title="Technology Stack">
            <dl className="divide-y divide-white/10 rounded-xl border border-white/12 bg-dark-card">
              {caseStudy.stack.map(({ layer, technologies }) => (
                <div key={layer} className="grid gap-1 px-4 py-3 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-4">
                  <dt className="font-semibold text-txt-primary">{layer}</dt>
                  <dd className="text-txt-secondary">{technologies.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </Block>
        )}
        {!!caseStudy.built?.length && <Block title="Core Features"><BulletList items={caseStudy.built} /></Block>}
        <TextBlock title="API Development & Integration" text={caseStudy.api} />
        <TextBlock title="Database & Data Management" text={caseStudy.data} />
        <TextBlock title="Business Logic" text={caseStudy.businessLogic} />
        <Notes title="Technical Challenges & Solutions" items={caseStudy.challenges} />
        <TextBlock title="Security & Reliability" text={caseStudy.security} />
        <TextBlock title="Performance & Optimization" text={caseStudy.performance} />
        <Notes title="Engineering Decisions" items={caseStudy.decisions} />
        <TextBlock title="Results & Outcomes" text={caseStudy.outcome} />
        {(!!caseStudy.journey?.length || !!caseStudy.mobile?.length) && (
          <Block title="Screenshots & Demonstrations">
            <CaseStudyJourney title={title} journey={caseStudy.journey} mobile={caseStudy.mobile} />
          </Block>
        )}
      </div>
      <Link href="/projects" className="action action-secondary mt-9"><FaArrowLeft aria-hidden="true" /> Explore More Projects</Link>
    </article>
  );
}
