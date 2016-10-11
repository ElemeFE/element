var path = require('path');
var cooking = require('cooking');
var config = require('./config');
var projectRoot = path.resolve(__dirname, '../');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

cooking.set({
  entry: './src/index.js',
  extends: ['vue2'],
  minimize: false,
  alias: config.alias,
  postcss: config.postcss,
  sourceMap: '#inline-source-map'
});

cooking.add('vue.loaders.js', 'isparta');
cooking.add('loader.js.exclude', config.jsexclude);
cooking.add('preLoader.js', {
  test: /\.js$/,
  loader: 'isparta-loader',
  include: path.resolve(projectRoot, 'src')
});

cooking.add('plugins.process', new ProgressBarPlugin());
module.exports = cooking.resolve();
