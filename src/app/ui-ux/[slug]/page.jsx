import { notFound } from "next/navigation";
import DesignProjectGallery from "@/components/DesignProjectGallery";
import { designProjects, getDesignProjectById } from "@/data/figma";

export function generateStaticParams() {
  return designProjects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getDesignProjectById(slug);
  if (!project) return {};

  const title = `${project.title} — UI/UX Design`;
  return {
    title,
    description: project.description,
    openGraph: {
      title,
      description: project.description,
      images: [{ url: project.cover ?? project.screens[0].src }],
    },
  };
}

export default async function DesignProjectPage({ params }) {
  const { slug } = await params;
  const index = designProjects.findIndex((project) => project.id === slug);
  if (index === -1) notFound();

  const count = designProjects.length;
  return (
    <main className="min-h-screen bg-dark text-white font-outfit">
      <DesignProjectGallery
        project={designProjects[index]}
        previousProject={designProjects[(index - 1 + count) % count]}
        nextProject={designProjects[(index + 1) % count]}
      />
    </main>
  );
}
