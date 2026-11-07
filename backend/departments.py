from typing import List, Dict, Any

COMPANY_DEPARTMENTS: List[Dict[str, Any]] = [
    {
        "dept_id": "sales",
        "name": "Sales & Revenue",
        "icon": "🎯",
        "lead": "Jyothi Srinivasan (Founder)",
        "mission": "Drives early access adoption, enterprise pricing packages, and client security audits.",
        "assigned_agents": [
            {"agent_id": "pulse_recon", "name": "PULSE-RECON", "icon": "🔍", "mode": "PREVIEW"},
            {"agent_id": "pulse_breach", "name": "PULSE-BREACH", "icon": "💉", "mode": "PREVIEW"}
        ],
        "responsibilities": [
            "Provide prospects with instant domain threat reports using PULSE-RECON",
            "Executive PDF Security Report export value proposition",
            "Tiered Pricing Architecture (Free, $299/mo Pro, Enterprise)"
        ]
    },
    {
        "dept_id": "customer_success",
        "name": "Customer Success & SOC Operations",
        "icon": "🤝",
        "lead": "Jyothi Srinivasan (Founder)",
        "mission": "Ensures seamless onboarding, email threat analysis, and rapid alert triage for clients.",
        "assigned_agents": [
            {"agent_id": "pulse_lure", "name": "PULSE-LURE", "icon": "🎣", "mode": "PREVIEW"},
            {"agent_id": "pulse_watch", "name": "PULSE-WATCH", "icon": "👁️", "mode": "CONCEPT"}
        ],
        "responsibilities": [
            "Analyze suspicious emails for client staff using PULSE-LURE",
            "Triage SIEM alerts and false positives using PULSE-WATCH",
            "Deliver remediation playbooks for detected threat vectors"
        ]
    },
    {
        "dept_id": "engineering",
        "name": "Engineering & Infrastructure",
        "icon": "🛠️",
        "lead": "Jyothi Srinivasan (Founder)",
        "mission": "Maintains application security, network telemetry, and FastAPI backend microservices.",
        "assigned_agents": [
            {"agent_id": "pulse_code", "name": "PULSE-CODE", "icon": "💻", "mode": "CONCEPT"},
            {"agent_id": "pulse_wire", "name": "PULSE-WIRE", "icon": "🌐", "mode": "CONCEPT"}
        ],
        "responsibilities": [
            "Scan repository source code for secrets using PULSE-CODE",
            "Monitor network flow logs and lateral movement with PULSE-WIRE",
            "FastAPI backend microservices & Orchestrator engine maintenance"
        ]
    },
    {
        "dept_id": "product",
        "name": "Product & Offensive Security",
        "icon": "🎨",
        "lead": "Jyothi Srinivasan (Founder)",
        "mission": "Defines simulation attack paths, incident containment strategies, and UX design.",
        "assigned_agents": [
            {"agent_id": "pulse_phantom", "name": "PULSE-PHANTOM", "icon": "👻", "mode": "CONCEPT"},
            {"agent_id": "pulse_strike", "name": "PULSE-STRIKE", "icon": "⚡", "mode": "CONCEPT"}
        ],
        "responsibilities": [
            "Simulate attack paths and MITRE coverage using PULSE-PHANTOM",
            "Guide containment playbooks during incidents with PULSE-STRIKE",
            "Three-Mode Governance (LIVE, PREVIEW, CONCEPT) oversight"
        ]
    },
    {
        "dept_id": "legal_compliance",
        "name": "Legal, Compliance & GRC",
        "icon": "⚖️",
        "lead": "Jyothi Srinivasan (Founder)",
        "mission": "Enforces non-aggression scan policies, SOC 2 compliance, IAM audits, and data privacy.",
        "assigned_agents": [
            {"agent_id": "pulse_ledger", "name": "PULSE-LEDGER", "icon": "📋", "mode": "CONCEPT"},
            {"agent_id": "pulse_gate", "name": "PULSE-GATE", "icon": "🚪", "mode": "CONCEPT"},
            {"agent_id": "pulse_vault", "name": "PULSE-VAULT", "icon": "🔐", "mode": "CONCEPT"},
            {"agent_id": "pulse_guard", "name": "PULSE-GUARD", "icon": "🛡️", "mode": "CONCEPT"},
            {"agent_id": "pulse_grid", "name": "PULSE-GRID", "icon": "⚙️", "mode": "CONCEPT"}
        ],
        "responsibilities": [
            "Map controls to SOC 2 & ISO 27001 using PULSE-LEDGER",
            "Audit identity access & impossible travel with PULSE-GATE",
            "Discover exposed PII and enforce data encryption via PULSE-VAULT"
        ]
    },
    {
        "dept_id": "finance",
        "name": "Finance & Cloud Operations",
        "icon": "💰",
        "lead": "Jyothi Srinivasan (Founder)",
        "mission": "Audits cloud storage configurations, manages bootstrap budgets, and Stripe billing.",
        "assigned_agents": [
            {"agent_id": "pulse_nimbus", "name": "PULSE-NIMBUS", "icon": "☁️", "mode": "CONCEPT"}
        ],
        "responsibilities": [
            "Audit public AWS S3 buckets & blob storage using PULSE-NIMBUS",
            "Manage 6-month bootstrap capital ($80-$660 budget limit)",
            "Stripe payment gateway integration & API cost modeling"
        ]
    },
    {
        "dept_id": "marketing",
        "name": "Marketing & Public Relations",
        "icon": "📢",
        "lead": "Jyothi Srinivasan (Founder)",
        "mission": "Establishes DarkPulse AI as the most honest, transparent AI cybersecurity brand.",
        "assigned_agents": [],
        "responsibilities": [
            "Core Tagline: 'Detect the Pulse of Every Threat'",
            "Transparency Manifesto & anti-fabrication marketing",
            "Product launch announcements and developer documentation"
        ]
    },
    {
        "dept_id": "hr_talent",
        "name": "HR & Founder Operations",
        "icon": "👥",
        "lead": "Jyothi Srinivasan (Founder)",
        "mission": "Automates solo-founder workflows and plans post-launch hiring milestones.",
        "assigned_agents": [],
        "responsibilities": [
            "Solo-founder AI workflow automation",
            "Developer onboarding playbooks & environment guides",
            "Talent acquisition roadmap for Month 6-12 post-revenue"
        ]
    }
]

def get_all_departments() -> List[Dict[str, Any]]:
    return COMPANY_DEPARTMENTS