const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'components': path.resolve(__dirname, 'src/components'),
      'contexts': path.resolve(__dirname, 'src/contexts'),
      'theme': path.resolve(__dirname, 'src/theme'),
      'sections': path.resolve(__dirname, 'src/sections'),
      'assets': path.resolve(__dirname, 'src/assets'),
    };
    return config;
  },
};

module.exports = nextConfig;
