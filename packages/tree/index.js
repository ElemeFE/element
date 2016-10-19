const Tree = require('./src/tree.vue');

/* istanbul ignore next */
Tree.install = function(Vue) {
  Vue.component(Tree.name, Tree);
};

module.exports = Tree;
