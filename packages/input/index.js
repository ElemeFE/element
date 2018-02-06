import TmInput from './src/input';

/* istanbul ignore next */
TmInput.install = function(Vue) {
  Vue.component(TmInput.name, TmInput);
};

export default TmInput;
