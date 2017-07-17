module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'karma-typescript'],
        files: [
            // System.js for module loading
            'node_modules/systemjs/dist/system.src.js',

            // Polyfills
            'node_modules/core-js/client/shim.js',

            // Zone.js
            'node_modules/zone.js/dist/zone.js',
            'node_modules/zone.js/dist/long-stack-trace-zone.js',
            'node_modules/zone.js/dist/proxy.js',
            'node_modules/zone.js/dist/sync-test.js',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'node_modules/zone.js/dist/async-test.js',
            'node_modules/zone.js/dist/fake-async-test.js',

            // RxJs
            { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

            // Angular
            {pattern: 'node_modules/@angular/**/*.js', included: false, watched: false},
            {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false},

            {pattern: 'src/app/**/*.ts', included: true, watched: true},
            {pattern: 'src/test/**/*.ts', included: true, watched: true},

            {pattern: 'src/css/**/*.css', included: false, watched: true},
            {pattern: 'src/templates/**/*.html', included: false, watched: true},

            {pattern: 'src/systemjs.config.js', included: true, watched: true}
        ],
        client: {
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
        browsers: ['Chrome'],
        singleRun: true,
        concurrency: Infinity
    })
};