import Node from './node';

export default class Tree {
  constructor(options) {
    for (let option in options) {
      if (options.hasOwnProperty(option)) {
        this[option] = options[option];
      }
    }

    this._isTree = true;

    this.root = new Node({
      data: this.data,
      lazy: this.lazy,
      props: this.props,
      load: this.load
    });

    if (this.lazy && this.load) {
      const loadFn = this.load;
      loadFn(this.root, (data) => {
        this.root.doCreateChildren(data);
      });
    }
  }

  getCheckedNodes(leafOnly) {
    const checkedNodes = [];
    const walk = function(node) {
      const children = node.children;

      children.forEach(function(child) {
        if ((!leafOnly && child.checked) || (leafOnly && !child.hasChild && child.checked)) {
          checkedNodes.push(child.data);
        } else {
          checkedNodes.push(child.data);
        }

        walk(child);
      });
    };

    walk(this);

    return checkedNodes;
  }
};
