import UiUxPageIntro from "@/components/UiUxPageIntro";
import UiUxFigmaSection from "@/components/UiUxFigmaSection";
import { designProjects, designProcess } from "@/data/figma";

export const metadata = {
  title: "UI/UX Designs",
  description:
    "Browse my UI/UX designs: mobile apps and websites including Shara, Light Orbits, Ventura and SocialGram, plus my design process.",
};

export default function UiUxPage() {
  return (
    <main className="min-h-screen bg-dark text-white font-outfit pt-6">
      <UiUxPageIntro />
      <UiUxFigmaSection
        showHeader={false}
        projects={designProjects}
        process={designProcess}
      />
    </main>
  );
}
