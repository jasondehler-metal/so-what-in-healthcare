export type Section = {
  id: string;
  title: string;
  description: string;
  color: string;
  feeds: { label: string; url: string }[];
};

export const SECTIONS: Section[] = [
  {
    id: "clinical-decision",
    title: "Clinical Decision Support",
    description: "AI tools that help clinicians diagnose, triage, and treat — at the point of care.",
    color: "blue",
    feeds: [
      { label: "NEJM AI", url: "https://ai.nejm.org/rss/current" },
      { label: "STAT News – AI", url: "https://www.statnews.com/category/artificial-intelligence/feed/" },
      { label: "Health Affairs", url: "https://www.healthaffairs.org/rss/site_1000002/1000002.xml" },
    ],
  },
  {
    id: "cool-projects",
    title: "Cool Projects Being Built",
    description: "Startups, research labs, and health systems doing interesting things with AI.",
    color: "purple",
    feeds: [
      { label: "Rock Health", url: "https://rockhealth.com/feed/" },
      { label: "a16z Bio", url: "https://a16z.com/tag/bio-health/feed/" },
      { label: "MIT Tech Review – Health", url: "https://www.technologyreview.com/topic/biomedicine/feed" },
    ],
  },
  {
    id: "regulated-healthcare",
    title: "AI in Regulated Healthcare",
    description: "FDA approvals, compliance frameworks, safety validation, and what's actually cleared.",
    color: "green",
    feeds: [
      { label: "FDA AI/ML Updates", url: "https://www.fda.gov/about-fda/contact-fda/stay-informed/rss-feeds/press-releases/rss.xml" },
      { label: "Fierce Healthcare", url: "https://www.fiercehealthcare.com/rss/xml" },
      { label: "Healthcare IT News", url: "https://www.healthcareitnews.com/rss.xml" },
    ],
  },
  {
    id: "org-change",
    title: "Leading Organizational Change with AI",
    description: "How health system leaders are driving adoption, managing resistance, and building AI culture.",
    color: "orange",
    feeds: [
      { label: "NEJM Catalyst", url: "https://catalyst.nejm.org/rss/current" },
      { label: "Becker's Health IT", url: "https://www.beckershospitalreview.com/rss/healthcare-information-technology.xml" },
      { label: "HBR – Healthcare", url: "https://hbr.org/topic/subject/health-care/feed" },
    ],
  },
  {
    id: "openai-anthropic",
    title: "Bringing OpenAI & Anthropic into Deals",
    description: "Enterprise partnerships, procurement, model strategy, and how AI labs are entering healthcare.",
    color: "red",
    feeds: [
      { label: "Anthropic News", url: "https://www.anthropic.com/rss.xml" },
      { label: "OpenAI Blog", url: "https://openai.com/news/rss.xml" },
      { label: "The Gradient", url: "https://thegradient.pub/rss/" },
    ],
  },
];
