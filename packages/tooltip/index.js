const Tooltip = require('./src/main');

Tooltip.install = function(Vue) {
  Vue.component(Tooltip.name, Tooltip);
};

module.exports = Tooltip;
