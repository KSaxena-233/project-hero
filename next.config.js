/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  compiler: {
    removeConsole: true
  },
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false
  }
}

module.exports = nextConfig 