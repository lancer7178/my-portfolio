import HeroSection from "@/components/HeroSection";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import ProjectsSection from "@/components/ProjectsSection";
import HowIBuildSection from "@/components/HowIBuildSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import UiUxFigmaSection from "@/components/UiUxFigmaSection";
import ContactSection from "@/components/ContactSection";
import { aboutIntro, aboutSkills, aboutValues, aboutApproach } from "@/data/about";
import { featuredProjects, selectedProjects } from "@/data/projects";
import { buildProcess } from "@/data/process";
import { designProjects, figmaExperience } from "@/data/figma";
import { experiences } from "@/data/experience";

const CV_LINK = "/Abdulatif_Selem_CV.pdf";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-white font-outfit">
      <HeroSection name="Abdulatif" cvLink={CV_LINK} />
      <FeaturedWorkSection projects={featuredProjects} />
      <ProjectsSection projects={selectedProjects} />
      <UiUxFigmaSection
        summary="Apps and interfaces I have designed, from first wireframes to polished screens. Explore any project to see every screen up close."
        projects={designProjects}
        process={figmaExperience}
      />
      <HowIBuildSection steps={buildProcess} />
      <AboutSection
        intro={aboutIntro}
        skills={aboutSkills}
        values={aboutValues}
        approach={aboutApproach}
      />
      <SkillsSection />
      <ExperienceSection experiences={experiences} />
      <ContactSection email="abdlatefkhatib@gmail.com" cvLink={CV_LINK} />
    </div>
  );
}
