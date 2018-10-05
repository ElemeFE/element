import ElSidebarGroup from '../sidebar/src/sidebarGroup';

/* istanbul ignore next */
ElSidebarGroup.install = function(Vue) {
  Vue.component(ElSidebarGroup.name, ElSidebarGroup);
};

export default ElSidebarGroup;
