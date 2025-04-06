/** @type {import('next').NextConfig} */
// import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
