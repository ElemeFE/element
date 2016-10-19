const ElMenu = require('./src/menu');

/* istanbul ignore next */
ElMenu.install = function(Vue) {
  Vue.component(ElMenu.name, ElMenu);
};

module.exports = ElMenu;
