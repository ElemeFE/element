import Vue from 'vue';
import Element from '../src';
import entry from './app';
import 'packages/theme-chalk/src/index.scss';

Vue.use(Element);

new Vue({ // eslint-disable-line
  ...entry
}).$mount('#app');
