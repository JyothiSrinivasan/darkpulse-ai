from typing import Dict, Any
from backend.services.vuln_scanner import scan_domain_vulnerabilities

async def run_breach(domain: str) -> Dict[str, Any]:
    """Runner for PULSE-BREACH vulnerability scanner agent."""
    if not domain:
        return {"error": "Target domain required for vulnerability scan"}
    
    return await scan_domain_vulnerabilities(domain)