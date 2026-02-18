// lib/content.ts

/* ---------------------- 1. INTERFACES ---------------------- */

// lib/content.ts

export interface FunnelStage {
  title: string;
  smm: string;
  content: string;
  kpi: string;
}

export interface FunnelStrategy {
  name: string;
  useCase: string;
  objective: string;
  accentClass: string;
  borderClass: string;
  textClass: string;
  lightBg: string;
  metrics: string[];
  stages: FunnelStage[];
}

export const funnelStrategies: FunnelStrategy[] = [
  {
    name: "The Lead Magnet Funnel",
    useCase: "Ideal for B2B Services, Coaches, and Digital Products.",
    objective: "Build a database of warm leads via email opt-ins.",
    accentClass: "bg-blue-500",
    borderClass: "hover:border-blue-200",
    textClass: "text-blue-600",
    lightBg: "bg-blue-100",
    metrics: ["Cost Per Lead (CPL)", "Email Open Rate", "Opt-in Conversion %"],
    stages: [
      { title: "Awareness (TOFU)", smm: "Educational Reels/TikToks highlighting a common problem.", content: "Hook: 'Stop wasting time on [X]...'", kpi: "Reach & Shares" },
      { title: "Interest (MOFU)", smm: "Carousels explaining the solution found in your freebie.", content: "CTA: 'Download my free checklist in bio.'", kpi: "Link Clicks" },
      { title: "Decision (BOFU)", smm: "Retargeting style posts with testimonials from freebie users.", content: "CTA: 'Ready for the full system? Link in bio.'", kpi: "Conversions" }
    ]
  },
  {
    name: "The 'Invisible' Sales Funnel",
    useCase: "Best for Personal Brands and Consultancies.",
    objective: "Move followers to DMs to close deals via conversation.",
    accentClass: "bg-purple-500",
    borderClass: "hover:border-purple-200",
    textClass: "text-purple-600",
    lightBg: "bg-purple-100",
    metrics: ["DM Inbound Volume", "Inquiry to Call Ratio", "Lead Quality"],
    stages: [
      { title: "Authority Building", smm: "High-value 'Hot Takes' and industry insights.", content: "Showing why the old way of doing things is broken.", kpi: "Saves & Profile Visits" },
      { title: "Trust Bridge", smm: "Stories using Interactive Polls (e.g., 'Are you struggling with X?')", content: "Engagement: Direct outreach to those who voted 'Yes'.", kpi: "Story Engagement" },
      { title: "The Conversion", smm: "Soft pitch via 'Hand-raiser' posts (e.g., 'I have 2 spots open').", content: "CTA: 'Comment READY for details.'", kpi: "DM Conversations" }
    ]
  },
  {
    name: "E-commerce Retargeting Funnel",
    useCase: "Best for Apparel, Gadgets, and Physical Goods.",
    objective: "Turn cold browsers into repeat customers.",
    accentClass: "bg-emerald-500",
    borderClass: "hover:border-emerald-200",
    textClass: "text-emerald-600",
    lightBg: "bg-emerald-100",
    metrics: ["Return on Ad Spend (ROAS)", "Add to Cart Rate", "Customer LTV"],
    stages: [
      { title: "Product Discovery", smm: "Aesthetic UGC (User Generated Content) and unboxings.", content: "Visual: Lifestyle shots of the product in use.", kpi: "Video View Duration" },
      { title: "Removing Friction", smm: "FAQ posts, shipping info, and 'Benefits vs Features' graphics.", content: "Reassurance: 'Free shipping on orders over $50.'", kpi: "Website Traffic" },
      { title: "The Purchase", smm: "Time-sensitive offers or 'Flash Sale' announcements.", content: "Urgency: 'Only 12 hours left to grab this deal.'", kpi: "Total Sales" }
    ]
  },
  {
    name: "The Webinar/Event Funnel",
    useCase: "Best for High-Ticket Courses and Workshops.",
    objective: "High-volume registrations for a specific live event.",
    accentClass: "bg-rose-500",
    borderClass: "hover:border-rose-200",
    textClass: "text-rose-600",
    lightBg: "bg-rose-100",
    metrics: ["Registration Rate", "Show-up Rate", "Sales Pitch Close %"],
    stages: [
      { title: "The Tease", smm: "Behind-the-scenes of event prep and 'Coming Soon' posts.", content: "Curiosity: 'I'm revealing my secret formula on Tuesday...'", kpi: "Waitlist Signups" },
      { title: "The Push", smm: "Countdown stickers in stories and daily reminders.", content: "Direct: 'Link in bio to save your seat (Limited spots).'", kpi: "Click-Through Rate" },
      { title: "The Encore", smm: "Recap graphics and 'Last Chance to Watch' replays.", content: "Scarcity: 'The replay goes down at midnight.'", kpi: "Replay Views" }
    ]
  }
];

/* ---------------------- 3. PAGE CONTENT ---------------------- */

