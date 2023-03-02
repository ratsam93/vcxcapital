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
          source: '/assets/:path*',
          destination: 'https://venturexcapitalwebapp.vercel.app/assets/:path*'
        },
        {
          source: '/static/:path*',
          destination: 'https://venturexcapitalwebapp.vercel.app/static/:path*'
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
