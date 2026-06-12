import Feed from "@/components/Feed";
import Header from "@/components/Header";
import { SECTIONS } from "@/lib/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-16">
        {SECTIONS.map((section) => (
          <Feed key={section.id} section={section} />
        ))}
      </div>
    </main>
  );
}
