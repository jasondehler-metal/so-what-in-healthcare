export type Article = {
  title: string;
  link: string;
  pubDate: string;
  source: string;
  pinned?: boolean;
};

const EXCLUDE_TERMS = [
  "hiring", "job", "jobs", "recruit", "career", "layoff", "laid off",
  "pharma", "pharmaceutical", "drug", "fda approval", "clinical trial",
  "medical device", "implant", "stent", "surgical", "orthopedic",
  "biotech", "gene therapy", "oncology", "cancer drug", "vaccine",
];

function isRelevant(title: string): boolean {
  const lower = title.toLowerCase();
  return !EXCLUDE_TERMS.some((term) => lower.includes(term));
}

export async function fetchFeed(url: string, label: string): Promise<Article[]> {
  try {
    const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`, {
      next: { revalidate: 3600 },
    });
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