export const heroContent = {
  eyebrow: "Ecommerce Growth Systems Built on Content, Funnels & SEO",
  title: "I Help Early-Stage Brands Turn Social Media Into a Predictable Growth System.",
  subtitle: "Strategy. Content. Paid Social. Analytics. Built for startups that want structured growth — not random posting.",
  primaryCta: { label: "Book a Growth Call", href: "#contact" },
  secondaryCta: { label: "View My Work", href: "#portfolio" },
};

export const problemContent = {
  headline: "Most brands don’t struggle with content. They struggle with direction.",
  description: "I design structured growth systems that combine strategic content, conversion funnels, and SEO foundations — built to turn traffic into measurable revenue.",
  painPoints: [
    "Posting randomly without a clear content strategy",
    "No defined content pillars or brand voice",
    "Inconsistent engagement and unpredictable results",
    "No KPI tracking or performance reporting",
    "Running ads without structured testing",
    "No funnel from content to actual conversions",
  ],
};

export const frameworkContent = {
  headline: "The Growth Content System™",
  description: "A structured framework designed to turn scattered posting into measurable growth.",
  steps: [
    { title: "01. Brand & Positioning Audit", description: "We define your audience, clarify messaging, and identify gaps." },
    { title: "02. Content Strategy & Pillars", description: "We build structured content pillars aligned with business goals." },
    { title: "03. Creative Production", description: "Short-form video, graphics, and publishing workflows." },
    { title: "04. Paid Social Testing", description: "Structured ad testing frameworks to scale performance." },
    { title: "05. KPI Tracking & Optimization", description: "Performance reporting and continuous improvement cycles." },
  ],
};

export const proofContent = {
  headline: "Results Built on Strategy — Not Guesswork",
  description: "Every campaign is tracked and optimized. Performance improvements driven by structured content.",
  metrics: [
    { value: "+47%", label: "Engagement Rate Increase" },
    { value: "+62%", label: "Reach Growth in 30 Days" },
    { value: "3.2x", label: "Improvement in Content Saves" },
    { value: "-28%", label: "Reduced Cost Per Click (Ads)" },
  ],
};

export const portfolioContent = {
  headline: "Selected Work & Strategic Assets",
  description: "A mix of strategy, creative execution, and analytics-driven systems.",
  items: [
    { title: "Content Strategy Blueprint", category: "Strategy", image: "/images/portfolio/strategy.png" },
    { title: "Short-Form Reel Campaign", category: "Creative", image: "/images/portfolio/reel.png" },
    { title: "Instagram Carousel Design", category: "Creative", image: "/images/portfolio/carousel.png" },
    { title: "KPI Analytics Dashboard", category: "Analytics", image: "/images/portfolio/dashboard.png" },
    { title: "Content Calendar System", category: "Planning", image: "/images/portfolio/calendar.png" },
    { title: "Paid Ads Testing Framework", category: "Paid Media", image: "/images/portfolio/ads.png" },
  ],
};

export const packagesContent = {
  headline: "Growth Packages",
  description: "Structured service tiers designed for brands at different stages of growth.",
  packages: [
    {
      name: "Starter",
      price: "Strategy Only",
      highlight: false,
      features: ["Audit", "Positioning", "Pillars", "30-Day Plan", "KPI Setup"],
      cta: "Book Strategy Session",
    },
    {
      name: "Growth",
      price: "Strategy + Content",
      highlight: true,
      features: ["Starter features", "8–12 Content Pieces", "Captions", "Scheduling", "Monthly Report"],
      cta: "Start Growing",
    },
    {
      name: "Scale",
      price: "Full Funnel + Paid Social",
      highlight: false,
      features: ["Growth features", "Short-Form Strategy", "Ad Testing", "Optimization", "Conversion Reporting"],
      cta: "Apply to Work Together",
    },
  ],
};

export const aboutContent = {
  headline: "Structured Thinking. Growth-Focused Execution.",
  description: "My background in technical support and analytics shaped how I approach social media.",
  story: "I’ve worked in environments where performance and process matter. That mindset translates to results.",
  bullets: ["Data-driven", "Process-oriented", "KPI tracking", "Growth mindset"],
  image: "/images/profile/working.png",
};

export const ctaContent = {
  headline: "Ready to Turn Your Social Media Into a Growth Engine?",
  description: "If you're serious about building structured, measurable growth — let's build a system that works.",
  primaryCta: { label: "Book a Growth Call", href: "#contact" },
  secondaryText: "Prefer email? Reach me directly at wilmer@email.com",
};

export const funnelContent = {
  headline: "The Growth Funnel I Build for Brands",
  description: "Every growth system follows a structured journey — designed to move cold traffic into loyal customers through strategy, content, and optimization.",
  stages: [
    { title: "Traffic", description: "SEO, organic content, paid acquisition", metric: "+120% Reach Growth" },
    { title: "Capture", description: "Landing pages, lead magnets, optimized bios", metric: "+35% Lead Conversion" },
    { title: "Nurture", description: "Email flows, retargeting, authority content", metric: "+48% Engagement Lift" },
    { title: "Convert", description: "Offers, optimized CTAs, funnel refinement", metric: "+22% Sales Uplift" },
    { title: "Scale", description: "Analytics, testing, system expansion", metric: "ROAS Optimization" },
  ],
};