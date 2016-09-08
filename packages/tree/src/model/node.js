let idSeed = 0;
import objectAssign from 'object-assign';

const reInitChecked = function(node) {
  const siblings = node.children;

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
  const data = node.data;
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
    this.id = idSeed++;
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
    this.children = [];
    this.loading = false;

    if (this.parent) {
      this.level = this.parent.level + 1;
    }

    if (this.lazy !== true && this.data) {
      let children;
      if (this.level === -1 && this.data instanceof Array) {
        children = this.data;
      } else {
        children = getPropertyFromData(this, 'children') || [];
      }

      for (let i = 0, j = children.length; i < j; i++) {
        const child = children[i];
        this.insertChild(new Node({
          data: child,
          parent: this,
          lazy: this.lazy,
          load: this.load,
          props: this.props
        }));
      }
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

    if (!child instanceof Node) {
      throw new Error('insertChild error: child should an instance of Node.');
    }

    child.parent = this;
    child.level = this.level + 1;

    if (typeof index === 'undefined') {
      this.children.push(child);
    } else {
      this.children.splice(index, 0, child);
    }
  }

  removeChild(child) {
    const index = this.children.indexOf(child);

    if (index > -1) {
      child.parent = null;
      this.children.splice(child, index);
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
      const node = new Node(objectAssign({
        data: item,
        lazy: this.lazy,
        load: this.load,
        props: this.props
      }, defaultProps));
      this.insertChild(node);
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
    const children = this.children;
    if (!this.lazy || (this.lazy === true && this.loaded === true)) {
      return children && children.length > 0;
    }
    return true;
  }

  setChecked(value, deep) {
    this.indeterminate = value === 'half';
    this.checked = value === true;

    const handleDeep = () => {
      if (deep) {
        const children = this.children;
        for (let i = 0, j = children.length; i < j; i++) {
          const child = children[i];
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

  loadData(callback, defaultProps = {}) {
    if (this.lazy === true && this.load && !this.loaded) {
      this.loading = true;

      const loadFn = this.load;
      const resolve = (children) => {
        this.loaded = true;
        this.loading = false;

        this.doCreateChildren(children, defaultProps);

        if (callback) {
          callback.call(this, children);
        }
      };

      loadFn(this, resolve);
    } else {
      if (callback) {
        callback.call(this);
      }
    }
  }
}
