import Radio from './src/radio';

/* istanbul ignore next */
Radio.install = function(Vue) {
  Vue.component('el-radio', Radio);
};

export default Radio;
