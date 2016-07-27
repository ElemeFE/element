const ElTableColumn = require('../table/src/table-column');

ElTableColumn.install = function(Vue) {
  Vue.component(ElTableColumn.name, ElTableColumn);
};

module.exports = ElTableColumn;
