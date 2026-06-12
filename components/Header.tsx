export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div>
          <div className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Blank Metal
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900"
            style={{ fontFamily: "'DM Sans', sans-serif" }}>
            The So What{" "}
            <span style={{
              background: "linear-gradient(135deg, #F07898, #C850A0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              in Healthcare
            </span>
          </h1>
        </div>
        <div className="text-xs text-gray-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Updated hourly
        </div>
      </div>
    </header>
  );
}
