import Vue from 'vue';
import Element from 'main/index.js';

Vue.use(Element);

let id = 0;

const createElm = function() {
  const elm = document.createElement('div');

  elm.id = 'app' + ++id;
  document.body.appendChild(elm);

  return elm;
};

/**
 * 回收 vm
 * @param  {Object} vm
 */
export const destroyVM = function(vm) {
  vm.$destroy && vm.$destroy();
  vm.$el &&
  vm.$el.parentNode &&
  vm.$el.parentNode.removeChild(vm.$el);
};

/**
 * 创建一个 Vue 的实例对象
 * @param  {Object|String}  Compo   组件配置，可直接传 template
 * @param  {Boolean=false} mounted 是否添加到 DOM 上
 * @return {Object} vm
 */
export const createVue = function(Compo, mounted = false) {
  if (Object.prototype.toString.call(Compo) === '[object String]') {
    Compo = { template: Compo };
  }
  return new Vue(Compo).$mount(mounted === false ? null : createElm());
};

/**
 * 创建一个测试组件实例
 * @link http://vuejs.org/guide/unit-testing.html#Writing-Testable-Components
 * @param  {Object}  Compo          - 组件对象
 * @param  {Object}  propsData      - props 数据
 * @param  {Boolean=false} mounted  - 是否添加到 DOM 上
 * @return {Object} vm
 */
export const createTest = function(Compo, propsData = {}, mounted = false) {
  if (propsData === true || propsData === false) {
    mounted = propsData;
    propsData = {};
  }
  const elm = createElm();
  const Ctor = Vue.extend(Compo);
  return new Ctor({ propsData }).$mount(mounted === false ? null : elm);
};

/**
 * 触发一个事件
 * mouseenter, mouseleave, mouseover, keyup, change, click 等
 * @param  {Element} elm
 * @param  {String} name
 * @param  {*} opts
 */
export const triggerEvent = function(elm, name, ...opts) {
  let eventName;

  if (/^mouse|click/.test(name)) {
    eventName = 'MouseEvents';
  } else if (/^key/.test(name)) {
    eventName = 'KeyboardEvent';
  } else {
    eventName = 'HTMLEvents';
  }
  const evt = document.createEvent(eventName);

  evt.initEvent(name, ...opts);
  elm.dispatchEvent
    ? elm.dispatchEvent(evt)
    : elm.fireEvent('on' + name, evt);

  return elm;
};

/**
 * 触发 “mouseup” 和 “mousedown” 事件
 * @param {Element} elm
 * @param {*} opts
 */
export const triggerClick = function(elm, ...opts) {
  triggerEvent(elm, 'mousedown', ...opts);
  triggerEvent(elm, 'mouseup', ...opts);

  return elm;
};

/**
 * 触发 keydown 事件
 * @param {Element} elm
 * @param {keyCode} int
 */
export const triggerKeyDown = function(el, keyCode) {
  const evt = document.createEvent('Events');
  evt.initEvent('keydown', true, true);
  evt.keyCode = keyCode;
  el.dispatchEvent(evt);
};

/**
 * 等待 ms 毫秒，返回 Promise
 * @param {Number} ms
 */
export const wait = function(ms = 50) {
  return new Promise(resolve => setTimeout(() => resolve(), ms));
};

/**
 * 等待一个 Tick，代替 Vue.nextTick，返回 Promise
 */
export const waitImmediate = () => wait(0);
