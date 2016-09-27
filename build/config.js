var Components = require('../components.json');
var path = require('path');
var externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`packages/${key}/index.js`] = `element-ui/lib/${key}`;
  externals[`packages/${key}/style.css`] = `element-ui/lib/${key}/style.css`;
  externals['main/utils/clickoutside'] = 'element-ui/lib/utils/clickoutside';
  externals['main/utils/popper'] = 'element-ui/lib/utils/popper';
  externals['main/utils/vue-popper'] = 'element-ui/lib/utils/vue-popper';
});

exports.externals = Object.assign({
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
}, externals);

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples')
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date.\js/;
