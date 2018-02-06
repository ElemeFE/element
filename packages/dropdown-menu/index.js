import TmDropdownMenu from '../dropdown/src/dropdown-menu';

/* istanbul ignore next */
TmDropdownMenu.install = function(Vue) {
  Vue.component(TmDropdownMenu.name, TmDropdownMenu);
};

export default TmDropdownMenu;
