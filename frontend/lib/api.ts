import { AgentListResponse, AgentMetadata } from "@/types/agent";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

export async function fetchAgents(modeFilter?: string): Promise<AgentListResponse> {
  const url = modeFilter 
    ? `${API_BASE_URL}/api/v1/agents?mode=${modeFilter}` 
    : `${API_BASE_URL}/api/v1/agents`;

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch DarkPulse agent fleet");
  }
  return res.json();
}

export async function fetchAgentById(agentId: string): Promise<AgentMetadata> {
  const res = await fetch(`${API_BASE_URL}/api/v1/agents/${agentId}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Failed to fetch agent details for ${agentId}`);
  }
  return res.json();
}