import Popover from './src/main';
import directivePopover from './src/directive';
import directiveClose from './src/close';
import Vue from 'vue';

Vue.directive('popover', directivePopover);
Vue.directive('popoverClose', directiveClose);

/* istanbul ignore next */
Popover.install = function(Vue) {
  Vue.directive('popover', directivePopover);
  Vue.directive('popoverClose', directiveClose);
  Vue.component(Popover.name, Popover);
};

export default Popover;
