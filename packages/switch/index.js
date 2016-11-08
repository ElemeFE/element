import Switch from './src/component';

/* istanbul ignore next */
Switch.install = function(Vue) {
  Vue.component(Switch.name, Switch);
};

export default Switch;

