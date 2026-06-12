export type Article = {
  title: string;
  link: string;
  pubDate: string;
  source: string;
};

const EXCLUDE_TERMS = [
  // hiring / workforce noise
  "we're hiring", "is hiring", "job opening", "open role", "layoff tracker",
  "career", "laid off",
  // pharma & devices (out of scope)
  "pharmaceutical", "clinical trial", "medical device", "implant", "stent",
  "surgical robot", "orthopedic", "gene therapy", "oncology", "cancer drug",
  "vaccine", "drug approval", "fda clears", "fda approves",
  // off-topic industries
  "banking", "bank ", "fintech", "mortgage", "real estate", "retail",
  "automotive", "supply chain", "manufacturing", "sports", "entertainment",
  "cryptocurrency", "blockchain", "nft",
];

function isRelevant(title: string): boolean {
  const lower = title.toLowerCase();
  return !EXCLUDE_TERMS.some((term) => lower.includes(term));
}

export async function fetchFeed(url: string, label: string): Promise<Article[]> {
  try {
    const res = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    if (data.status !== "ok") return [];
    return (data.items || [])
      .filter((item: { title: string }) => isRelevant(item.title))
      .slice(0, 6)
      .map((item: { title: string; link: string; pubDate: string }) => ({
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        source: label,
      }));
  } catch {
    return [];
  }
}
