const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: 'aural-notifications',
        libraryTarget: 'umd',
    },
    externals: ['react', 'react-dom', 'react-redux'],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['flow', 'env', 'react'],
                            plugins: ['transform-class-properties'],
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        modules: ['src', 'node_modules'],
    },
};
