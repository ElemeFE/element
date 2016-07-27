const ElMenu = require('./src/menu');

ElMenu.install = function(Vue) {
  Vue.component(ElMenu.name, ElMenu);
};

module.exports = ElMenu;
