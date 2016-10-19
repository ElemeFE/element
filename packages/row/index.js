const ElRow = require('./src/row');

/* istanbul ignore next */
ElRow.install = function(Vue) {
  Vue.component(ElRow.name, ElRow);
};

module.exports = ElRow;

