import httpx
from datetime import datetime
from typing import Dict, Any, List

SENSITIVE_PATHS = [
    {"path": "/.env", "name": "Environment Config File", "risk": "CRITICAL"},
    {"path": "/.git/HEAD", "name": "Git Repository Exposure", "risk": "CRITICAL"},
    {"path": "/robots.txt", "name": "Robots Disclosure File", "risk": "INFO"},
    {"path": "/admin", "name": "Exposed Administrative Portal", "risk": "HIGH"},
    {"path": "/wp-login.php", "name": "WordPress Admin Portal", "risk": "MEDIUM"},
    {"path": "/server-status", "name": "Apache Server Status Page", "risk": "HIGH"},
]

async def scan_domain_vulnerabilities(domain: str) -> Dict[str, Any]:
    """
    Performs safe, non-destructive vulnerability and misconfiguration checks.
    """
    clean_domain = domain.lower().replace("https://", "").replace("http://", "").strip().split("/")[0]
    target_url = f"https://{clean_domain}"

    findings: List[Dict[str, Any]] = []
    risk_score = 0

    async with httpx.AsyncClient(follow_redirects=True, timeout=3.0) as client:
        # 1. Inspect Base Target Headers
        try:
            base_resp = await client.get(target_url)
            headers = base_resp.headers

            # Tech Leak Checks
            server = headers.get("server")
            if server:
                findings.append({
                    "id": "VULN-HDR-01",
                    "title": "Server Banner Disclosure",
                    "severity": "LOW",
                    "description": f"Server software version leaked in header: '{server}'.",
                    "remediation": "Configure web server to suppress or obfuscate Server response headers."
                })
                risk_score += 10

            powered_by = headers.get("x-powered-by")
            if powered_by:
                findings.append({
                    "id": "VULN-HDR-02",
                    "title": "Technology Stack Disclosure",
                    "severity": "MEDIUM",
                    "description": f"Backend technology stack leaked: '{powered_by}'.",
                    "remediation": "Remove 'X-Powered-By' headers from application framework settings."
                })
                risk_score += 15

            # Missing Security Header Checks
            if "x-content-type-options" not in headers:
                findings.append({
                    "id": "VULN-HDR-03",
                    "title": "Missing MIME-Sniffing Protection",
                    "severity": "MEDIUM",
                    "description": "X-Content-Type-Options header is missing.",
                    "remediation": "Set 'X-Content-Type-Options: nosniff' header."
                })
                risk_score += 15

        except Exception as e:
            return {
                "target_domain": clean_domain,
                "error": f"Failed to connect to target domain: {str(e)}"
            }

        # 2. Check Exposed Sensitive Paths
        for item in SENSITIVE_PATHS:
            try:
                path_url = f"{target_url}{item['path']}"
                resp = await client.get(path_url)
                if resp.status_code == 200 and len(resp.content) > 0:
                    severity = item["risk"]
                    if severity == "CRITICAL": risk_score += 40
                    elif severity == "HIGH": risk_score += 25
                    elif severity == "MEDIUM": risk_score += 15

                    findings.append({
                        "id": f"VULN-PATH-{item['path'].replace('/', '').upper()}",
                        "title": f"Exposed Resource: {item['name']}",
                        "severity": severity,
                        "description": f"Publicly accessible sensitive endpoint detected at '{item['path']}' (HTTP 200 OK).",
                        "remediation": f"Restrict public access to '{item['path']}' via web server access rules."
                    })
            except Exception:
                pass

    status = "LOW_RISK"
    if risk_score >= 50:
        status = "HIGH_VULNERABILITY_RISK"
    elif risk_score >= 20:
        status = "MODERATE_RISK"

    return {
        "target_domain": clean_domain,
        "timestamp": datetime.utcnow().isoformat() + "Z",
        "vulnerability_status": status,
        "risk_score": min(risk_score, 100),
        "total_vulnerabilities": len(findings),
        "findings": findings,
        "explicitly_not_performed": [
            "Active exploitation of detected vulnerabilities",
            "SQL Injection / XSS payload execution",
            "Brute-force credential attacks",
            "Denial of service testing"
        ]
    }