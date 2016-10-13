const ElTabs = require('./src/tabs');

ElTabs.install = function(Vue) {
  Vue.component(ElTabs.name, ElTabs);
};

module.exports = ElTabs;
