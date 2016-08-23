const ElMenuItemGroup = require('../menu/src/menu-item-group');

ElMenuItemGroup.install = function(Vue) {
  Vue.component(ElMenuItemGroup.name, ElMenuItemGroup);
};

module.exports = ElMenuItemGroup;
