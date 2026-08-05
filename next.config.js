/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/jerroldkyekye.github.io',
  assetPrefix: '/jerroldkyekye.github.io/',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
