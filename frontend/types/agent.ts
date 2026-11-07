export type AgentMode = "LIVE" | "PREVIEW" | "CONCEPT";

export interface AgentMetadata {
  agent_id: string;
  name: string;
  icon: string;
  domain: string;
  role: string;
  mode: AgentMode;
  description: string;
  capabilities: string[];
  max_requests_per_hour: number;
}

export interface AgentListResponse {
  total: number;
  live: number;
  preview: number;
  concept: number;
  agents: AgentMetadata[];
}