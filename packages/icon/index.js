import TmIcon from './src/icon.vue';

// What's wrong?
var __svg__ = { path: './svgs/*.svg', name: '[hash].sprite.svg' };
require('../../node_modules/webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);

/* istanbul ignore next */
TmIcon.install = function(Vue) {
  Vue.component(TmIcon.name, TmIcon);
};

export default TmIcon;
