import ValueSwitcher from './src/value-switcher';

/* istanbul ignore next */
ValueSwitcher.install = function(Vue) {
  Vue.component(ValueSwitcher.name, ValueSwitcher);
};

export default ValueSwitcher;
