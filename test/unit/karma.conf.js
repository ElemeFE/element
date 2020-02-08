const webpackConfig = require('../../build/webpack.test');

module.exports = function(config) {
  const configuration = {
    browsers: ['ChromeHeadless', 'Chrome'],
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['spec', 'coverage', 'html'],
    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    customLaunchers: {
        Chrome_without_security: {
            base: 'Chrome',
            flags: ['--disable-web-security']
        }
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    client: {
      mocha: {
        timeout: 4000
      }
    },
    htmlReporter: {
      outputFile: '../units.html',

      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true
    }
  };

  config.set(configuration);
};
