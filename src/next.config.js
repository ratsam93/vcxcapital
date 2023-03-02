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
          source: '/assets*',
          destination: 'https://venturexcapitalwebapp.vercel.app/assets*'
        },
        {
          source: '/static*',
          destination: 'https://venturexcapitalwebapp.vercel.app/static*'
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
