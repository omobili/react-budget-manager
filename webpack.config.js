var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'build');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: '/bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/html/index.ejs',
            title: 'React Budget Manager'
        })
    ]
};

module.exports = config;