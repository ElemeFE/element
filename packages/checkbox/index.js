const ElCheckbox = require('./src/checkbox');

/* istanbul ignore next */
ElCheckbox.install = function(Vue) {
  Vue.component(ElCheckbox.name, ElCheckbox);
};

module.exports = ElCheckbox;

