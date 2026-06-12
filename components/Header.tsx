export default function Header() {
  return (
    <header className="sticky top-0 z-10" style={{ background: "#444444", borderBottom: "1px solid #555555" }}>
      {/* Full gradient bar across top */}
      <div style={{ height: "4px", background: "linear-gradient(to right, #F2788A, #E44DA0, #C030B0, #8B2FC0)" }} />
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div>
          <h1
            className="text-2xl font-bold tracking-tight"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              background: "linear-gradient(135deg, #FDF0F2, #F8C8D4, #F07898, #C850A0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            SO WHAT in Healthcare
          </h1>
          <p className="text-sm mt-0.5" style={{ color: "#cccccc", fontFamily: "'DM Sans', sans-serif" }}>
            What&apos;s actually happening at the intersection of AI and healthcare.
          </p>
        </div>
        <div className="text-xs" style={{ color: "#999999", fontFamily: "'DM Sans', sans-serif" }}>
          Updated hourly
        </div>
      </div>
    </header>
  );
}
