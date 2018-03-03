var cooking = require('cooking');
var config = require('./config');

// var SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin')

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
cooking.add('loader.svgSpriteLoader', {
  test: /\.svg$/,
  loaders: [
    'svg-sprite-loader',
    'svgo-loader'
  ]
});
// cooking.add('plugin.SVGSpritemapPlugin', new SVGSpritemapPlugin({
//   src: './packages/theme-chalk/src/icons/**/*.svg',
//   prefix: 'icon-',
//   svgo: {
//     removeTitle: true
//   },
//   filename: 'svg/spritemap.svg'
// }));
module.exports = cooking.resolve();
