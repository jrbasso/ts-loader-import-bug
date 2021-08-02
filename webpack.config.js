"use strict"

const path = require('path');
const { VueLoaderPlugin, default: loader } = require('vue-loader');

module.exports = {
    mode: process.env.NODE_ENV || 'production',
    entry: {
        'main': './src/main.ts'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }
        ],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        sourceMapFilename: '[file].map',
        libraryTarget: 'window',
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: ['.js', '.ts', '.vue']
    },
}
