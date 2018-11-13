module.exports = (config) => {
    config.set({
        frameworks: ['jasmine'],
        files: [
            './src/unit.js',
            './test/*.spec.js',
        ],
        reporters: ['spec', 'coverage'],
        colors: true,
        preprocessors: {
            './src/*.js': 'coverage',
        },
        coverageReporter: {
            dir: './build/coverage',
            reporters: [
                { type: 'html', subdir: 'html' },
                { type: 'text' },
            ]
        },
        specReporter: {
            supressErrorSummary: false,
            supressFailed: false,
            supressPassed: false,
            supressSkipped: false,
            showSpecTiming: true,
            failTest: true,
        },
        logLevel: config.LOG_INFO,
        singleRun: true,
    });
}