var cooking = require('cooking');
var path = require('path');
var Components = require('../components.json');
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
  alias: {
    main: path.join(__dirname, '../src'),
    packages: path.join(__dirname, '../packages'),
    examples: path.join(__dirname, '../examples')
  }
});

cooking.add('output.filename', '[name]/index.js');

var externals = {};
Object.keys(Components).forEach(function(key) {
  externals[`packages/${key}/index.js`] = `element-ui/lib/${key}`;
  externals[`packages/${key}/style.css`] = `element-ui/lib/${key}/style.css`;
  externals['main/utils/clickoutside'] = 'element-ui/src/utils/clickoutside';
  externals['main/utils/popper'] = 'element-ui/src/utils/popper';
  externals['main/utils/vue-popper'] = 'element-ui/src/utils/vue-popper';
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
