import Vue from 'vue';
import entry from './app';
import VueRouter from 'vue-router';
import configRouter from './route.config';
import Element from 'main/index.js';
import 'packages/theme-default/src/index.css';

// test Released package
// import Element from '../lib/index.js';
// import '../lib/theme-default/index.css';

Vue.use(Element);
Vue.use(VueRouter);

const router = new VueRouter();
const app = Vue.extend({
  template: '<entry></entry>',
  components: { entry }
});

configRouter(router);
router.start(app, 'app');

router.afterEach(() => {
  document.body.scrollTop = 0;
});
