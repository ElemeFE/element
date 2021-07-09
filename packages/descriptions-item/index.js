import DescriptionsItem from '../descriptions/src/descriptions-item';

/* istanbul ignore next */
DescriptionsItem.install = function install(Vue) {
  Vue.component(DescriptionsItem.name, DescriptionsItem);
};

export default DescriptionsItem;
