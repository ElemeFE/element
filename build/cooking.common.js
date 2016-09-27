var cooking = require('cooking');
var config = require('./config');

cooking.set({
  entry: './src/index.js',
  dist: './lib',
  clean: false,
  format: 'cjs',
  extends: ['vue2'],
  minimize: false,
  alias: config.alias,
  externals: { vue: 'vue' }
});

cooking.add('output.filename', 'element-ui.common.js');
cooking.add('loader.js.exclude', config.jsexclude);

module.exports = cooking.resolve();
