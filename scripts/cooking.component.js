var cooking = require('cooking');
var path = require('path');
var Components = require('../components.json');

cooking.set({
  entry: Components.map(function (compo) {
    compo[0] = path.join(process.cwd(), compo[0]);
    return compo;
  }),
  dist: './lib',
  clean: true,
  template: false,
  format: 'umd',
  moduleName: ['ELEMENT', '[name]'],
  extractCSS: '[name]/style.css',
  extends: ['vue']
});

cooking.add('output.filename', '[name]/index.js');

cooking.add('resolve.alias', {
  'main': path.join(__dirname, '../src'),
  'packages': path.join(__dirname, '../packages'),
  'examples': path.join(__dirname, '../examples')
});

var externals = {};
Object.keys(Components).forEach(function(key) {
  externals[`packages/${key}/index.js`] = {
    root: `ELEMENT.${key}`,
    commonjs: `element-ui/lib/${key}`,
    commonjs2: `element-ui/lib/${key}`,
    amd: `element-ui/lib/${key}`
  };
  externals[`packages/${key}/style.css`] = {
    root: `ELEMENT.${key}/style.css`,
    commonjs: `element-ui/lib/${key}/style.css`,
    commonjs2: `element-ui/lib/${key}/style.css`,
    amd: `element-ui/lib/${key}/style.css`
  };
});

cooking.add('externals', Object.assign({
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
}, externals));

cooking.add('loader.js.exclude', /node_modules|utils\/popper\.js|util\/fecha.\js/);

module.exports = cooking.resolve();
