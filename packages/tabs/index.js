const ElTabs = require('./src/tabs');
const ElTabPane = require('./src/tab-pane');

ElTabs.install = function(Vue) {
  Vue.component(ElTabs.name, ElTabs);
  Vue.component(ElTabPane.name, ElTabPane);
};

module.exports = ElTabs;
