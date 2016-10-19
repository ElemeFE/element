const ElInputNumber = require('./src/input-number');

/* istanbul ignore next */
ElInputNumber.install = function(Vue) {
  Vue.component(ElInputNumber.name, ElInputNumber);
};

module.exports = ElInputNumber;
