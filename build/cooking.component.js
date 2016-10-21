var cooking = require('cooking');
var Components = require('../components.json');
var config = require('./config');

cooking.set({
  entry: Components,
  dist: './lib',
  clean: false,
  format: 'cjs',
  extends: ['vue2'],
  minimize: false,
  externals: config.externals,
  alias: config.alias
});

cooking.add('output.filename', '[name]/index.js');
cooking.add('loader.js.exclude', config.jsexclude);
cooking.add('vue.preserveWhitespace', false);
module.exports = cooking.resolve();
