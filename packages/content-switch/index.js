import ContentSwitch from './src/content-switch.vue';

/* istanbul ignore next */
ContentSwitch.install = function install (Vue) {
  Vue.component(ContentSwitch.name, ContentSwitch);
};

export default ContentSwitch;
