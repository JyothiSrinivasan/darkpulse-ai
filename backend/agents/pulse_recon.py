from typing import Dict, Any
from backend.services.domain_recon import analyze_domain_posture

async def run_recon(domain: str) -> Dict[str, Any]:
    """Runner for PULSE-RECON agent."""
    if not domain:
        return {"error": "Domain content required"}
    
    return await analyze_domain_posture(domain)