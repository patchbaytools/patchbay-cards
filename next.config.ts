import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    PORT: process.env.PORT || "3001",
  },
  // Configure external image domains for Next.js Image component
  images: {
    domains: ["i.scdn.co"], // Allow Spotify CDN images
  },
};

export default nextConfig;
