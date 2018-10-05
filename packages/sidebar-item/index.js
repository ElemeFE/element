import ElSidebarItem from '../sidebar/src/sidebarItem';

/* istanbul ignore next */
ElSidebarItem.install = function(Vue) {
  Vue.component(ElSidebarItem.name, ElSidebarItem);
};

export default ElSidebarItem;
