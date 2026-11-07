from enum import Enum
from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field

class AgentMode(str, Enum):
    LIVE = "LIVE"
    PREVIEW = "PREVIEW"
    CONCEPT = "CONCEPT"

class AgentMetadata(BaseModel):
    agent_id: str = Field(..., description="Unique identifier e.g. pulse_recon")
    name: str = Field(..., description="Display name e.g. PULSE-RECON")
    icon: str = Field(..., description="Emoji icon")
    domain: str = Field(..., description="Cybersecurity domain")
    role: str = Field(..., description="Brief role description")
    mode: AgentMode = Field(..., description="Operational state: LIVE, PREVIEW, CONCEPT")
    description: str = Field(..., description="Full capabilities description")
    capabilities: List[str] = Field(default_factory=list, description="List of agent features")
    max_requests_per_hour: int = Field(default=60, description="Rate limit cap")

class AgentListResponse(BaseModel):
    total: int
    live: int
    preview: int
    concept: int
    agents: List[AgentMetadata]