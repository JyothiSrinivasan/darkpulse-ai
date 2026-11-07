# ⚡ DarkPulse AI

> **"Detect the Pulse of Every Threat"**

DarkPulse AI is an enterprise-grade cybersecurity fleet platform designed to triage security alerts, perform domain reconnaissance, audit vulnerability surfaces, and analyze email phishing lures with complete operational transparency.

---

## 🛡️ Executive Platform Overview

- **Founder & Architect:** Jyothi Srinivasan (`darkpulse.founder@gmail.com`)
- **Architecture:** 14 PULSE AI Security Agents across 8 Operating Departments
- **Frontend Stack:** Next.js 15 (Turbopack), TypeScript, Tailwind CSS, Clerk Authentication
- **Backend Stack:** Python 3.13, FastAPI, Uvicorn, SQLAlchemy, ReportLab, Pydantic
- **Persistence:** SQLite (`darkpulse.db`) / Ready for PostgreSQL migration

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

### Environment Variables
To run the frontend, configure Clerk Authentication by creating a `.env.local` file in `/frontend`:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
```

### 1. Backend Setup
cd backend
python -m venv .venv
## Activate: `source .venv/bin/activate` (Mac/Linux) or `.venv\Scripts\Activate.ps1` (Windows)
pip install -r requirements.txt
uvicorn main:app --reload --port 8000

### Backend runs at http://127.0.0.1:8000 (API Docs at /docs).

### 2. Frontend Setup
cd frontend
npm install
npm run dev

### Frontend runs at http://localhost:3000.

### 🐳 Docker Deployment
Run the complete platform in isolated containers:

docker-compose up --build

### 📄 Contact
Created by Jyothi Srinivasan.

For inquiries, reach out at darkpulse.founder@gmail.com