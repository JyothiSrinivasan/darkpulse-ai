export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0F] text-[#E4E4E7] flex flex-col justify-between p-8 font-sans">
      {/* Top Navigation */}
      <nav className="max-w-7xl mx-auto w-full flex items-center justify-between py-4 border-b border-[#13131A]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#FF2D55] flex items-center justify-center font-bold text-white text-lg shadow-[0_0_15px_rgba(255,45,85,0.5)]">
            DP
          </div>
          <span className="font-bold text-xl tracking-wide text-white">
            DarkPulse <span className="text-[#FF2D55]">AI</span>
          </span>
        </div>
        <div className="flex gap-6 items-center text-sm font-medium">
          <a href="#fleet" className="hover:text-[#FF2D55] transition text-[#71717A]">Fleet</a>
          <a href="http://127.0.0.1:8000/docs" target="_blank" className="hover:text-[#FF2D55] transition text-[#71717A]">API Docs</a>
          <a href="http://127.0.0.1:8000/health" target="_blank" className="px-3 py-1.5 rounded-md border border-[#71717A] text-[#E4E4E7] hover:border-[#FF2D55] transition">
            Backend Status
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center py-20">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#13131A] border border-[#FF2D55]/30 text-[#FF2D55] text-xs font-mono tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(255,45,85,0.15)]">
          PRIVATE PREVIEW • 14-AGENT SECURITY FLEET
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          Detect the Pulse of <br />
          <span className="text-[#FF2D55] drop-shadow-[0_0_25px_rgba(255,45,85,0.4)]">
            Every Threat
          </span>
        </h1>

        <p className="text-[#71717A] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          AI-powered cybersecurity fleet designed to triage alerts, analyze phishing lures, 
          and continuously audit threat surfaces with complete transparency.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:founder@darkpulseai.com?subject=DarkPulse%20Early%20Access"
            className="w-full sm:w-auto bg-[#FF2D55] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#e0264c] transition shadow-[0_0_20px_rgba(255,45,85,0.4)]"
          >
            Request Early Access
          </a>
          <a
            href="http://127.0.0.1:8000/docs"
            target="_blank"
            className="w-full sm:w-auto bg-[#13131A] border border-[#71717A]/40 text-[#E4E4E7] px-8 py-3.5 rounded-lg font-semibold hover:border-[#FF2D55] transition"
          >
            Explore Interactive API
          </a>
        </div>
      </div>

      {/* Quick Stats bar */}
      <div className="max-w-5xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t border-b border-[#13131A] text-center mb-16">
        <div>
          <div className="text-3xl font-bold text-white">14</div>
          <div className="text-xs text-[#71717A] uppercase tracking-wider mt-1">Planned Agents</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-[#F59E0B]">3</div>
          <div className="text-xs text-[#71717A] uppercase tracking-wider mt-1">In Preview</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-[#7C3AED]">8</div>
          <div className="text-xs text-[#71717A] uppercase tracking-wider mt-1">Security Domains</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-[#FF2D55]">100%</div>
          <div className="text-xs text-[#71717A] uppercase tracking-wider mt-1">Transparent Engine</div>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full text-center text-xs text-[#71717A] py-6 border-t border-[#13131A]">
        © {new Date().getFullYear()} DarkPulse AI. All rights reserved. • Detect the Pulse of Every Threat.
      </footer>
    </main>
  );
}