export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  heroGradient: string;
  metrics: { label: string; value: string }[];
  content: {
    overview: string;
    challenges: string;
    solution: string;
    results: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "fintech-dashboard",
    title: "FinTech Dashboard",
    category: "Web Application",
    summary: "Enterprise-grade analytics platform with real-time insights and custom reporting.",
    heroGradient: "from-blue-600 to-cyan-500",
    metrics: [
      { label: "User Adoption", value: "+180%" },
      { label: "Report Speed", value: "–62%" },
      { label: "NPS", value: "74" },
    ],
    content: {
      overview:
        "We partnered with a leading fintech to build a modular analytics suite integrating multiple data sources with low-latency visualizations.",
      challenges:
        "Fragmented data pipelines, inconsistent filters, and slow report generation impacting stakeholders’ decision-making.",
      solution:
        "Implemented a headless architecture with streaming data, role-based dashboards, and accessible design at enterprise scale.",
      results:
        "Stakeholders gained real-time visibility, reducing analysis time and driving faster decisions across product and operations.",
    },
  },
  {
    slug: "neon-commerce",
    title: "Neon Commerce",
    category: "E-Commerce",
    summary: "High-performance headless storefront with 3D product previews and personalization.",
    heroGradient: "from-purple-600 to-pink-500",
    metrics: [
      { label: "Conversion Rate", value: "+34%" },
      { label: "Page Speed", value: "98/100" },
      { label: "AOV", value: "+22%" },
    ],
    content: {
      overview:
        "We delivered an immersive shopping experience leveraging edge rendering, personalization, and performant media pipelines.",
      challenges:
        "Legacy monolith slowed iterations and underperformed on mobile networks with heavy assets.",
      solution:
        "Headless architecture, CDN-optimized assets, and 3D previews delivered buttery performance and deeper engagement.",
      results:
        "Significant uplift in conversion and AOV with measurable performance gains across global markets.",
    },
  },
  {
    slug: "ai-chat-interface",
    title: "AI Chat Interface",
    category: "SaaS Product",
    summary: "Conversational interface with live insights and collaborative workflows.",
    heroGradient: "from-green-600 to-emerald-500",
    metrics: [
      { label: "Time to Insight", value: "–48%" },
      { label: "Team Adoption", value: "+210%" },
      { label: "Support Tickets", value: "–37%" },
    ],
    content: {
      overview:
        "We redesigned the chat experience to surface real-time insights and support multiuser collaboration with audit trails.",
      challenges:
        "Non-discoverable features and limited visibility into context leading to repeated queries and friction.",
      solution:
        "Introduced structured prompts, contextual side-panels, and live visualization, all accessible across devices.",
      results:
        "Teams achieved faster insights and reduced support load while gaining traceability and confidence.",
    },
  },
  {
    slug: "crypto-exchange",
    title: "Crypto Exchange",
    category: "Web3 Platform",
    summary: "Secure trading platform with intuitive onboarding and advanced order types.",
    heroGradient: "from-orange-600 to-red-500",
    metrics: [
      { label: "Onboarding Success", value: "+42%" },
      { label: "Trade Volume", value: "+28%" },
      { label: "Support CSAT", value: "4.7/5" },
    ],
    content: {
      overview:
        "We modernized the exchange with secure flows, transparent fees, and clear guidance for both novice and power users.",
      challenges:
        "Complex mental models, fragmented education, and low trust due to opaque fee structures and latency.",
      solution:
        "Streamlined onboarding, in-flow education, and performant order book visualization with robust error handling.",
      results:
        "Higher onboarding success, increased trade volume, and improved customer satisfaction metrics.",
    },
  },
];
