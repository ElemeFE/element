const ElTabs = require('./src/tabs');

/* istanbul ignore next */
ElTabs.install = function(Vue) {
  Vue.component(ElTabs.name, ElTabs);
};

module.exports = ElTabs;
