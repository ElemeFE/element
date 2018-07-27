import CircularCountdown from './src/main';

/* istanbul ignore next */
CircularCountdown.install = function(Vue) {
  Vue.component(CircularCountdown.name, CircularCountdown);
};

export default CircularCountdown;
