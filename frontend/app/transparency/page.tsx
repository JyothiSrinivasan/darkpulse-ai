import Navbar from "@/components/Navbar";

export default function TransparencyPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#E4E4E7] font-sans flex flex-col justify-between">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12 flex-1">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-[#13131A] border border-[#7C3AED]/40 text-[#a78bfa] text-xs font-mono mb-4">
            ETHICAL AI & OPERATIONAL TRUTH
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-4">
            DarkPulse Transparency <span className="text-[#FF2D55]">Manifesto</span>
          </h1>
          <p className="text-[#71717A] text-base max-w-2xl mx-auto">
            We reject hidden black-box claims and fabricated AI benchmarks. Here is exact clarity on how our 14 PULSE agents operate today.
          </p>
        </div>

        {/* Operational Modes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* LIVE */}
          <div className="bg-[#13131A] border border-[#10B981]/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
              <h3 className="font-bold text-white text-lg">LIVE Mode</h3>
            </div>
            <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4">
              Fully autonomous agent engines connected to validated security scanners, SIEM feeds, and real-time LLM reasoning models.
            </p>
            <div className="text-[11px] font-mono text-[#10B981] bg-[#10B981]/10 p-2 rounded border border-[#10B981]/20">
              0 / 14 Fleet Agents
            </div>
          </div>

          {/* PREVIEW */}
          <div className="bg-[#13131A] border border-[#F59E0B]/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></span>
              <h3 className="font-bold text-white text-lg">PREVIEW Mode</h3>
            </div>
            <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4">
              Functional real-world tools executing passive security checks (DNS, TLS, RFC email parsing). Results require human verification.
            </p>
            <div className="text-[11px] font-mono text-[#F59E0B] bg-[#F59E0B]/10 p-2 rounded border border-[#F59E0B]/20">
              3 / 14 Fleet Agents
            </div>
          </div>

          {/* CONCEPT */}
          <div className="bg-[#13131A] border border-[#7C3AED]/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED]"></span>
              <h3 className="font-bold text-white text-lg">CONCEPT Mode</h3>
            </div>
            <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4">
              Interactive demonstration models outputting static pre-validated security telemetry. Preserves the product vision honestly.
            </p>
            <div className="text-[11px] font-mono text-[#a78bfa] bg-[#7C3AED]/10 p-2 rounded border border-[#7C3AED]/20">
              11 / 14 Fleet Agents
            </div>
          </div>
        </div>

        {/* Safety Guarantees */}
        <div className="bg-[#13131A] border border-[#1E1E2A] rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span>🛡️</span> DarkPulse AI Safety Guarantees
          </h2>
          <ul className="space-y-4 text-sm text-[#A1A1AA]">
            <li className="flex items-start gap-3">
              <span className="text-[#FF2D55] font-bold">✓</span>
              <span><strong>Strict Non-Aggression:</strong> We never run invasive port scans, active exploitation, or denial-of-service tests without verified domain ownership.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FF2D55] font-bold">✓</span>
              <span><strong>Data Privacy:</strong> Email bodies and domain queries processed through DarkPulse free tools are never retained or trained on public AI models.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FF2D55] font-bold">✓</span>
              <span><strong>No Fabricated Stats:</strong> We will never display fake accuracy percentages, fake enterprise logos, or fake user counts.</span>
            </li>
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full text-center text-xs text-[#71717A] py-6 border-t border-[#13131A]">
        © {new Date().getFullYear()} DarkPulse AI. Detect the Pulse of Every Threat.
      </footer>
    </div>
  );
}