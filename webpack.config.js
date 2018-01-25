// ..
// Requires
//

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// ..
// Constants
//

const TARGET = process.env.npm_lifecycle_event || 'build';
const PATHS = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

// ..
// Common Tasks
//

let config;
let common = {
    entry: {
        app: PATHS.app + '/app.tsx'
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
                include: PATHS.app
            },
            {
                test: /\.tsx?$/,
                loaders: ['awesome-typescript-loader']
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: ["source-map-loader"]
            }
        ]
    }
};

// ..
// Specific Tasks
//

if (TARGET === 'start') {
    config = Object.assign(common, {
        devServer: {
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
    config = Object.assign(common, {
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

module.exports = config;
