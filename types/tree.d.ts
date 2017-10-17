import { CreateElement, VNode } from 'vue'
import { ElementUIComponent } from './component'

/** The node of the tree */
export interface TreeNode {
  id?: any,
  label?: string,
  children?: TreeNode[]
}

export interface RenderContent {
  /**
   * Render function for a specific node
   *
   * @param h The render function
   * @param data The data object containing the specific node
   */
  (h: CreateElement, data: { node: TreeNode }): VNode
}

export interface FilterNodeMethod {
  // TODO: complete type and description here
  (value: any, data: TreeNode, node: any): boolean
}

/** Tree Component */
export declare class ElTree extends ElementUIComponent {
  /** Tree data */
  data: TreeNode[]

  /** Text displayed when data is void */
  emptyText: string

  /** Unique identity key name for nodes, its value should be unique across the whole tree */
  nodeKey: string

  /** Configuration options, see the following table */
  props: object

  /** Method for loading subtree data */
  load: (node: TreeNode, resolve) => void

  /** Render function for tree node */
  renderContent: RenderContent

  /** Whether current node is highlighted */
  highlightCurrent: boolean

  /** Key of current node, a set only prop */
  currentNodeKey: string | number

  /** Whether to expand all nodes by default */
  defaultExpandAll: boolean

  /** Whether to expand or collapse node when clicking on the node. If false, then expand or collapse node only when clicking on the arrow icon. */
  expandOnClickNode: boolean

  /** Whether to expand father node when a child node is expanded */
  autoExpandParent: boolean

  /** Array of keys of initially expanded nodes */
  defaultExpandedKeys: any[]

  /** Whether node is selectable */
  showCheckbox: boolean

  /** Whether checked state of a node not affects its father and child nodes when show-checkbox is true */
  checkStrictly: boolean

  /** Array of keys of initially checked nodes */
  defaultCheckedKeys: any[]

  /** This function will be executed on each node when use filter method. If return false, tree node will be hidden. */
  filterNodeMethod: FilterNodeMethod

  /** Whether only one node among the same level can be expanded at one time */
  accordion: boolean

  /** Horizontal indentation of nodes in adjacent levels in pixels */
  indent: number

  /**
   * Filter all tree nodes.Ffiltered nodes will be hidden
   *
   * @param value The value to be used as first parameter for `filter-node-method`
   */
  filter (value: any): void

  /**
   * If the node can be selected (`show-checkbox` is `true`), it returns the currently selected array of nodes
   *
   * @param subnodes If the `subnodes` is `true`, it only returns the currently selected array of sub-nodes
   */
  getCheckedNodes (leafOnly?: boolean): TreeNode[]

  /**
   * Set certain nodes to be checked. Only works when `node-key` is assigned
   *
   * @param nodes An array of nodes to be checked
   * @param leafOnly If the parameter is true, it only returns the currently selected array of sub-nodes
   */
  setCheckedNodes (nodes: TreeNode[], leafOnly?: boolean): void

  /**
   * If the node can be selected (`show-checkbox` is `true`), it returns the currently selected array of nodes' keys
   *
   * @param subnodes If the `subnodes` is `true`, it only returns the currently selected array of sub-nodes
   */
  getCheckedKeys (leafOnly?: boolean): any[]

  /**
   * Set certain nodes to be checked. Only works when `node-key` is assigned
   *
   * @param keys An array of node's keys to be checked
   * @param leafOnly If the parameter is true, it only returns the currently selected array of sub-nodes
   */
  setCheckedKeys (keys: any[], leafOnly?: boolean): void

  /**
   * Set node to be checked or not. Only works when `node-key` is assigned
   *
   * @param data Node's key or data to be checked
   * @param checked Indicating the node checked or not
   * @param deep Indicating whether to checked state deeply or not
   */
  setChecked (data: TreeNode | any, checked: boolean, deep: boolean)
}
