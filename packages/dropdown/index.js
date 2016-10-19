const ElDropdown = require('./src/dropdown');

/* istanbul ignore next */
ElDropdown.install = function(Vue) {
  Vue.component(ElDropdown.name, ElDropdown);
};

module.exports = ElDropdown;
