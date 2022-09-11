module.exports = {
  target: 'serverless',
  images: {
    domains: ['eduardogc.dev']
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
