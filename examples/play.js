import Vue from 'vue';
import Element from 'main/index.js';
import App from './play/teste.vue';
import 'packages/theme-chalk/src/index.scss';

import locale from 'element-ui/src/locale/lang/pt-br';

Vue.use(Element, { locale });

new Vue({ // eslint-disable-line
  render: h => h(App)
}).$mount('#app');
