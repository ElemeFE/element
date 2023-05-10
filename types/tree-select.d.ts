import { ElementUIComponent, ElementUIComponentSize } from "./component";

export interface TreeData {
  value?: any;
  label?: string;
  disabled?: boolean;
  isLeaf?: boolean;
  children?: TreeData[];
}

export interface TreeProps {
  label: string;
  disabled: string;
  isLeaf: string;
  children: string;
}

export interface QueryChangeHandler {
  /**
   * @param queryString Current value of the text input
   */
  (queryString: string): void;
}

/** TreeSelect Component */
export declare class ElTreeSelect<V = any, D = TreeData> extends ElementUIComponent {
  /** The form input value */
  value: V | V[];

  /** Tree data */
  data: D[];

  /** Whether multiple-select is activated */
  multiple: boolean;

  /** Whether Select is disabled */
  disabled: boolean;

  /** Unique identity key name for value, required when value is an object */
  nodeKey: string;

  /** Configuration options, see the following table */
  props: TreeProps;

  /** Size of Input */
  size: ElementUIComponentSize;

  /** Whether single select can be cleared */
  clearable: boolean;

  /** The name attribute of select input */
  name: string;

  /** Placeholder */
  placeholder: string;

  /** Whether Select is filterable */
  filterable: boolean;

  /** Custom filter method */
  filterMethod: QueryChangeHandler;

  /** Whether to append the popper menu to body */
  popperAppendToBody: boolean;

  /** Method for loading subtree data */
  load: (data: D, resolve: Function) => void;

  /** Displayed text when data is empty */
  emptyText: string;

  /** Horizontal indentation of nodes in adjacent levels in pixels */
  indent: number;

  /** Whether checked state of a node not affects its father and child nodes when show-checkbox is true */
  checkStrictly: boolean;

  /** Whether only one node among the same level can be expanded at one time */
  accordion: boolean;

  /** Whether node is selectable */
  showCheckbox: boolean;

  /**whether to collapse tags to a text when multiple selecting  */
  collapseTags: boolean;

  /** Whether Select is loading data from server */
  loading: boolean;

  /** Method for loading subtree data */
  load: (data: D, resolve: Function) => void;

  /** whether to lazy load leaf node, used with load attribute */
  lazy: boolean;

  /** Whether to expand all nodes by default */
  defaultExpandAll: boolean;

  /** Whether to expand father node when a child node is expanded */
  autoExpandParent: boolean;

  /**
   * Focus the Input component
   */
  focus(): void;

  /**
   * Blur the Input component, and hide the dropdown
   */
  blur(): void;
}
