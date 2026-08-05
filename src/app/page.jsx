import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import UiUxFigmaSection from "@/components/UiUxFigmaSection";
import ContactSection from "@/components/ContactSection";
import { aboutIntro, aboutValues, aboutApproach } from "@/data/about";
import { projects } from "@/data/projects";
import { figmaProjects, figmaExperience } from "@/data/figma";
import { experiences } from "@/data/experience";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#06060A] text-white font-outfit">
      <HeroSection
        name="Abdulatif"
        subtitle="A passionate Front-End Developer crafting beautiful web experiences with clean code and modern design."
      />
      <AboutSection
        intro={aboutIntro}
        values={aboutValues}
        approach={aboutApproach}
      />
      <SkillsSection />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} />
      <UiUxFigmaSection
        summary="I leverage Figma to design responsive, user-centric interfaces that bridge the gap between creativity and functionality. From wireframes to high-fidelity prototypes, I create design systems that maintain consistency while captivating users."
        uiuxExperience={figmaExperience}
        figmaProjects={figmaProjects}
      />
      <ContactSection
        email="abdlatefkhatib@email.com"
        cvLink="/Abdulatif_Selem_CV.pdf"
      />
    </div>
  );
}
