import { featuredProjects } from "./featured-projects";

/** @type {import("./project-types").Project[]} */
const additionalProjects = [
  {
    title: "Shot Craft",
    slug: "shot-craft",
    filters: ["web", "open-source"],
    category: "Utility Product · Image Processing · Frontend Engineering",
    description:
      "An open-source screenshot conversion tool that resizes and formats app screenshots for App Store Connect and Google Play, with smart cropping, device frame generation, and batch ZIP downloads — all processed client-side with no accounts or storage.",
    image: "/websites-cover/shot-craft.png",
    link: "https://shot-craft-web.vercel.app",
    github: "https://github.com/lancer7178/shot-craft",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    caseStudy: {
      role: "Built the client-side screenshot conversion and batch export workflow.",
      requirements:
        "Shipping an app means preparing screenshots to strict, repetitive store specs — the right sizes for App Store Connect and Google Play, framed and cropped consistently. Doing it by hand in a design tool is slow, and most online converters ask you to upload your assets to their servers.",
      built: [
        "Client-side image processing — nothing is uploaded to a server",
        "Smart cropping and resizing to App Store and Google Play specs",
        "Device frame generation for polished store previews",
        "Batch processing across multiple screenshots at once",
        "One-click ZIP export of the finished set",
        "Account-free, storage-free workflow",
      ],
      data: "Image processing and ZIP creation happen inside the browser. The tool requires no upload or account.",
      decisions: [
        {
          title: "Everything client-side",
          detail:
            "Image processing and ZIP generation run in the browser. It's a privacy stance and an engineering constraint that shaped the whole architecture.",
        },
        {
          title: "Batch-first workflow",
          detail:
            "Stores need many sizes at once, so the tool is built around processing and exporting a whole set rather than one image at a time.",
        },
        {
          title: "No accounts, no friction",
          detail:
            "A utility should be usable in the moment. No sign-up, no storage — open it and get store-ready output.",
        },
      ],
      stack: [{ layer: "Application", technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"] }],
      outcome:
        "An open-source tool that turns a fiddly, privacy-sensitive chore into a fast, in-browser workflow — store-ready screenshots exported as a ZIP without a single upload.",
    },
  },
  {
    title: "Orenda",
    slug: "orenda",
    filters: ["web"],
    category: "Mental Wellness · Product UX · Privacy-first",
    description:
      "A private, on-device mental health screening tool offering a 55-question assessment across nine psychological well-being areas, built on validated clinical instruments like PHQ-9 and GAD-7, with no accounts, servers, or data retention.",
    image: "/websites-cover/orenda.png",
    link: "https://orenda-care.vercel.app",
    github: null,
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    caseStudy: {
      role: "Built the browser-based assessment, on-device results and bilingual experience.",
      requirements:
        "Self-check-in tools for mental wellbeing often ask people to hand over sensitive answers to a server, and then hand back a blunt label. That's both a privacy risk and a design responsibility — a screening is not a diagnosis, and it shouldn't feel like one.",
      built: [
        "A 55-question assessment across nine psychological wellbeing areas",
        "One-question-at-a-time flow designed to reduce pressure",
        "Local-first architecture — no accounts, no servers, no data retention",
        "Results presented as a profile with methodology transparency",
        "Clear screening-vs-diagnosis framing and safety considerations",
        "Calm, emotionally considered interface with RTL support",
      ],
      data: "The assessment runs on-device and does not send responses to a server.",
      decisions: [
        {
          title: "Local-first by default",
          detail:
            "Answers never leave the device. Privacy isn't a setting — it's the architecture, which also removes an entire class of data risk.",
        },
        {
          title: "A profile, not a label",
          detail:
            "Results describe patterns across nine areas instead of assigning a diagnosis, keeping the experience responsible and non-alarming.",
        },
        {
          title: "Grounded in validated instruments",
          detail:
            "The assessment builds on established clinical screeners such as PHQ-9 and GAD-7, with transparent methodology.",
        },
      ],
      stack: [{ layer: "Application", technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"] }],
      outcome:
        "A sensitive product that respects the person using it — private by design, calm to move through, and honest about being a starting point rather than a verdict.",
    },
  },
  {
    title: "Bowmen Plus",
    slug: "bowmen-plus",
    filters: ["cms", "web"],
    category: "Brand · Corporate Web",
    description:
      "A headless WordPress website with a Next.js frontend for Bowmen’s corporate and marketing content.",
    image: "/websites-cover/bowmenplus.png",
    originalLink: "https://bowmenplus.com",
    status: "Live site unavailable",
    github: null,
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "WordPress",
      "REST API",
      "Framer Motion",
    ],
    agency: "bowmen",
  },
  {
    title: "Neuro Bridge",
    slug: "neuro-bridge",
    filters: ["web"],
    category: "Healthcare Web",
    description:
      "An innovative healthcare platform focusing on neurology and wellness services. Built with modern tech stack, it provides detailed information about neurological treatments, specialist consultations, and patient management.",
    image: "/websites-cover/neuro.png",
    link: "https://neuro-bridge-website.vercel.app",
    github: null,
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Firebase",
      "Framer Motion",
    ],
  },
  {
    title: "Nova Space",
    slug: "nova-space",
    filters: ["web"],
    category: "Interactive · 3D Web Experience",
    description:
      "An immersive space exploration website featuring stunning 3D visuals and interactive elements. Powered by Three.js, it educates users about universe exploration and astronomy with smooth animations and captivating design.",
    image: "/websites-cover/nova.png",
    link: "https://explore-nova.vercel.app",
    github: null,
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Three.js",
      "Framer Motion",
    ],
  },
  {
    title: "Voyage AI",
    slug: "voyage-ai",
    filters: ["web"],
    category: "AI Product · Web App",
    description:
      "An AI-powered travel planning platform offering personalized itinerary recommendations, real-time travel assistance, and destination insights. Designed with intuitive navigation to revolutionize how travelers explore the world.",
    image: "/websites-cover/voyageai.png",
    link: "https://voyage-ai-five.vercel.app",
    github: null,
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Hugging Face",
      "Framer Motion",
    ],
  },
  {
    title: "Aurum",
    slug: "aurum",
    filters: ["web", "mobile"],
    category: "Market Analytics · Web & Mobile",
    type: "Web dashboard and React Native client",
    description:
      "A gold-market dashboard with a separate React Native client for viewing prices and market information. The live link opens the web dashboard.",
    image: "/websites-cover/aurum.png",
    imageAlt: "Aurum web dashboard showing gold price and market data",
    link: "https://aurum-tracker-gold.vercel.app",
    github: null,
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "GoldAPI",
      "React Native",
      "Expo",
      "Framer Motion",
    ],
    caseStudy: {
      requirements: "Show gold prices and market figures in a web dashboard and on mobile, with an Arabic and English experience.",
      stack: [
        { layer: "Web dashboard", technologies: ["Next.js", "React", "Tailwind CSS"] },
        { layer: "Mobile client", technologies: ["React Native", "Expo", "TypeScript"] },
        { layer: "Market data", technologies: ["GoldAPI"] },
      ],
      built: ["Gold prices in Egyptian pounds", "Arabic and English price views", "Mobile pull-to-refresh with loading and error states"],
      businessLogic: "The mobile client derives karat prices from the spot price when the data provider does not supply a specific purity price.",
      challenges: [
        { title: "Keeping market updates manageable", detail: "The mobile client shares request logic between polling and pull-to-refresh. It avoids concurrent requests and limits rapid refreshes." },
      ],
      outcome: "The web dashboard is publicly available. The React Native client is documented as an implementation, with public distribution still unconfirmed.",
    },
  },
  {
    title: "Dr. Abdel-Moneim's Clinic",
    slug: "dr-abdel-moneim",
    filters: ["cms", "web"],
    category: "Healthcare Web · Bilingual",
    description:
      "A professional mental health clinic website providing comprehensive information about services, treatment options, and appointment booking. Built with React and Next.js, featuring smooth animations and bilingual support for accessibility.",
    image: "/websites-cover/Dr.abdelMonem.png",
    link: "https://dr-abdel-moneim.vercel.app/",
    github: null,
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "WordPress",
      "REST API",
    ],
    agency: "bowmen",
  },
  {
    title: "Hayah Ava Healthcare",
    slug: "hayah-ava",
    filters: ["cms", "web"],
    category: "Healthcare Web · Bilingual",
    description:
      "A sleek healthcare platform integrated with WordPress, offering real-time medical services, appointment booking, and comprehensive health information. Built with modern animations and bilingual interface for better accessibility.",
    image: "/websites-cover/hayah.png",
    link: "https://hayah-av.vercel.app",
    github: null,
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "WordPress",
      "REST API",
    ],
    agency: "bowmen",
  },
  {
    title: "Next Travel",
    slug: "next-travel",
    filters: ["cms", "web"],
    category: "Travel · Web App",
    description:
      "A Next.js travel website that integrates Strapi content for destination discovery and travel information.",
    image: "/websites-cover/next.png",
    link: "https://next-travel-puce.vercel.app",
    github: null,
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Strapi",
      "REST API",
    ],
    agency: "bowmen",
  },
  {
    title: "Renova",
    slug: "renova",
    filters: ["cms", "web"],
    category: "Healthcare · Corporate Web",
    description:
      "Renova Clinic is a Cairo-based plastic surgery center offering advanced aesthetic treatments, including body contouring, facelifts, and scar revision, in a modern medical setting. ",
    image: "/websites-cover/renova.png",
    link: "https://dr-amirelboghdady.com",
    github: null,
    technologies: ["HTML5", "Tailwind CSS", "PHP", "WordPress"],
    agency: "bowmen",
  },
  {
    title: "Coza Store",
    slug: "coza-store",
    filters: ["commerce", "web"],
    category: "E-commerce · Web",
    description:
      "A storefront demo built with Bootstrap and jQuery, with product browsing and shopping interface interactions.",
    image: "/websites-cover/CozaStore.png",
    link: "https://lancer7178.github.io/Bdaya-e-commerce/",
    github: null,
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
  },
  {
    title: "AniWatched",
    slug: "aniwatched",
    filters: ["web"],
    category: "Web App · Utility",
    description:
      "A minimalist web application for anime enthusiasts to track watched shows. Built with Tailwind CSS and jQuery, it prioritizes simplicity and speed, providing a distraction-free interface for managing personal anime libraries.",
    image: "/websites-cover/Ani.png",
    link: "https://lancer7178.github.io/Ani-watched/",
    github: null,
    technologies: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "JavaScript",
      "jQuery",
    ],
  },
];

/** @type {import("./project-types").Project[]} */
export const projects = [
  ...featuredProjects,
  ...additionalProjects,
];

export const featuredEngineeringProjects = projects.filter((project) => project.featured);
export const selectedProjects = projects.filter((project) => !project.featured);
export const caseStudyProjects = projects.filter((project) => project.caseStudy);
export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);
