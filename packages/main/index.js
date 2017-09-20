import Main from './src/main';

/* istanbul ignore next */
Main.install = function(Vue) {
  Vue.component(Main.name, Main);
};

export default Main;
