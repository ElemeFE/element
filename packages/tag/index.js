const ElTag = require('./src/tag');

/* istanbul ignore next */
ElTag.install = function(Vue) {
  Vue.component(ElTag.name, ElTag);
};

module.exports = ElTag;
