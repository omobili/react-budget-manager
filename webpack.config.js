// ..
// Requires
//

var path = require('path');

var webpack = require('webpack');

// ..
// Constants
//

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

// ..
// Common Tasks
//

var common = {
    entry: {
        app: PATHS.src + '/app.js'
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
            }
        ]
    }
};

// ..
// Specific Tasks
//

if (TARGET === 'start') {
    common.devServer = {
        contentBase: PATHS.build,

        historyApiFallback: true,
        hot: true,
        inline: true,

        stats: 'errors-only',

        host: process.env.HOST,
        port: process.env.PORT
    };
    common.plugins = [
        new webpack.HotModuleReplacementPlugin()
    ];
    common.devtool = 'eval-source-map';
}

module.exports = common;




//var HtmlWebpackPlugin = require('html-webpack-plugin');

//const APP_DIR = path.resolve(__dirname, 'src');
//const BUILD_DIR = path.resolve(__dirname, 'build');

/*
var config = {
    entry: APP_DIR + '/toto.js',
    output: {
        path: BUILD_DIR,
        filename: '/bundle.js'
    },
    module : {
        loaders : [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: 'node_modules'
            }
        ]
    }
};

module.exports = config;
*/

/*
module.exports = {

    entry: APP_DIR + '/index.js',

    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
    */