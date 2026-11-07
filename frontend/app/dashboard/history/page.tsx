"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ModeBadge from "@/components/ModeBadge";

interface HistoryRecord {
  id: string;
  agent_id: string;
  mode: any;
  input_type: string;
  content_summary: string;
  result: any;
  created_at: string;
}

export default function HistoryPage() {
  const [history, setHistory] = useState<HistoryRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/analyses")
      .then((res) => res.json())
      .then((data) => {
        setHistory(data.history || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#E4E4E7] font-sans flex flex-col justify-between">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-10 w-full flex-1">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#13131A]">
          <div>
            <h1 className="text-3xl font-extrabold text-white">
              Analysis <span className="text-[#FF2D55]">History</span>
            </h1>
            <p className="text-sm text-[#71717A] mt-1">
              Audit log of all executed scans across the DarkPulse fleet
            </p>
          </div>
          <a
            href="/dashboard"
            className="px-4 py-2 bg-[#FF2D55] text-white text-xs font-semibold rounded-lg hover:bg-[#e0264c] transition"
          >
            + Run New Scan
          </a>
        </div>

        {loading && (
          <div className="text-center py-20 font-mono text-sm text-[#71717A]">
            Loading audit records from database...
          </div>
        )}

        {!loading && history.length === 0 && (
          <div className="bg-[#13131A] border border-[#1E1E2A] rounded-xl p-12 text-center text-[#71717A]">
            <p className="text-lg font-bold text-white mb-2">No analyses recorded yet</p>
            <p className="text-sm mb-6">Run scans in the agent workspaces to build your security log.</p>
            <a href="/dashboard" className="px-4 py-2 bg-[#13131A] border border-[#FF2D55] text-[#FF2D55] rounded-lg text-sm">
              Explore Agent Fleet →
            </a>
          </div>
        )}

        {!loading && history.length > 0 && (
          <div className="space-y-4">
            {history.map((item) => (
              <div
                key={item.id}
                className="bg-[#13131A] border border-[#1E1E2A] hover:border-[#FF2D55]/50 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 transition"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-[#FF2D55] uppercase font-bold bg-[#0A0A0F] px-2 py-0.5 rounded border border-[#1E1E2A]">
                      {item.agent_id}
                    </span>
                    <ModeBadge mode={item.mode} />
                    <span className="text-xs font-mono text-[#71717A]">
                      {new Date(item.created_at).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm font-mono text-[#A1A1AA] truncate max-w-xl">
                    Input: {item.content_summary}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={`/agents/${item.agent_id}`}
                    className="px-3 py-1.5 bg-[#0A0A0F] border border-[#1E1E2A] hover:border-[#FF2D55] text-xs font-mono text-[#E4E4E7] rounded transition"
                  >
                    View Agent →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="max-w-7xl mx-auto w-full text-center text-xs text-[#71717A] py-6 border-t border-[#13131A]">
        © {new Date().getFullYear()} DarkPulse AI. Detect the Pulse of Every Threat.
      </footer>
    </div>
  );
}