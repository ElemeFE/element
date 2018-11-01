import Popover from '../popover/src/main.vue';
import Input from '../input/src/input.vue';
import DatePicker from '../date-picker/src/picker/date-picker.js';
import AdvancedDatePicker from './src/main.vue';

/* istanbul ignore next */
export default function install(Vue) {
  Vue.component(Popover.name, Popover);
  Vue.component(Input.name, Input);
  Vue.component(DatePicker.name, DatePicker);
  Vue.component(AdvancedDatePicker.name, AdvancedDatePicker);
};

export { DatePicker, Input, Popover, AdvancedDatePicker};
