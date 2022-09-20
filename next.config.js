/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['chunithm.sega.jp'],
  },
}

module.exports = nextConfig
