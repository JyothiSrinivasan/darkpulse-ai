'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  ShieldCheck, 
  Terminal, 
  Code2, 
  Scale, 
  DollarSign, 
  Megaphone, 
  Users,
  ChevronRight
} from 'lucide-react';

export default function DepartmentsPage() {
  const departments = [
    {
      id: 'executive-hr',
      name: 'Executive Suite & HR Operations',
      icon: <Users className="w-6 h-6 text-red-500" />,
      lead: 'Jyothi Srinivasan (Founder)',
      description: 'Executive oversight, risk governance, solo-founder workflow automation, and post-launch talent roadmap.',
      responsibilities: [
        'Single-pane-of-glass executive fleet oversight',
        'Solo-founder AI workflow orchestration',
        'Internal threat & identity risk policies'
      ],
      agents: [{ id: 'pulse_grid', name: 'PULSE-GRID', mode: 'CONCEPT' }]
    },
    {
      id: 'marketing-pr',
      name: 'Marketing & Public Relations',
      icon: <Megaphone className="w-6 h-6 text-red-500" />,
      lead: 'Jyothi Srinivasan (Founder)',
      description: 'Establishes DarkPulse AI as the most transparent AI cybersecurity brand, managing crisis communications and brand threat intelligence.',
      responsibilities: [
        'Brand sentiment & OSINT exposure tracking',
        'Responsible breach disclosure messaging',
        'Anti-fabrication marketing & transparency reporting'
      ],
      agents: [{ id: 'pulse_guard', name: 'PULSE-GUARD', mode: 'CONCEPT' }]
    },
    {
      id: 'sales-revenue',
      name: 'Sales & Revenue',
      icon: <Building2 className="w-6 h-6 text-red-500" />,
      lead: 'Jyothi Srinivasan (Founder)',
      description: 'Drives early access adoption, enterprise pricing packages, and client security audits.',
      responsibilities: [
        'Instant domain threat reports using PULSE-RECON',
        'Executive PDF Security Report export value proposition',
        'Tiered Pricing Architecture (Free, $299/mo Pro, Enterprise)'
      ],
      agents: [
        { id: 'pulse_recon', name: 'PULSE-RECON', mode: 'PREVIEW' },
        { id: 'pulse_breach', name: 'PULSE-BREACH', mode: 'PREVIEW' }
      ]
    },
    {
      id: 'soc-operations',
      name: 'Customer Success & SOC Operations',
      icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
      lead: 'Jyothi Srinivasan (Founder)',
      description: 'Ensures seamless onboarding, email threat analysis, and rapid alert triage for clients.',
      responsibilities: [
        'Analyze suspicious emails for client staff using PULSE-LURE',
        'Triage SIEM alerts and false positives using PULSE-WATCH',
        'Deliver remediation playbooks for detected threat vectors'
      ],
      agents: [
        { id: 'pulse_lure', name: 'PULSE-LURE', mode: 'PREVIEW' },
        { id: 'pulse_watch', name: 'PULSE-WATCH', mode: 'CONCEPT' }
      ]
    },
    {
      id: 'engineering',
      name: 'Engineering & Infrastructure',
      icon: <Code2 className="w-6 h-6 text-red-500" />,
      lead: 'Jyothi Srinivasan (Founder)',
      description: 'Maintains application security, network telemetry, and FastAPI backend microservices.',
      responsibilities: [
        'Scan repository source code for secrets using PULSE-CODE',
        'Monitor network flow logs and lateral movement with PULSE-WIRE',
        'FastAPI backend microservices & Orchestrator engine maintenance'
      ],
      agents: [
        { id: 'pulse_code', name: 'PULSE-CODE', mode: 'CONCEPT' },
        { id: 'pulse_wire', name: 'PULSE-WIRE', mode: 'CONCEPT' }
      ]
    },
    {
      id: 'offensive-security',
      name: 'Product & Offensive Security',
      icon: <Terminal className="w-6 h-6 text-red-500" />,
      lead: 'Jyothi Srinivasan (Founder)',
      description: 'Defines simulation attack paths, incident containment strategies, and UX design.',
      responsibilities: [
        'Simulate attack paths and MITRE coverage using PULSE-PHANTOM',
        'Guide containment playbooks during incidents with PULSE-STRIKE',
        'Three-Mode Governance (LIVE, PREVIEW, CONCEPT) oversight'
      ],
      agents: [
        { id: 'pulse_phantom', name: 'PULSE-PHANTOM', mode: 'CONCEPT' },
        { id: 'pulse_strike', name: 'PULSE-STRIKE', mode: 'CONCEPT' }
      ]
    },
    {
      id: 'legal-compliance',
      name: 'Legal, Compliance & GRC',
      icon: <Scale className="w-6 h-6 text-red-500" />,
      lead: 'Jyothi Srinivasan (Founder)',
      description: 'Enforces non-aggression scan policies, SOC 2 compliance, IAM audits, and data privacy.',
      responsibilities: [
        'Map controls to SOC 2 & ISO 27001 using PULSE-LEDGER',
        'Audit identity access & impossible travel with PULSE-GATE',
        'Discover exposed PII and enforce data encryption via PULSE-VAULT'
      ],
      agents: [
        { id: 'pulse_ledger', name: 'PULSE-LEDGER', mode: 'CONCEPT' },
        { id: 'pulse_gate', name: 'PULSE-GATE', mode: 'CONCEPT' },
        { id: 'pulse_vault', name: 'PULSE-VAULT', mode: 'CONCEPT' }
      ]
    },
    {
      id: 'finance-cloud',
      name: 'Finance & Cloud Operations',
      icon: <DollarSign className="w-6 h-6 text-red-500" />,
      lead: 'Jyothi Srinivasan (Founder)',
      description: 'Audits cloud storage configurations, manages bootstrap budgets, and cloud billing.',
      responsibilities: [
        'Audit public AWS S3 buckets & blob storage using PULSE-NIMBUS',
        'Manage 6-month bootstrap capital ($80-$660 budget limit)',
        'Stripe payment gateway integration & API cost modeling'
      ],
      agents: [{ id: 'pulse_nimbus', name: 'PULSE-NIMBUS', mode: 'LIVE' }]
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-red-950/50 border border-red-500/30 text-red-400">
            COMPANY OPERATING SYSTEM
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            DarkPulse AI <span className="text-red-500">Department Hubs</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Our 8 company operating departments manage specific AI agents across our 14-agent security fleet with full workspace integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {departments.map((dept) => (
            <div 
              key={dept.id} 
              className="bg-[#0f172a]/80 border border-slate-800 hover:border-red-500/40 rounded-xl p-6 transition-all duration-200 shadow-xl space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg">
                      {dept.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-100">{dept.name}</h2>
                      <p className="text-xs text-red-400 font-mono mt-0.5">Department Lead: {dept.lead}</p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">{dept.description}</p>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Assigned Department Agents ({dept.agents.length}):
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {dept.agents.map((agent) => {
                      const badgeStyle = agent.mode === 'LIVE' 
                        ? 'bg-emerald-950 text-emerald-400 border-emerald-500/30' 
                        : agent.mode === 'PREVIEW'
                        ? 'bg-amber-950 text-amber-400 border-amber-500/30'
                        : 'bg-slate-800 text-slate-400 border-slate-700';

                      return (
                        <div 
                          key={agent.id}
                          className="flex items-center gap-2 bg-slate-900 border border-slate-700/60 rounded-lg px-3 py-1.5 text-xs font-mono"
                        >
                          <span className="text-slate-200 font-semibold">{agent.name}</span>
                          <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold border ${badgeStyle}`}>
                            {agent.mode}
                          </span>
                          <Link 
                            href={`/agents/${agent.id}`}
                            className="ml-1 text-red-400 hover:text-red-300 flex items-center gap-0.5 font-bold"
                          >
                            workspace <ChevronRight className="w-3 h-3" />
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Key Operational Responsibilities:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {dept.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-500 font-bold">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
