/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [],
  },
  // Temporarily enable for debugging
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig
