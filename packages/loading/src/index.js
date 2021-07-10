/*
 * @Author: Yang Lin
 * @Description: loading serve way
 * @Date: 2020-06-29 20:16:20
 * @LastEditTime: 2020-07-03 20:17:26
 * @FilePath: f:\sourcecode\element\packages\loading\src\index.js
 */

import Vue from 'vue';
import LoadingVue from './main';
import {
  getTarget,
  beforeDestroyHookName
} from './config';

const LoadingConstructor = Vue.extend(LoadingVue);

let fullscreenLoading = null;

LoadingConstructor.prototype[beforeDestroyHookName] = function() {
  fullscreenLoading = null;
};

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
