import objectAssign from 'element-ui/src/utils/merge';

const reInitChecked = function(node) {
  const siblings = node.childNodes;

  let all = true;
  let none = true;

  for (let i = 0, j = siblings.length; i < j; i++) {
    const sibling = siblings[i];
    if (sibling.checked !== true || sibling.indeterminate) {
      all = false;
    }
    if (sibling.checked !== false || sibling.indeterminate) {
      none = false;
    }
  }

  if (all) {
    node.setChecked(true);
  } else if (!all && !none) {
    node.setChecked('half');
  } else if (none) {
    node.setChecked(false);
  }
};

const getPropertyFromData = function(node, prop) {
  const props = node._tree.props;
  const data = node.data || {};
  const config = props[prop];

  if (typeof config === 'function') {
    return config(data, node);
  } else if (typeof config === 'string') {
    return data[config];
  } else if (typeof config === 'undefined') {
    return '';
  }
};

let nodeIdSeed = 0;

export default class Node {
  constructor(options) {
    this.id = nodeIdSeed++;
    this.text = null;
    this.checked = false;
    this.indeterminate = false;
    this.data = null;
    this.expanded = false;
    this.parent = null;

    for (let name in options) {
      if (options.hasOwnProperty(name)) {
        this[name] = options[name];
      }
    }

    // internal
    this.level = 0;
    this.loaded = false;
    this.childNodes = [];
    this.loading = false;

    if (this.parent) {
      this.level = this.parent.level + 1;
    }

    const tree = this._tree;
    if (!tree) {
      throw new Error('[Node]_tree is required!');
    }
    tree.registerNode(this);

    if (tree.lazy !== true && this.data) {
      this.setData(this.data);

      if (tree.defaultExpandAll) {
        this.expanded = true;
      }
    } else if (this.level > 0 && tree.lazy && tree.defaultExpandAll) {
      this.expand();
    }

    if (!this.data) return;
    const defaultExpandedKeys = tree.defaultExpandedKeys;
    const key = tree.key;
    if (key && defaultExpandedKeys && defaultExpandedKeys.indexOf(this.key) !== -1) {
      if (tree.autoExpandParent) {
        let parent = this.parent;
        while (parent.level > 0) {
          parent.expanded = true;
          parent = parent.parent;
        }
      }

      this.expand();
    }

    if (tree.lazy) {
      tree._initDefaultCheckedNode(this);
    }
  }

  setData(data) {
    if (!Array.isArray(data) && !data.$treeNodeId) {
      Object.defineProperty(data, '$treeNodeId', {
        value: this.id,
        enumerable: false,
        configurable: false,
        writable: false
      });
    }

    this.data = data;
    this.childNodes = [];

    let children;
    if (this.level === 0 && this.data instanceof Array) {
      children = this.data;
    } else {
      children = getPropertyFromData(this, 'children') || [];
    }

    for (let i = 0, j = children.length; i < j; i++) {
      this.insertChild({ data: children[i] });
    }
  }

  get label() {
    return getPropertyFromData(this, 'label');
  }

  get icon() {
    return getPropertyFromData(this, 'icon');
  }

  get key() {
    const nodeKey = this._tree.key;
    if (this.data) return this.data[nodeKey];
    return null;
  }

  insertChild(child, index) {
    if (!child) throw new Error('insertChild error: child is required.');

    if (!(child instanceof Node)) {
      objectAssign(child, {
        parent: this,
        _tree: this._tree
      });
      child = new Node(child);
    }

    child.level = this.level + 1;

    if (typeof index === 'undefined') {
      this.childNodes.push(child);
    } else {
      this.childNodes.splice(index, 0, child);
    }
  }

  removeChild(child) {
    const index = this.childNodes.indexOf(child);

    if (index > -1) {
      this._tree && this._tree.deregisterNode(child);
      child.parent = null;
      this.childNodes.splice(index, 1);
    }
  }

  removeChildByData(data) {
    let targetNode = null;
    this.childNodes.forEach(node => {
      if (node.data === data) {
        targetNode = node;
      }
    });

    if (targetNode) {
      this.removeChild(targetNode);
    }
  }

  expand(callback) {
    if (this.shouldLoadData()) {
      this.loadData((data) => {
        if (data instanceof Array) {
          this.expanded = true;
          if (callback) callback();
        }
      });
    } else {
      this.expanded = true;
      if (callback) callback();
    }
  }

  doCreateChildren(array, defaultProps = {}) {
    array.forEach((item) => {
      this.insertChild(objectAssign({ data: item }, defaultProps));
    });
  }

  collapse() {
    this.expanded = false;
  }

  shouldLoadData() {
    return this._tree.lazy === true && this._tree.load && !this.loaded;
  }

  get isLeaf() {
    return !this.hasChild();
  }

  hasChild() {
    const childNodes = this.childNodes;
    if (!this._tree.lazy || (this._tree.lazy === true && this.loaded === true)) {
      return childNodes && childNodes.length > 0;
    }
    return true;
  }

  setChecked(value, deep) {
    this.indeterminate = value === 'half';
    this.checked = value === true;

    const handleDescendants = () => {
      if (deep) {
        const childNodes = this.childNodes;
        for (let i = 0, j = childNodes.length; i < j; i++) {
          const child = childNodes[i];
          child.setChecked(value !== false, deep);
        }
      }
    };

    if (!this._tree.checkStrictly && this.shouldLoadData()) {
      // Only work on lazy load data.
      this.loadData(() => {
        handleDescendants();
      }, {
        checked: value !== false
      });
    } else {
      handleDescendants();
    }

    const parent = this.parent;
    if (!parent || parent.level === 0) return;

    if (!this._tree.checkStrictly) {
      reInitChecked(parent);
    }
  }

  getChildren() { // this is data
    const data = this.data;
    if (!data) return null;

    const props = this._tree.props;
    let children = 'children';
    if (props) {
      children = props.children || 'children';
    }

    if (data[children] === undefined) {
      data[children] = null;
    }

    return data[children];
  }

  updateChildren() {
    const newData = this.getChildren() || [];
    const oldData = this.childNodes.map((node) => node.data);

    const newDataMap = {};
    const newNodes = [];

    newData.forEach((item, index) => {
      if (item.$treeNodeId) {
        newDataMap[item.$treeNodeId] = { index, data: item };
      } else {
        newNodes.push({ index, data: item });
      }
    });

    oldData.forEach((item) => { if (!newDataMap[item.$treeNodeId]) this.removeChildByData(item); });
    newNodes.forEach(({ index, data }) => this.insertChild({ data }, index));
  }

  loadData(callback, defaultProps = {}) {
    if (this._tree.lazy === true && this._tree.load && !this.loaded && !this.loading) {
      this.loading = true;

      const resolve = (children) => {
        this.loaded = true;
        this.loading = false;
        this.childNodes = [];

        this.doCreateChildren(children, defaultProps);

        if (callback) {
          callback.call(this, children);
        }
      };

      this._tree.load(this, resolve);
    } else {
      if (callback) {
        callback.call(this);
      }
    }
  }
}
