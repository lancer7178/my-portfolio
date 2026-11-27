/** @typedef {{ label: string, href: string }} ProfileLink */

export const profile = {
  name: "Abdulatif Selem",
  title: "Software Developer",
  specialization: "Full-Stack Development · Backend Systems · Mobile Applications · E-commerce",
  location: "Cairo, Egypt",
  email: "abdlatefkhatib@gmail.com",
  phone: "+20 109 035 4443",
  siteUrl: "https://abdullatif-selem.vercel.app",
  resume: {
    href: "/Abdulatif_Selem_CV.pdf",
    filename: "Abdulatif_Selem_Software_Developer_CV.pdf",
  },
  description:
    "Abdulatif Selem is a Software Developer based in Cairo, Egypt, specializing in full-stack web development, Node.js, Express.js, React, Next.js, mobile applications, WordPress, and WooCommerce.",
};

/** @type {ProfileLink[]} */
export const socialLinks = [
  { label: "GitHub", href: "https://github.com/lancer7178" },
  { label: "LinkedIn", href: "https://linkedin.com/in/abdul-atif-selem-8521a7281" },
];

/** @type {ProfileLink[]} */
export const navigation = [
  { label: "Home", href: "/#hero" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Projects", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];
