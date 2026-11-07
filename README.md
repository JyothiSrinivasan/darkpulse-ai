# ⚡ DarkPulse AI

> **"Detect the Pulse of Every Threat"**

DarkPulse AI is an enterprise-grade cybersecurity fleet platform designed to triage security alerts, perform domain reconnaissance, audit vulnerability surfaces, and analyze email phishing lures with complete operational transparency.

---

## 🛡️ Executive Platform Overview

- **Founder & Architect:** Jyothi Srinivasan (`darkpulse.founder@gmail.com`)
- **Architecture:** 14 PULSE AI Security Agents across 8 Operating Departments
- **Frontend Stack:** Next.js 15 (Turbopack), TypeScript, Tailwind CSS, Clerk Auth
- **Backend Stack:** Python 3.13, FastAPI, Uvicorn, SQLAlchemy, ReportLab, Pydantic
- **Persistence:** SQLite (`darkpulse.db`) / PostgreSQL ready

---

## 🚦 Operational Governance Engine

DarkPulse AI operates under an honest, three-mode operational governance framework to ensure zero fabricated metrics:

1. **🔴 LIVE Mode:** Connects to active external security tools, webhooks, and enterprise SIEM APIs.
2. **🟡 PREVIEW Mode (3 Active Agents):** 
   - `pulse_recon`: Live DNS, SPF, DMARC, TLS certs, & security header auditing.
   - `pulse_breach`: Non-destructive vulnerability & endpoint scanner.
   - `pulse_lure`: RFC email header, phishing urgency, & brand impersonation analyzer.
3. **🟣 CONCEPT Mode (11 Fleet Agents):** Transparent architectural demonstrations running real sample telemetry to preview full platform vision.

---

## 🏬 8 Operating Department Hubs

1. **Sales & Revenue Security** (`pulse_recon`, `pulse_breach`)
2. **Customer Success & SOC Operations** (`pulse_lure`, `pulse_watch`)
3. **Engineering & Infrastructure Security** (`pulse_code`, `pulse_wire`)
4. **Product & Offensive Security** (`pulse_phantom`, `pulse_strike`)
5. **Legal, Compliance & GRC** (`pulse_ledger`, `pulse_gate`, `pulse_vault`, `pulse_guard`, `pulse_grid`)
6. **Finance & Cloud Operations** (`pulse_nimbus`)
7. **Marketing & Public Relations**
8. **HR & Founder Operations**

---

## 🚀 Quick Start Guide (Local Development)

### Prerequisites
- Python 3.13+
- Node.js v20+
- Git

### 1. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\Activate.ps1

# Install dependencies
pip install -r requirements.txt

# Start FastAPI server
uvicorn main:app --reload --port 8000