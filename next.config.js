/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media1.popsugar-assets.com'],
  },
};

module.exports = nextConfig;
