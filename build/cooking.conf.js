var cooking = require('cooking');
var config = require('./config');

cooking.set({
  entry: './src/index.js',
  dist: './lib',
  clean: false,
  format: 'umd',
  moduleName: 'ELEMENT',
  extends: ['vue2'],
  alias: config.alias,
  externals: { vue: config.externals.vue }
});

cooking.add('output.filename', 'index.js');
cooking.add('loader.js.exclude', config.jsexclude);

module.exports = cooking.resolve();
