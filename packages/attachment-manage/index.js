import Attachments from './src';

/* istanbul ignore next */
Attachments.install = function(Vue) {
  Vue.component(Attachments.name, Attachments);
};

export default Attachments;
