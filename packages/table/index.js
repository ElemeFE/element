const ElTable = require('./src/table');

ElTable.install = function(Vue) {
  Vue.component(ElTable.name, ElTable);
};

module.exports = ElTable;
