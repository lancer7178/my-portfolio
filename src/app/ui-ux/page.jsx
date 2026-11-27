import UiUxPageIntro from "@/components/UiUxPageIntro";
import UiUxFigmaSection from "@/components/UiUxFigmaSection";
import { designLabDescription } from "@/data/engineering";
import { designProjects, figmaExperience } from "@/data/figma";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata({
  path: "/ui-ux",
  title: "Design Lab",
  description: designLabDescription,
  image: designProjects[0].cover ?? designProjects[0].screens[0].src,
});

export default function UiUxPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <UiUxPageIntro />
      <UiUxFigmaSection projects={designProjects} process={figmaExperience} />
    </main>
  );
}
