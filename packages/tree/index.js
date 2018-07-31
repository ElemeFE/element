import BasicTree from './src/basic/basic-tree.vue';
import Tree from './src/tree.vue';

/* istanbul ignore next */
Tree.install = function(Vue) {
  Vue.component(Tree.name, Tree);
};

export { BasicTree };

export default Tree;
