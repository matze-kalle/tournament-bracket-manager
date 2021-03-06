const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve('app', 'index.js'),
    output: {
        path: path.resolve('public', 'js'),
        filename: 'app.js',
        sourceMapFilename: 'app.map.js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [ 'html-loader' ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
};
