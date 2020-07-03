/*
 * @Author: Yang Lin
 * @Description: loading directive way
 * @Date: 2020-06-29 20:16:05
 * @LastEditTime: 2020-07-03 20:17:54
 * @FilePath: f:\sourcecode\element\packages\loading\src\directive.js
 */

import Vue from 'vue';
import LoadingVue from './main';
import {
  getTarget
} from './config';

const LoadingContructor = Vue.extend(LoadingVue);
const loadingDirective = Object.create(null);

loadingDirective.install = vue => {
  if (vue.prototype.$isServer) {
    return ;
  }

  vue.directive('loading', {
    bind(el, binding) {
      const {
        modifiers: {
          lock,
          fullscreen
        },
        value: visible
      } = binding;

      const div = document.createElement('div');
      const target = getTarget(el, fullscreen);
      target.appendChild(div);
      el.instance = new LoadingContructor({
        propsData: {
          visible,
          target,
          lock,
          fullscreen,
          text: el.getAttribute('element-loading-text'),
          spinner: el.getAttribute('element-loading-spinner'),
          background: el.getAttribute('element-loading-background'),
          customClass: el.getAttribute('element-loading-custom-class')
        }
      }).$mount(div);
    },
    update(el, binding) {
      const {
        value,
        oldValue
      } = binding;
      if (oldValue !== value) {
        el.instance.visible = value;
      }
    },
    unbind(el) {
      el.instance.$destroy();
    }
  });
};

export default loadingDirective;
