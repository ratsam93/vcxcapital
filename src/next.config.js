/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          destination: 'https://vxdefilabs.com/:path*',
        },
      ],
    }
  },
}

module.exports = nextConfig
