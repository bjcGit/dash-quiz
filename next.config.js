/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: 'out',
  // output: 'export',
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig
