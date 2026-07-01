import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
    optimizePackageImports: ["react-icons", "gsap", "primereact", "swiper"],
  },
  transpilePackages: ["@intl-tel-input/react", "intl-tel-input"],
  images: {
    deviceSizes: [280, 412, 576, 768, 992, 1200, 1400, 1600, 1800, 2048, 3840],
    imageSizes: [
      16, 32, 48, 64, 96, 128, 220, 256, 380, 440, 480, 540, 507, 512, 560, 580,
      616, 640, 680, 700, 720, 740, 780, 840, 880,
    ],

    qualities: [25, 50, 65, 75, 100],
  },
};

export default nextConfig;
