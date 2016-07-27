const TabPane = require('../tabs/src/tab-pane.vue');

TabPane.install = function(Vue) {
  Vue.component(TabPane.name, TabPane);
};

module.exports = TabPane;
