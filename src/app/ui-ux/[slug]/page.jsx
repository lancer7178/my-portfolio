import { notFound } from "next/navigation";
import DesignProjectGallery from "@/components/DesignProjectGallery";
import { designProjects, getDesignProjectById } from "@/data/figma";
import { pageMetadata } from "@/data/seo";

export function generateStaticParams() {
  return designProjects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getDesignProjectById(slug);
  if (!project) return {};

  return pageMetadata({
    path: `/ui-ux/${slug}`,
    title: `${project.title} — Design Lab`,
    description: project.description,
    image: project.cover ?? project.screens[0].src,
  });
}

export default async function DesignProjectPage({ params }) {
  const { slug } = await params;
  const index = designProjects.findIndex((project) => project.id === slug);
  if (index === -1) notFound();

  const count = designProjects.length;
  return (
    <main id="main-content" tabIndex={-1}>
      <DesignProjectGallery
        project={designProjects[index]}
        previousProject={designProjects[(index - 1 + count) % count]}
        nextProject={designProjects[(index + 1) % count]}
      />
    </main>
  );
}
