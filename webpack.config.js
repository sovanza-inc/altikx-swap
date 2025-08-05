const path = require('path');

module.exports = {
    mode: 'development', // Change to 'development' to ensure logs are not stripped out
    resolve: {
        extensions: ['*', '.mjs', '.js', '.json'],
        fallback: {
            "stream": require.resolve("stream-browserify"),
            "util": require.resolve("util/")
        }
    },
    module: {
        rules: [
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto'
            }
        ]
    },
    devtool: 'source-map', // Helpful for debugging
    plugins: []
};
