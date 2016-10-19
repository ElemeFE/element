const ElTable = require('./src/table');

/* istanbul ignore next */
ElTable.install = function(Vue) {
  Vue.component(ElTable.name, ElTable);
};

module.exports = ElTable;
