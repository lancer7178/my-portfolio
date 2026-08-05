import UiUxPageIntro from "@/components/UiUxPageIntro";
import UiUxFigmaSection from "@/components/UiUxFigmaSection";
import { figmaProjects, figmaExperience, designProcess } from "@/data/figma";

const uiuxSummary =
  "I design clean and user-friendly interfaces in Figma, from early wireframes to clickable prototypes. My process focuses on usability, visual hierarchy, and responsive layout decisions before development starts.";

export const metadata = {
  title: "UI/UX & Figma",
  description:
    "A showcase of my UI/UX design workflow, Figma projects, and user-centered process from research to developer handoff.",
};

export default function UiUxPage() {
  return (
    <main className="min-h-screen bg-[#101014] text-white font-outfit pt-16">
      <UiUxPageIntro designProcess={designProcess} />
      <UiUxFigmaSection
        summary={uiuxSummary}
        uiuxExperience={figmaExperience}
        figmaProjects={figmaProjects}
      />
    </main>
  );
}
