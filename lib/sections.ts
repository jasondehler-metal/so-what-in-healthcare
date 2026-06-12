export type Section = {
  id: string;
  title: string;
  description: string;
  color: string;
  feeds: { label: string; url: string }[];
};

export const SECTIONS: Section[] = [
  {
    id: "integrated-payers",
    title: "Integrated Payers",
    description: "What HighMark, Elevance, HealthPartners, Cigna, and peers are doing with AI — member experience, prior auth, provider ops, and what's actually shipping.",
    color: "blue",
    feeds: [
      { label: "Healthcare Dive – Payers", url: "https://www.healthcaredive.com/feeds/news/" },
      { label: "Becker's Payer", url: "https://www.beckershospitalreview.com/rss/payer-issues.xml" },
      { label: "Health Affairs", url: "https://www.healthaffairs.org/rss/site_1000002/1000002.xml" },
    ],
  },
  {
    id: "digital-health",
    title: "Digital Health Companies",
    description: "AI in companies like Wondr Health, Lucent Health, and Bento — chronic care, engagement, and the tech decisions that separate shippers from slide-deck companies.",
    color: "purple",
    feeds: [
      { label: "Rock Health", url: "https://rockhealth.com/feed/" },
      { label: "Mobihealthnews", url: "https://www.mobihealthnews.com/rss.xml" },
      { label: "a16z Bio", url: "https://a16z.com/tag/bio-health/feed/" },
    ],
  },
  {
    id: "regulated-ai",
    title: "AI in Regulated Healthcare",
    description: "CMS policy, HIPAA + AI, and what it actually takes to get an AI product into a payer or health plan — compliance, procurement, and governance.",
    color: "green",
    feeds: [
      { label: "Healthcare IT News", url: "https://www.healthcareitnews.com/topic/artificial-intelligence/feed" },
      { label: "NEJM AI", url: "https://ai.nejm.org/rss/current" },
      { label: "Becker's Health IT", url: "https://www.beckershospitalreview.com/rss/healthcare-information-technology.xml" },
    ],
  },
  {
    id: "org-change",
    title: "Leading AI Transformation",
    description: "How payer and digital health leaders are actually driving AI adoption — change management, the politics, and what sticks.",
    color: "orange",
    feeds: [
      { label: "NEJM Catalyst", url: "https://catalyst.nejm.org/rss/current" },
      { label: "HBR Healthcare", url: "https://hbr.org/topic/subject/health-care/feed" },
      { label: "MIT Tech Review – AI", url: "https://www.technologyreview.com/topic/artificial-intelligence/feed" },
    ],
  },
  {
    id: "ai-partnerships",
    title: "Bringing Anthropic & OpenAI into Deals",
    description: "Enterprise AI model strategy, how OpenAI and Anthropic are landing in health orgs, procurement patterns, and partnership structures worth knowing.",
    color: "magenta",
    feeds: [
      { label: "Anthropic", url: "https://www.anthropic.com/rss.xml" },
      { label: "OpenAI", url: "https://openai.com/news/rss.xml" },
      { label: "The Gradient", url: "https://thegradient.pub/rss/" },
    ],
  },
];
