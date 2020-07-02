/*
 * @Author: Yang Lin
 * @Description: loading directive way
 * @Date: 2020-06-29 20:16:05
 * @LastEditTime: 2020-07-02 20:03:59
 * @FilePath: f:\sourcecode\element\packages\loading\src\directive.js
 */

import Vue from 'vue';
import LoadingVue from './main';

const LoadingContructor = Vue.extend(LoadingVue);

const loadingDirective = Object.create(null);

/**
 * 获取loading父元素
 * fullscreen 优先级高于设置target值
 * @param {String | HTMLElement} target; 目标对象
 * @param {Boolean} fullscreen; 是否全屏
 *
 * @return {HTMLElement} 返回loading父元素
 */
function getTarget(target, fullscreen = false) {
  if (fullscreen) {
    return document.body;
  }

  if (typeof target === 'string') {
    return document.querySelector(target);
  }

  if (target instanceof Vue) {
    return target.$el;
  }

  return target || document.body;
}

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
