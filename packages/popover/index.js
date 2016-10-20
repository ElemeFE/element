const Popover = require('./src/main');
const directive = require('./src/directive').default;
const Vue = require('vue');

Vue.directive('popover', directive);

/* istanbul ignore next */
Popover.install = function(Vue) {
  Vue.directive('popover', directive);
  Vue.component(Popover.name, Popover);
};
Popover.directive = directive;

module.exports = Popover;
