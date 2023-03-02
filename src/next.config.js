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
        {
          source: '/buy',
          destination: 'https://venturexcapitalwebapp.vercel.app/'
        },
      ],
    }
  },
}

module.exports = nextConfig
