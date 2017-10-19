import WisNav from './src/main';

/* istanbul ignore next */
WisNav.install = function(Vue) {
  Vue.component(WisNav.name, WisNav);
};

export default WisNav;
