import Feed from "@/components/Feed";
import Header from "@/components/Header";
import SlackFeed from "@/components/SlackFeed";
import { SECTIONS } from "@/lib/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Gradient wash top-right, matching blankmetal.ai */}
      <div
        className="fixed top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top right, rgba(240,120,152,0.18) 0%, rgba(200,80,160,0.10) 40%, transparent 70%)",
          zIndex: 0,
        }}
      />
      <Header />
      <div className="relative max-w-6xl mx-auto px-6 py-12 space-y-16" style={{ zIndex: 1 }}>
        {/* Page intro */}
        <div>
          <p className="text-lg text-gray-500 max-w-2xl" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            What&apos;s actually happening at the intersection of AI and healthcare — for the clients we work with and want to work with.
          </p>
        </div>
        <SlackFeed />
        {SECTIONS.map((section) => (
          <Feed key={section.id} section={section} />
        ))}
      </div>
    </main>
  );
}
