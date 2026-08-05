import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import UiUxFigmaSection from "../components/UiUxFigmaSection";
import Head from "next/head";
import { aboutIntro, aboutValues, aboutApproach } from "@/data/about";
import { projects } from "@/data/projects";
import { figmaProjects, figmaExperience } from "@/data/figma";
import { experiences } from "@/data/experience";

export default function Home() {
  return (
    <>
      <Head>
        <title>Abdulatif | Front-End Developer Portfolio</title>
        <meta
          name="description"
          content="Front-End Developer specializing in React, Next.js, and modern web technologies. Building beautiful, high-performance web experiences."
        />
      </Head>

      <div className="min-h-screen bg-[#06060A] text-white font-outfit">
        <HeroSection
          name="Abdulatif"
          subtitle="A passionate Front-End Developer crafting beautiful web experiences with clean code and modern design."
          buttonText="START ENGINE"
          onButtonClick={() => {
            const target = document.querySelector("#projects");
            if (target) {
              window.scrollTo({
                top: target.offsetTop - 20,
                behavior: "smooth",
              });
            }
          }}
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
    </>
  );
}
