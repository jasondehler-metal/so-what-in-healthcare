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
      className="block bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-gray-600 hover:bg-gray-800 transition-all group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-blue-400 bg-blue-950 px-2 py-0.5 rounded-full">
          {article.source}
        </span>
        <span className="text-xs text-gray-500">{timeAgo(article.pubDate)}</span>
      </div>
      <p className="text-sm text-gray-100 font-medium leading-snug group-hover:text-white line-clamp-3">
        {article.title}
      </p>
    </a>
  );
}
