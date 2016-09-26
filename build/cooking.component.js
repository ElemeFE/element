var cooking = require('cooking');
var path = require('path');
var Components = require('../components.json');
var config = require('./config');
var entries = {};

Object.keys(Components).forEach(function(key) {
  const compo = Components[key];

  compo[0] = path.join(process.cwd(), compo[0]);
  entries[key] = compo;
});

cooking.set({
  entry: entries,
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
module.exports = cooking.resolve();
