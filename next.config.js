const withReactSvg = require('next-react-svg');
const path = require('path');

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'public/images'),
  webpack(config, options) {
    return config;
  },
  experimental: {
    runtime: 'node',
  },
  headers: () => [
    {
      source: '/',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-cache',
        },
      ],
    },
  ],
  env: {
    GITHUB_API_ACTIVE: process.env.GITHUB_API_ACTIVE ? process.env.GITHUB_API_ACTIVE : false,
  }
});
