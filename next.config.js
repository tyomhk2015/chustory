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
}

module.exports = nextConfig
