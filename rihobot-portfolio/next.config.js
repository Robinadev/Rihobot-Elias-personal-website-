// next.config.js - CRITICAL UPDATE
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // IMPORTANT: Match EXACT repository name
  basePath: '/Rihobot-Elias-personal-website-',
  assetPrefix: '/Rihobot-Elias-personal-website-/',
  trailingSlash: true,
}

module.exports = nextConfig