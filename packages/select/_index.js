import ElSelect from './src/select';
import ElOption from './src/option';
import ElOptionGroup from './src/option-group';

/* istanbul ignore next */
export default function(Vue) {
  Vue.component(ElSelect.name, ElSelect);
  Vue.component(ElOption.name, ElOption);
  Vue.component(ElOptionGroup.name, ElOptionGroup);
};

export { ElSelect, ElOption, ElOptionGroup };
