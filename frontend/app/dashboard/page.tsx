"use client";

import { useEffect, useState } from "react";
import { AgentMetadata } from "@/types/agent";
import { fetchAgents } from "@/lib/api";
import AgentCard from "@/components/AgentCard";

export default function DashboardPage() {
  const [agents, setAgents] = useState<AgentMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("ALL");

  useEffect(() => {
    setLoading(true);
    fetchAgents(filter === "ALL" ? undefined : filter)
      .then((data) => {
        setAgents(data.agents);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [filter]);

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#E4E4E7] p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-[#13131A] mb-8 gap-4">
          <div>
            <a href="/" className="text-xs text-[#FF2D55] font-mono tracking-widest hover:underline mb-2 block">
              ← BACK TO LANDING PAGE
            </a>
            <h1 className="text-3xl font-extrabold text-white">
              DarkPulse <span className="text-[#FF2D55]">Security Fleet</span>
            </h1>
            <p className="text-sm text-[#71717A] mt-1">
              Active Monitoring & Autonomous Cyber Security AI Agents
            </p>
          </div>

          {/* Filters */}
          <div className="flex gap-2 bg-[#13131A] p-1.5 rounded-lg border border-[#1E1E2A]">
            {["ALL", "PREVIEW", "CONCEPT"].map((mode) => (
              <button
                key={mode}
                onClick={() => setFilter(mode)}
                className={`px-4 py-1.5 rounded-md text-xs font-mono font-semibold transition ${
                  filter === mode
                    ? "bg-[#FF2D55] text-white shadow-[0_0_10px_rgba(255,45,85,0.4)]"
                    : "text-[#71717A] hover:text-white"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </header>

        {/* Loading State */}
        {loading && (
          <div className="py-20 text-center">
            <div className="inline-block w-8 h-8 border-2 border-[#FF2D55] border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-sm font-mono text-[#71717A]">Connecting to DarkPulse Fleet Engine...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="p-6 bg-[#FF2D55]/10 border border-[#FF2D55]/30 rounded-xl text-center text-[#FF2D55] mb-8">
            <p className="font-bold">Backend Connection Failed</p>
            <p className="text-sm mt-1 text-[#E4E4E7]">{error}</p>
            <p className="text-xs text-[#71717A] mt-2">Ensure FastAPI backend is running at http://127.0.0.1:8000</p>
          </div>
        )}

        {/* Agents Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <AgentCard key={agent.agent_id} agent={agent} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}