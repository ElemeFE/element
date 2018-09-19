import Help from './src/main';

/* istanbul ignore next */
Help.install = function(Vue) {
  Vue.component(Help.name, Help);
};

export default Help;
