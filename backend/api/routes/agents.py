from typing import Optional
from fastapi import APIRouter, HTTPException, Query
from backend.schemas.agent import AgentMetadata, AgentListResponse, AgentMode
from backend.agents.agent_registry import get_all_agents, get_agent_by_id

router = APIRouter(prefix="/agents", tags=["Agents Fleet"])

@router.get("", response_model=AgentListResponse)
async def list_agents(mode: Optional[AgentMode] = Query(None, description="Filter agents by mode (LIVE, PREVIEW, CONCEPT)")):
    """
    Returns the complete list of 14 DarkPulse AI Agents.
    """
    all_agents = get_all_agents()
    filtered = get_all_agents(mode_filter=mode)
    
    live_cnt = sum(1 for a in all_agents if a.mode == AgentMode.LIVE)
    preview_cnt = sum(1 for a in all_agents if a.mode == AgentMode.PREVIEW)
    concept_cnt = sum(1 for a in all_agents if a.mode == AgentMode.CONCEPT)
    
    return AgentListResponse(
        total=len(filtered),
        live=live_cnt,
        preview=preview_cnt,
        concept=concept_cnt,
        agents=filtered
    )

@router.get("/{agent_id}", response_model=AgentMetadata)
async def get_agent(agent_id: str):
    """
    Fetch details for a specific agent by ID.
    """
    agent = get_agent_by_id(agent_id)
    if not agent:
        raise HTTPException(status_code=404, detail=f"Agent '{agent_id}' not found in DarkPulse fleet.")
    return agent