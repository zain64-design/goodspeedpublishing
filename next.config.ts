import type { NextConfig } from "next";

const nextConfig: NextConfig = {
     experimental: {
    inlineCss: true,
  },
  images: {
deviceSizes: [280, 576, 768, 992, 1200, 1400, 1600, 1800, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 380, 440, 480, 540, 580, 640, 680, 740, 780, 840, 880],

        qualities: [25, 50, 65, 75, 100],
    }
};

export default nextConfig
