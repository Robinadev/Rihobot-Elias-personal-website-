// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove 'output: "export"' if you need SSR features
  // output: "export",
  
  images: {
    domains: [],
    unoptimized: false, // Set to true only if using static export
  },
  
  // Enable React strict mode
  reactStrictMode: true,
  
  // For webpack configuration if needed
  webpack: (config) => {
    return config
  },
}

module.exports = nextConfig