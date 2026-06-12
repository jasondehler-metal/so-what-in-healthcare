export default function PovCallout({ text }: { text: string }) {
  if (!text.trim()) return null;

  return (
    <div
      className="mb-8 px-5 py-4 rounded-sm border-l-4"
      style={{
        borderLeftColor: "#C030B0",
        background: "linear-gradient(to right, rgba(200,80,160,0.06), transparent)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#C030B0" }}>
        Blank Metal POV
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
}
