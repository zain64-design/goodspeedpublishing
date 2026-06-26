import type { NextConfig } from "next";

const nextConfig: NextConfig = {
     experimental: {
    inlineCss: true,
  },
  images: {
        qualities: [25, 50, 60, 65, 70, 75, 80, 85, 90, 95, 100],
    }
};

export default nextConfig
