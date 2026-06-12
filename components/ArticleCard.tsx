"use client";
import { Article } from "@/lib/rss";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }).toUpperCase();
}

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-white border border-gray-100 rounded-sm hover:border-gray-300 transition-all"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Source tag strip */}
      <div
        className="px-4 pt-4 pb-0"
      >
        <span
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: "#C030B0" }}
        >
          {article.source}
        </span>
      </div>

      <div className="px-4 pt-3 pb-5 flex flex-col flex-1">
        {/* Date — monospace style like the site */}
        <div className="text-xs text-gray-400 mb-2 font-mono">
          {formatDate(article.pubDate)}
        </div>

        {/* Title */}
        <p className="text-sm font-bold text-gray-900 leading-snug group-hover:text-gray-600 transition-colors line-clamp-3 flex-1">
          {article.title}
        </p>

        {/* CTA */}
        <div className="mt-4 text-xs font-semibold tracking-wide text-gray-900 group-hover:text-pink-600 transition-colors">
          READ ARTICLE →
        </div>
      </div>
    </a>
  );
}
