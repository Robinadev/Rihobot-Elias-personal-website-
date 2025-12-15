// next.config.js - CRITICAL CONFIG
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ← Enables static export
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/rihobot-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/rihobot-portfolio/' : '',
  trailingSlash: true,
}

module.exports = nextConfig