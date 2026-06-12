export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-gray-950 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            SO WHAT <span className="text-blue-400">in Healthcare</span>
          </h1>
          <p className="text-sm text-gray-400 mt-0.5">
            What&apos;s actually happening at the intersection of AI and healthcare.
          </p>
        </div>
        <div className="text-xs text-gray-500">Updated hourly</div>
      </div>
    </header>
  );
}
