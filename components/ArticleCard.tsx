"use client";
import { Article } from "@/lib/rss";

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const hours = Math.floor(diff / 3600000);
  if (hours < 1) return "just now";
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg p-4 transition-all group"
      style={{
        background: "#3a3a3a",
        border: "1px solid #555555",
        fontFamily: "'DM Sans', sans-serif",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#C030B0";
        (e.currentTarget as HTMLElement).style.background = "#404040";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#555555";
        (e.currentTarget as HTMLElement).style.background = "#3a3a3a";
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <span
          className="text-xs font-semibold px-2 py-0.5 rounded-full"
          style={{
            background: "linear-gradient(to right, #F2788A, #C030B0)",
            color: "#ffffff",
          }}
        >
          {article.source}
        </span>
        <span className="text-xs" style={{ color: "#999999" }}>
          {timeAgo(article.pubDate)}
        </span>
      </div>
      <p className="text-sm font-medium leading-snug" style={{ color: "#eeeeee" }}>
        {article.title}
      </p>
    </a>
  );
}
