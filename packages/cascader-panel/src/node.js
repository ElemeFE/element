import { isEqual, capitalize } from 'element-ui/src/utils/util';
import { isDef } from 'element-ui/src/utils/shared';

let uid = 0;

export default class Node {

  constructor(data, config, parentNode) {
    this.data = data;
    this.config = config;
    this.parent = parentNode || null;
    this.level = !this.parent ? 1 : this.parent.level + 1;
    this.uid = uid++;
    this.inActivePath = false;
    this.checked = false;
    this.refreshFlag = false;

    this.initState();
    this.initChildren();
  }

  initState() {
    const { value: valueKey, label: labelKey } = this.config;

    this.value = this.data[valueKey];
    this.label = this.data[labelKey];
    this.pathNodes = this.calculatePathNodes();
    this.path = this.pathNodes.map(node => node.value);
    this.pathLabels = this.pathNodes.map(node => node.label);

    // lazy load
    this.loading = false;
    this.loaded = false;
  }

  initFirstLevelNodes(nodes) {
    this.firstLevelNodes = nodes;
  }

  initChildren() {
    const { config } = this;
    const childrenKey = config.children;
    const childrenData = this.data[childrenKey];
    this.hasChildren = Array.isArray(childrenData);
    this.children = (childrenData || []).map(child => new Node(child, config, this));
  }

  get isDisabled() {
    const { data, parent, config } = this;
    const disabledKey = config.disabled;
    const { checkStrictly } = config;
    return data[disabledKey] ||
      !checkStrictly && parent && parent.isDisabled;
  }

  get isLeaf() {
    const { data, loaded, hasChildren, children } = this;
    const { lazy, leaf: leafKey } = this.config;
    if (lazy) {
      const isLeaf = isDef(data[leafKey])
        ? data[leafKey]
        : (loaded ? !children.length : false);
      this.hasChildren = !isLeaf;
      return isLeaf;
    }
    return !hasChildren;
  }

  calculatePathNodes() {
    const nodes = [this];
    let parent = this.parent;

    while (parent) {
      nodes.unshift(parent);
      parent = parent.parent;
    }

    return nodes;
  }

  getPath() {
    return this.path;
  }

  getValue() {
    return this.value;
  }

  getValueByOption() {
    return this.config.emitPath
      ? this.getPath()
      : this.getValue();
  }

  getText(allLevels, separator) {
    return allLevels ? this.pathLabels.join(separator) : this.label;
  }

  isSameNode(checkedValue) {
    const value = this.getValueByOption();
    return this.config.multiple && Array.isArray(checkedValue)
      ? checkedValue.some(val => isEqual(val, value))
      : isEqual(checkedValue, value);
  }

  broadcast(event, ...args) {
    let {config, level, children} = this;
    const handlerName = `onParent${capitalize(event)}`;

    // 此处要加互斥逻辑，因为父节点的点击，理论上要全选其子代，但使用了互斥逻辑的层级不行
    // 如果是互斥节点的父节点被点击了，且是选中的操作，那么只通知第一个子代更新即可
    if (config.mutualExcluseLabel && level + 1 === config.mutualExcluseLabel && args[0]) {
      if (children[0]) {
        let child = children[0];
        child.broadcast(event, ...args);
        child[handlerName] && child[handlerName](...args);
      }
    } else {
      this.children.forEach(child => {
        if (child) {
          // bottom up
          child.broadcast(event, ...args);
          child[handlerName] && child[handlerName](...args);
        }
      });
    }
  }

  emit(event, ...args) {
    const { parent } = this;
    const handlerName = `onChild${capitalize(event)}`;
    if (parent) {
      parent[handlerName] && parent[handlerName](...args);
      parent.emit(event, ...args);
    }
  }

  onParentCheck(checked) {
    if (!this.isDisabled) {
      this.setCheckState(checked);
    }
  }

  onChildCheck() {
    const { children } = this;
    const validChildren = children.filter(child => !child.isDisabled);
    const checked = validChildren.length
      ? validChildren.every(child => child.checked)
      : false;

    this.setCheckState(checked);
  }

