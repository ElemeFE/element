const SelectDropdown = require('./src/select-dropdown.vue');

SelectDropdown.install = function(Vue) {
  Vue.component(SelectDropdown.name, SelectDropdown);
};

module.exports = SelectDropdown;
