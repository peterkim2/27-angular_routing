const webpackconfig = require('./webpack.config.js');
webpackconfig.entry = {};

module.exports = function(config) {
  config.set({
    webpack: webpackconfig,
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'test/**/*-test.js'
    ],

    exclude: [
    ],

    preprocessors: {
      'test/**/*-test.js': ['webpack']
    },


    reporters: ['mocha'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false,

    concurrency: Infinity
  });
};
