var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var Components = require('../components.json');
var saladConfig = require('./salad.config.json');

var utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));
var mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'));
var transitionList = fs.readdirSync(path.resolve(__dirname, '../src/transitions'));
var externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`tmconsulting-ui/packages/${key}`] = `tmconsulting-ui/lib/${key}`;
});

externals['tmconsulting-ui/src/locale'] = 'tmconsulting-ui/lib/locale';
utilsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`tmconsulting-ui/src/utils/${file}`] = `tmconsulting-ui/lib/utils/${file}`;
});
mixinsList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`tmconsulting-ui/src/mixins/${file}`] = `tmconsulting-ui/lib/mixins/${file}`;
});
transitionList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[`tmconsulting-ui/src/transitions/${file}`] = `tmconsulting-ui/lib/transitions/${file}`;
});

externals = [Object.assign({
  vue: 'vue',
  'svg-sprite-loader': 'svg-sprite-loader'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  'tmconsulting-ui': path.resolve(__dirname, '../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date.\js/;

exports.postcss = function(webpack) {
  saladConfig.features.partialImport = {
    addDependencyTo: webpack
  };
  return [
    require('postcss-salad')(saladConfig)
  ];
};