module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: [ 'jasmine', 'mocha', 'chai'],
        files: [
            'src/test/*.js'
        ],
        client:{
            clearContext: false
        },
        preprocessors: { },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: config.AUTO_WATCH,
        browsers: [ 'Chrome', 'PhantomJS' ],
        singleRun: true
    })
};
