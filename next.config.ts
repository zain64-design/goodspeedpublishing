import type { NextConfig } from "next";

const nextConfig: NextConfig = {
     experimental: {
    inlineCss: true,
  },
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 420, 480],
        qualities: [25, 50, 60, 65, 70, 75, 80, 85, 90, 95, 100],
    }
};

export default nextConfig
