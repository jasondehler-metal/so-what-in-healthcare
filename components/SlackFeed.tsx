"use client";
import { useEffect, useState } from "react";
import { SlackArticle } from "@/app/api/slack/route";

function formatDate(iso: string) {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }).toUpperCase();
}

export default function SlackFeed() {
  const [articles, setArticles] = useState<SlackArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/slack")
      .then((r) => r.json())
      .then((data) => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            From the Team
          </h2>
          <span
            className="text-xs font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full"
            style={{ background: "#4A154B", color: "#ffffff", fontFamily: "'DM Sans', sans-serif" }}
          >
            Slack
          </span>
        </div>
        <p className="text-gray-500 text-sm max-w-2xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Healthcare AI links shared by the Blank Metal team.
        </p>
      </div>

      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-gray-50 border border-gray-100 rounded-sm h-32 animate-pulse" />
          ))}
        </div>
      )}

      {!loading && error && (
        <p className="text-gray-400 text-sm">Slack not connected — add SLACK_USER_TOKEN to Vercel env vars.</p>
      )}

      {!loading && !error && articles.length === 0 && (
        <p className="text-gray-400 text-sm">No relevant healthcare links found in Slack recently.</p>
      )}

      {!loading && articles.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <a
              key={i}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-white border border-gray-100 rounded-sm hover:border-gray-300 transition-all"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <div className="px-4 pt-4 pb-0 flex items-center justify-between">
                <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#4A154B" }}>
                  #{article.channel}
                </span>
                <span className="text-xs text-gray-400">{article.sharedBy}</span>
              </div>
              <div className="px-4 pt-3 pb-5 flex flex-col flex-1">
                <div className="text-xs text-gray-400 mb-2 font-mono">{formatDate(article.timestamp)}</div>
                <p className="text-sm font-bold text-gray-900 leading-snug group-hover:text-gray-600 transition-colors line-clamp-3 flex-1">
                  {article.context || article.title}
                </p>
                <div className="mt-4 text-xs font-semibold tracking-wide text-gray-900 group-hover:text-pink-600 transition-colors">
                  READ ARTICLE →
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
