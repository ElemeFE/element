var cooking = require('cooking');
var path = require('path');
var config = require('../../build/config');

cooking.set({
  entry: {
    index: path.join(__dirname, 'index.js')
  },
  dist: path.join(__dirname, 'lib'),
  template: false,
  format: 'umd',
  moduleName: 'ElRate',
  extends: ['vue2'],
  alias: config.alias,
  externals: { vue: config.vue }
});

module.exports = cooking.resolve();
