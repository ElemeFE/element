import Radio from './src/radio';
import RadioButton from './src/radio-button.vue';
import RadioGroup from './src/radio-group.vue';

/* istanbul ignore next */
export default function(Vue) {
  Vue.component(Radio.name, Radio);
  Vue.component(RadioButton.name, RadioButton);
  Vue.component(RadioGroup.name, RadioGroup);
};

export { Radio, RadioButton, RadioGroup };
