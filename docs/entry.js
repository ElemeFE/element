import Vue from 'vue';
import entry from './app';
import 'packages/theme-chalk/src/index.scss';

Vue.use(Element);

new Vue({ // eslint-disable-line
  render: h => h(entry)
}).$mount('#app');
