// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  output: 'standalone', // or 'export' for static sites
  images: {
    unoptimized: true, // for static exports
  },
  trailingSlash: true, // helps with some routing issues
}

module.exports = nextConfig