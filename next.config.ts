import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Netlify's CDN handles image optimization; disable Next.js built-in
  images: {
    unoptimized: true,
  },
  // Consistent URL handling — no trailing slashes
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about/name',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/what-we-do/focus',
        permanent: true,
      },
      {
        source: '/what-we-do',
        destination: '/what-we-do/focus',
        permanent: true,
      },
      {
        source: '/bridge',
        destination: '/bridge/collaboration',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
