var path = require('path');
var cooking = require('cooking');
var config = require('./config');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

cooking.set({
  entry: './src/index.js',
  extends: ['vue2', 'lint'],
  minimize: false,
  alias: config.alias,
  postcss: config.postcss,
  sourceMap: '#inline-source-map'
});

cooking.add('vue.loaders.js', 'isparta-loader!eslint-loader');
cooking.add('loader.js.exclude', config.jsexclude);
cooking.add('preLoader.js', {
  test: /\.js$/,
  loader: 'isparta-loader!eslint-loader',
  exclude: config.jsexclude
});

cooking.add('plugins.process', new ProgressBarPlugin());
module.exports = cooking.resolve();
