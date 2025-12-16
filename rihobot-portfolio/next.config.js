// next.config.js - COMPLETE FIX
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // CRITICAL: Must match your repository name EXACTLY
  basePath: '/Rihobot-Elias-personal-website-',
  assetPrefix: '/Rihobot-Elias-personal-website-/',
  trailingSlash: true,

}
module.exports = {
  // ... other config
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/index.html',
      },
    ]
  }
}
module.exports = nextConfig