/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/buy',
          destination: 'https://venturexcapitalwebapp.vercel.app/'
        },
        {
          source: '/:path*',
          destination: 'https://vxdefilabs.wpcomstaging.com/:path*',
        },
      ],
    }
  },
}

module.exports = nextConfig
