var webpackConfig = require('./webpack.test.js');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'karma.entry.js'
        ],
        proxies: {
            '/src/': 'src/app/'
        },
        preprocessors: {
            'karma.entry.js': ['webpack']
        },
        webpack: {
            module: webpackConfig.module,
            resolve: webpackConfig.resolve
        },
        port: 9876,
        colors: true,
        autoWatch: true,
        browsers: ['PhantomJS'],
        reporters: ['progress', 'dots', 'coverage'],
        singleRun: true
    })
};
