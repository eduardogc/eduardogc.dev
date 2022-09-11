module.exports = {
  target: 'serverless',
  images: {
    domains: ['eduardogc.dev', 'sat02pap003files.storage.live.com']
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
