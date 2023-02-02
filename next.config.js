/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  images: {
    remotePatterns: [
    {
      protocol: "https",
      hostname: "d.newsweek.com"
    }
  ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
