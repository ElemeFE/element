import ElBreadcrumb from './src/breadcrumb';
import ElBreadcrumbItem from './src/breadcrumb-item.vue';

/* istanbul ignore next */
export default function install(Vue) {
  Vue.component(ElBreadcrumbItem.name, ElBreadcrumbItem);
  Vue.component(ElBreadcrumb.name, ElBreadcrumb);
};

export {
  ElBreadcrumb,
  ElBreadcrumbItem
};
