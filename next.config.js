/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['chunithm.sega.jp'],
  },
  i18n: {
    locales: ["ko"],
    defaultLocale: "ko",
  },
  experimental: {
    largePageDataBytes: 12800000,
  },
}

module.exports = nextConfig
