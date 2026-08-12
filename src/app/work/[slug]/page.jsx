import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import { featuredProjects, getProjectBySlug } from "@/data/projects";

export function generateStaticParams() {
  return featuredProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || !project.featured) return {};

  const title = project.title.replace(/\b\w/g, (c) => c.toUpperCase());
  const description = project.caseStudy?.idea || project.description;

  return {
    title: `${title} — Case Study`,
    description,
    openGraph: {
      title: `${title} — Case Study`,
      description,
      images: project.image ? [{ url: project.image }] : undefined,
    },
  };
}

export default async function WorkPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.featured || !project.caseStudy) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-dark text-white font-outfit pt-8">
      <CaseStudy project={project} />
    </main>
  );
}
