var cooking = require('cooking');
var path = require('path');

cooking.set({
  entry: './src/index.js',
  dist: './lib',
  clean: false,
  format: 'cjs',
  extends: ['vue2'],
  minimize: false,
  alias: {
    main: path.join(__dirname, '../src'),
    packages: path.join(__dirname, '../packages'),
    examples: path.join(__dirname, '../examples')
  },
  externals: { vue: 'vue' }
});

cooking.add('output.filename', 'element-ui.common.js');
cooking.add('loader.js.exclude', /node_modules|utils\/popper\.js|util\/fecha.\js/);
module.exports = cooking.resolve();
