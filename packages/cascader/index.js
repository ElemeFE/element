const ElCascader = require('./src/cascader');

ElCascader.install = function(Vue) {
  Vue.component(ElCascader.name, ElCascader);
};

module.exports = ElCascader;
