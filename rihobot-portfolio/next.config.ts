// next.config.js
const nextConfig = {
  output: 'standalone', // or 'export' for static sites
  images: {
    unoptimized: true, // for static exports
  },
  trailingSlash: true, // helps with some routing issues
}

export default nextConfig