var path = require('path');
var config = require('./config');

module.exports = function(context, moduleName, entry) {
  return {
    entry: {
      index: path.resolve(context, entry || 'index.js')
    },
    dist: path.resolve(context, 'lib'),
    template: false,
    format: 'umd',
    moduleName: moduleName,
    extends: ['vue2'],
    alias: config.alias,
    externals: { vue: config.vue }
  };
};
