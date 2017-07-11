'use strict';

const path = require('path');
const webpack = require('webpack');
const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');

const config = {
    entry: [
        'webpack-dev-server/client?http://localhost:10000',
        './src/entry.jsx'
    ],

    output: {
        sourceMapFilename: 'bundle.map',
        path: path.join(__dirname, 'public'),
        filename: 'compiled/js/[name].entry.js',
        publicPath: '/public'
    },

    module: {
        loaders: [{
            test: /jsx?$/,
            loader: 'babel-loader',
            include: [path.resolve(__dirname, 'src')]
        }]
    },

    devtool: 'eval',

    devServer: {
        host: 'localhost',
        port: 10000,
        contentBase: 'public',
        publicPath: 'http://localhost:10000'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new FlowStatusWebpackPlugin({
            binaryPath: './node_modules/flow-bin/cli.js',
            onSuccess: console.log,
            onError: console.error
        })
    ]
};

module.exports = config;
