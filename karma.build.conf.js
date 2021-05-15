module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],
    files: [
      './build/unit.min.js',
      './src/test/helper/fixtures.js',
      './src/test/helper/requiredError.js',
      './src/test/**/*.spec.js',
    ],
    reporters: ['spec'],
    colors: true,
    browsers: ['ChromeHeadless'],
    specReporter: {
      suppressErrorSummary: true,
      suppressFailed: false,
      suppressPassed: true,
      suppressSkipped: true,
      showSpecTiming: true,
      failTest: true,
    },
    logLevel: config.LOG_INFO,
    singleRun: true,
  });
};
