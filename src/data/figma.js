const DESIGNS_DIR = "/ui-ux design projects";

// Some file names contain spaces and "&", which must be URL-encoded to load.
const toUrl = (path) => encodeURI(path).replaceAll("&", "%26");

// Each screen is [file, width, height, title, description, flow (optional)].
// Width and height are kept so the page never jumps while images load.
const toScreens = (folder, rows) =>
  rows.map(([file, width, height, title, description, flow]) => ({
    src: toUrl(`${folder}/${file}`),
    width,
    height,
    title,
    description,
    flow,
  }));

// Each project's `id` is its page address: /ui-ux/<id>.
//
// `details` holds the facts shown beside the project overview. A block only
// appears if it is listed, so add one only when you have real content for it:
//   { label: "Project Goals", text: "..." }
//   { label: "Design Decisions", items: ["...", "..."] }
// The same applies to Target Audience, Design Challenges and Key Features.
//
// `galleryTitle` names the screenshots, e.g. "Wireframes" or "Design system".
// `role`, `deliverables`, `tools` and `focus` appear only when set, so list only
// what is accurate. `caseStudy` adds extra sections to the project's page, and
// each of its parts is optional. `galleries` adds more screen sets after the
// main one, each with its own title, layout, description and flows.
export const designProjects = [
  {
    id: "shara",
    title: "Shara",
    category: "Mobile App & Dashboard",
    unit: "screen",
    galleryTitle: "Mobile app screens",
    layout: "mobile",
    role: "UI/UX Designer",
    platform: "Mobile & Web",
    deliverables: "High-fidelity UI design",
    tools: "Figma",
    focus: "Clear multi-step tasks and rewards that are easy to understand",
    // Written from what the screens show. No research or results are claimed.
    caseStudy: {
      problem:
        "To reward tradespeople fairly, a program has to know that a purchase and installation really happened. Proving that means collecting a location, an invoice and photos, often from a phone on a job site, and that can easily feel like paperwork. Shara's challenge is to make submitting that proof feel quick, and to make the reward easy to see and collect.",
      goals: [
        "Make a request with several kinds of proof feel short",
        "Show what points are worth, not only how many there are",
        "Make it clear where every request stands",
        "Take people from points to cash at a real branch",
        "Read naturally in Arabic, from right to left",
      ],
      userFlow: [
        { label: "Sign in", screen: "Login" },
        { label: "Home", screen: "Home" },
        { label: "Add location", screen: "New request: location" },
        { label: "Add invoice", screen: "New request: invoice" },
        { label: "Add media", screen: "New request: installation media" },
        { label: "Track request", screen: "Request details" },
        { label: "Check points", screen: "Points wallet" },
        { label: "Request payout", screen: "Payout request" },
        { label: "Show code", screen: "Collection code" },
        { label: "Get receipt", screen: "Collection receipt" },
      ],
      decisions: [
        {
          title: "One kind of proof per step",
          detail:
            "A request is split into location, invoice and installation media, with a progress indicator, so each screen asks for one thing.",
          screen: "New request: location",
        },
        {
          title: "Guidance before the camera",
          detail:
            "The invoice step says what must be readable before the photo is taken, which helps people get it right the first time.",
          screen: "New request: invoice",
        },
        {
          title: "Points shown with their value",
          detail:
            "The wallet and payout screens show the balance next to its value in riyals, so the reward is concrete.",
          screen: "Payout request",
        },
        {
          title: "Status at two levels",
          detail:
            "The list uses filters and status badges for scanning. The details screen adds a timeline and the final decision for the full story.",
          screen: "Request details",
        },
        {
          title: "Everything for pick-up in one place",
          detail:
            "The collection code sits with its expiry time, the nearest branch, its opening hours and a map link, so there's no need to search for them.",
          screen: "Collection code",
        },
        {
          title: "A focused way in",
          detail:
            "Login asks only for a mobile number, followed by a code with a resend timer and a WhatsApp option.",
          screen: "Code verification",
        },
      ],
      visualDesign: {
        summary:
          "A warm cream background with deep green for main actions and soft gold for rewards. The screens share rounded cards, generous spacing and a clear jump in size between balances, titles and supporting text.",
        colors: [
          { name: "Deep green", use: "Main actions", hex: "#004111" },
          { name: "Soft gold", use: "Rewards", hex: "#FED48C" },
          { name: "Cream", use: "Background", hex: "#FDF9EC" },
          { name: "White", use: "Cards", hex: "#FFFFFF" },
          { name: "Ink", use: "Text", hex: "#1C1C14" },
        ],
      },
      designSystem: {
        summary:
          "The same parts repeat across the app, so a new screen feels familiar straight away. These are taken directly from the final screens.",
        components: [
          { name: "Primary button", src: "/design-previews/shara-patterns/primary-button.png", width: 440, height: 68 },
          { name: "Bottom navigation", src: "/design-previews/shara-patterns/bottom-navigation.png", width: 440, height: 56 },
          { name: "Progress stepper", src: "/design-previews/shara-patterns/stepper.png", width: 440, height: 76 },
          { name: "Request card with status", src: "/design-previews/shara-patterns/request-card.png", width: 440, height: 170 },
          { name: "Level card", src: "/design-previews/shara-patterns/level-card.png", width: 440, height: 260 },
        ],
      },
    },
    details: [
      { label: "Target Audience", text: "Tradespeople and technicians." },
      {
        label: "Key Features",
        items: [
          "A three-step request: location, invoice and installation media",
          "Request tracking with a status timeline",
          "A points wallet with a full history",
          "Bronze, Silver and Gold levels with their own conversion rates",
          "Cash collection at a branch with a pick-up code and receipt",
          "A product catalog and nearby branches",
          "An admin dashboard for reviews, payouts, reports and permissions",
        ],
      },
    ],
    description:
      "An Arabic-first rewards app for tradespeople, plus the admin dashboard that runs it. Technicians register their purchases and installations, earn points, move up through Bronze, Silver and Gold levels, and collect the cash value at a nearby branch.",
    tags: ["Arabic (right-to-left)", "Rewards & loyalty", "Admin dashboard"],
    flows: [
      { id: "signin", label: "Onboarding" },
      { id: "earn", label: "Earn points" },
      { id: "rewards", label: "Rewards" },
      { id: "products", label: "Products & branches" },
      { id: "account", label: "Account & help" },
    ],
    screens: toScreens(`${DESIGNS_DIR}/shara/app`, [
      ["Home - Shara.png", 440, 956, "Home", "Points balance, progress to the next payout, current level and latest requests.", "earn"],
      ["Request Step 1_ Location.png", 440, 984, "New request: location", "Step one of a request: pin the installation site on a map and describe the address.", "earn"],
      ["Request Step 2_ Invoice (Variant B).png", 440, 956, "New request: invoice", "Step two: photograph the invoice, with clear guidance on what must be readable.", "earn"],
      ["Request Step 3_ Installation Media - Branded.png", 440, 956, "New request: installation media", "Final step: add photos and an optional video of the finished installation.", "earn"],
      ["Order List - Shara.png", 440, 982, "My requests", "All requests with status filters: draft, in review, needs information, accepted.", "earn"],
      ["Order Details - Shara.png", 440, 1639, "Request details", "Points earned, a status timeline, plus the invoice, installation photos and location.", "earn"],
      ["Points & Ledger.png", 440, 956, "Points wallet", "Available balance, its estimated value, and a full history of every points movement.", "rewards"],
      ["Progress & Conditions - Shara.png", 440, 1215, "Level progress", "How close the user is to the Gold level, and what is still required to reach it.", "rewards"],
      ["Levels Explanation - Refined.png", 440, 1374, "Levels explained", "What Bronze, Silver and Gold offer, their conversion rates and how to upgrade.", "rewards"],
      ["Benefits & Conversion Rate - Shara.png", 440, 1239, "Benefits & conversion rates", "Compare each level's benefits and how many riyals 100 points are worth.", "rewards"],
      ["Payout Request - Arabic - Shara.png", 440, 956, "Payout request", "Choose how many points to cash out and which branch to collect from.", "rewards"],
      ["Points & Payout.png", 440, 1111, "Collection code", "A pick-up code and barcode to show at the branch, with its expiry and directions.", "rewards"],
      ["Collection Receipt - Final Refined.png", 440, 1039, "Collection receipt", "Confirmation of a completed payout that can be shared or saved as an image.", "rewards"],
      ["Product Catalog.png", 440, 1057, "Product catalog", "Search, new arrivals, and categories such as lighting, sanitary ware and tools.", "products"],
      ["Product Details - Arabic - Shara.png", 440, 1012, "Product details", "Video, description and key specs, with a catalog download and WhatsApp sharing.", "products"],
      ["Nearby Branches.png", 440, 977, "Nearby branches", "Branches by distance with opening status, directions and one-tap calling.", "products"],
      ["Notification Center - Arabic - Shara.png", 440, 956, "Notifications", "Points added, money ready to collect and requests needing action, grouped by date.", "account"],
      ["Profile & Settings - Arabic - Shara.png", 440, 1210, "Profile & settings", "Personal details, phone number, and links to levels, policies and support.", "account"],
      ["Contact Support - Arabic - Shara.png", 440, 956, "Contact support", "Reach support by phone, WhatsApp or email, each with its availability.", "account"],
      ["FAQs - Arabic - Shara.png", 440, 956, "FAQs", "Searchable questions, filtered by points and rewards, requests, or account.", "account"],
      ["Terms & Privacy Template - Arabic - Shara.png", 440, 1205, "Terms & privacy", "Long legal text made easier to read with clear sections and a highlighted notice.", "account"],
      ["Login - Shara.png", 440, 956, "Login", "A single, focused step: enter a mobile number to continue.", "signin"],
      ["OTP Verification - Shara.png", 440, 956, "Code verification", "Enter the six-digit code, with a resend timer and a WhatsApp option.", "signin"],
      ["Register - Shara.png", 440, 956, "Create account", "A short sign-up asking only for name, city and an optional specialty.", "signin"],
    ]),
    galleries: [
      {
        id: "admin-dashboard",
        title: "Admin dashboard screens",
        layout: "web",
        description:
          "The web dashboard the Shara team uses behind the app: reviewing requests, managing tradespeople and levels, paying out cash at branches, and controlling who can do what.",
        flows: [
          { id: "overview", label: "Overview & reports" },
          { id: "review", label: "Reviews & approvals" },
          { id: "people", label: "Tradespeople" },
          { id: "loyalty", label: "Levels & payouts" },
          { id: "operations", label: "Branches & content" },
          { id: "system", label: "Access & security" },
        ],
        // Two file names don't match what they show: "Interactive Reports.png"
        // is the staff list and "User Management.png" is the reports page.
        screens: toScreens(`${DESIGNS_DIR}/shara/admin dashboard`, [
          ["Main Indicators Dashboard.png", 1312, 1368, "Main indicators", "Active technicians, requests awaiting review and points issued and redeemed, with purchases by city and the top branches.", "overview"],
          ["User Management.png", 1314, 2016, "Interactive reports", "Six official reports with shared filters for date, city, branch, level and category, exportable to Excel or PDF.", "overview"],
          ["Review and Operation Performance.png", 1313, 2046, "Review performance", "Review speed, AI accuracy and approval rates, hourly request flow, rejection reasons and each reviewer's output.", "overview"],
          ["Review Queue.png", 1598, 1024, "Review queue", "Requests waiting for review with the AI check result and waiting time, plus bulk approve, reject or assign.", "review"],
          ["Frame 7.png", 1314, 1070, "Account approvals", "New sign-ups to approve, reject or ask for more information, with every decision logged with a reason.", "review"],
          ["Craftsmen List.png", 1312, 1048, "Tradespeople list", "Every registered tradesperson, filterable by city, level and status, with points balance and total purchases.", "people"],
          ["Tradesperson Profile.png", 1318, 1048, "Tradesperson profile", "One person's balance, its cash value, progress to their next goal, personal details and account status.", "people"],
          ["Manual Adjustments.png", 1312, 1049, "Manual adjustments", "Add or deduct points and change a level, with a required reason and a history of recent changes.", "people"],
          ["Levels Management.png", 1310, 1052, "Levels management", "Conversion rates and upgrade rules for Bronze, Silver and Gold, with a live example of what points are worth.", "loyalty"],
          ["Cash Disbursement Requests.png", 1310, 1158, "Cash payouts", "Branch staff check a payout code and the person's identity, then confirm the cash handover and issue a receipt.", "loyalty"],
          ["Branch Management.png", 1318, 1051, "Branches", "Branch details and status, with a map showing how branches are spread across the country.", "operations"],
          ["Product and category management.png", 1310, 1052, "Products & categories", "Add, edit and organize products and their categories, with status and date added.", "operations"],
          ["Terms and Conditions, Privacy Policy, FAQs.png", 1312, 1041, "Static pages", "Edit the terms, privacy policy and FAQs, with a version number and a reason for each update.", "operations"],
          ["Interactive Reports.png", 1312, 1459, "Staff & roles", "Staff accounts with their role, branch scope, two-factor status and last sign-in.", "system"],
          ["Permissions matrix.png", 1312, 2939, "Permissions matrix", "Set what each role can view, add, edit, approve or export, with high-risk actions needing two-factor approval.", "system"],
          ["Audit Log.png", 1312, 2884, "Audit log", "A tamper-proof record of every sensitive action: who did it, what changed, and full details for each entry.", "system"],
        ]),
      },
    ],
  },
  {
    id: "light-orbits",
    title: "Light Orbits",
    category: "Web Design",
    unit: "page",
    galleryTitle: "High-fidelity designs",
    layout: "web",
    role: "UI/UX Designer",
    platform: "Web",
    deliverables: "High-fidelity UI design",
    tools: "Figma",
    focus: "A distinctive visual identity carried across every page",
    details: [
      {
        label: "Key Features",
        items: [
          "Service packages and client testimonials",
          "Portfolio case studies with a responsive preview",
          "Team profiles with role filters",
          "A contact form, map and frequently asked questions",
          "An Arabic and English language switch",
        ],
      },
    ],
    description:
      "A six-page website for a digital marketing agency, with a bold space theme that carries through every page in deep navy, glowing teal and orbital artwork.",
    tags: ["Marketing agency", "Space theme"],
    // The originals in public/ui-ux design projects are too large for the web,
    // so these are 1440px wide copies made from them.
    screens: toScreens("/design-previews/light-orbits", [
      ["home.webp", 1440, 6864, "Home", "The main pitch: tools, service packages, client testimonials and a call to action."],
      ["services.webp", 1440, 5846, "Services", "The agency's marketing services, presented like a mission control panel."],
      ["portfolio.webp", 1440, 5605, "Portfolio", "Case studies with project details, filters and a responsive website preview."],
      ["about.webp", 1440, 5723, "About", "The agency's story, key numbers, values and a timeline of its growth."],
      ["our-team.webp", 1440, 5749, "Our team", "Leadership and team profiles with role filters, plus a careers invitation."],
      ["contact.webp", 1440, 5637, "Contact", "A project enquiry form, contact details, a map and frequently asked questions."],
    ]),
  },
  {
    id: "ventura",
    title: "Ventura",
    category: "Web Design",
    unit: "page",
    galleryTitle: "High-fidelity designs",
    layout: "web",
    role: "UI/UX Designer",
    platform: "Web",
    deliverables: "High-fidelity UI design",
    tools: "Figma",
    focus: "A simple layout system with a clear visual hierarchy",
    details: [
      {
        label: "Key Features",
        items: [
          "Product pages with interface previews",
          "Download options for each platform",
          "Personal and Team pricing plans",
          "Frequently asked questions",
          "A searchable, filterable blog",
        ],
      },
    ],
    description:
      "A clean, light website for a personal finance product, built on a simple layout system with clear sections, plenty of space and one strong blue accent.",
    tags: ["Personal finance", "Landing pages"],
    link: "https://www.figma.com/design/bPLCosPrx27QunpXHMB6VL/Ventura?node-id=0-1&t=rOnJ6MV8Rl3gRSAl-1",
    cover: toUrl(`${DESIGNS_DIR}/ventora/cover.png`),
    screens: toScreens(`${DESIGNS_DIR}/ventora`, [
      ["Home.png", 2880, 5982, "Home", "The product pitch, partner logos, feature highlights and a call to action."],
      ["Products.png", 2880, 5150, "Products", "Product benefits with interface previews, followed by common questions."],
      ["App.png", 2880, 4390, "App", "Download options for each platform, with a preview of the product on each."],
      ["Pricing.png", 2880, 4972, "Pricing", "Personal and Team plans side by side, with a comparison of what each includes."],
      ["Blog.png", 2880, 5600, "Blog", "A searchable, filterable list of articles in one easy-to-scan column."],
    ]),
  },
  {
    id: "socialgram",
    title: "SocialGram",
    category: "Mobile App",
    unit: "screen",
    galleryTitle: "Wireframes",
    layout: "mobile",
    role: "UI/UX Designer",
    platform: "Mobile",
    deliverables: "Wireframes",
    tools: "Figma",
    focus: "App structure and navigation before visual styling",
    flows: [
      { id: "onboarding", label: "Onboarding" },
      { id: "feed", label: "Feed & search" },
      { id: "posting", label: "Posting" },
      { id: "profiles", label: "Profiles & activity" },
      { id: "messages", label: "Messages" },
    ],
    details: [
      {
        label: "Key Features",
        items: [
          "A home feed with stories",
          "Search with live results",
          "A two-step flow for creating a post",
          "Notifications and one-to-one messaging",
          "Profiles with followers and following lists",
        ],
      },
    ],
    description:
      "A wireframe of a social media app, mapping the full experience in greyscale so structure and navigation come first: feed, search, posting, messaging and profiles.",
    tags: ["Social media", "Greyscale"],
    link: "https://www.figma.com/design/o0OAb1LyQMwpeiNvmdqe6I/SocialGram?node-id=0-1",
    cover: toUrl(`${DESIGNS_DIR}/SocialGram/cover.png`),
    screens: toScreens(`${DESIGNS_DIR}/SocialGram`, [
      ["Home.png", 786, 1624, "Home feed", "Stories across the top and a scrolling feed of posts above the main navigation.", "feed"],
      ["Search.png", 393, 852, "Search", "A simple search screen, ready for typing.", "feed"],
      ["Search-2.png", 393, 852, "Search results", "Matching people listed as the user types.", "feed"],
      ["Posting.png", 393, 852, "New post: choose a photo", "Pick a photo from a large preview and a grid of recent images.", "posting"],
      ["Posting-2.png", 393, 852, "New post: share", "Add a description to the chosen photo, then share it.", "posting"],
      ["Notifications.png", 393, 852, "Notifications", "A list of activity, showing who liked which photo.", "profiles"],
      ["Profile-me.png", 393, 812, "My profile", "Post and follower counts, a photo grid, and edit and share actions.", "profiles"],
      ["Profile-other.png", 393, 812, "Another user's profile", "The same layout, with follow and message as the main actions.", "profiles"],
      ["Chat.png", 393, 812, "Messages", "All conversations, with the latest message and when it was sent.", "messages"],
      ["Chat-2.png", 393, 812, "Conversation", "A one-to-one chat with timestamps and a message box.", "messages"],
      ["Followers.png", 393, 852, "Followers", "A list of followers, with a tab to switch to following.", "profiles"],
      ["Following.png", 393, 852, "Following", "The accounts this user follows, under the same tabs.", "profiles"],
      ["Login.png", 393, 844, "Login", "Username and password, with a link to register.", "onboarding"],
      ["Register.png", 393, 844, "Register", "A short form for name, username and password.", "onboarding"],
      ["Register-2.png", 393, 844, "Registration complete", "A thank-you message confirming the account, with a button to continue.", "onboarding"],
    ]),
  },
  {
    id: "untitled-ui",
    title: "Untitled-UI",
    category: "Design System",
    unit: "preview",
    galleryTitle: "Design system",
    layout: "web",
    platform: "Web",
    focus: "How reusable components and design tokens fit together",
    description:
      "The Untitled UI kit, which I use and study to understand how reusable components, typography scales and color tokens work together. It isn't my own design.",
    tags: ["Components", "Design tokens"],
    link: "https://www.figma.com/design/1awMsXZ0PImopkseWDuttI/Untitled-UI?node-id=0-1",
    screens: toScreens(`${DESIGNS_DIR}/untitled`, [
      ["untitled.png", 576, 637, "Design system preview", "A preview of the Untitled-UI design system."],
    ]),
  },
];

export const getDesignProjectById = (id) =>
  designProjects.find((project) => project.id === id);

// Counts every gallery, so a project with an extra one (e.g. an admin
// dashboard) shows its full total.
export const screenCountLabel = (project) => {
  const count =
    project.screens.length +
    (project.galleries ?? []).reduce((sum, g) => sum + g.screens.length, 0);
  return `${count} ${project.unit}${count === 1 ? "" : "s"}`;
};

export const figmaExperience = [
  {
    title: "Research & User Flow",
    description:
      "Understand what the product needs to do, and for whom, before drawing screens.",
    points: [
      "Understand product requirements",
      "Identify user needs",
      "Define user journeys",
      "Organize information architecture",
    ],
  },
  {
    title: "Wireframing & Prototyping",
    description:
      "Explore solutions while changes are still cheap, and test how the structure holds up.",
    points: [
      "Structure layouts",
      "Explore interface solutions",
      "Build interactive prototypes",
      "Validate decisions when possible",
    ],
  },
  {
    title: "UI Systems & Handoff",
    description:
      "Turn decisions into a consistent system that developers can build from.",
    points: [
      "Establish visual consistency",
      "Create reusable components",
      "Define typography and color systems",
      "Prepare designs and work with developers",
    ],
  },
];
