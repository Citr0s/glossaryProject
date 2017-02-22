var webpackConfig = require('./webpack.dev.js');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'src/app/*.spec.ts'
        ],
        proxies: {
            '/src/': 'src/app/'
        },
        preprocessors: {
            'src/app/*.spec.ts': ['webpack']
        },
        webpack: {
            module: webpackConfig.module,
            resolve: webpackConfig.resolve
        },
        port: 9876,
        colors: true,
        autoWatch: true,
        browsers: ['PhantomJS'],
        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-phantomjs-launcher',
            'karma-webpack'
        ],
        reporters: ['progress', 'dots', 'coverage'],
        singleRun: true
    })
};
