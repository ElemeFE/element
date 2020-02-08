import Vue from 'vue';
import ProgressBar from './progress.vue';

Vue.prototype.$bar = new Vue(ProgressBar).$mount();

document.body.appendChild(Vue.prototype.$bar.$el);
