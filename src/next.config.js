/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          destination: 'https://vxdefilabs.wpcomstaging.com/:path*',
        },
      ],
    }
  },
}

module.exports = nextConfig
