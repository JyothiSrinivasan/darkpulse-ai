import { AgentMode } from "@/types/agent";

interface ClassificationBannerProps {
  mode: AgentMode;
  isDemonstration?: boolean;
}

export default function ClassificationBanner({ mode, isDemonstration }: ClassificationBannerProps) {
  if (mode === "CONCEPT" || isDemonstration) {
    return (
      <div className="bg-[#7C3AED]/10 border border-[#7C3AED]/40 rounded-xl p-4 mb-6 text-sm text-[#a78bfa]">
        <div className="flex items-center gap-2 font-semibold text-white mb-1">
          <span className="px-2 py-0.5 rounded bg-[#7C3AED] text-white text-xs font-mono">CONCEPT MODE</span>
          <span>Interactive Demonstration Output</span>
        </div>
        <p className="text-xs text-[#d8b4fe] leading-relaxed">
          This agent is operating in <strong>CONCEPT</strong> mode. Findings are generated from pre-validated sample telemetry models for evaluation purposes.
        </p>
      </div>
    );
  }

  if (mode === "PREVIEW") {
    return (
      <div className="bg-[#F59E0B]/10 border border-[#F59E0B]/40 rounded-xl p-4 mb-6 text-sm text-[#fcd34d]">
        <div className="flex items-center gap-2 font-semibold text-white mb-1">
          <span className="px-2 py-0.5 rounded bg-[#F59E0B] text-black text-xs font-mono font-bold">PREVIEW MODE</span>
          <span>Limited Real Analysis Engine</span>
        </div>
        <p className="text-xs text-[#fde68a] leading-relaxed">
          Running real passive security checks. Results require human verification before operational decision-making.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#10B981]/10 border border-[#10B981]/40 rounded-xl p-4 mb-6 text-sm text-[#6ee7b7]">
      <div className="flex items-center gap-2 font-semibold text-white mb-1">
        <span className="px-2 py-0.5 rounded bg-[#10B981] text-black text-xs font-mono font-bold">LIVE MODE</span>
        <span>Verified Operational Agent</span>
      </div>
      <p className="text-xs text-[#a7f3d0] leading-relaxed">
        Executing real-time deep inspection routines across production telemetry endpoints.
      </p>
    </div>
  );
}