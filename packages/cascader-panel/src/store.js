import Node from './node';
import { coerceTruthyValueToArray } from 'element-ui/src/utils/util';

const flatNodes = (data, leafOnly) => {
  return data.reduce((res, node) => {
    if (node.isLeaf) {
      res.push(node);
    } else {
      !leafOnly && res.push(node);
      res = res.concat(flatNodes(node.children, leafOnly));
    }
    return res;
  }, []);
};

export default class Store {

  constructor(data, config) {
    this.config = config;
    this.initNodes(data);
  }

  initNodes(data) {
    data = coerceTruthyValueToArray(data);
    this.nodes = data.map(nodeData => new Node(nodeData, this.config));
    this.flattedNodes = this.getFlattedNodes(false, false);
    this.leafNodes = this.getFlattedNodes(true, false);
  }

  appendNode(nodeData, parentNode) {
    const node = new Node(nodeData, this.config, parentNode);
    const children = parentNode ? parentNode.children : this.nodes;

    children.push(node);
  }

  appendNodes(nodeDataList, parentNode) {
    nodeDataList = coerceTruthyValueToArray(nodeDataList);
    nodeDataList.forEach(nodeData => this.appendNode(nodeData, parentNode));
  }

  getNodes() {
    return this.nodes;
  }

  getFlattedNodes(leafOnly, cached = true) {
    const cachedNodes = leafOnly ? this.leafNodes : this.flattedNodes;
    return cached
      ? cachedNodes
      : flatNodes(this.nodes, leafOnly);
  }

  getNodeByValue(value) {
    if (value) {
      value = Array.isArray(value) ? value[value.length - 1] : value;
      const nodes = this.getFlattedNodes(false, !this.config.lazy)
        .filter(node => node.value === value);
      return nodes && nodes.length ? nodes[0] : null;
    }
    return null;
  }

}
