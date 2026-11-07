from typing import Dict, Any
from backend.agents.agent_registry import get_agent_by_id
from backend.agents.sample_loader import load_agent_sample
from backend.schemas.agent import AgentMode

async def run_agent_analysis(
    agent_id: str, 
    input_data: Dict[str, Any]
) -> Dict[str, Any]:
    """
    Central dispatcher that executes agent analysis based on agent mode.
    """
    agent = get_agent_by_id(agent_id)
    if not agent:
        return {"error": f"Unknown agent '{agent_id}'"}

    # CONCEPT Mode -> Return honest demonstration JSON payload
    if agent.mode == AgentMode.CONCEPT:
        sample_payload = load_agent_sample(agent_id)
        return {
            "success": True,
            "agent_id": agent_id,
            "mode": AgentMode.CONCEPT,
            "is_demonstration": True,
            "input_received": input_data,
            "result": sample_payload
        }

    # PREVIEW Mode -> Dispatches to real agent handlers
    if agent.mode == AgentMode.PREVIEW:
        content = input_data.get("content", "").strip()

        if agent_id == "pulse_recon":
            from backend.agents.pulse_recon import run_recon
            res = await run_recon(content)
            return {
                "success": True,
                "agent_id": agent_id,
                "mode": AgentMode.PREVIEW,
                "is_demonstration": False,
                "result": res
            }

        if agent_id == "pulse_lure":
            from backend.agents.pulse_lure import run_lure
            res = await run_lure(content)
            return {
                "success": True,
                "agent_id": agent_id,
                "mode": AgentMode.PREVIEW,
                "is_demonstration": False,
                "result": res
            }
        
        # Fallback for preview agents whose runner is being wired
        return {
            "success": True,
            "agent_id": agent_id,
            "mode": AgentMode.PREVIEW,
            "is_demonstration": True,
            "result": load_agent_sample(agent_id)
        }

    return {"error": "Unsupported execution mode"}