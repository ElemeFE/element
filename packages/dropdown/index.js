import ElDropdown from './src/dropdown';

/* istanbul ignore next */
ElDropdown.install = function(Vue) {
  Vue.component(ElDropdown.name, ElDropdown);
};

export default ElDropdown;
