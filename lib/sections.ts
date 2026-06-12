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
      { label: "Healthcare Dive", url: "https://www.healthcaredive.com/feeds/news/" },
      { label: "Fierce Healthcare", url: "https://www.fiercehealthcare.com/rss/xml" },
      { label: "Becker's Payer", url: "https://www.beckershospitalreview.com/rss/payer-issues.xml" },
    ],
  },
  {
    id: "digital-health",
    title: "Digital Health Companies",
    description: "AI in companies like Wondr Health, Lucent Health, and Bento — chronic care, engagement, and the tech decisions that separate shippers from slide-deck companies.",
    color: "purple",
    feeds: [
      { label: "STAT Health Tech", url: "https://www.statnews.com/category/health-tech/feed/" },
      { label: "Fierce Digital Health", url: "https://www.fiercehealthcare.com/digital-health/rss.xml" },
      { label: "Healthcare Dive", url: "https://www.healthcaredive.com/feeds/news/" },
    ],
  },
  {
    id: "regulated-ai",
    title: "AI in Regulated Healthcare",
    description: "CMS policy, HIPAA + AI, and what it actually takes to get an AI product into a payer or health plan — compliance, procurement, and governance.",
    color: "green",
    feeds: [
      { label: "Fierce Healthcare", url: "https://www.fiercehealthcare.com/rss/xml" },
      { label: "Healthcare IT News", url: "https://www.healthcareitnews.com/rss.xml" },
      { label: "Health Affairs", url: "https://www.healthaffairs.org/rss/site_1000002/1000002.xml" },
    ],
  },
  {
    id: "org-change",
    title: "Leading AI Transformation",
    description: "How payer and digital health leaders are actually driving AI adoption — change management, the politics, and what sticks.",
    color: "orange",
    feeds: [
      { label: "Becker's Health IT", url: "https://www.beckershospitalreview.com/rss/healthcare-information-technology.xml" },
      { label: "STAT News AI", url: "https://www.statnews.com/category/artificial-intelligence/feed/" },
      { label: "Fierce Healthcare", url: "https://www.fiercehealthcare.com/rss/xml" },
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
      { label: "STAT News AI", url: "https://www.statnews.com/category/artificial-intelligence/feed/" },
    ],
  },
];
