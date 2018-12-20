import ContentSwitchGroup from '../content-switch/src/content-switch-group';

/* istanbul ignore next */
ContentSwitchGroup.install = function(Vue) {
  Vue.component(ContentSwitchGroup.name, ContentSwitchGroup);
};

export default ContentSwitchGroup;
