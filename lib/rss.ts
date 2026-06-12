export type Article = {
  title: string;
  link: string;
  pubDate: string;
  source: string;
  pinned?: boolean;
};

export async function fetchFeed(url: string, label: string): Promise<Article[]> {
  try {
    const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    if (data.status !== "ok") return [];
    return (data.items || []).slice(0, 5).map((item: { title: string; link: string; pubDate: string }) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      source: label,
    }));
  } catch {
    return [];
  }
}
