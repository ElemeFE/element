var cooking = require('cooking');
var config = require('./config');
var path = require('path');

cooking.set({
  entry: './src/index.js',
  dist: './lib',
  clean: false,
  format: 'cjs',
  extends: ['vue2'],
  minimize: false,
  alias: config.alias,
  externals: config.externals
});

cooking.add('output.filename', 'tmconsulting-ui.common.js');
cooking.add('loader.js.exclude', config.jsexclude);
cooking.add('loader.scss', {
  test: /\.scss$/,
  loaders: ['style-loader', 'css-loader', 'sass-loader']
});
cooking.add('vue.preserveWhitespace', false);
cooking.add('loader.svg', {
  test: /\.svg$/,
  loader: 'svg-sprite-loader',
  options: {
    symbolId: filePath => {
      const prefix = 'tmc24c-icon';
      const fileName = path.basename(filePath).replace('.svg', '');
      return `${prefix}-${fileName}`;
    }
  }
});
module.exports = cooking.resolve();
