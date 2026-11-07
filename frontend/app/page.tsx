import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 flex flex-col justify-between">
      {/* Global Navbar with Clerk Auth & Founder Badge */}
      <Navbar />

      {/* Main Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex-1 flex flex-col items-center justify-center text-center">
        
        {/* Banner Badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-red-950/50 border border-red-500/30 text-red-400 text-xs font-mono font-semibold tracking-wide mb-8 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          <span>PRIVATE PREVIEW • 14-AGENT SECURITY FLEET</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white mb-6 max-w-4xl leading-[1.1]">
          Detect the Pulse of <br />
          <span className="bg-gradient-to-r from-red-500 via-rose-500 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(239,68,68,0.4)]">
            Every Threat
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-10 font-normal leading-relaxed">
          AI-powered cybersecurity fleet designed to triage alerts, analyze phishing lures, and continuously audit threat surfaces with complete transparency.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-white bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 shadow-[0_0_25px_rgba(239,68,68,0.5)] transition-all hover:scale-[1.02] text-center"
          >
            Launch Fleet Dashboard →
          </Link>
          <a
            href="http://127.0.0.1:8000/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all text-center"
          >
            Explore Interactive API
          </a>
        </div>

        {/* Platform Core Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 w-full max-w-4xl border-t border-slate-800/80 pt-12">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white font-mono">14</span>
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">
              PLANNED AGENTS
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-amber-400 font-mono">3</span>
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">
              IN PREVIEW
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white font-mono">8</span>
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">
              SECURITY DOMAINS
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-emerald-400 font-mono">100%</span>
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">
              TRANSPARENT ENGINE
            </span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-6 text-center text-xs text-slate-500 font-mono">
        © 2026 DarkPulse AI. All rights reserved. • Detect the Pulse of Every Threat.
      </footer>
    </div>
  );
}