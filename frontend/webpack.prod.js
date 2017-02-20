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

    devtool: 'eval',

    // START POINT OF BUNDLER
    entry: {
        polyfills: srcPollyfill,
        app: srcApp,
        vendor: srcVendor
    },

    // OUTPUT OF WEBPACK
    output: {
        path: distPath,
        filename: '[name].[hash].bundle.js'
    },

    // MODULES
    module: {
        rules: [
            {
                //HTML
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader'
            },
            {
                // CSS
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                // TS
                test: /\.ts$/,
                exclude: /node_modules/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            }
        ]
    },

    // RESOLVE
    resolve: {
        extensions: ['.js', '.ts', '.css', '.png', 'jpg'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            srcPath
        ]
    },

    // the environment in which the bundle should run
    target: "web",

    // PLUGINS
    plugins: [
        // Workaround for angular/angular#11580
        // New solution is to target is non existing folder
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            path.resolve(__dirname, 'doesnotexist/')
        ),

        // Prefetches files to load in background for SPA - broken :(
        new webpack.PrefetchPlugin(srcPath, 'app/app.modules.ts'),

        // Minifes files from the loader
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
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

        // Vary the distribution of the ids to get the smallest id length for often used ids with a simple option
        new webpack.optimize.OccurrenceOrderPlugin(),

        // Names the output files
        new webpack.optimize.CommonsChunkPlugin({
            name: 'chunks',
            minChunks: Infinity,
            filename: 'chunks.bundle.js'
        }),

        // optimizes files using UgilfyJS
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true
            },
            output: {
                comments: false
            }
        })

    ]
};