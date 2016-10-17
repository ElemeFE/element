var Components = require('../components.json');
var path = require('path');
var externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`element-ui/packages/${key}/index.js`] = `element-ui/lib/${key}`;
  externals[`element-ui/packages/${key}/style.css`] = `element-ui/lib/${key}/style.css`;
});

externals['element-ui/src/utils/clickoutside'] = 'element-ui/lib/utils/clickoutside';
externals['element-ui/src/utils/popper'] = 'element-ui/lib/utils/popper';
externals['element-ui/src/utils/vue-popper'] = 'element-ui/lib/utils/vue-popper';
externals['vue-popup'] = 'vue-popup';

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
  examples: path.resolve(__dirname, '../examples'),
  'element-ui': path.resolve(__dirname, '../')
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date.\js/;

exports.postcss = function(webapck) {
  return [
    require('postcss-salad')({
      browser: ['ie > 8', 'last 2 version'],
      features: {
        'partialImport': {
          addDependencyTo: webapck
        },
        'bem': {
          'shortcuts': {
            'component': 'b',
            'modifier': 'm',
            'descendent': 'e'
          },
          'separators': {
            'descendent': '__',
            'modifier': '--'
          }
        }
      }
    })
  ];
};
