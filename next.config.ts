import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fjswchcothephgtzqbgq.supabase.co',
        pathname: '/**',
      },
    ],
  },
  
  // Add empty turbopack config to silence the warning
  turbopack: {},
};

export default nextConfig;