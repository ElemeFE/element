const ElCheckbox = require('./src/checkbox');

ElCheckbox.install = function(Vue) {
  Vue.component(ElCheckbox.name, ElCheckbox);
};

module.exports = ElCheckbox;

