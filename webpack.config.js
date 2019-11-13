const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = merge(require('./webpack.base'), {
    context: __dirname,

    entry: {
        'index': './src/index.js',
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'quick-admin',
        libraryTarget: 'umd',
    },
});
