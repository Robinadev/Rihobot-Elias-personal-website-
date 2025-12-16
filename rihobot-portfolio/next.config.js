// next.config.js - COMPLETE FIX
/** next.config.js - CRITICAL FIX FOR GITHUB PAGES DEPLOYMENT **/
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // MUST match your repository EXACTLY
  basePath: '/Rihobot-Elias-personal-website-',
  assetPrefix: '/Rihobot-Elias-personal-website-/',
  trailingSlash: true,
}

module.exports = nextConfig
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