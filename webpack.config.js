// ..
// Requires
//

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// ..
// Constants
//

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

// ..
// Common Tasks
//

var common = {
    entry: {
        app: PATHS.app + '/app.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader'],
                include: PATHS.app
            },
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader?cacheDirectory'],
                include: PATHS.app
            }
        ]
    }
};

// ..
// Specific Tasks
//

if (TARGET === 'start') {
    common = Object.assign(common, {
        devServer: {
            contentBase: PATHS.build,

            historyApiFallback: true,
            hot: true,
            inline: true,

            stats: 'errors-only',

            host: process.env.HOST,
            port: process.env.PORT
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: PATHS.build + '/index.html',
                template: PATHS.app + '/index.html'
            }),
            new webpack.HotModuleReplacementPlugin()
        ],
        devtool: 'eval-source-map'
    });
} else if (TARGET === 'build') {
    common = Object.assign(common, {
        plugins: [
            new HtmlWebpackPlugin({
                filename: PATHS.build + '/index.html',
                template: PATHS.app + '/index.html'
            })
        ]
    });
}

// ..
// Exports
//

module.exports = common;
