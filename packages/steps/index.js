import Steps from './src/steps';

/* istanbul ignore next */
Steps.install = function(Vue) {
  Vue.component(Steps.name, Steps);
};

export default Steps;
