import { fetchFeed, Article } from "@/lib/rss";
import { Section } from "@/lib/sections";
import ArticleCard from "./ArticleCard";

export default async function Feed({ section }: { section: Section }) {
  const results = await Promise.all(
    section.feeds.map((f) => fetchFeed(f.url, f.label))
  );
  const articles: Article[] = results.flat().sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  );

  return (
    <section>
      <div className="pl-4 mb-6" style={{ borderLeft: "4px solid #C030B0" }}>
        <h2
          className="text-xl font-bold"
          style={{ color: "#ffffff", fontFamily: "'DM Sans', sans-serif" }}
        >
          {section.title}
        </h2>
        <p className="text-sm mt-1" style={{ color: "#cccccc", fontFamily: "'DM Sans', sans-serif" }}>
          {section.description}
        </p>
      </div>
      {articles.length === 0 ? (
        <p className="text-sm" style={{ color: "#999999" }}>No articles loaded yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.slice(0, 9).map((article, i) => (
            <ArticleCard key={i} article={article} />
          ))}
        </div>
      )}
    </section>
  );
}
