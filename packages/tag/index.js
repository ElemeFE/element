const ElTag = require('./src/tag');

ElTag.install = function(Vue) {
  Vue.component(ElTag.name, ElTag);
};

module.exports = ElTag;