  setCheckState(checked) {
    let {config, level} = this;
    const totalNum = this.children.length;
    let disabledCounter = 0;
    let indeterminateCounter = 0;
    const checkedNum = this.children.reduce((c, p) => {
      p.isDisabled && disabledCounter++;
      p.indeterminate && indeterminateCounter++;
      const num = p.checked ? 1 : (p.indeterminate ? 0.5 : 0);
      return c + num;
    }, 0);

    this.checked = checked;
    this.indeterminate = checkedNum !== totalNum && checkedNum > 0;
    // 在使用互斥逻辑时，节点的checked和indeterminate的重新计算
    // 对于无孩子节点的节点，不执行一下操作
    if (config.mutualExcluseLabel && this.children.length > 0) {
      // 如果互斥层级 + 1 >= 节点层级
      // checked和interminate得根据子代的情况来决定
      if (config.mutualExcluseLabel >= level + 1) {
        if (disabledCounter + checkedNum === this.children.length) {
          this.checked = true;
          this.indeterminate = false;
        } else {
          // 如果未全选上，则正常判断indeterminate
          this.checked = false;
          this.indeterminate = checkedNum > 0 || indeterminateCounter > 0;
        }
        // 即便节点的checked没变化，我们也强制渲染这个节点
        this.refreshFlag = !this.refreshFlag;
      }
    }

    this.mutualExclusion();
  }

  syncCheckState(checkedValue) {
    const value = this.getValueByOption();
    const checked = this.isSameNode(checkedValue, value);

    // this.doCheck(checked);
    this.doCheck(checked, false, true);
  }

  // 当前选择的节点属于互斥层级，则将其兄弟节点，全取消checked
  mutualExclusion() {
    // 互斥逻辑
    const {checked, indeterminate, level, value, parent, config} = this;
    if (!checked && !indeterminate) return;
    if (config.mutualExcluseLabel && config.mutualExcluseLabel === level) {
      if (level === 1) {
        this.firstLevelNodes.forEach(el => {
          el.value !== value && (el.checked || el.indeterminate) && !el.isDisabled && (el.doCheck(false, true, false));
        });
      } else {
        parent.children.forEach(el => {
          el.value !== value && (el.checked || el.indeterminate) && !el.isDisabled && (el.doCheck(false, true, false));
        });
      }
    }
  }

  // 节点点击的逻辑处理
  // @checked：是否被选中
  // @isForce：无论传入的checked和节点的checked是否一致，都触发内部的逻辑
  // @isSelf：是否是点击节点组件cascader-node触发的
  doCheck(checked, isForce = false, isSelf = false) {
    let {config, level, children} = this;
    let flag = config.mutualExcluseLabel && config.mutualExcluseLabel >= level + 1 && isSelf && children.length !== 0;

    if (this.checked !== checked || flag || isForce) {
      if (this.config.checkStrictly) {
        this.checked = checked;
        this.mutualExclusion();
      } else {
        // bottom up to unify the calculation of the indeterminate state
        // 对于节点层级<=互斥层级的节点，且是用户自己点击该节点，且该节点有子代节点时，
        // 该节点只能有两个状态
        // 一为indeterminate：false，checked为false
        // 二为indeterminate：true，checked为false
        // 总结：节点的checked必须为false
        // 所以我们得根据用户点击该节点时，节点的indetermiante和checkked的状态，更新节点的indeterminate和checked
        if (flag) {
          // 当节点的indeterminate为false，checked：false时
          // 则传递给子代的checked：true
          if (!this.indeterminate && !this.checked) {
            checked = true;
          }
          // 当节点的indeterminate：true，checked：false时
          // 则传递给子代的checked：false
          if (this.indeterminate && !this.checked) {
            checked = false;
          }
        }
        this.broadcast('check', checked);
        this.setCheckState(checked);
        this.emit('check');
      }
    }
  }
}
