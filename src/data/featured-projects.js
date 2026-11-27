/** @type {import("./project-types").EngineeringCaseStudy} */
const undergroundCaseStudy = {
  role: "Designed and built the storefront at Bowmen Marketing, including product discovery, cart behavior and the demo checkout.",
  requirements: "The store needed to showcase its streetwear collections while supporting product search, color and size selection, and a clear path from browsing to checkout.",
  architecture: [
    {
      title: "Catalog delivery",
      nodes: [
        { title: "Next.js storefront", detail: "Presents the catalog, filters, product variations and product details." },
        { title: "WooCommerce REST API", detail: "Supplies commerce catalog data to the application." },
        { title: "WordPress & WooCommerce", detail: "Manage products and their variation data." },
      ],
    },
  ],
  stack: [
    { layer: "Frontend", technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { layer: "Commerce & catalog", technologies: ["WooCommerce", "WooCommerce REST API"] },
  ],
  built: ["Searchable catalog with color, size and price filters", "Product variation and quantity selection", "Cart edits with updated totals", "Responsive storefront and demo checkout"],
  api: "The storefront uses the WooCommerce REST API as its catalog integration.",
  businessLogic: "The selected product variation stays associated with the cart item. Updating quantity changes the order summary, and the checkout previews delivery and payment fields.",
  challenges: [
    { title: "Preserving the shopper’s selected variant", detail: "Keep color, size and quantity visible from product selection through cart edits so customers can verify what they are ordering." },
    { title: "Making checkout totals easy to check", detail: "Keep subtotal, shipping and tax together in a single order summary across the cart and checkout." },
  ],
  outcome: "The storefront demonstrates the complete shopping journey on desktop and mobile. Checkout uses mock card and PayPal options.",
  contribution: {
    design: [
      "The dark, editorial visual direction",
      "Page layouts for the full shopping journey",
      "The product card, filters and order summary",
      "Responsive layouts for desktop and mobile",
    ],
    frontend: [
      "Building the store in Next.js and TypeScript",
      "Search, filtering and sorting",
      "Product options, favorites and the cart",
      "The checkout form and its mock payment flow",
    ],
  },
  journey: [
    {
      title: "Home and discovery",
      detail:
        "A large featured drop sets the tone, and a search field and clear navigation stay in the header for people who already know what they want.",
      src: "/design-previews/underground-heritage/home.webp",
      alt: "Underground Heritage home page with a featured product drop",
    },
    {
      title: "Browsing with filters",
      detail:
        "Filters for color, size and price sit beside the products, with a live result count and sorting, so people can narrow things down without leaving the page.",
      src: "/design-previews/underground-heritage/shop.webp",
      alt: "Shop page with color and size filters beside a grid of products",
    },
    {
      title: "Search results",
      detail:
        "Searching leads to the same layout with a category filter added, so there's nothing new to learn.",
      src: "/design-previews/underground-heritage/search.webp",
      alt: "Search results for tee, showing filters and matching products",
    },
    {
      title: "Product details",
      detail:
        "An image gallery sits next to color, size and quantity, with Add to Cart and Buy Now, then product details and related items further down.",
      src: "/design-previews/underground-heritage/product.webp",
      alt: "Product page with a large image and color and size options",
    },
    {
      title: "Shopping cart",
      detail:
        "Each item shows the chosen color and size and can be changed in place, with the costs and next step kept together in an order summary.",
      src: "/design-previews/underground-heritage/cart.webp",
      alt: "Shopping cart with one item and an order summary",
    },
    {
      title: "Checkout",
      detail:
        "One page with contact, shipping and payment details beside the order summary. This is a demo: the card and PayPal options are mock, and no payment gateway is connected.",
      src: "/design-previews/underground-heritage/checkout.webp",
      alt: "Checkout form with payment options and an order summary",
    },
  ],
  mobile: [
    {
      title: "Mobile home",
      description: "The featured drop and navigation on a phone.",
      src: "/design-previews/underground-heritage/mobile-home.webp",
    },
    {
      title: "Mobile shop",
      description: "The shop page adapted to a single column.",
      src: "/design-previews/underground-heritage/mobile-shop.webp",
    },
    {
      title: "Mobile product",
      description: "The product image and options stacked for a phone.",
      src: "/design-previews/underground-heritage/mobile-product.webp",
    },
  ],
};

/** @type {import("./project-types").Project[]} */
export const featuredProjects = [
  {
    title: "Parallax",
    slug: "parallax",
    featured: true,
    category: "SaaS & Business Management Systems",
    type: "Independent full-stack application",
    filters: ["full-stack", "backend", "saas", "web"],
    description: "An agency operations platform that connects project delivery, client approvals, invoicing and revenue in a single workspace.",
    image: "/websites-cover/parallax.png",
    imageAlt: "Parallax agency workspace and dashboard preview",
    link: "https://parallax-agency.vercel.app/",
    github: "https://github.com/lancer7178/parallax",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
    caseStudy: {
      role: "Built the agency SaaS, including the Kanban workspace, client portal, role-based access and project-linked financial workflows.",
      requirements: "Agency teams need to see whether a project is on schedule, what the client still needs to approve, and how much of its budget has been invoiced or paid. Clients need access to their own engagement and delivery decisions.",
      architecture: [
        {
          title: "Workspace reads and updates",
          nodes: [
            { title: "Workspace & client portal", detail: "Next.js screens for projects, tasks, client approvals and billing." },
            { title: "Server queries & actions", detail: "Auth.js sessions, role-scoped reads and Zod-validated form mutations." },
            { title: "Prisma → PostgreSQL", detail: "Relational storage for users, projects, approvals, invoices and activity." },
          ],
        },
      ],
      stack: [
        { layer: "Frontend", technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "dnd-kit"] },
        { layer: "Server & authentication", technologies: ["Next.js Server Actions", "Auth.js", "Zod"] },
        { layer: "Database", technologies: ["PostgreSQL", "Prisma"] },
        { layer: "Deployment", technologies: ["Vercel"] },
      ],
      built: ["Kanban project and task management", "Client portal with delivery progress and approvals", "Project budgets, invoices and revenue tracking", "Role-specific dashboards and action queues"],
      api: "The workspace uses Next.js Server Actions for application writes and server-side queries for reads. Mutations revalidate the relevant views after writes so the workspace and portal see updated records.",
      data: "Projects connect clients, team members, tasks, approvals and invoices. Billing views derive invoiced, paid and outstanding amounts from the invoices attached to each project.",
      businessLogic: "Staff request approval on reachable projects. Clients can approve or request changes on their own pending deliverables. Admins manage invoices separately, with the project linking billing and delivery records.",
      challenges: [
        { title: "Protecting data in a shared workspace", detail: "Use role-scoped queries and server-side ownership checks so a client only reads their own engagement, while financial records remain confined to the permitted views." },
        { title: "Keeping delivery and finance in sync", detail: "Anchor tasks, approvals and invoice records to the same project so progress and financial summaries share the same context." },
      ],
      security: "Server Actions verify the user’s role and validate input. Approval decisions also verify project ownership before an update.",
      outcome: "The workspace brings agency activity and project financials together, with a client-facing view for progress, approvals and invoices.",
    },
  },
  {
    title: "Rahlet Umrah",
    slug: "rahlet-umrah",
    featured: true,
    category: "Marketplace & Booking Platform",
    type: "Bilingual travel marketplace",
    filters: ["web"],
    description: "A bilingual marketplace for discovering and comparing Umrah packages from licensed providers, with budget search, clear pricing and a visa-dependent booking workflow.",
    image: "/websites-cover/rahlet-umrah.png",
    imageAlt: "Rahlet Umrah homepage with Umrah and Hajj package filters and a budget search field",
    link: "https://rehletumrah.com/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    caseStudy: {
      requirements: "Travelers need to compare providers, see what a trip costs and understand when each payment is due. The marketplace supports Arabic and English across the discovery and booking journey.",
      stack: [
        { layer: "Web application", technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
      ],
      built: ["Package discovery and budget search", "Umrah and Hajj package filters", "Provider information and transparent package pricing", "Arabic and English layouts"],
      businessLogic: "The public booking guide describes two payment stages: a visa-processing fee to start the request and the remaining balance after visa approval.",
      challenges: [
        { title: "Explaining the steps around visa approval", detail: "The public booking guide separates package selection, the initial visa fee, visa confirmation and the balance due so travelers can see the dependency between milestones." },
      ],
      outcome: "The live marketplace gives visitors one place to browse packages, compare provider information and understand the payment stages before booking.",
    },
  },
  {
    title: "Underground Heritage",
    slug: "underground-heritage",
    featured: true,
    category: "Headless E-commerce",
    type: "Client storefront · Demo checkout",
    filters: ["commerce", "cms", "web"],
    description: "A Next.js and WooCommerce storefront with a searchable product catalog, variant selection, cart management and a demo checkout.",
    image: "/websites-cover/underground-heritage.png",
    imageAlt: "Underground Heritage storefront with a featured streetwear collection",
    link: "https://undergroun-heritage-e-commerce-s.vercel.app/",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WooCommerce"],
    agency: "bowmen",
    caseStudy: undergroundCaseStudy,
  },
  {
    title: "Aetheris",
    slug: "aetheris",
    featured: true,
    category: "Interactive Software & Visual Knowledge Systems",
    type: "Independent full-stack application",
    filters: ["full-stack", "backend", "web"],
    description: "A bilingual canvas for mapping connected information, with interactive graph editing, guest persistence and optional account-based cloud storage.",
    image: "/websites-cover/aetheris.png",
    imageAlt: "Aetheris canvas showing connected nodes on a visual workspace",
    link: "https://aetheris-canvas.vercel.app/",
    github: "https://github.com/lancer7178/Aetheris",
    technologies: ["Next.js", "React Flow", "TypeScript", "Zustand", "PostgreSQL", "Prisma"],
    caseStudy: {
      role: "Built the bilingual infinite canvas and graph-editing workflow, including the guest experience and board persistence.",
      requirements: "People organizing research, stories and systems need to retain the relationships between ideas. They also need to resume editing without losing their workspace.",
      architecture: [
        {
          title: "Guest boards",
          nodes: [
            { title: "React Flow canvas", detail: "Node, edge and viewport changes update the working graph in Zustand." },
            { title: "Local board repository", detail: "Guest boards and a recovery copy persist in browser storage." },
          ],
        },
        {
          title: "Signed-in boards",
          nodes: [
            { title: "React Flow canvas", detail: "The same editor switches to a cloud repository after sign-in." },
            { title: "Next.js board API", detail: "Clerk identifies the user and the routes scope board operations to the owner." },
            { title: "Prisma → PostgreSQL", detail: "Stores boards, nodes and edges for the signed-in account." },
          ],
        },
      ],
      stack: [
        { layer: "Frontend", technologies: ["Next.js", "React Flow", "Zustand", "TypeScript", "Tailwind CSS"] },
        { layer: "Server & authentication", technologies: ["Next.js Route Handlers", "Clerk", "Zod"] },
        { layer: "Data", technologies: ["Browser local storage", "PostgreSQL", "Prisma"] },
        { layer: "Deployment", technologies: ["Vercel"] },
      ],
      built: ["Infinite pan-and-zoom editor", "Editable nodes and relationships", "Debounced autosave and local recovery", "English and Arabic with RTL support"],
      api: "Signed-in board and graph operations go through Next.js route handlers. The cloud repository exposes the same editor-facing operations as the local repository.",
      data: "The graph model separates boards, nodes and edges. The editor retains a local recovery snapshot before attempting a save.",
      challenges: [
        { title: "One editor for guest and account workflows", detail: "Select the persistence repository based on session state. The editor keeps the same graph operations and can offer to migrate local boards after sign-up." },
      ],
      performance: "Debounced autosave lets the graph settle before persisting edits, keeping rapid canvas interactions from triggering a save for every change.",
      outcome: "The canvas supports immediate guest editing and account-based storage for people who want their boards available after signing in.",
    },
  },
  {
    title: "Sato Pharma",
    slug: "sato-pharmacy",
    featured: true,
    category: "Corporate & Enterprise Web Applications",
    type: "Client project · Design Ways",
    filters: ["web"],
    description: "An English and Arabic pharmaceutical platform with a structured product catalog, product filtering and corporate content.",
    image: "/websites-cover/sato.png",
    imageAlt: "Sato Pharma corporate website and pharmaceutical product catalog preview",
    link: "https://satopharma.com/",
    technologies: ["Next.js", "React", "Tailwind CSS", "REST APIs", "Framer Motion"],
    agency: "design-ways",
    caseStudy: {
      role: "Contributed at Design Ways to the bilingual website, including product filtering, company news and careers content.",
      requirements: "Visitors need to discover products alongside company information, and switch between Arabic and English while using the same catalog and content hierarchy.",
      stack: [
        { layer: "Frontend", technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"] },
        { layer: "Integration", technologies: ["REST APIs"] },
      ],
      built: ["Structured pharmaceutical product catalog", "Product filtering", "Company news and careers content", "English and Arabic navigation and layouts"],
      api: "The React and Next.js frontend integrates REST data for dynamic content and the product catalog.",
      challenges: [
        { title: "Keeping a bilingual catalog navigable", detail: "The experience combines searchable or filterable product information with corporate content, using layouts that accommodate both Arabic RTL and English LTR." },
      ],
      outcome: "The public website brings product discovery, company information and careers into one bilingual platform.",
    },
  },
  {
    title: "Medizen",
    slug: "medizen",
    featured: true,
    category: "Headless CMS Applications",
    type: "Client project · Bowmen Marketing",
    filters: ["cms", "web"],
    description: "A responsive bilingual healthcare website that uses WordPress-managed content for services, treatments and corporate information.",
    image: "/websites-cover/medizen.png",
    imageAlt: "Medizen healthcare website with its service navigation and homepage",
    originalLink: "https://medizenegypt.com/",
    status: "Original site unavailable",
    technologies: ["Next.js", "React", "Tailwind CSS", "WordPress", "WordPress REST API"],
    agency: "bowmen",
    caseStudy: {
      role: "Built responsive bilingual healthcare interfaces at Bowmen Marketing, including dynamic service and treatment content.",
      requirements: "Visitors need to browse a consistent service and treatment catalog in English or Arabic. Editors need to manage that content separately from the application’s presentation.",
      architecture: [
        {
          title: "Content delivery",
          nodes: [
            { title: "Next.js website", detail: "Renders responsive service and treatment pages in both languages." },
            { title: "WordPress REST API", detail: "Provides managed content to the web application." },
            { title: "WordPress CMS", detail: "Holds editorial content independently of the frontend." },
          ],
        },
      ],
      stack: [
        { layer: "Frontend", technologies: ["Next.js", "React", "Tailwind CSS"] },
        { layer: "Content & integration", technologies: ["WordPress", "WordPress REST API"] },
      ],
      built: ["Dynamic service and treatment pages", "English and Arabic support", "Responsive layouts"],
      api: "The Next.js frontend uses the WordPress REST API to display dynamically managed content.",
      challenges: [
        { title: "Separating content from layout", detail: "Use the CMS as the content source and Next.js for bilingual rendering, so editorial work stays independent of page implementation." },
      ],
      outcome: "The website presents healthcare content through responsive bilingual interfaces with WordPress as the editorial source.",
    },
  },
];
