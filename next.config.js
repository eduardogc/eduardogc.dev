const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'eduardogc.com',
      },
      {
        protocol: 'https',
        hostname: 'eduardogc.tech',
      }
    ],
  },
};

module.exports = nextConfig
