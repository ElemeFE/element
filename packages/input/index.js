const ElInput = require('./src/input');

ElInput.install = function(Vue) {
  Vue.component(ElInput.name, ElInput);
};

module.exports = ElInput;
