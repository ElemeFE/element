import ElDropdown from './src/dropdown';
import ElDropdownMenu from './src/dropdown-menu.vue';
import ElDropdownItem from './src/dropdown-item.vue';

/* istanbul ignore next */
export default function install(Vue) {
  Vue.component(ElDropdown.name, ElDropdown);
  Vue.component(ElDropdownMenu.name, ElDropdownMenu);
  Vue.component(ElDropdownItem.name, ElDropdownItem);
};

export {
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem
};
