/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  basePath: '/sd.github.io',
  assetPrefix: '/sd.github.io',
}

module.exports = nextConfig
