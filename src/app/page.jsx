import HeroSection from "@/components/HeroSection";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import ProjectsSection from "@/components/ProjectsSection";
import HowIBuildSection from "@/components/HowIBuildSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import UiUxFigmaSection from "@/components/UiUxFigmaSection";
import ContactSection from "@/components/ContactSection";
import { aboutIntro, aboutValues, aboutApproach } from "@/data/about";
import { featuredProjects, selectedProjects } from "@/data/projects";
import { buildProcess } from "@/data/process";
import { figmaProjects, figmaExperience } from "@/data/figma";
import { experiences } from "@/data/experience";

const CV_LINK = "/Abdulatif_Selem_CV.pdf";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-white font-outfit">
      <HeroSection name="Abdulatif" cvLink={CV_LINK} />
      <FeaturedWorkSection projects={featuredProjects} />
      <ProjectsSection projects={selectedProjects} />
      <HowIBuildSection steps={buildProcess} />
      <AboutSection
        intro={aboutIntro}
        values={aboutValues}
        approach={aboutApproach}
      />
      <SkillsSection />
      <ExperienceSection experiences={experiences} />
      <UiUxFigmaSection
        summary="I leverage Figma to design responsive, user-centric interfaces that bridge the gap between creativity and functionality. From wireframes to high-fidelity prototypes, I create design systems that maintain consistency while captivating users."
        uiuxExperience={figmaExperience}
        figmaProjects={figmaProjects}
      />
      <ContactSection email="abdlatefkhatib@email.com" cvLink={CV_LINK} />
    </div>
  );
}
