const ElInput = require('./src/input');

/* istanbul ignore next */
ElInput.install = function(Vue) {
  Vue.component(ElInput.name, ElInput);
};

module.exports = ElInput;
