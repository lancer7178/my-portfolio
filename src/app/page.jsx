import HeroSection from "@/components/HeroSection";
import PortfolioMotion from "@/components/PortfolioMotion";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import ProjectsSection from "@/components/ProjectsSection";
import UiUxFigmaSection from "@/components/UiUxFigmaSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { EngineeringApproach, EngineeringCapabilities, ProfessionalExperience, TechnicalExpertise } from "@/components/EngineeringSections";
import { toCatalogEntries } from "@/data/catalog";
import { designLabDescription } from "@/data/engineering";
import { designProjects } from "@/data/figma";
import { profile } from "@/data/profile";
import { featuredEngineeringProjects, selectedProjects } from "@/data/projects";
import { homeTitle, pageMetadata } from "@/data/seo";

export const metadata = {
  ...pageMetadata({ path: "/", title: homeTitle, description: profile.description, home: true }),
  title: { absolute: homeTitle },
};

export default function Home() {
  return (
    <PortfolioMotion>
      <HeroSection />
      <EngineeringCapabilities />
      <FeaturedWorkSection projects={featuredEngineeringProjects} />
      <TechnicalExpertise />
      <ProfessionalExperience />
      <ProjectsSection entries={toCatalogEntries(selectedProjects)} />
      <EngineeringApproach />
      <AboutSection />
      <UiUxFigmaSection compact summary={designLabDescription} projects={designProjects.slice(0, 2)} />
      <ContactSection />
    </PortfolioMotion>
  );
}
