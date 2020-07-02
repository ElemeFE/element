/*
 * @Author: Yang Lin
 * @Description: loading serve way
 * @Date: 2020-06-29 20:16:20
 * @LastEditTime: 2020-07-01 20:50:01
 * @FilePath: f:\sourcecode\element\packages\loading\src\index.js
 */

import Vue from 'vue';
import LoadingVue from './main';

const LoadingConstructor = Vue.extend(LoadingVue);

let fullscreenLoading = null;

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

export default function(options = {
  fullscreen: false
}) {
  if (Vue.prototype.$isServer) {
    return ;
  }

  if (Object.prototype.toString.call(options) !== '[object Object]') {
    throw new Error('Options must be object');
  }

  const fullscreen = options.fullscreen || false;
  if (fullscreenLoading && fullscreen) {
    Object.assign(fullscreenLoading, options, {
      visible: true
    });
    return fullscreenLoading;
  }

  // mounted loading
  const target = getTarget(options.target, fullscreen);
  const div = document.createElement('div');
  target.appendChild(div);
  const instance = new LoadingConstructor({
    propsData: Object.assign(options, {
      visible: true,
      target
    })
  }).$mount(div);

  if (fullscreen) {
    // Singleton loading
    fullscreenLoading = instance;
  }

  return instance;
}
