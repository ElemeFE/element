import ElCollapse from './src/collapse';
import ElCollapsePanel from './src/collapse-panel.vue';

/* istanbul ignore next */
export default function install(Vue) {
  Vue.component(ElCollapsePanel.name, ElCollapsePanel);
  Vue.component(ElCollapse.name, ElCollapse);
};

export {
  ElCollapse,
  ElCollapsePanel
};
