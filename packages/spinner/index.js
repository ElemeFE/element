const ElSpinner = require('./src/spinner');

/* istanbul ignore next */
ElSpinner.install = function(Vue) {
  Vue.component(ElSpinner.name, ElSpinner);
};

module.exports = ElSpinner;
