module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: [ 'jasmine', 'karma-typescript'],
        files: [
            {pattern: 'node_modules/zone.js/dist/zone.js', included: true, watched: false},

            {pattern: 'src/app/**/*.ts', included: true, watched: true},
            {pattern: 'src/test/**/*.ts', included: true, watched: true}
        ],
        client:{
            clearContext: false
        },
        preprocessors: {
            'src/test/**/*.ts': ['karma-typescript'],
            'src/app/**/*.ts': ['karma-typescript']
        },
        reporters: ['progress', 'karma-typescript'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: config.AUTO_WATCH,
        browsers: [ 'Chrome' ],
        singleRun: true,
        concurrency: Infinity
    })
};
