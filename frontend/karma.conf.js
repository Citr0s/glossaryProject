var webpackConfig = require('./webpack.dev.js');

module.exports = function(config) {
    config.set({
        basePath: '.',
        frameworks: ['jasmine'],
        files: [
            {
                pattern: 'src/app/*.spec.ts', 
                included: false,
                watched: false
            }
        ],
        proxies: {
            // required for component assests fetched by Angular's compiler
            '/src/': 'src/app/'
        },
        preprocessors: {
            '**/*.spec.ts': ['webpack']
        },
        webpackMiddleware: {
            stats: 'errors-only'
        },
        webpack: webpackConfig,
        port: 9876,
        colors: true,
        autoWatch: true,
        browsers: ['Chrome'],
        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-chrome-launcher',
            'karma-webpack'
        ],
        reporters: ['progress', 'dots', 'coverage'],
        singleRun: true
    })
};
