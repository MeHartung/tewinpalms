/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  turbo: {
    enabled: false,
  },
}

module.exports = nextConfig