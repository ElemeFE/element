let nodeIdSeed = 0;
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
  const props = node.props;
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

export default class Node {
  constructor(options) {
    this.id = nodeIdSeed++;
    this.text = null;
    this.checked = false;
    this.indeterminate = false;
    this.data = null;
    this.expanded = false;
    this.props = null;
    this.parent = null;
    this.lazy = false;

    for (let name in options) {
      if (options.hasOwnProperty(name)) {
        this[name] = options[name];
      }
    }

    // internal
    this.level = -1;
    this.loaded = false;
    this.childNodes = [];
    this.loading = false;

    if (this.parent) {
      this.level = this.parent.level + 1;
    }

    if (this.lazy !== true && this.data) {
      this.setData(this.data);
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
    if (this.level === -1 && this.data instanceof Array) {
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

  insertChild(child, index) {
    if (!child) throw new Error('insertChild error: child is required.');

    if (!(child instanceof Node)) {
      objectAssign(child, {
        parent: this,
        lazy: this.lazy,
        load: this.load,
        props: this.props
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
          callback();
        }
      });
    } else {
      this.expanded = true;
      if (callback) {
        callback();
      }
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
    return this.lazy === true && this.load && !this.loaded;
  }

  get isLeaf() {
    return !this.hasChild();
  }

  hasChild() {
    const childNodes = this.childNodes;
    if (!this.lazy || (this.lazy === true && this.loaded === true)) {
      return childNodes && childNodes.length > 0;
    }
    return true;
  }

  setChecked(value, deep) {
    this.indeterminate = value === 'half';
    this.checked = value === true;

    const handleDeep = () => {
      if (deep) {
        const childNodes = this.childNodes;
        for (let i = 0, j = childNodes.length; i < j; i++) {
          const child = childNodes[i];
          child.setChecked(value !== false, deep);
        }
      }
    };

    if (this.shouldLoadData()) {
      // Only work on lazy load data.
      this.loadData(() => {
        handleDeep();
      }, {
        checked: value !== false
      });
    } else {
      handleDeep();
    }

    const parent = this.parent;
    if (parent.level === -1) return;

    reInitChecked(parent);
  }

  getChildren() { // this is data
    const data = this.data;
    if (!data) return null;

    const props = this.props;
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
    if (this.lazy === true && this.load && !this.loaded) {
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

      this.load(this, resolve);
    } else {
      if (callback) {
        callback.call(this);
      }
    }
  }
}
