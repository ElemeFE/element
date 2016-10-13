const ElRow = require('./src/row');

ElRow.install = function(Vue) {
  Vue.component(ElRow.name, ElRow);
};

module.exports = ElRow;

