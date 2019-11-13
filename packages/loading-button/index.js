import LoadingButton from './src/main';

/* istanbul ignore next */
LoadingButton.install = function(Vue) {
  Vue.component(LoadingButton.name, LoadingButton);
};

export default LoadingButton;
