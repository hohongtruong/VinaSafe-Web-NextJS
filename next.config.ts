import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // basePath: '/out', /* dev only */
  // assetPrefix: '/out', /* dev only */
  /* config options here */
};

export default nextConfig;
