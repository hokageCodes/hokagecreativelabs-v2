export const services = [
  {
    key: "branding",
    number: "01",
    label: "Brand identity design",
    title: "Brand identity design",
    filterTitle: "Brand identity design",
    desc: "Logos, visual systems, and guidelines that keep your story consistent from pitch deck to product.",
    featured: true,
  },
  {
    key: "uiux",
    number: "02",
    label: "Design",
    title: "UI/UX design",
    filterTitle: "UI/UX Design",
    desc: "Interfaces and flows that feel obvious—wireframes through high-fidelity, built for real users.",
    featured: true,
  },
  {
    key: "software",
    number: "03",
    label: "Build",
    title: "Web & mobile apps",
    filterTitle: "Software Development",
    desc: "Marketing sites for real estate, eCommerce, portfolios, hospitality, and campaigns and product apps and responsive experiences shipped with modern stacks.",
    featured: true,
  },
  {
    key: "dashboards",
    number: "04",
    label: "Tools",
    title: "Custom tools",
    filterTitle: "Custom Dashboards",
    desc: "Dashboards, admin panels, and workflows that help teams move faster behind the scenes.",
    featured: true,
  },
  {
    key: "ecommerce",
    number: "05",
    label: "Commerce",
    title: "eCommerce",
    filterTitle: "eCommerce Applications",
    desc: "Stores engineered for conversion—catalog, checkout, payments, and fulfillment hooks.",
    featured: false,
  },
  {
    key: "seo",
    number: "06",
    label: "Growth",
    title: "SEO & discoverability",
    filterTitle: "SEO Optimization",
    desc: "Technical foundations and content structure so the right people find you organically.",
    featured: false,
  },
  {
    key: "content",
    number: "07",
    label: "Content",
    title: "Content & messaging",
    filterTitle: "Content & Messaging",
    desc: "Copy and messaging that explains what you do clearly across every touchpoint.",
    featured: false,
  },
  {
    key: "training",
    number: "08",
    label: "Enablement",
    title: "Training & workshops",
    filterTitle: "Training & Workshops",
    desc: "Hands-on sessions so your team can maintain, scale, and evolve what we ship together.",
    featured: false,
  },
];

/** @deprecated Use `services` — kept for project filter tabs */
export const expertiseList = services.map(({ key, filterTitle }) => ({
  key,
  icon: "FaCode",
  title: filterTitle,
}));

/** Display labels for project categories and tags (keys stay stable for filtering) */
export const tagLabels = {
  branding: "Brand identity",
  uiux: "UI/UX design",
  software: "Web & apps",
  ecommerce: "eCommerce",
  dashboards: "Custom tools",
};

/** Portfolio filter tabs — keys must match project `primaryCategory` or `tags` */
export const projectCategories = [
  { key: "all", label: "All work" },
  { key: "branding", label: "Brand identity" },
  { key: "ecommerce", label: "eCommerce" },
  { key: "software", label: "Web & apps" },
  { key: "dashboards", label: "Custom tools" },
  { key: "uiux", label: "UI/UX design" },
];

/** Project images — brand identity keeps all entries; others pad to 3 */
export function getProjectImages(project) {
  const base =
    project.images?.length > 0 ? [...project.images] : [project.image].filter(Boolean);
  const unique = [...new Set(base)];

  const primary = project.primaryCategory || project.category;
  const isBranding =
    primary === "branding" ||
    (project.tags?.includes("branding") &&
      !project.tags?.some((tag) =>
        ["software", "ecommerce", "dashboards"].includes(tag)
      ));

  if (isBranding) {
    return project.images?.length > 0
      ? [...project.images]
      : [project.image].filter(Boolean);
  }

  const padded = [...unique];
  while (padded.length < 3 && padded[0]) padded.push(padded[0]);
  return padded.slice(0, 3);
}

