// Karma configuration
// Generated on Wed Sep 09 2015 13:53:45 GMT-0500 (CDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'client/lib/angular/angular.js',
      'client/lib/angular-mocks/angular-mocks.js',
      'client/lib/angular-ui-router/release/angular-ui-router.js',
      'https://cdn.auth0.com/js/lock-7.5.min.js',
      'https://cdn.rawgit.com/auth0/angular-storage/master/dist/angular-storage.js',
      'https://cdn.rawgit.com/auth0/angular-jwt/master/dist/angular-jwt.js',
      'https://cdn.auth0.com/w2/auth0-angular-4.js',

      'client/app/app.js',
      'client/app/**/*.js',
      'node_modules/expect.js/index.js',
      'client/app/spec/*.js'
    ],


    // list of files to exclude
    exclude: [
      'client/app/spec/householdControllerSpec.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  })
}