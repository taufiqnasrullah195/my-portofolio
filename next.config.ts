import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: '/my-portofolio',
  assetPrefix: '/my-portofolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
