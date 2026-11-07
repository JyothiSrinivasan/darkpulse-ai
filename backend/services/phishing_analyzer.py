import re
from typing import Dict, Any, List
from backend.services.email_parser import parse_raw_email

SUSPICIOUS_KEYWORDS = [
    "verify your account", "account suspended", "immediate action required",
    "wire transfer", "update payment details", "unauthorized login detected",
    "password reset requested", "urgent notice", "action required within 24 hours"
]

TARGETED_BRANDS = [
    "paypal", "microsoft", "apple", "docusign", "fedex", "netflix",
    "bank of america", "chase", "wells fargo", "amazon", "google"
]

DANGEROUS_EXTENSIONS = [".exe", ".scr", ".bat", ".vbs", ".ps1", ".iso", ".img", ".html"]

def analyze_phishing_lure(email_content: str) -> Dict[str, Any]:
    parsed = parse_raw_email(email_content)
    body_text = parsed["body"].lower()
    urls = parsed["urls"]
    headers = parsed["headers"]

    score = 0
    flags: List[Dict[str, str]] = []

    # 1. Social Engineering Urgency Check
    matched_keywords = [kw for kw in SUSPICIOUS_KEYWORDS if kw in body_text]
    if matched_keywords:
        score += len(matched_keywords) * 15
        flags.append({
            "category": "Social Engineering",
            "severity": "HIGH",
            "detail": f"Urgency language detected: {', '.join(matched_keywords)}"
        })

    # 2. Brand Impersonation Check
    matched_brands = [b for b in TARGETED_BRANDS if b in body_text]
    if matched_brands:
        for brand in matched_brands:
            # Check if brand mentioned but email domain doesn't match
            sender = headers.get("from", "").lower()
            if sender and brand not in sender:
                score += 25
                flags.append({
                    "category": "Brand Impersonation",
                    "severity": "CRITICAL",
                    "detail": f"Content claims to be from {brand.title()}, but sender domain does not match."
                })

    # 3. Suspicious URLs Check
    ip_in_url = [u for u in urls if re.search(r'https?://\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}', u)]
    if ip_in_url:
        score += 30
        flags.append({
            "category": "Suspicious Link",
            "severity": "CRITICAL",
            "detail": f"Direct IP address used in link instead of domain name: {ip_in_url[0]}"
        })

    # 4. Attachment Check
    found_exts = [ext for ext in DANGEROUS_EXTENSIONS if ext in body_text]
    if found_exts:
        score += 20
        flags.append({
            "category": "Dangerous Attachment",
            "severity": "HIGH",
            "detail": f"References to executable or risky file types: {', '.join(found_exts)}"
        })

    # Determine Verdict
    verdict = "SAFE"
    if score >= 50:
        verdict = "LIKELY_PHISHING"
    elif score >= 20:
        verdict = "SUSPICIOUS"

    return {
        "verdict": verdict,
        "risk_score": min(score, 100),
        "total_flags": len(flags),
        "flags": flags,
        "extracted_urls": urls,
        "headers_inspected": headers
    }