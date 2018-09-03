import { CreateElement, VNode } from 'vue';
import { ElementUIComponent } from './component';

export interface TreeData {
  id?: any;
  label?: string;
  isLeaf?: boolean;
  children?: TreeData[];
}

export interface TreeNode<K, D> {
  checked: boolean;
  childNodes: TreeNode<K, D>[];
  data: D;
  expanded: boolean;
  id: number;
  indeterminate: boolean;
  isLeaf: boolean;
  level: number;
  loaded: boolean;
  loading: boolean;
  parent: TreeNode<K, D> | null;
  store: any;
  visible: boolean;
  disabled: boolean;
  icon: string;
  key: K;
  nextSibling: TreeNode<K, D> | null;
  previousSibling: TreeNode<K, D> | null;
}

/** incomplete, you can convert to any to use other properties */
export interface TreeStore<K, D> {
  _getAllNodes: () => TreeNode<K, D>[];
}

/** Tree Component */
export declare class ElTree<K = any, D = TreeData> extends ElementUIComponent {
  /** TreeStore */
  store: TreeStore<K, D>;

  /** Tree data */
  data: D[];

  /** Text displayed when data is void */
  emptyText: string;

  /** Unique identity key name for nodes, its value should be unique across the whole tree */
  nodeKey: string;

  /** Configuration options, see the following table */
  props: object;

  /** Method for loading subtree data */
  load: (data: D, resolve: Function) => void;

  /**
   * Render function for a specific node
   *
   * @param h The render function
   */
  renderContent: (h: CreateElement, context: { node: TreeNode<K, D>; data: D; store: TreeStore<K, D> }) => VNode;

  /** Whether current node is highlighted */
  highlightCurrent: boolean;

  /** Whether to expand all nodes by default */
  defaultExpandAll: boolean;

  /** Whether to expand or collapse node when clicking on the node. If false, then expand or collapse node only when clicking on the arrow icon. */
  expandOnClickNode: boolean;

  /** Whether to check or uncheck node when clicking on the node, if false, the node can only be checked or unchecked by clicking on the checkbox. */
  checkOnClickNode: boolean;

  /** Whether to expand father node when a child node is expanded */
  autoExpandParent: boolean;

  /** Array of keys of initially expanded nodes */
  defaultExpandedKeys: K[];

  /** Whether node is selectable */
  showCheckbox: boolean;

  /** Whether checked state of a node not affects its father and child nodes when show-checkbox is true */
  checkStrictly: boolean;

  /** Array of keys of initially checked nodes */
  defaultCheckedKeys: K[];

  /**
   * This function will be executed on each node when use filter method. If return false, tree node will be hidden.
   *
   * @param value The query string
   * @param data The original data object
   * @param node Tree node
   */
  filterNodeMethod: (value: string, data: D, node: TreeNode<K, D>) => boolean;

  /** Whether only one node among the same level can be expanded at one time */
  accordion: boolean;

  /** Horizontal indentation of nodes in adjacent levels in pixels */
  indent: number;

  /** Whether enable tree nodes drag and drop */
  draggable: boolean;

  /**
   * Function to be executed before dragging a node
   *
   * @param node The node to be dragged
   */
  allowDrag: (node: TreeNode<K, D>) => boolean;

  /**
   * Function to be executed before the dragging node is dropped
   *
   * @param draggingNode The dragging node
   * @param dropNode The target node
   * @param type Drop type
   */
  allowDrop: (draggingNode: TreeNode<K, D>, dropNode: TreeNode<K, D>, type: 'prev' | 'inner' | 'next') => boolean;

  /**
   * Filter all tree nodes. Filtered nodes will be hidden
   *
   * @param value The value to be used as first parameter for `filter-node-method`
   */
  filter(value: any): void;

  /**
   * Update the children of the node which specified by the key
   *
   * @param key the key of the node which children will be updated
   * @param data the children data
   */
  updateKeyChildren(key: K, data: D[]): void;

  /**
   * If the node can be selected (`show-checkbox` is `true`), it returns the currently selected array of nodes
   *
   * @param leafOnly If the `leafOnly` is `true`, it only returns the currently selected array of sub-nodes
   * @param includeHalfChecked If the `includeHalfChecked` is `true`, the return value contains halfchecked nodes
   */
  getCheckedNodes(leafOnly?: boolean, includeHalfChecked?: boolean): D[];

  /**
   * Set certain nodes to be checked. Only works when `node-key` is assigned
   *
   * @param nodes An array of nodes to be checked
   * @param leafOnly If the parameter is true, it only returns the currently selected array of sub-nodes
   */
  setCheckedNodes(data: D[], leafOnly?: boolean): void;

  /**
   * If the node can be selected (`show-checkbox` is `true`), it returns the currently selected array of nodes' keys
   *
   * @param leafOnly If the `leafOnly` is `true`, it only returns the currently selected array of sub-nodes
   */
  getCheckedKeys(leafOnly?: boolean): K[];

  /**
   * Set certain nodes to be checked. Only works when `node-key` is assigned
   *
   * @param keys An array of node's keys to be checked
   * @param leafOnly If the parameter is true, it only returns the currently selected array of sub-nodes
   */
  setCheckedKeys(keys: K[], leafOnly?: boolean): void;

  /**
   * Set node to be checked or not. Only works when `node-key` is assigned
   *
   * @param data Node's key or data to be checked
   * @param checked Indicating the node checked or not
   * @param deep Indicating whether to checked state deeply or not
   */
  setChecked(data: D | K, checked: boolean, deep: boolean): void;

  /**
   * If the node can be selected (`show-checkbox` is `true`), it returns the currently half selected array of nodes
   */
  getHalfCheckedNodes(): D[];

  /**
   * If the node can be selected (`show-checkbox` is `true`), it returns the currently half selected array of nodes' keys
   */
  getHalfCheckedKeys(): K[];

  /**
   * Return the highlight node's key (null if no node is highlighted)
   */
  getCurrentKey(): K;

  /**
   * Set highlighted node by key, only works when node-key is assigned
   *
   * @param key The node's key to be highlighted
   */
  setCurrentKey(key: K): void;

  /**
   * Return the highlight node (null if no node is highlighted)
   */
  getCurrentNode(): D;

  /**
   * Set highlighted node, only works when node-key is assigned
   *
   * @param node The node to be highlighted
   */
  setCurrentNode(data: D): void;

  /**
   * Get node by node key or node data
   *
   * @param by node key or node data
   */
  getNode(by: D | K): D;

  /**
   * Remove node by key or node data or node instance
   *
   * @param by key or node data or node instance
   */
  remove(by: D | K): void;

  /**
   * Append a child node to specified node
   *
   * @param childData the data of appended node
   * @param parent key or node data or node instance of the parent node
   */
  append(childData: D, parent: D | K): void;

  /**
   * insert a node before specified node
   *
   * @param data the data of inserted node
   * @param ref key or node data or node instance of the reference node
   */
  insertBefore(data: D, ref: D | K): void;

  /**
   * insert a node after specified node
   *
   * @param data the data of inserted node
   * @param ref key or node data or node instance of the reference node
   */
  insertAfter(data: D, ref: D | K): void;
}
