/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    IS_VERCEL: process.env.VERCEL === '1' ? 'true' : 'false',
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '100mb',
    },
  },
};

export default nextConfig;
