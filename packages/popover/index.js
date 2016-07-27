const Popover = require('./src/main');

Popover.install = function(Vue) {
  Vue.component(Popover.name, Popover);
};

module.exports = Popover;
