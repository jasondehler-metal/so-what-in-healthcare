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
      { label: "AHIP", url: "https://www.ahip.org/feed/" },
      { label: "Healthcare Dive", url: "https://www.healthcaredive.com/feeds/news/" },
      { label: "Fierce Healthcare", url: "https://www.fiercehealthcare.com/rss/xml" },
    ],
  },
  {
    id: "digital-health",
    title: "Digital Health Companies",
    description: "AI in companies like Wondr Health, Lucent Health, and Bento — chronic care, engagement, and the tech decisions that separate shippers from slide-deck companies.",
    color: "purple",
    feeds: [
      { label: "Rock Health", url: "https://rockhealth.com/feed/" },
      { label: "STAT News", url: "https://www.statnews.com/category/artificial-intelligence/feed/" },
      { label: "Mobihealthnews", url: "https://www.mobihealthnews.com/rss.xml" },
    ],
  },
  {
    id: "regulated-ai",
    title: "AI in Regulated Healthcare",
    description: "FDA clearances, CMS policy, HIPAA + AI, and what it actually takes to get an AI product into a payer or provider system.",
    color: "green",
    feeds: [
      { label: "FDA Digital Health", url: "https://www.fda.gov/about-fda/contact-fda/stay-informed/rss-feeds/press-releases/rss.xml" },
      { label: "Healthcare IT News", url: "https://www.healthcareitnews.com/rss.xml" },
      { label: "Health Affairs", url: "https://www.healthaffairs.org/rss/site_1000002/1000002.xml" },
    ],
  },
  {
    id: "org-change",
    title: "Leading AI Transformation",
    description: "How health system and payer leaders are actually driving AI adoption — not the vision decks, the change management, the politics, and what sticks.",
    color: "orange",
    feeds: [
      { label: "NEJM Catalyst", url: "https://catalyst.nejm.org/rss/current" },
      { label: "Becker's Health IT", url: "https://www.beckershospitalreview.com/rss/healthcare-information-technology.xml" },
      { label: "HBR Healthcare", url: "https://hbr.org/topic/subject/health-care/feed" },
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
