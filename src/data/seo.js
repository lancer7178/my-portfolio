import { profile, socialLinks } from "./profile";

export const homeTitle = `${profile.name} | Software Developer & Full-Stack Engineer`;
export const defaultShareImage = "/websites-cover/parallax.png";

export function pageMetadata({ path, title, description, image = defaultShareImage, home = false }) {
  const shareTitle = home ? title : `${title} | ${profile.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: profile.name,
      title: shareTitle,
      description,
      images: [{ url: image, alt: title }],
    },
    twitter: { card: "summary_large_image", title: shareTitle, description, images: [image] },
  };
}

export const personId = `${profile.siteUrl}/#person`;
export const websiteId = `${profile.siteUrl}/#website`;

export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      url: profile.siteUrl,
      jobTitle: profile.title,
      address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
      sameAs: socialLinks.map(({ href }) => href),
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: `${profile.name} · Software Development Portfolio`,
      url: profile.siteUrl,
      description: profile.description,
      publisher: { "@id": personId },
      inLanguage: "en",
    },
  ],
};
