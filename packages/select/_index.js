import Select from './src/select';
import Option from './src/option';
import OptionGroup from './src/option-group';

/* istanbul ignore next */
export default function(Vue) {
  Vue.component(Select.name, Select);
  Vue.component(Option.name, Option);
  Vue.component(OptionGroup.name, OptionGroup);
};

export { Select, Option, OptionGroup };
