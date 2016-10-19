const ElTabs = require('./src/tabs');
const ElTabPane = require('./src/tab-pane');

/* istanbul ignore next */
module.exports = function(Vue) {
  Vue.component(ElTabs.name, ElTabs);
  Vue.component(ElTabPane.name, ElTabPane);
};

exports.ElTabs = ElTabs;
exports.ElTabPane = ElTabPane;
