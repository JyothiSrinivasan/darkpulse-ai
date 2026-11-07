from typing import Dict, Any
from backend.services.phishing_analyzer import analyze_phishing_lure

async def run_lure(email_content: str) -> Dict[str, Any]:
    """Runner for PULSE-LURE agent."""
    if not email_content:
        return {"error": "Email content required for analysis"}
    
    return analyze_phishing_lure(email_content)