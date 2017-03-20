import Office from './src/Office.vue';

/* istanbul ignore next */
Office.install = function(Vue) {
  Vue.component('el-office', Office);
};

export default Office;
