'use strict';

// Plugin / Base Require
const webpack                   = require('webpack');
const path                      = require('path');
const helpers                   = require('./config/helpers');
const HtmlWebpackPlugin         = require('html-webpack-plugin');
const ExtractTextPlugin         = require('extract-text-webpack-plugin');

// Webpack Variables
const srcPath                   = path.join(__dirname, './src');
const srcApp                    = path.join(__dirname, './src/main.ts');
const srcPollyfill              = path.join(__dirname, './src/polyfills.ts');
const srcVendor                 = path.join(__dirname, './src/vendor.ts');
const distPath                  = path.join(__dirname, './dist');

module.exports = {
    context: srcPath,

    // SOURCEMAPS
    devtool: 'source-map',

    // START POINT OF BUNDLER
    entry: {
    polyfills: srcPollyfill,
    app: srcApp,
    vendor: srcVendor
    },

    // OUTPUT OF WEBPACK
    output: {
    path: distPath,
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js',
    publicPath: '/'
    },

    // MODULES
    module: {
        rules: [
            {
                //HTML
                test: /\.html$/,
                exclude: /node_modules/,
                use: 'html-loader'
            },
            {
                // TS
                test: /\.(ts)$/,
                exclude: /node_modules/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            }
        ]
    },
    
    // RESOLVE
    resolve: {
        extensions: ['.js', '.ts'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            srcPath
        ]
    },

    // performance
    performance: {
        hints: "warning"
    },

    // the environment in which the bundle should run
    target: "node",

    // PLUGINS
    plugins: [
        // Workaround for angular/angular#11580
        // New solution is to target is non existing folder
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            path.resolve(__dirname, 'doesnotexist/')
        ),

        // Names the output files
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        // Extracts Styling into its own file
        new ExtractTextPlugin({
            filename: '[name].[hash].css',
            allChunks: true
        }),

        // SETS SKELETON HTML PATH. Adds in script tags and other to HTML
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html',
            template: srcPath + '/index.html',
            inject: 'body'
        }),
    ],
};