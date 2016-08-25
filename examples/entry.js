import Vue from 'vue';
import entry from './app';
import VueRouter from 'vue-router';
import configRouter from './route.config';
import Element from 'main/index.js';
import 'packages/theme-default/src/index.css';
import demoBlock from './components/demo-block.vue';
import MainFooter from './components/footer.vue';
import MainHeader from './components/header.vue';
import SideNav from './components/side-nav';

Vue.use(Element);
Vue.use(VueRouter);
Vue.component('demo-block', demoBlock);
Vue.component('main-footer', MainFooter);
Vue.component('main-header', MainHeader);
Vue.component('side-nav', SideNav);

const router = new VueRouter({
  base: __dirname,
  routes: configRouter
});

new Vue({ // eslint-disable-line
  render: h => h(entry),
  router
}).$mount('#app');
