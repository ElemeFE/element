import './public-path';
import Vue from 'vue';
import entry from './app';
import VueRouter from 'vue-router';
import Element from 'main/index.js';
import hljs from 'highlight.js';
import routes from './route.config';
import demoBlock from './components/demo-block';
import RightNav from './components/right-nav';
import MainFooter from './components/footer';
import MainHeader from './components/header';
import SideNav from './components/side-nav';
import FooterNav from './components/footer-nav';
import title from './i18n/title';

import 'packages/theme-chalk/src/index.scss';
import './demo-styles/index.scss';
import './assets/styles/common.css';
import './assets/styles/fonts/style.css';
import icon from './icon.json';

let router = null;
let instance = null;
function render(props = {}) {
  Vue.use(Element);
  Vue.use(VueRouter);
  Vue.component('demo-block', demoBlock);
  Vue.component('main-footer', MainFooter);
  Vue.component('main-header', MainHeader);
  Vue.component('side-nav', SideNav);
  Vue.component('footer-nav', FooterNav);
  Vue.component('right-nav', RightNav);

  const globalEle = new Vue({
    data: {
      $isEle: false // 是否 ele 用户
    }
  });

  Vue.mixin({
    computed: {
      $isEle: {
        get: () => (globalEle.$data.$isEle),
        set: (data) => {globalEle.$data.$isEle = data;}
      },
      $isQianKun() {
        return window.__POWERED_BY_QIANKUN__;
      }
    }
  });

  Vue.prototype.$icon = icon; // Icon 列表页用
  const { container } = props;

  router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes
  });

  router.afterEach(route => {
    // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
    Vue.nextTick(() => {
      const blocks = document.querySelectorAll('pre code:not(.hljs)');
      Array.prototype.forEach.call(blocks, hljs.highlightBlock);
    });
    const data = title[route.meta.lang];
    for (let val in data) {
      if (new RegExp('^' + val, 'g').test(route.name)) {
        document.title = data[val];
        return;
      }
    }
    document.title = 'Element';
    // ga('send', 'event', 'PageView', route.name);
  });

  instance = new Vue({ // eslint-disable-line
    ...entry,
    router
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export function bootstrap() {
  return window.Promise.resolve();
}
export function mount(props) {
  render(props);
  return window.Promise.resolve();
}
export function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
  return window.Promise.resolve();
}
