/*
 * @Author: Yang Lin
 * @Description: loading 相关配置参数
 * @Date: 2020-07-03 20:02:42
 * @LastEditTime: 2020-07-03 20:08:08
 * @FilePath: f:\sourcecode\element\packages\loading\src\config.js
 */
import Vue from 'vue';

/**
 * 获取loading父元素
 * fullscreen 优先级高于设置target值
 * @param {String | HTMLElement} target; 目标对象
 * @param {Boolean} fullscreen; 是否全屏
 *
 * @return {HTMLElement} 返回loading父元素
 */
export function getTarget(target, fullscreen = false) {
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

export const beforeDestroyHookName = Symbol('beforeDestroyHookName');
