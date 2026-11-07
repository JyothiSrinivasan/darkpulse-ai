import dns.resolver
import httpx
import ssl
import socket
from datetime import datetime
from typing import Dict, Any, List

async def analyze_domain_posture(domain: str) -> Dict[str, Any]:
    """
    Performs passive posture checks on a target domain:
    1. DNS Records (A, MX, TXT)
    2. SPF & DMARC Email Security Audit
    3. TLS Certificate Inspection
    4. HTTP Security Headers Audit
    """
    clean_domain = domain.lower().replace("https://", "").replace("http://", "").strip().split("/")[0]
    
    dns_findings = check_dns_records(clean_domain)
    tls_findings = check_tls_certificate(clean_domain)
    header_findings = await check_http_headers(clean_domain)
    
    # Calculate posture score
    risk_score = 0
    if not dns_findings.get("has_spf"): risk_score += 25
    if not dns_findings.get("has_dmarc"): risk_score += 25
    if not header_findings.get("hsts_enabled"): risk_score += 15
    if not header_findings.get("csp_enabled"): risk_score += 15
    
    status = "good_posture"
    if risk_score >= 50:
        status = "high_risk"
    elif risk_score >= 20:
        status = "needs_attention"

    return {
        "target_domain": clean_domain,
        "timestamp": datetime.utcnow().isoformat() + "Z",
        "posture_status": status,
        "risk_score": risk_score,
        "dns_security": dns_findings,
        "tls_security": tls_findings,
        "http_headers": header_findings,
        "explicitly_not_performed": [
            "Active port scanning",
            "Vulnerability exploitation",
            "Credential testing"
        ]
    }

def check_dns_records(domain: str) -> Dict[str, Any]:
    resolver = dns.resolver.Resolver()
    resolver.timeout = 2.0
    resolver.lifetime = 2.0

    has_spf = False
    has_dmarc = False
    spf_record = None
    dmarc_record = None

    try:
        txt_records = resolver.resolve(domain, "TXT")
        for txt in txt_records:
            val = txt.to_text().strip('"')
            if val.startswith("v=spf1"):
                has_spf = True
                spf_record = val
    except Exception:
        pass

    try:
        dmarc_records = resolver.resolve(f"_dmarc.{domain}", "TXT")
        for txt in dmarc_records:
            val = txt.to_text().strip('"')
            if val.startswith("v=DMARC1"):
                has_dmarc = True
                dmarc_record = val
    except Exception:
        pass

    return {
        "has_spf": has_spf,
        "spf_record": spf_record or "Missing SPF record",
        "has_dmarc": has_dmarc,
        "dmarc_record": dmarc_record or "Missing DMARC record"
    }

def check_tls_certificate(domain: str) -> Dict[str, Any]:
    try:
        ctx = ssl.create_default_context()
        with socket.create_connection((domain, 443), timeout=3.0) as sock:
            with ctx.wrap_socket(sock, server_hostname=domain) as ssock:
                cert = ssock.getpeercert()
                issuer = dict(x[0] for x in cert.get("issuer", []))
                not_after = cert.get("notAfter")
                return {
                    "valid": True,
                    "issuer": issuer.get("organizationName", "Unknown Issuer"),
                    "expires_on": not_after
                }
    except Exception as e:
        return {
            "valid": False,
            "error": f"TLS Connection failed: {str(e)}"
        }

async def check_http_headers(domain: str) -> Dict[str, Any]:
    try:
        async with httpx.AsyncClient(follow_redirects=True, timeout=4.0) as client:
            resp = await client.get(f"https://{domain}")
            headers = resp.headers
            return {
                "hsts_enabled": "strict-transport-security" in headers,
                "csp_enabled": "content-security-policy" in headers,
                "x_frame_options": headers.get("x-frame-options", "Missing"),
                "server_header": headers.get("server", "Hidden")
            }
    except Exception:
        return {
            "hsts_enabled": False,
            "csp_enabled": False,
            "error": "HTTP Connection failed"
        }