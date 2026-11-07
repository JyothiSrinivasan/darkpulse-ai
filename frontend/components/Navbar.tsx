"use client";

import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
  const { isSignedIn, user } = useUser();

  // Founder Email Recognition List
  const founderEmails = [
    "darkpulse.founder@gmail.com",
    "jyothi.techportfolio@gmail.com"
  ];

  const userEmail = user?.primaryEmailAddress?.emailAddress;
  const isFounder = isSignedIn && Boolean(userEmail && founderEmails.includes(userEmail));

  return (
    <nav className="border-b border-slate-800 bg-[#070b14]/90 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Platform Name */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-600 via-rose-600 to-slate-900 flex items-center justify-center font-black text-white text-lg shadow-[0_0_15px_rgba(239,68,68,0.4)] group-hover:scale-105 transition-transform">
                ⚡
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-red-400 transition-colors">
                  DARKPULSE<span className="text-red-500 font-light ml-1">AI</span>
                </span>
              </div>
            </Link>

            {/* LIVE SYSTEM STATUS indicator */}
            <span className="hidden md:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-red-950/60 text-red-400 border border-red-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse mr-1.5"></span>
              14 AGENTS
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:flex items-center space-x-6 text-sm font-medium text-slate-300">
            <Link href="/dashboard" className="hover:text-red-400 transition-colors">
              Fleet Dashboard
            </Link>
            <Link href="/departments" className="hover:text-red-400 transition-colors">
              Departments
            </Link>
            <Link href="/dashboard/history" className="hover:text-red-400 transition-colors">
              Scan Audit History
            </Link>
            <Link href="/transparency" className="hover:text-red-400 transition-colors">
              Manifesto
            </Link>
          </div>

          {/* Right Controls: Founder Badge & Auth Button */}
          <div className="flex items-center space-x-4">
            {isFounder && (
              <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1 rounded-md bg-gradient-to-r from-red-950/90 to-slate-900 border border-red-500/60 shadow-[0_0_12px_rgba(239,68,68,0.3)] animate-pulse">
                <span className="text-xs">👑</span>
                <span className="text-xs font-mono font-extrabold tracking-wider text-red-400 uppercase">
                  FOUNDER / ADMIN
                </span>
              </div>
            )}

            {isSignedIn ? (
              <div className="flex items-center space-x-3 pl-2 border-l border-slate-800">
                <UserButton 
                  afterSignOutUrl="/" 
                  appearance={{
                    elements: {
                      avatarBox: "w-9 h-9 border-2 border-red-500/40 hover:border-red-500 transition-all shadow-[0_0_10px_rgba(239,68,68,0.2)]"
                    }
                  }}
                />
              </div>
            ) : (
              <Link
                href="/sign-in"
                className="px-4 py-2 text-sm font-semibold rounded-lg text-white bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all"
              >
                Sign In
              </Link>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}

// Named export for compatibility
export { Navbar };