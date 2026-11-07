import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "DarkPulse AI — Detect the Pulse of Every Threat",
  description: "AI-Powered Cybersecurity Agent Fleet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body className="bg-[#0A0A0F] text-[#E4E4E7] antialiased">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}