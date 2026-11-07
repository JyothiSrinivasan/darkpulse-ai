import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export const metadata: Metadata = {
  title: "DarkPulse AI — Detect the Pulse of Every Threat",
  description: "AI-powered cybersecurity fleet platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" className="dark">
        <head>
          {/* Universal Tailwind Engine for Instant Production Rendering */}
          <script src="https://cdn.tailwindcss.com"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                tailwind.config = {
                  darkMode: 'class',
                  theme: {
                    extend: {
                      colors: {
                        brand: '#ef4444',
                      }
                    }
                  }
                }
              `,
            }}
          />
        </head>
        <body className="bg-[#050811] text-slate-100 min-h-screen antialiased bg-slate-950">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}