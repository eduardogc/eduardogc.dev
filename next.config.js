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
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        loader: 'raw-loader'
      }
    )
    return config
  }
}

module.exports = nextConfig
