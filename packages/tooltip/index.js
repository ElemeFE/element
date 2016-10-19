const Tooltip = require('./src/main');

/* istanbul ignore next */
Tooltip.install = function(Vue) {
  Vue.component(Tooltip.name, Tooltip);
};

module.exports = Tooltip;
