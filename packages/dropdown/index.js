const ElDropdown = require('./src/dropdown');

ElDropdown.install = function(Vue) {
  Vue.component(ElDropdown.name, ElDropdown);
};

module.exports = ElDropdown;
