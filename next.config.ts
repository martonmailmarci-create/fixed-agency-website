import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: isProd ? { exclude: ["error"] } : false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
