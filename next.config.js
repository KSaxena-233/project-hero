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
  },
  webpack: (config, { isServer }) => {
    // Force Babel usage
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
          plugins: []
        }
      }
    });
    return config;
  }
}

module.exports = nextConfig 