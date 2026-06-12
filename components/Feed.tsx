import { fetchFeed, Article } from "@/lib/rss";
import { Section } from "@/lib/sections";
import ArticleCard from "./ArticleCard";

const colorMap: Record<string, string> = {
  blue: "border-blue-500 text-blue-400",
  purple: "border-purple-500 text-purple-400",
  green: "border-green-500 text-green-400",
  orange: "border-orange-500 text-orange-400",
  red: "border-red-500 text-red-400",
};

export default async function Feed({ section }: { section: Section }) {
  const results = await Promise.all(
    section.feeds.map((f) => fetchFeed(f.url, f.label))
  );
  const articles: Article[] = results.flat().sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  );

  const accent = colorMap[section.color] || "border-gray-500 text-gray-400";

  return (
    <section>
      <div className={`border-l-4 pl-4 mb-6 ${accent}`}>
        <h2 className="text-xl font-semibold text-white">{section.title}</h2>
        <p className="text-sm text-gray-400 mt-1">{section.description}</p>
      </div>
      {articles.length === 0 ? (
        <p className="text-gray-500 text-sm">No articles loaded yet.</p>
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
