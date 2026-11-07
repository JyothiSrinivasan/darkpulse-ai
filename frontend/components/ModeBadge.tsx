import { AgentMode } from "@/types/agent";

interface ModeBadgeProps {
  mode: AgentMode;
}

export default function ModeBadge({ mode }: ModeBadgeProps) {
  if (mode === "LIVE") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30">
        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
        LIVE
      </span>
    );
  }

  if (mode === "PREVIEW") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/30">
        <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></span>
        PREVIEW
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#7C3AED]/10 text-[#a78bfa] border border-[#7C3AED]/30">
      <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]"></span>
      CONCEPT
    </span>
  );
}