module.exports = (config) => {
    config.set({
        frameworks: ['mocha', 'chai'],
        files: [
            './src/unit.js',
            './test/*.spec.js',
        ],
        reporters: ['mocha', 'coverage'],
        colors: true,
        browsers: ['ChromeHeadless'],
        singleRun: true,
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
        mochaReporter: {
            output: 'full',
            showDiff: true,
            ignoreSkipped: true,
            printFirstSuccess: true,

        },
        logLevel: config.LOG_INFO,
    });;
}