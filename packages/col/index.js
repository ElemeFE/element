const ElCol = require('./src/col');

/* istanbul ignore next */
ElCol.install = function(Vue) {
  Vue.component(ElCol.name, ElCol);
};

module.exports = ElCol;

