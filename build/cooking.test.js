var cooking = require('cooking');
var config = require('./config');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var jsLoader = process.env.CI_ENV ? 'isparta-loader' : 'isparta-loader!eslint-loader';

cooking.set({
  entry: './src/index.js',
  extends: process.env.CI_ENV ? ['vue2'] : ['vue2', 'lint'],
  minimize: false,
  alias: Object.assign(config.alias, {
    'vue$': 'vue/dist/vue.js'
  }),
  postcss: config.postcss,
  sourceMap: '#inline-source-map'
});

cooking.add('vue.loaders.js', jsLoader);
cooking.add('loader.js.exclude', config.jsexclude);
cooking.add('preLoader.0', {
  test: /\.js$/,
  loader: 'isparta',
  exclude: config.jsexclude,
  include: /src|packages/
});

if (!process.env.CI_ENV) {
  cooking.add('plugins.process', new ProgressBarPlugin());
}
cooking.add('vue.preserveWhitespace', false);
module.exports = cooking.resolve();
