import Radio from './src/radio';

/* istanbul ignore next */
Radio.install = function(Vue) {
  Vue.component(Radio.name, Radio);
};

export default Radio;
