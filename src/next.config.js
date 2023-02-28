/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites:[{"source":"*","destination":"https://vxdefilabs.wpcomstaging.com/"}],
}

module.exports = nextConfig
