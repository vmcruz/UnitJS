module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],
    files: [
      './build/unit.min.js',
      './test/helper/fixtures.js',
      './test/helper/requiredError.js',
      './test/*.spec.js',
    ],
    reporters: ['spec'],
    colors: true,
    browsers: ['ChromeHeadless'],
    specReporter: {
      supressErrorSummary: false,
      supressFailed: false,
      supressPassed: true,
      supressSkipped: true,
      showSpecTiming: true,
      failTest: true,
    },
    logLevel: config.LOG_INFO,
    singleRun: true,
  });
}