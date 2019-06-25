import Frame from './src/main.vue';

/* istanbul ignore next */
Frame.install = function(Vue) {
  Vue.component(Frame.name, Frame);
};

export default Frame;
