import { NextResponse } from "next/server";

export type SlackArticle = {
  title: string;
  link: string;
  sharedBy: string;
  channel: string;
  timestamp: string;
  context: string;
};

const HEALTHCARE_TERMS = [
  "health", "healthcare", "payer", "clinical", "provider", "patient",
  "insurance", "medicare", "medicaid", "ehr", "fhir", "hipaa",
  "digital health", "care", "hospital", "physician", "clinician",
  "anthropic", "openai", "ai", "highmark", "elevance", "cigna",
];

function isHealthcareRelevant(text: string): boolean {
  const lower = text.toLowerCase();
  return HEALTHCARE_TERMS.some((term) => lower.includes(term));
}

function extractUrl(text: string): string | null {
  const match = text.match(/<(https?:\/\/[^|>]+)[|>]/);
  return match ? match[1] : null;
}

function extractTitle(text: string): string {
  // Try to get link label first
  const labelMatch = text.match(/<https?:\/\/[^|>]+\|([^>]+)>/);
  if (labelMatch) return labelMatch[1];
  // Fall back to trimmed message text without the URL
  return text.replace(/<https?:\/\/[^\s>]+>/g, "").replace(/\s+/g, " ").trim().slice(0, 120) || "Shared link";
}

export async function GET() {
  const token = process.env.SLACK_USER_TOKEN;
  if (!token) {
    return NextResponse.json({ articles: [], error: "No Slack token configured" });
  }

  const queries = [
    "healthcare AI has:link",
    "payer AI has:link",
    "digital health has:link",
    "Anthropic health has:link",
    "OpenAI health has:link",
  ];

  const seen = new Set<string>();
  const articles: SlackArticle[] = [];

  for (const query of queries) {
    const res = await fetch(
      `https://slack.com/api/search.messages?query=${encodeURIComponent(query)}&count=10&sort=timestamp`,
      { headers: { Authorization: `Bearer ${token}` }, next: { revalidate: 3600 } }
    );
    if (!res.ok) continue;
    const data = await res.json();
    if (!data.ok || !data.messages?.matches) continue;

    for (const msg of data.messages.matches) {
      const text = msg.text || "";
      const url = extractUrl(text);
      if (!url || seen.has(url)) continue;
      if (!isHealthcareRelevant(text)) continue;
      seen.add(url);

      articles.push({
        title: extractTitle(text),
        link: url,
        sharedBy: msg.username || msg.user || "Team",
        channel: msg.channel?.name || "slack",
        timestamp: new Date(parseFloat(msg.ts) * 1000).toISOString(),
        context: text.replace(/<[^>]+>/g, "").slice(0, 200),
      });
    }
  }

  // Sort by newest first, cap at 9
  articles.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  return NextResponse.json({ articles: articles.slice(0, 9) });
}
