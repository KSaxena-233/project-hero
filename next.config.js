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
  experimental: {
    forceSwcTransforms: true
  }
}

module.exports = nextConfig 