/** @type {import('next').NextConfig} */
const nextConfig = {
  // No 'output: export' for Vercel!
  images: {
    domains: ['images.unsplash.com', 'github.com'],
  },
}

module.exports = nextConfig