import re
import email
from email.policy import default
from typing import Dict, Any, List

def parse_raw_email(raw_content: str) -> Dict[str, Any]:
    """Parses raw RFC email text or simple email body."""
    headers = {}
    body = raw_content
    urls = []

    # Check if raw_content looks like RFC headers
    if "From:" in raw_content or "Subject:" in raw_content:
        try:
            msg = email.message_from_string(raw_content, policy=default)
            headers = {
                "from": msg.get("From", ""),
                "to": msg.get("To", ""),
                "subject": msg.get("Subject", ""),
                "reply_to": msg.get("Reply-To", ""),
                "return_path": msg.get("Return-Path", ""),
                "auth_results": msg.get("Authentication-Results", ""),
            }
            body = msg.get_body(preferencelist=('plain', 'html'))
            body = body.get_content() if body else raw_content
        except Exception:
            pass

    # Extract all URLs using regex
    url_pattern = r'https?://[^\s<>"]+|www\.[^\s<>"]+'
    urls = re.findall(url_pattern, raw_content)

    return {
        "headers": headers,
        "body": body,
        "urls": list(set(urls))
    }