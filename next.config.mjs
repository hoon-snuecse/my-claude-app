/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    IS_VERCEL: process.env.VERCEL === '1' ? 'true' : 'false',
  },
};

export default nextConfig;
