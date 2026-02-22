import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
