import json
import pathlib
from typing import Dict, Any, Optional

SAMPLES_DIR = pathlib.Path(__file__).parent.parent / "samples"

def load_agent_sample(agent_id: str) -> Optional[Dict[str, Any]]:
    """Loads static demonstration JSON for CONCEPT agents."""
    sample_file = SAMPLES_DIR / f"{agent_id}_sample.json"
    if not sample_file.exists():
        # Fallback dynamic concept payload if file doesn't exist yet
        return {
            "_mode": "CONCEPT",
            "_sample_notice": f"This is a demonstration concept output for {agent_id.upper()}.",
            "agent_id": agent_id,
            "status": "completed",
            "findings": [
                {
                    "id": "CONCEPT-001",
                    "title": "Demonstration Finding",
                    "severity": "medium",
                    "description": f"Sample security indicator simulated by {agent_id.upper()}."
                }
            ],
            "notes": "Full real-time engine planned in DarkPulse roadmap."
        }
    
    try:
        with open(sample_file, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception as e:
        return {"error": f"Failed to load sample payload: {str(e)}"}