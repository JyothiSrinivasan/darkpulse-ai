"use client";

import { useEffect, useState, use } from "react";
import { AgentMetadata } from "@/types/agent";
import { fetchAgentById } from "@/lib/api";
import ModeBadge from "@/components/ModeBadge";
import ClassificationBanner from "@/components/ClassificationBanner";
import DownloadReportButton from "@/components/DownloadReportButton";

export default function AgentWorkspacePage({ params }: { params: Promise<{ agentId: string }> }) {
  const resolvedParams = use(params);
  const agentId = resolvedParams.agentId;

  const [agent, setAgent] = useState<AgentMetadata | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Analysis form state
  const [inputContent, setInputContent] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any | null>(null);

  useEffect(() => {
    fetchAgentById(agentId)
      .then((data) => {
        setAgent(data);
        // Pre-fill default sample text based on agent type
        if (data.agent_id === "pulse_recon") {
          setInputContent("github.com");
        } else if (data.agent_id === "pulse_lure") {
          setInputContent("From: security@paypal-verify.com\nSubject: Account Suspended Immediately\nClick here: http://198.51.100.12/login");
        } else {
          setInputContent(`Sample input payload for ${data.name}...`);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [agentId]);

  const handleRunAnalysis = async () => {
    if (!agent) return;
    setAnalyzing(true);
    setAnalysisResult(null);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/v1/analyses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          agent_id: agent.agent_id,
          input_type: agent.agent_id === "pulse_recon" ? "domain" : "text",
          content: inputContent,
          authorization_confirmed: true,
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.detail || "Analysis failed");
      }

      const data = await res.json();
      setAnalysisResult(data);
    } catch (err: any) {
      alert(`Error running analysis: ${err.message}`);
    } finally {
      setAnalyzing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] text-[#E4E4E7] p-8 flex items-center justify-center font-mono text-sm">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-[#FF2D55] border-t-transparent rounded-full animate-spin"></div>
          <span>Loading Agent Workspace [{agentId}]...</span>
        </div>
      </div>
    );
  }

  if (error || !agent) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] text-[#FF2D55] p-8 flex flex-col items-center justify-center font-sans">
        <h1 className="text-2xl font-bold mb-2">Agent Not Found</h1>
        <p className="text-sm text-[#E4E4E7] mb-6">{error || "Could not load agent parameters."}</p>
        <a href="/dashboard" className="px-4 py-2 bg-[#13131A] border border-[#1E1E2A] text-white rounded-lg hover:border-[#FF2D55] transition text-sm">
          ← Return to Fleet Dashboard
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#E4E4E7] p-6 md:p-12 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <a href="/dashboard" className="text-xs text-[#FF2D55] font-mono tracking-widest hover:underline">
            ← BACK TO FLEET DASHBOARD
          </a>
          <ModeBadge mode={agent.mode} />
        </div>

        {/* Header Header */}
        <div className="bg-[#13131A] border border-[#1E1E2A] rounded-xl p-6 mb-8 flex items-start gap-4">
          <span className="text-4xl p-3 bg-[#0A0A0F] border border-[#1E1E2A] rounded-xl">
            {agent.icon}
          </span>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-white">{agent.name}</h1>
              <span className="text-xs font-mono text-[#71717A] uppercase bg-[#0A0A0F] px-2.5 py-1 rounded border border-[#1E1E2A]">
                {agent.domain}
              </span>
            </div>
            <p className="text-[#A1A1AA] text-sm mt-2 leading-relaxed">{agent.description}</p>
          </div>
        </div>

        {/* Operational Mode Disclaimer Banner */}
        <ClassificationBanner mode={agent.mode} />

        {/* Workspace Form & Results Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <div className="bg-[#13131A] border border-[#1E1E2A] rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold text-white mb-2">Workspace Input</h2>
              <p className="text-xs text-[#71717A] mb-4">
                Enter target domain, email content, or telemetry string for analysis:
              </p>

              <textarea
                value={inputContent}
                onChange={(e) => setInputContent(e.target.value)}
                rows={8}
                className="w-full bg-[#0A0A0F] border border-[#1E1E2A] rounded-lg p-3 text-sm text-[#E4E4E7] font-mono focus:outline-none focus:border-[#FF2D55] transition resize-none"
                placeholder="Enter input here..."
              />
            </div>

            <button
              onClick={handleRunAnalysis}
              disabled={analyzing || !inputContent.trim()}
              className="mt-6 w-full bg-[#FF2D55] hover:bg-[#e0264c] disabled:opacity-50 text-white font-semibold py-3 px-4 rounded-lg transition flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,45,85,0.3)]"
            >
              {analyzing ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Running {agent.name}...</span>
                </>
              ) : (
                <span>Execute Analysis →</span>
              )}
            </button>
          </div>

          {/* Results Panel */}
          <div className="bg-[#13131A] border border-[#1E1E2A] rounded-xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-bold text-white">Analysis Output</h2>
                {analysisResult && analysisResult.analysis_id && (
                    <DownloadReportButton analysisId={analysisResult.analysis_id} />
                )}
            </div>
            <p className="text-xs text-[#71717A] mb-4">Live telemetry findings and risk scoring:</p>

            {!analysisResult && !analyzing && (
              <div className="flex-1 bg-[#0A0A0F] border border-[#1E1E2A] rounded-lg p-6 flex flex-col items-center justify-center text-center text-[#71717A]">
                <span className="text-3xl mb-2">⚡</span>
                <p className="text-xs font-mono">Awaiting execution run...</p>
              </div>
            )}

            {analyzing && (
              <div className="flex-1 bg-[#0A0A0F] border border-[#1E1E2A] rounded-lg p-6 flex flex-col items-center justify-center text-center">
                <div className="w-8 h-8 border-2 border-[#FF2D55] border-t-transparent rounded-full animate-spin mb-3"></div>
                <p className="text-xs font-mono text-[#FF2D55]">Analyzing telemetry...</p>
              </div>
            )}

            {analysisResult && (
              <div className="flex-1 bg-[#0A0A0F] border border-[#1E1E2A] rounded-lg p-4 font-mono text-xs overflow-auto max-h-[350px]">
                <pre className="text-[#a78bfa] whitespace-pre-wrap">
                  {JSON.stringify(analysisResult.result || analysisResult, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}