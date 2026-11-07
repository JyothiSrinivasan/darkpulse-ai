"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import ModeBadge from "@/components/ModeBadge";

interface AssignedAgent {
  agent_id: string;
  name: string;
  icon: string;
  mode: any;
}

interface Department {
  dept_id: string;
  name: string;
  icon: string;
  lead: string;
  mission: string;
  assigned_agents: AssignedAgent[];
  responsibilities: string[];
}

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/departments")
      .then((res) => res.json())
      .then((data) => {
        setDepartments(data.departments || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#E4E4E7] font-sans flex flex-col justify-between">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10 w-full flex-1">
        {/* Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-[#13131A] border border-[#FF2D55]/30 text-[#FF2D55] text-xs font-mono mb-4 uppercase tracking-widest">
            COMPANY OPERATING SYSTEM
          </div>
          <h1 className="text-4xl font-extrabold text-white mb-4">
            DarkPulse AI <span className="text-[#FF2D55]">Department Hubs</span>
          </h1>
          <p className="text-sm text-[#71717A] leading-relaxed">
            Our 8 company operating departments manage specific AI agents across our 14-agent security fleet.
          </p>
        </div>

        {loading && (
          <div className="py-20 text-center font-mono text-sm text-[#71717A]">
            Connecting to DarkPulse Operational Engine...
          </div>
        )}

        {/* Departments Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept) => (
              <div
                key={dept.dept_id}
                className="bg-[#13131A] border border-[#1E1E2A] hover:border-[#FF2D55]/50 rounded-xl p-6 transition flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl p-3 bg-[#0A0A0F] border border-[#1E1E2A] rounded-xl">
                      {dept.icon}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{dept.name}</h3>
                      <p className="text-xs text-[#FF2D55] font-mono mt-0.5">Department Lead: {dept.lead}</p>
                    </div>
                  </div>

                  <p className="text-sm text-[#A1A1AA] mb-4 leading-relaxed bg-[#0A0A0F] p-3 rounded-lg border border-[#1E1E2A]/50">
                    {dept.mission}
                  </p>

                  {/* Assigned Agents Section */}
                  {dept.assigned_agents && dept.assigned_agents.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-xs font-mono text-[#FF2D55] uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
                        <span>🤖</span> Assigned Department Agents ({dept.assigned_agents.length}):
                      </h4>
                      <div className="space-y-2">
                        {dept.assigned_agents.map((agent) => (
                          <div
                            key={agent.agent_id}
                            className="bg-[#0A0A0F] border border-[#1E1E2A] hover:border-[#FF2D55] p-2.5 rounded-lg flex items-center justify-between transition"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{agent.icon}</span>
                              <span className="text-xs font-bold text-white">{agent.name}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <ModeBadge mode={agent.mode} />
                              <a
                                href={`/agents/${agent.agent_id}`}
                                className="text-xs font-mono text-[#FF2D55] hover:underline font-semibold"
                              >
                                Workspace →
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Responsibilities */}
                  <h4 className="text-xs font-mono text-[#71717A] uppercase tracking-wider mb-2 font-bold">
                    Key Operational Responsibilities:
                  </h4>
                  <ul className="space-y-2 mb-2">
                    {dept.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-xs text-[#E4E4E7] flex items-start gap-2">
                        <span className="text-[#FF2D55] font-bold">▸</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="max-w-7xl mx-auto w-full text-center text-xs text-[#71717A] py-6 border-t border-[#13131A]">
        © 2026 DarkPulse AI. Detect the Pulse of Every Threat.
      </footer>
    </div>
  );
}