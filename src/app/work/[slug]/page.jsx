import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import StructuredData from "@/components/StructuredData";
import { profile } from "@/data/profile";
import { caseStudyProjects, getProjectBySlug } from "@/data/projects";
import { pageMetadata, personId, websiteId } from "@/data/seo";

export function generateStaticParams() {
  return caseStudyProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project?.caseStudy) return {};

  return pageMetadata({
    path: `/work/${slug}`,
    title: `${project.title} — Engineering Case Study`,
    description: project.description,
    image: project.image,
  });
}

export default async function WorkPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project?.caseStudy) notFound();

  return (
    <main id="main-content" tabIndex={-1}>
      <CaseStudy project={project} />
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: `${project.title} — Engineering Case Study`,
        url: `${profile.siteUrl}/work/${project.slug}`,
        description: project.description,
        image: new URL(project.image, profile.siteUrl).href,
        author: { "@id": personId },
        isPartOf: { "@id": websiteId },
        about: { "@type": "SoftwareApplication", name: project.title, applicationCategory: project.category, url: project.link },
      }} />
    </main>
  );
}
