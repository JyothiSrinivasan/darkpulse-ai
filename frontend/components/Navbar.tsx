export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto w-full flex items-center justify-between py-4 px-6 border-b border-[#13131A]">
      <a href="/" className="flex items-center gap-3 group">
        <div className="w-8 h-8 rounded-lg bg-[#FF2D55] flex items-center justify-center font-bold text-white text-lg shadow-[0_0_15px_rgba(255,45,85,0.5)]">
          DP
        </div>
        <span className="font-bold text-xl tracking-wide text-white group-hover:text-[#FF2D55] transition">
          DarkPulse <span className="text-[#FF2D55]">AI</span>
        </span>
      </a>

      <div className="flex gap-6 items-center text-sm font-medium">
        <a href="/dashboard" className="text-[#71717A] hover:text-[#FF2D55] transition">
          Fleet Dashboard
        </a>
        <a href="/transparency" className="text-[#71717A] hover:text-[#FF2D55] transition">
          Transparency
        </a>
        <a
          href="http://127.0.0.1:8000/docs"
          target="_blank"
          className="text-[#71717A] hover:text-[#FF2D55] transition"
        >
          API Docs
        </a>
        <a
          href="http://127.0.0.1:8000/health"
          target="_blank"
          className="px-3 py-1.5 rounded-md border border-[#71717A]/40 text-[#E4E4E7] hover:border-[#FF2D55] transition text-xs font-mono"
        >
          Backend Status
        </a>
      </div>
    </nav>
  );
}