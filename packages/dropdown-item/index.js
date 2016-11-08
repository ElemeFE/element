import ElDropdownItem from '../dropdown/src/dropdown-item';

/* istanbul ignore next */
ElDropdownItem.install = function(Vue) {
  Vue.component(ElDropdownItem.name, ElDropdownItem);
};

export default ElDropdownItem;
