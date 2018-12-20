import ContentSwitchOption from '../content-switch/src/content-switch-option';

/* istanbul ignore next */
ContentSwitchOption.install = function (Vue) {
  Vue.component(ContentSwitchOption.name, ContentSwitchOption);
};

export default ContentSwitchOption;
