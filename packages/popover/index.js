const Popover = require('./src/main');

/* istanbul ignore next */
Popover.install = function(Vue) {
  Vue.component(Popover.name, Popover);
};

module.exports = Popover;
