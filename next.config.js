const withReactSvg = require('next-react-svg');
const path = require('path');

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'public/images'),
  webpack(config, options) {
    return config;
  },
  experimental: {
    runtime: 'experimental-edge',
  },
  headers: () => [
    {
      source: '/',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ],
  env: {
    GITHUB_API_ACTIVE: process.env.GITHUB_API_ACTIVE ? process.env.GITHUB_API_ACTIVE : false,
  }
});
