import ElCheckbox from './src/checkbox';
import ElCheckboxGroup from './src/checkbox-group.vue';

/* istanbul ignore next */
export default function install(Vue) {
  Vue.component(ElCheckboxGroup.name, ElCheckboxGroup);
  Vue.component(ElCheckbox.name, ElCheckbox);
};

export {
  ElCheckbox,
  ElCheckboxGroup
};
