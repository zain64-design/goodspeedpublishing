import type { NextConfig } from "next";
import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
     experimental: {
    inlineCss: true,
  },
  images: {
        qualities: [25, 50, 60, 65, 70, 75, 80, 85, 90, 95, 100],
    }
};

export default withBundleAnalyzer(nextConfig)
