import SectionHeading from "@/components/SectionHeading";
import { aboutIntro } from "@/data/engineering";
import { profile } from "@/data/profile";

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden bg-dark">
      <span aria-hidden="true" className="section-number top-10 left-0 sm:left-10">05</span>
      <div className="section-wrap section-space relative z-10">
        <SectionHeading id="about-title" label="About Me" accent="Complete Software Solutions.">More Than Interfaces.</SectionHeading>
        <div className="grid gap-x-12 gap-y-5 text-base leading-relaxed text-txt-secondary sm:text-lg lg:grid-cols-2">
          {aboutIntro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <p className="border-t border-white/12 pt-4 font-mono text-sm text-accent-cyan">{profile.specialization}</p>
        </div>
      </div>
    </section>
  );
}
