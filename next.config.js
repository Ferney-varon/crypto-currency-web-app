/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.icons8.com',
            port: '',
            pathname: '/officel/80/logo.png',
          },
        ],
      },
    reactStrictMode: true
}

module.exports = nextConfig
