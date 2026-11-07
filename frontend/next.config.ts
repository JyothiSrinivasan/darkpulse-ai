import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Prevent TypeScript errors from blocking production build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Prevent ESLint errors from blocking production build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;