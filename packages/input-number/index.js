const ElInputNumber = require('./src/input-number');

ElInputNumber.install = function(Vue) {
  Vue.component(ElInputNumber.name, ElInputNumber);
};

module.exports = ElInputNumber;
