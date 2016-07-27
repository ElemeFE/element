const ElInput = require('./src/input');
const ElInputGroup = require('./src/input-group');

ElInput.install = function(Vue) {
  Vue.component(ElInput.name, ElInput);
  Vue.component(ElInputGroup.name, ElInputGroup);
};

module.exports = ElInput;
