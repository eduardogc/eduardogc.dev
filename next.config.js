module.exports = {
    target: 'serverless',
    webpack: (config) => {
        config.module.rules.push(
            {
                test: /\.md$/,
                loader: 'raw-loader',
            }
        )
        return config;
    }
};