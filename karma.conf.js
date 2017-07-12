module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: [ 'jasmine'],
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
        logLevel: config.LOG_DEBUG,
        autoWatch: config.AUTO_WATCH,
        browsers: [ 'Chrome' ],
        singleRun: true
    })
};
