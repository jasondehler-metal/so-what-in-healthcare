import { fetchFeed, Article } from "@/lib/rss";
import { Section } from "@/lib/sections";
import { POVS } from "@/lib/pov";
import ArticleCard from "./ArticleCard";
import PovCallout from "./PovCallout";

export default async function Feed({ section }: { section: Section }) {
  const results = await Promise.all(
    section.feeds.map((f) => fetchFeed(f.url, f.label))
  );
  const articles: Article[] = results.flat().sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  );

  const pov = POVS[section.id] || "";

  return (
    <section>
      <div className="mb-6">
        <h2
          className="text-2xl font-bold text-gray-900 mb-2"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {section.title}
        </h2>
        <p className="text-gray-500 text-sm max-w-2xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {section.description}
        </p>
      </div>

      <PovCallout text={pov} />

      {articles.length === 0 ? (
        <p className="text-gray-400 text-sm">No articles loaded yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(0, 9).map((article, i) => (
            <ArticleCard key={i} article={article} />
          ))}
        </div>
      )}
    </section>
  );
}
