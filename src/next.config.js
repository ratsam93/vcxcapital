/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '*',
          destination: 'https://vxdefilabs.wpcomstaging.com/*',
        },
      ],
    }
  },
}

module.exports = nextConfig
