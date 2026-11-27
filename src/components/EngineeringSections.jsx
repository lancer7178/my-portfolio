import Link from "next/link";
import {
  FaCode, FaDatabase, FaDraftingCompass, FaLayerGroup, FaMobileAlt,
  FaServer, FaShoppingCart, FaTachometerAlt, FaTools,
} from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";
import { buildProcess, capabilities, experiences, skillCategories } from "@/data/engineering";

const icons = {
  "full-stack": FaCode, backend: FaServer, database: FaDatabase,
  mobile: FaMobileAlt, cms: FaLayerGroup, commerce: FaShoppingCart,
  performance: FaTachometerAlt, product: FaDraftingCompass, tools: FaTools,
};

const monthFormat = new Intl.DateTimeFormat("en", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function ExperienceDate({ value }) {
  return <time dateTime={value}>{monthFormat.format(new Date(value + "-01T00:00:00Z"))}</time>;
}

export function EngineeringCapabilities() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-title" className="section-wrap section-space">
      <SectionHeading id="capabilities-title" label="Engineering Capabilities" accent="Digital Solutions" description="From backend infrastructure and application logic to responsive interfaces and cross-platform experiences, I develop software solutions that connect technology with real business needs.">
        Engineering Complete
      </SectionHeading>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map(({ id, title, description }) => {
          const Icon = icons[id];
          return (
            <li key={id} className="panel-hover rounded-2xl border border-dark-elevated bg-dark-card/70 p-5 sm:p-6">
              <Icon aria-hidden="true" className="mb-4 text-xl text-accent-cyan" />
              <h3 className="text-lg font-bold leading-tight">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-txt-secondary">{description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function TechnicalExpertise() {
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="bg-linear-to-b from-dark via-dark-surface to-dark">
      <div id="skills" className="section-wrap section-space">
        <SectionHeading id="expertise-title" label="Tools & Practices" accent="Expertise">Technical</SectionHeading>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map(({ id, label, skills }) => {
            const Icon = icons[id];
            return (
              <li key={id} className="group panel-hover rounded-2xl border border-dark-elevated bg-dark-card/70 p-4 sm:p-5">
                <h3 className="mb-3 flex items-start gap-2 text-base font-bold text-txt-primary">
                  <Icon aria-hidden="true" className="mt-0.5 shrink-0 text-accent-cyan transition-transform motion-safe:group-hover:-translate-y-0.5" /> {label}
                </h3>
                <ul className="flex flex-wrap gap-1.5">
                  {skills.map((skill) => <li key={skill} className="mono rounded-md border border-dark-elevated px-2.5 py-1 text-[11px] text-txt-secondary">{skill}</li>)}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function ProfessionalExperience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section-wrap section-space">
      <SectionHeading id="experience-title" label="Journey" accent="Experience">Professional</SectionHeading>
      <ol className="grid gap-10 border-l border-white/15 pl-5 sm:pl-8">
        {experiences.map(({ company, role, start, end, location, bullets, technologies, projects }) => (
          <li key={company} data-reveal className="relative grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-9">
            <span aria-hidden="true" className="absolute top-2 -left-[26px] grid size-2.5 rounded-full bg-accent-cyan ring-4 ring-dark sm:-left-[38px]" />
            <div>
              <p className="font-mono text-xs text-accent-cyan"><ExperienceDate value={start} /> – {end ? <ExperienceDate value={end} /> : "Present"}</p>
              <h3 className="mt-2 text-xl font-bold">{role}</h3>
              <p className="text-txt-secondary">{company} · {location}</p>
            </div>
            <div>
              <ul className="ml-5 list-disc space-y-1.5 leading-relaxed text-txt-secondary marker:text-accent-cyan">
                {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
              <p className="mt-4 text-sm text-txt-muted">{technologies.join(" · ")}</p>
              <ul className="mt-1 flex flex-wrap gap-x-5 text-sm">
                {projects.map(({ title, href }) => (
                  <li key={href}><Link href={href} className="inline-flex min-h-11 items-center rounded-md text-accent-cyan underline-offset-4 hover:underline">{title}</Link></li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function EngineeringApproach() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="border-y border-white/8 bg-dark-surface">
      <div className="section-wrap section-space">
        <SectionHeading id="approach-title" label="Process" accent="Approach">My Engineering</SectionHeading>
        <ol className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {buildProcess.map(({ title, detail }, index) => (
            <li key={title} className="panel-hover flex gap-4 rounded-2xl border border-dark-elevated bg-dark-card/70 p-4">
              <span aria-hidden="true" className="mono text-outline-accent pt-0.5 text-xl font-black">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-bold text-txt-primary">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-txt-secondary">{detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
