import Timeline from './src/main';

/* istanbul ignore next */
Timeline.install = function(Vue) {
  Vue.component(Timeline.name, Timeline);
};

export default Timeline;
