export const projects = [
   {
    title: "Aetheris",
    slug: "aetheris",
    featured: true,
    category: "Product · Visual Knowledge Tools · Bilingual",
    tagline: "Turn complex information into clear, interactive visual systems.",
    description:
      "An infinite node-based canvas for building mind maps, lore, timelines, system architectures, research structures, and knowledge graphs — anything that's easier to understand as a shape than a list. No account required, with full bilingual (English/Arabic) support.",
    image: "/aetheris.png",
    link: "https://aetheris-canvas.vercel.app/",
    github: null,
    technologies: ["Next.js", "React Flow", "TypeScript", "Tailwind CSS", "Local-first"],
    caseStudy: {
      problem:
        "Complex information — a story's cast, a system's architecture, a research structure — naturally has shape: hierarchy, causality, connection. Most tools force it into a list or a slide deck anyway, flattening the structure and losing the relationships that mattered.",
      idea:
        "Give people an infinite canvas where nodes and connections are the primary unit, not an afterthought bolted onto a document editor — one tool for mind maps, lore bibles, timelines, architecture diagrams and knowledge graphs, anything that's easier to understand as a shape than a list.",
      built: [
        "Infinite pan-and-zoom canvas built on React Flow for node-based diagrams",
        "Freeform node and edge creation for mind maps, timelines and knowledge graphs",
        "Local-first boards — start building instantly with no account required",
        "Full bilingual interface with English/Arabic and RTL support",
        "Light and dark themes with a calm, focused visual language",
        "A guided demo board to explore the canvas before building from scratch",
      ],
      decisions: [
        {
          title: "Shape over lists",
          detail:
            "The canvas treats nodes and connections as the core unit of the product, so structure that's normally lost in documents and slides stays visible and editable.",
        },
        {
          title: "No account, no friction",
          detail:
            "Boards are stored on-device so anyone can start building the moment they land on the page, with accounts planned as an addition later rather than a gate up front.",
        },
        {
          title: "Bilingual from the start",
          detail:
            "English/Arabic and RTL support are built into the interface itself rather than patched on after, so the canvas reads naturally in either direction.",
        },
      ],
      technology: ["Next.js", "React Flow", "TypeScript", "Tailwind CSS"],
      outcome:
        "A focused canvas tool that treats structure as the point — where a mind map, a system diagram, or a piece of lore can be built and explored as the shape it actually is.",
    },
  },
  {
    title: "parallax",
    slug: "parallax",
    featured: true,
    category: "Product · SaaS · Agency Operations",
    tagline: "The operating system for your agency.",
    description:
      "An all-in-one agency management platform with Kanban-based project tracking, financial tools for invoices and budgets, and a dedicated client portal that keeps clients updated automatically.",
    image: "/parallax.png",
    link: "https://parallax-agency.vercel.app",
    github: null,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Product UX"],
    caseStudy: {
      problem:
        "Agencies run their work and their money in different tools — projects live in one app, client communication in another, approvals in email, and invoices in a spreadsheet. Nothing is connected, so nobody can answer a simple question: is this project actually profitable?",
      idea:
        "Connect agency work and agency money in a single workspace, so every task, approval and invoice traces back to the project it belongs to. The core product idea is money attached to work.",
      built: [
        "Agency dashboard with project health and an Attention Center surfacing what needs action",
        "Kanban-based project and task management",
        "Client portal with automatic status updates",
        "Approval flow that turns delivered work into billable items",
        "Invoices, budgets and revenue tracking tied to each project",
        "Role-based access for team members and clients",
      ],
      decisions: [
        {
          title: "Money attached to work",
          detail:
            "Instead of a separate finance module, invoices and revenue are derived from the actual project and its approvals — the numbers can never drift from the work.",
        },
        {
          title: "One connected workflow",
          detail:
            "Project → work → client → approval → invoice → payment → revenue. Every screen is a step in that loop rather than an isolated feature.",
        },
        {
          title: "Attention over dashboards",
          detail:
            "Rather than more charts, the dashboard leads with an Attention Center that tells the user what to do next.",
        },
      ],
      technology: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      outcome:
        "A single workspace where an agency can see projects, clients, approvals and revenue in one place — and always know whether the work and the money line up.",
    },
  },
  {
    title: "orenda",
    slug: "orenda",
    featured: true,
    category: "Mental Wellness · Product UX · Privacy-first",
    tagline: "A profile, not a label.",
    description:
      "A private, on-device mental health screening tool offering a 55-question assessment across nine psychological well-being areas, built on validated clinical instruments like PHQ-9 and GAD-7, with no accounts, servers, or data retention.",
    image: "/orenda.png",
    link: "https://orenda-care.vercel.app",
    github: null,
    technologies: ["Next.js", "Local-first", "Privacy-first", "Accessibility"],
    caseStudy: {
      problem:
        "Self-check-in tools for mental wellbeing often ask people to hand over sensitive answers to a server, and then hand back a blunt label. That's both a privacy risk and a design responsibility — a screening is not a diagnosis, and it shouldn't feel like one.",
      idea:
        "A calm, private self-check-in that runs entirely on the person's own device. It builds a profile across nine areas of wellbeing rather than reducing someone to a single label, and it's honest about what it is: screening, not diagnosis.",
      built: [
        "A 55-question assessment across nine psychological wellbeing areas",
        "One-question-at-a-time flow designed to reduce pressure",
        "Local-first architecture — no accounts, no servers, no data retention",
        "Results presented as a profile with methodology transparency",
        "Clear screening-vs-diagnosis framing and safety considerations",
        "Calm, emotionally considered interface with RTL support",
      ],
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
      technology: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      outcome:
        "A sensitive product that respects the person using it — private by design, calm to move through, and honest about being a starting point rather than a verdict.",
    },
  },
  {
    title: "shot craft",
    slug: "shot-craft",
    featured: true,
    category: "Utility Product · Image Processing · Frontend Engineering",
    tagline: "Store-ready screenshots, processed entirely in your browser.",
    description:
      "An open-source screenshot conversion tool that resizes and formats app screenshots for App Store Connect and Google Play, with smart cropping, device frame generation, and batch ZIP downloads — all processed client-side with no accounts or storage.",
    image: "/shot-craft.png",
    link: "https://shot-craft-web.vercel.app",
    github: null,
    technologies: ["React", "TypeScript", "Client-side", "ZIP export"],
    caseStudy: {
      problem:
        "Shipping an app means preparing screenshots to strict, repetitive store specs — the right sizes for App Store Connect and Google Play, framed and cropped consistently. Doing it by hand in a design tool is slow, and most online converters ask you to upload your assets to their servers.",
      idea:
        "A focused utility that does the tedious work in seconds and never uploads anything. All processing happens client-side in the browser, so there are no accounts, no storage, and nothing to trust with your files.",
      built: [
        "Client-side image processing — nothing is uploaded to a server",
        "Smart cropping and resizing to App Store and Google Play specs",
        "Device frame generation for polished store previews",
        "Batch processing across multiple screenshots at once",
        "One-click ZIP export of the finished set",
        "Account-free, storage-free workflow",
      ],
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
      technology: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      outcome:
        "An open-source tool that turns a fiddly, privacy-sensitive chore into a fast, in-browser workflow — store-ready screenshots exported as a ZIP without a single upload.",
    },
  },
  {
    title: "Sato pharmacy",
    slug: "sato-pharmacy",
    featured: false,
    category: "Corporate Web · Bilingual",
    description:
      "A corporate site for an Egyptian pharmaceutical manufacturer, showcasing its in-house and partner-sourced product catalog with filtering, company news, and career listings, with full bilingual (English/Arabic) support.",
    image: "/sato.png",
    link: "https://satopharma.com",
    github: null,
    technologies: ["react", "next.js", "Tailwind CSS", "framer-motion", "REST API"],
    agency: "design-ways",
  },
  {
    title: "Medizen Medical Website",
    slug: "medizen",
    featured: false,
    category: "Healthcare Web · Bilingual",
    description:
      "A responsive medical website powered by WordPress REST API, delivering real-time healthcare services, detailed treatments, and bilingual support. Features smooth animations and a modern design for seamless user engagement.",
    image: "/medizen.png",
    link: "https://medizenegypt.com",
    github: null,
    technologies: [
      "react",
      "next.js",
      "Tailwind CSS",
      "framer-motion",
      "WordPress",
      "REST API",
    ],
    agency: "bowmen",
  },
  {
    title: "Bowmen plus",
    slug: "bowmen-plus",
    featured: false,
    category: "Brand · Corporate Web",
    description:
      "A cutting-edge headless WordPress application. Built with React and Next.js, it merges sophisticated animations with a utility-first design to redefine modern web browsing.",
    image: "/bowmenplus.png",
    link: "https://bowmenplus.com",
    github: null,
    technologies: [
      "react",
      "next.js",
      "Tailwind CSS",
      "WordPress",
      "REST API",
      "framer-motion",
    ],
    agency: "bowmen",
  },
  {
    title: "Underground Heritage",
    slug: "underground-heritage",
    featured: false,
    category: "E-commerce · Headless Commerce",
    description:
      "A premium headless e-commerce experience designed to showcase cultural and heritage-inspired products with a focus on high-performance retail and immersive storytelling.",
    image: "/underground-heritage.png",
    link: "https://undergroun-heritage-e-commerce-s.vercel.app/",
    github: null,
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "WooCommerce REST API",
      "Framer Motion",
      "Stripe",
    ],
    agency: "bowmen",
  },
  {
    title: "Neuro Bridge",
    slug: "neuro-bridge",
    featured: false,
    category: "Healthcare Web",
    description:
      "An innovative healthcare platform focusing on neurology and wellness services. Built with modern tech stack, it provides detailed information about neurological treatments, specialist consultations, and patient management.",
    image: "/neuro.png",
    link: "https://neuro-bridge-website.vercel.app",
    github: null,
    technologies: [
      "react",
      "next.js",
      "Tailwind CSS",
      "firebase",
      "framer-motion",
    ],
  },
  {
    title: "Nova Space",
    slug: "nova-space",
    featured: false,
    category: "Interactive · 3D Web Experience",
    description:
      "An immersive space exploration website featuring stunning 3D visuals and interactive elements. Powered by Three.js, it educates users about universe exploration and astronomy with smooth animations and captivating design.",
    image: "/nova.png",
    link: "https://explore-nova.vercel.app",
    github: null,
    technologies: [
      "react",
      "next.js",
      "Tailwind CSS",
      "Three.js",
      "framer-motion",
    ],
  },
  {
    title: "Voyage AI",
    slug: "voyage-ai",
    featured: false,
    category: "AI Product · Web App",
    description:
      "An AI-powered travel planning platform offering personalized itinerary recommendations, real-time travel assistance, and destination insights. Designed with intuitive navigation to revolutionize how travelers explore the world.",
    image: "/voyageai.png",
    link: "https://voyage-ai-five.vercel.app",
    github: null,
    technologies: [
      "react",
      "next.js",
      "Tailwind CSS",
      "huggingface",
      "framer-motion",
    ],
  },
  {
    title: "Aurum",
    slug: "aurum",
    featured: false,
    category: "Data · Analytics Dashboard",
    description:
      "Real-time gold market analytics and insights. Stay ahead of the curve with precision data.",
    image: "/aurum.png",
    link: "https://aurum-tracker-gold.vercel.app",
    github: null,
    technologies: [
      "react",
      "next.js",
      "Tailwind CSS",
      "GoldAPI",
      "framer-motion",
    ],
  },
  {
    title: "Dr. Abdel-Moneim's Clinic",
    slug: "dr-abdel-moneim",
    featured: false,
    category: "Healthcare Web · Bilingual",
    description:
      "A professional mental health clinic website providing comprehensive information about services, treatment options, and appointment booking. Built with React and Next.js, featuring smooth animations and bilingual support for accessibility.",
    image: "/Dr.abdelMonem.png",
    link: "https://dr-abdel-moneim.vercel.app/",
    github: null,
    technologies: [
      "react",
      "next.js",
      "Tailwind CSS",
      "framer-motion",
      "WordPress",
      "REST API",
    ],
    agency: "bowmen",
  },
  {
    title: "Hayah Ava Healthcare",
    slug: "hayah-ava",
    featured: false,
    category: "Healthcare Web · Bilingual",
    description:
      "A sleek healthcare platform integrated with WordPress, offering real-time medical services, appointment booking, and comprehensive health information. Built with modern animations and bilingual interface for better accessibility.",
    image: "/hayah.png",
    link: "https://hayah-av.vercel.app",
    github: null,
    technologies: [
      "react",
      "next.js",
      "Tailwind CSS",
      "framer-motion",
      "WordPress",
      "REST API",
    ],
    agency: "bowmen",
  },
  {
    title: "Next Travel",
    slug: "next-travel",
    featured: false,
    category: "Travel · Web App",
    description:
      "A comprehensive travel platform connecting travelers with beautiful destinations and personalized experiences. Features real-time booking, travel recommendations, and an intuitive interface powered by modern web technologies.",
    image: "/next.png",
    link: "https://next-travel-puce.vercel.app",
    github: null,
    technologies: [
      "react",
      "next.js",
      "Tailwind CSS",
      "framer-motion",
      "strapi",
      "REST API",
    ],
    agency: "bowmen",
  },
  {
    title: "Renova",
    slug: "renova",
    featured: false,
    category: "Healthcare · Corporate Web",
    description:
      "Renova Clinic is a Cairo-based plastic surgery center offering advanced aesthetic treatments, including body contouring, facelifts, and scar revision, in a modern medical setting. ",
    image: "/renova.png",
    link: "https://dr-amirelboghdady.com",
    github: null,
    technologies: ["html", "Tailwind CSS", "php", "wordpress"],
    agency: "bowmen",
  },
  {
    title: "Coza Store",
    slug: "coza-store",
    featured: false,
    category: "E-commerce · Web",
    description:
      "A modern e-commerce platform built with HTML, CSS, and Bootstrap, featuring a sleek interface and smooth user interactions with jQuery. Offers fast browsing, secure checkout, and an intuitive shopping experience for customers.",
    image: "/CozaStore.png",
    link: "https://lancer7178.github.io/Bdaya-e-commerce/",
    github: null,
    technologies: ["html", "css", "bootstrap", "js", "Jquery"],
  },
  {
    title: "AniWatched",
    slug: "aniwatched",
    featured: false,
    category: "Web App · Utility",
    description:
      "A minimalist web application for anime enthusiasts to track watched shows. Built with Tailwind CSS and jQuery, it prioritizes simplicity and speed, providing a distraction-free interface for managing personal anime libraries.",
    image: "/Ani.png",
    link: "https://lancer7178.github.io/Ani-watched/",
    github: null,
    technologies: [
      "html",
      "css",
      "Tailwind CSS",
      "bootstrap",
      "javaScript",
      "Jquery",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const selectedProjects = projects.filter((p) => !p.featured);
export const getProjectBySlug = (slug) =>
  projects.find((p) => p.slug === slug);
