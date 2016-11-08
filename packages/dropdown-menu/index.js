import ElDropdownMenu from '../dropdown/src/dropdown-menu';

/* istanbul ignore next */
ElDropdownMenu.install = function(Vue) {
  Vue.component(ElDropdownMenu.name, ElDropdownMenu);
};

export default ElDropdownMenu;
