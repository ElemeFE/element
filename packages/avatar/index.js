import Avatar from './src/main';

/* istanbul ignore next */
Avatar.install = function(Vue) {
  Vue.component(Avatar.name, Avatar);
};

export default Avatar;
