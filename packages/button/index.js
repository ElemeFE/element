import TmButton from './src/button';

/* istanbul ignore next */
TmButton.install = function(Vue) {
  Vue.component(TmButton.name, TmButton);
};

export default TmButton;
