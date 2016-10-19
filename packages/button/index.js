const ElButton = require('./src/button');
const ElButtonGroup = require('./src/button-group');

/* istanbul ignore next */
ElButton.install = function(Vue) {
  Vue.component(ElButton.name, ElButton);
  Vue.component(ElButtonGroup.name, ElButtonGroup);
};

module.exports = ElButton;
