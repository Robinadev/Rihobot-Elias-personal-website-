// next.config.js - MUST HAVE THIS CONFIG
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // ← Creates static files in 'out' folder
  images: {
    unoptimized: true,  // ← Required for GitHub Pages
  },
  // Base path for GitHub Pages subdirectory
  basePath: process.env.NODE_ENV === 'production' ? '/rihobot-portfolio' : '',
  // Asset prefix for correct loading
  assetPrefix: process.env.NODE_ENV === 'production' ? '/rihobot-portfolio/' : '',
  // Important for GitHub Pages routing
  trailingSlash: true,
}

module.exports = nextConfig