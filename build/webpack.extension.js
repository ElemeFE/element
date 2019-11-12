const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const demoConfig = require('./webpack.demo');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

demoConfig.entry = {
  background: path.join(process.cwd(), './examples/extension/src/background'),
  entry: path.join(process.cwd(), './examples/extension/src/entry')
};
demoConfig.output = {
  path: path.join(process.cwd(), './examples/extension/dist'),
  filename: '[name].js'
};
demoConfig.plugins = [
  new CopyWebpackPlugin([
    { from: 'examples/extension/src/manifest.json' },
    { from: 'examples/extension/src/icon.png' }
  ]),
  new VueLoaderPlugin(),
  new ProgressBarPlugin(),
  new webpack.LoaderOptionsPlugin({
    vue: {
      compilerOptions: {
        preserveWhitespace: false
      }
    }
  }),
  new webpack.HotModuleReplacementPlugin()
];
demoConfig.module.rules.find(a => a.loader === 'url-loader').query = {};
module.exports = demoConfig;
