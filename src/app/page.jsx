import HeroSection from "@/components/HeroSection";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import ProjectsSection from "@/components/ProjectsSection";
import UiUxFigmaSection from "@/components/UiUxFigmaSection";
import AboutSection from "@/components/AboutSection";
import SkillsExperienceSection from "@/components/SkillsExperienceSection";
import ContactSection from "@/components/ContactSection";
import { aboutIntro } from "@/data/about";
import { featuredProjects, selectedProjects } from "@/data/projects";
import { buildProcess } from "@/data/process";
import { designProjects } from "@/data/figma";
import { skillCategories } from "@/data/skills";
import { experiences } from "@/data/experience";

const CV_LINK = "/Abdulatif_Selem_CV.pdf";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-white font-outfit">
      <HeroSection name="Abdulatif" cvLink={CV_LINK} />
      <FeaturedWorkSection projects={featuredProjects} />
      <ProjectsSection projects={selectedProjects} />
      <UiUxFigmaSection
        compact
        summary="Apps and interfaces I have designed, from first wireframes to polished screens. Open any project to see every screen up close, no Figma needed."
        projects={designProjects}
      />
      <AboutSection intro={aboutIntro} steps={buildProcess} />
      <SkillsExperienceSection
        skills={skillCategories}
        experiences={experiences}
      />
      <ContactSection email="abdlatefkhatib@gmail.com" cvLink={CV_LINK} />
    </div>
  );
}
