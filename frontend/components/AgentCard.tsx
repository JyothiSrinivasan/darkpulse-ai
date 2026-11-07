import { AgentMetadata } from "@/types/agent";
import ModeBadge from "./ModeBadge";

interface AgentCardProps {
  agent: AgentMetadata;
}

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <div className="bg-[#13131A] border border-[#1E1E2A] hover:border-[#FF2D55]/50 rounded-xl p-6 transition-all duration-200 flex flex-col justify-between group shadow-lg">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl p-2 rounded-lg bg-[#0A0A0F] border border-[#1E1E2A]">
              {agent.icon}
            </span>
            <div>
              <h3 className="font-bold text-white text-lg group-hover:text-[#FF2D55] transition">
                {agent.name}
              </h3>
              <p className="text-xs text-[#71717A] uppercase font-mono">{agent.domain}</p>
            </div>
          </div>
          <ModeBadge mode={agent.mode} />
        </div>

        <p className="text-sm text-[#A1A1AA] mb-4 leading-relaxed">
          {agent.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {agent.capabilities.map((cap, i) => (
            <span
              key={i}
              className="text-[11px] bg-[#0A0A0F] text-[#71717A] px-2.5 py-1 rounded border border-[#1E1E2A]"
            >
              {cap}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-[#1E1E2A] flex items-center justify-between text-xs font-mono text-[#71717A]">
        <span>Limit: {agent.max_requests_per_hour}/hr</span>
        <a
          href={`/agents/${agent.agent_id}`}
          className="text-[#E4E4E7] hover:text-[#FF2D55] font-semibold flex items-center gap-1 transition"
        >
          Open Workspace →
        </a>
      </div>
    </div>
  );
}