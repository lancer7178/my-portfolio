const DESIGNS_DIR = "/ui-ux design projects";

// Each screen is [file, width, height, title, description, flow (optional)].
// Width and height are kept so the page never jumps while images load.
const toScreens = (folder, rows) =>
  rows.map(([file, width, height, title, description, flow]) => ({
    // Some file names contain spaces and "&", which must be URL-encoded to load.
    src: encodeURI(file.startsWith("/") ? file : `${folder}/${file}`).replaceAll("&", "%26"),
    width,
    height,
    title,
    description,
    flow,
  }));

export const designProjects = [
  {
    id: "shara",
    title: "Shara",
    type: "Mobile App",
    layout: "mobile",
    description:
      "An Arabic-first rewards app for tradespeople. Technicians register their purchases and installations, earn points, move up through Bronze, Silver and Gold levels, and collect the cash value at a nearby branch.",
    tags: ["Mobile app", "Arabic (right-to-left)", "Rewards & loyalty"],
    flows: [
      { id: "earn", label: "Earn points" },
      { id: "rewards", label: "Rewards" },
      { id: "products", label: "Products & branches" },
      { id: "account", label: "Account & help" },
      { id: "signin", label: "Sign in" },
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
  },
  {
    id: "light-orbits",
    title: "Light Orbits",
    type: "Website",
    layout: "web",
    description:
      "A six-page website for a digital marketing agency, with a bold space theme that carries through every page in deep navy, glowing teal and orbital artwork.",
    tags: ["Website", "6 pages", "Marketing agency"],
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
    type: "Website",
    layout: "web",
    description:
      "A clean, light website for a personal finance product, built on a simple layout system with clear sections, plenty of space and one strong blue accent.",
    tags: ["Website", "5 pages", "Personal finance"],
    link: "https://www.figma.com/design/bPLCosPrx27QunpXHMB6VL/Ventura?node-id=0-1&t=rOnJ6MV8Rl3gRSAl-1",
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
    type: "Mobile App",
    layout: "mobile",
    description:
      "A wireframe of a social media app, mapping the full experience in greyscale so structure and navigation come first: feed, search, posting, messaging and profiles.",
    tags: ["Mobile app", "Wireframes", "Social media"],
    link: "https://www.figma.com/design/o0OAb1LyQMwpeiNvmdqe6I/SocialGram?node-id=0-1",
    screens: toScreens(`${DESIGNS_DIR}/SocialGram`, [
      ["Home.png", 786, 1624, "Home feed", "Stories across the top and a scrolling feed of posts above the main navigation."],
      ["Search.png", 393, 852, "Search", "A simple search screen, ready for typing."],
      ["Search-2.png", 393, 852, "Search results", "Matching people listed as the user types."],
      ["Posting.png", 393, 852, "New post: choose a photo", "Pick a photo from a large preview and a grid of recent images."],
      ["Posting-2.png", 393, 852, "New post: share", "Add a description to the chosen photo, then share it."],
      ["Notifications.png", 393, 852, "Notifications", "A list of activity, showing who liked which photo."],
      ["Profile-me.png", 393, 812, "My profile", "Post and follower counts, a photo grid, and edit and share actions."],
      ["Profile-other.png", 393, 812, "Another user's profile", "The same layout, with follow and message as the main actions."],
      ["Chat.png", 393, 812, "Messages", "All conversations, with the latest message and when it was sent."],
      ["Chat-2.png", 393, 812, "Conversation", "A one-to-one chat with timestamps and a message box."],
      ["Followers.png", 393, 852, "Followers", "A list of followers, with a tab to switch to following."],
      ["Following.png", 393, 852, "Following", "The accounts this user follows, under the same tabs."],
      ["Login.png", 393, 844, "Login", "Username and password, with a link to register."],
      ["Register.png", 393, 844, "Register", "A short form for name, username and password."],
      ["Register-2.png", 393, 844, "Registration complete", "A thank-you message confirming the account, with a button to continue."],
    ]),
  },
  {
    id: "untitled-ui",
    title: "Untitled-UI",
    type: "Design System",
    layout: "web",
    description:
      "A UI design system with reusable components, typography scales and color tokens for consistent design across projects.",
    tags: ["Design system", "Components", "Design tokens"],
    link: "https://www.figma.com/design/1awMsXZ0PImopkseWDuttI/Untitled-UI?node-id=0-1",
    screens: toScreens("", [
      ["/untitled.png", 576, 637, "Design system preview", "A preview of the Untitled-UI design system."],
    ]),
  },
];

export const designProcess = [
  {
    title: "Discovery",
    description:
      "Understand goals, user needs, and business priorities before drawing screens.",
  },
  {
    title: "Structure",
    description:
      "Build wireframes and information architecture for clear navigation and content flow.",
  },
  {
    title: "Visual Design",
    description:
      "Apply typography, color hierarchy, spacing, and components with consistency.",
  },
  {
    title: "Prototype & Handoff",
    description:
      "Create interactive prototypes and developer-ready specs for implementation.",
  },
];

export const figmaExperience = [
  {
    title: "Research & User Flow",
    description:
      "I map user journeys and key actions first, then translate goals into clear page structures that reduce friction and improve navigation.",
  },
  {
    title: "Wireframing & Prototyping",
    description:
      "I build low and high-fidelity wireframes in Figma, then create interactive prototypes to validate layout, spacing, and interaction patterns.",
  },
  {
    title: "UI Systems & Handoff",
    description:
      "I organize reusable components, typography scales, and spacing rules to make developer handoff smooth and keep designs consistent.",
  },
];
