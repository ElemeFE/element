import ElCollapse from './src/collapse';
import ElCollapseItem from './src/collapse-item.vue';

/* istanbul ignore next */
export default function install(Vue) {
  Vue.component(ElCollapseItem.name, ElCollapseItem);
  Vue.component(ElCollapse.name, ElCollapse);
};

export {
  ElCollapse,
  ElCollapseItem
};