export const projects = [
  {
    title: "Arira Lagos",
    slug: "arira-lagos",
    primaryCategory: "ecommerce",
    category: "ecommerce",
    desc: "ARÍRA is a clothing brand rooted in African indigenous prints. We exist for those who seek comfort, a strong sense of identity, and readymade outfits for everyday wear.",
    features: [
      "Collection-led catalog with clear category navigation",
      "Product detail pages built for imagery and variant clarity",
      "Mobile-first shopping flow for everyday buyers",
      "Payment gateway integration for seamless transactions",
      "Inventory management system for real-time stock tracking",
      "Customer account management for order history and profile updates",
      "SEO-friendly architecture for discoverability",
      "Brand storytelling woven through the storefront experience",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "eCommerce", "Paystack"],
    image: "/assets/arira-ng.png",
    images: [
      "/assets/arira-ng.png",
      "/assets/arira.png",
      "/assets/arira-3.png",
    ],
    tags: ["uiux"],
    liveUrl: "https://ariralagos.com.ng",
  },
  {
    title: "Semilia by TailorGirl Fashion",
    slug: "semilia",
    primaryCategory: "ecommerce",
    category: "ecommerce",
    desc: "Semilia is a luxury African fashion house rooted in heritage and crafted for the modern wardrobe. Every piece is thoughtfully designed to celebrate the richness of African culture while meeting the demands of contemporary living.",
    features: [
      "Editorial lookbook and collection presentation",
      "Product discovery with luxury-forward layouts",
      "About and brand narrative pages",
      "Performance-conscious media and responsive UI",
      "Payment gateway integration for seamless transactions",
      "Inventory management system for real-time stock tracking",
      "Customer account management for order history and profile updates",
      "SEO-friendly architecture for discoverability",
      "Admin-JB content updates for product listings and inventory",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Vercel"],
    image: "/assets/semilia.png",
    images: [
      "/assets/semilia.png",
      "/assets/semilia-about.png",
      "/assets/semilia-product.png",
    ],
    tags: ["uiux"],
    liveUrl: "https://semilia.org"
  },
  {
    title: "Rebel by Grace",
    slug: "rebel-by-grace",
    primaryCategory: "ecommerce",
    category: "ecommerce",
    desc: "RebelByGrace was born from a passion for exceptional craftsmanship and a desire to create handbags that stand the test of time. Our journey began with a simple belief: that every individual deserves access to premium quality accessories that reflect their unique style and personality.",
    features: [
      "Premium product merchandising and collection pages",
      "Craft-focused storytelling across brand touchpoints",
      "Streamlined path from browse to purchase",
      "Responsive layouts tuned for mobile shoppers",
      "Payment gateway integration for seamless transactions with Flutterwave",
      "Inventory management system for real-time stock tracking",
      "Customer account management for order history and profile updates",
      "SEO-friendly architecture for discoverability",
      "Admin-JB content updates for product listings and inventory",
      "Email Integration with Resend for transactional emails",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "ShadcnUI", "Vercel"],
    image: "/assets/rebel-by-grace.png",
    images: [
      "/assets/rbg.png",
      "/assets/rbg-about.png",
      "/assets/rbg-product.png",
    ],
    tags: [],
    liveUrl: "https://rebelbygracie.com"
  },
  {
    title: "Mfon Usoro Books",
    slug: "mfon-usoro-books",
    primaryCategory: "software",
    category: "software",
    desc: "Mfon Ekong Usoro has extensive experience as a shipping lawyer and a maritime administrator with an avid interest in research, trade law, supply chain and transport, and speaking at international and domestic conferences",
    features: [
      "Author platform showcasing publications and expertise",
      "Book catalog with clear purchase pathways",
      "About, speaking, and credibility-focused content structure",
      "SEO-friendly architecture for discoverability",
      "Payment gateway integration for seamless transactions with Paystack",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Sanity CMS", "Vercel"],
    image: "/assets/mubooks.png",
    images: [
      "/assets/mubooks.png",
      "/assets/mfon-about.png",
      "/assets/mfon-product.png",
    ],
    tags: ["uiux"],
    liveUrl: "https://mfonusorobooks.com"
  },
  {
    title: "Annual Conference Portal",
    slug: "annual-conference-portal",
    primaryCategory: "software",
    category: "software",
    desc: "The ITL Conference is the largest gathering of Internationally Trained Lawyers (ITLs) in Canada.",
    features: [
      "Conference information hub with schedules and speakers",
      "Registration flows for attendees and partners",
      "Resource library for members and delegates",
      "Admin-friendly content updates for annual events",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", "Vercel"],
    image: "/assets/itl27.png",
    images: [
      "/assets/itl27.png",
      "/assets/itl-about.png",
      "/assets/itl-product.png",
    ],
    tags: ["uiux"],
    liveUrl: "https://itlconference.ca"
  },
  {
    title: "Community / Network Website",
    slug: "itl-network",
    primaryCategory: "dashboards",
    category: "dashboards",
    desc: "The ITL Network was established in 2019 as a registered not-for-profit under the Canada Not-for-profit Corporations Act to respond to the unique challenges faced by internationally trained legal professionals. What began as a community to support candidates navigating the licensing process has grown into a platform for mentorship, professional development, and advocacy.",
    features: [
      "Member community platform with programs and resources",
      "Mentorship and professional development pathways",
      "News, advocacy, and organizational storytelling",
      "Dashboard tools for internal team operations",
      "Discovery and Messaging for members and partners",
      "Payment gateway integration for seamless transactions with Paystack",
      "Subscription management for members and partners",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB", "Paystack"],
    image: "/assets/itlnetwork.png",
    images: [
      "/assets/itlnetwork.png",
      "/assets/itl-network-about.png",
      "/assets/itl-network-product.png",
    ],
    tags: ["software", "uiux"],
    liveUrl: "https://itlnetwork.ca"
  },
  {
    title: "Enhance Aesthetic HQ",
    slug: "enhance-aesthetic-clinic",
    primaryCategory: "software",
    category: "software",
    desc: "Offers a comprehensive range of aesthetic skin care services designed to address various skin concerns and needs. Our expert team is dedicated to providing personalized treatments that promote healthy, radiant, and glowing skin.",
    features: [
      "Aesthetic clinic website with programs and resources",
      "Discovery and Messaging for clients",
    ],
    stack: ["Next.js", "React", "Tailwind CSS", "MongoDB", "Vercel"],
    image: "/assets/enhance.png",
    images: [
      "/assets/enhance.png",
      "/assets/enhance-about.png",
      "/assets/enhance-product.png",
    ],
    tags: ["uiux"],
    liveUrl: "https://enhanceaesthetichq.com"
  },
  {
    title: "BELE",
    slug: "bele",
    primaryCategory: "branding",
    category: "branding",
    desc: "A FASHION STORE",
    features: [
      "Logo suite and primary brand mark",
      "Color, type, and visual language system",
      "Brand guidelines for consistent application",
      "Launch assets for digital and print touchpoints",
    ],
    stack: ["Figma", "Adobe Illustrator", "Brand guidelines", "Print-ready assets"],
    image: "/assets/bele.jpg",
    images: ["/assets/bele.jpg", "/assets/bele-2.png", "/assets/bele-3.png"],
    tags: ["branding"],
    liveUrl: "/bele-brand.pdf"
  },
  {
    title: "jAIYE",
    slug: "jaiye",
    primaryCategory: "branding",
    category: "branding",
    desc: "A Social events platform",
    features: [
      "Brand identity for a social events platform",
      "Visual system for campaigns and social channels",
      "Tone-of-voice cues for youthful, energetic positioning",
      "Flexible assets for event promotion",
    ],
    stack: ["Figma", "Adobe Illustrator", "Brand guidelines", "Social templates"],
    image: "/assets/jaaiye.jpg",
    images: ["/assets/jaaiye.jpg", "/assets/jaiye-2.png", "/assets/jaaiye.png"],
    tags: ["branding"],
    liveUrl: "/jaiye.pdf"
  },
  {
    title: "Elvora",
    slug: "elvora",
    primaryCategory: "branding",
    category: "branding",
    desc: "An event planning company..",
    features: [
      "Elegant identity for an event planning studio",
      "Typography and color palette for premium events",
      "Collateral templates for proposals and promotions",
      "Brand deck for client-facing presentations",
    ],
    stack: ["Figma", "Adobe InDesign", "Brand guidelines", "Print-ready assets"],
    image: "/elvora.jpg",
    images: ["/elvora.jpg", "/elvora.jpg", "/elvora.jpg"],
    tags: ["branding"],
    liveUrl: "/Elvora-print.pdf"
  }
];

export const companyIntro = {
  eyebrow: "Company",
  headline: "A collective built to leave a digital legacy.",
  headlineAccent: "digital legacy",
  body: "Hokage Creative Labs brings together technologists, designers, and strategists who believe great work should feel inevitable—beautiful, functional, and built to last.",
};

export const companyMission = {
  mission: {
    label: "Mission",
    title: "Bridge vision and execution",
    body: "We partner with ambitious teams to deliver products that are as beautiful as they are functional—crafting digital experiences that stand out in a crowded world.",
  },
  vision: {
    label: "Vision",
    title: "The partner you trust at scale",
    body: "To be the most trusted creative technology studio for organizations seeking to leave a mark—where innovation, empathy, and quality define every experience we ship.",
  },
};

export const companyStory =
  "We started as a small studio with a simple belief: technology should feel human. Today we work across brand identity, eCommerce, web apps, and custom tools—always with the same standard: clarity for users, confidence for clients, and craft in every detail.";

export const companyValues = [
  {
    number: "01",
    label: "Innovation",
    title: "Innovation at every step",
    desc: "We push boundaries and explore new approaches so every solution delivers real value—not just the obvious one.",
  },
  {
    number: "02",
    label: "Empathy",
    title: "Empathy-driven design",
    desc: "We design for real people, real contexts, and real constraints—so every experience feels intuitive and meaningful.",
  },
  {
    number: "03",
    label: "Quality",
    title: "Relentless pursuit of quality",
    desc: "We sweat the details and hold ourselves to the highest standards in design, code, and delivery.",
  },
  {
    number: "04",
    label: "Partnership",
    title: "Collaboration & transparency",
    desc: "We work openly and together. The best outcomes come from shared vision, honest feedback, and mutual trust.",
  },
  {
    number: "05",
    label: "Future",
    title: "Building for the future",
    desc: "We create with tomorrow in mind—scalable systems, maintainable code, and brands built to evolve.",
  },
];

export const companyTeam = [
  {
    name: "Busayo Ogunde",
    role: "Creative Director",
    bio: "Visionary leader blending art and technology to craft unforgettable digital experiences.",
    initials: "BO",
    image: "/team/busayo.jpg",
  },
  {
    name: "Eric Rukevwe",
    role: "Lead Engineer",
    bio: "Architects robust, scalable solutions and leads our engineering practice with precision.",
    initials: "ER",
    image: "/team/eric.jpg",
  },
  {
    name: "Yasmeen Adebisi",
    role: "Product Designer",
    bio: "Designs beautiful, user-centric interfaces that delight users and drive outcomes.",
    initials: "YA",
    image: "/team/yasmeen.jpg",
  },
  {
    name: "Oladayo Akinmokun",
    role: "Legal & Compliance",
    bio: "Ensures our work is ethical, secure, and always above board for clients and partners.",
    initials: "OA",
    image: "/team/oladayo.jpg",
  },
];

export const contactPage = {
  eyebrow: "Contact",
  headline: "Tell us what you're",
  headlineAccent: "building next.",
  body: "Whether you have a brief, a rough idea, or just questions—we'll respond with clarity on fit, scope, and what a first sprint could look like.",
  email: "info@hokagecreativelabs.com",
  devEmail: "devteam@hokagecreativelabs.com",
  location: "Lagos, Nigeria · Remote worldwide",
  responseTime: "We typically reply within 1–2 business days.",
  calendlyLabel: "Book a free 30-minute call",
  calendlyNote: "Best for new projects, scope questions, and timeline planning.",
};

export const contactProjectTypes = [
  { value: "", label: "What are you looking for?" },
  { value: "branding", label: "Brand identity" },
  { value: "ecommerce", label: "eCommerce" },
  { value: "software", label: "Web or mobile app" },
  { value: "dashboards", label: "Custom tool or dashboard" },
  { value: "uiux", label: "UI/UX design" },
  { value: "other", label: "Something else" },
];

export const testimonials = [
  {
    name: "Kenny Okunola",
    title: "Co-founder, ITL Network",
    quote:
      "From strategy to execution, Hokage exceeded our expectations. Their attention to detail and technical expertise set them apart.",
  },
  {
    name: "Oladayo Akinmokun",
    title: "The Cyber Lawyer",
    quote:
      "The Hokage team is innovative, responsive, and truly understands the digital legal landscape. Highly recommended for any tech-forward business.",
  },
  {
    name: "Toyin Ogunde",
    title: "Head Chef, Party Deal",
    quote:
      "Hokage brought our vision to life with creativity and professionalism. The process was smooth and the results were deliciously effective.",
  },
];

export const faqs = [
  {
    number: "01",
    question: "What do you actually build?",
    answer:
      "Brand identity systems, marketing sites, eCommerce, web and mobile apps, dashboards, and the content and SEO that help them get found. If it lives on a screen and needs to feel intentional, we can scope it.",
  },
  {
    number: "02",
    question: "How long does a typical project take?",
    answer:
      "Most engagements run four to twelve weeks depending on scope. We map milestones up front—discovery, design, build, launch—so you always know what’s next and when to expect it.",
  },
  {
    number: "03",
    question: "What does working together look like?",
    answer:
      "A straight line from brief to launch: discover the landscape, define the blueprint, build in the open, then ship and stay close. You see working product at every stage—not slide decks in isolation.",
  },
  {
    number: "04",
    question: "Who do you work best with?",
    answer:
      "Founders, product teams, and operators who want a partner—not a ticket queue. We’re a fit when you value clarity, craft, and momentum over endless rounds of vague feedback.",
  },
  {
    number: "05",
    question: "How do we get started?",
    answer:
      "Book a free 30-minute consultation. We’ll talk goals, constraints, and timeline—then share a clear recommendation on whether we’re the right team and what the first sprint could look like.",
  },
];
