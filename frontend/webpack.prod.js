'use strict';

// CURRENTLY NOT WORKING

// // Plugin / Base Require
// const webpack                   = require('webpack');
// const path                      = require('path');
// const helpers                   = require('./config/helpers')
// const HtmlWebpackPlugin         = require('html-webpack-plugin');
// const ExtractTextPlugin         = require('extract-text-webpack-plugin');

// // Webpack Variables
// const srcPath                   = path.join(__dirname, './src');
// const srcApp                    = path.join(__dirname, './src/main.ts');
// const srcPollyfill              = path.join(__dirname, './src/polyfills.ts')
// const srcVendor                 = path.join(__dirname, './src/vendor.ts');
// const distPath                  = path.join(__dirname, './dist');

// module.exports = {
//     context: srcPath,

//     devtool: 'eval',

//     // START POINT OF BUNDLER
//     entry: {
//     polyfills: srcPollyfill,
//     app: srcApp,
//     vendor: srcVendor
//     },

//     // OUTPUT OF WEBPACK
//     output: {
//     path: distPath,
//     filename: '[hash].bundle.js',
//     },

//     // MODULES
//     module: {

//     rules: [
//         {
//         //HTML
//         test: /\.html$/,
//         exclude: /node_modules/,
//         loader: 'html-loader'
//         },
//         {
//         // CSS
//         test: /\.css$/,
//         exclude: helpers.root('src', 'app'),
//         loader: ExtractTextPlugin.extract({ fallback: 'style-loader', loader: 'css-loader' })
//         },
//         {
//         // TS
//         test: /\.ts$/,
//         loaders: ['awesome-typescript-loader', 'angular2-template-loader']
//         },
//         {
//         // // JS - Compile TS down to JS
//         // test: /\.js$/,
//         // loader: "babel-loader",
//         // options: { 
//         //   presets: ['es2015-native-modules'] 
//         // }
//         },
//     ]
//     },

//     // RESOLVE
//     resolve: {
//     extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js'],
//     modules: [
//         path.resolve(__dirname, 'node_modules'),
//         srcPath
//     ]
//     },

//     // the environment in which the bundle should run
//     target: "web",

//     // PLUGINS
//     plugins: [
//     // Workaround for angular/angular#11580
//     // New solution is to target is non existing folder
//     new webpack.ContextReplacementPlugin(
//         /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
//         path.resolve(__dirname, 'doesnotexist/')
//     ),

//     // Prefetches files to load in background for SPA
//     new webpack.PrefetchPlugin(),

//     // Minifes the size of a chunk
//     new webpack.optimize.MinChunkSizePlugin(
//         {
//         minChunkSize: 10000
//         }
//     ),

//     // Limit the about of chunks
//     new webpack.optimize.LimitChunkCountPlugin(
//         {
//         maxChunks: 15
//         }
//     ),

//     // Minifes files from the loader
//     new webpack.LoaderOptionsPlugin({
//         minimize: true,
//         debug: false
//     }),

//     // uses the names of module files instead of dynamically generated files during bundling
//     new webpack.NamedModulesPlugin(),

//     // Vary the distribution of the ids to get the smallest id length for often used ids with a simple option
//     new webpack.optimize.OccurrenceOrderPlugin(),

//     // Names the output files
//     new webpack.optimize.CommonsChunkPlugin({
//         name: 'chunks',
//         minChunks: Infinity,
//         filename: 'chunks.bundle.js'
//     }),

//     // Extracts Styling into its own file
//     new ExtractTextPlugin({
//         name: '[name].bundle.css',
//         allChunks: true
//     }),

//     // SETS SKELETON HTML PATH. Adds in script tags and other to HTML
//     new HtmlWebpackPlugin({
//         hash: true,
//         filename: 'index.html',
//         template: srcPath + '/index.html',
//         inject: 'body'
//     }),

//     // optimizes files using UgilfyJS
//     new webpack.optimize.UglifyJsPlugin({
//         compress: {
//         warnings: false,
//         screw_ie8: true,
//         conditionals: true,
//         unused: true,
//         comparisons: true,
//         sequences: true,
//         dead_code: true,
//         evaluate: true,
//         if_return: true,
//         join_vars: true,
//         },
//         output: {
//         comments: false,
//         },
//     })
//     ],

//     // DEV SERVER
//     devServer: {
//     contentBase: srcPath,
//     historyApiFallback: { disableDotRule: true },
//     compress: false,
//     inline: true,
//     hot: true,
//     stats: {
//         assets: true,
//         children: false,
//         chunks: false,
//         hash: false,
//         modules: false,
//         publicPath: false,
//         timings: true,
//         version: false,
//         warnings: true
//     }
//     }
// };