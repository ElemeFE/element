import { VNode } from 'vue';
import { ElementUIComponent, ElementUIComponentSize } from './component'
import { CascaderOption, CascaderProps, CascaderNode } from './cascader-panel';

export { CascaderOption, CascaderProps, CascaderNode };

export interface CascaderSlots {
  /** Custom label content */
  default: VNode[],

  /** Empty content when no option matches */
  empty: VNode[]

  [key: string]: VNode[]
}

/** Cascader Component */
export declare class ElCascader<V = any, D = CascaderOption> extends ElementUIComponent {
  /** Data of the options */
  options: CascaderOption[]

  /** Configuration options */
  props: CascaderProps<V, D>

  /** Selected value */
  value: V | V[]

  /** Size of Input */
  size: ElementUIComponentSize

  /** Input placeholder */
  placeholder: string

  /** Whether Cascader is disabled */
  disabled: boolean

  /** Whether selected value can be cleared */
  clearable: boolean

  /** Whether to display all levels of the selected value in the input */
  showAllLevels: boolean

  /** Whether to collapse selected tags in multiple selection mode */
  collapseTags: boolean

  /** Separator of option labels */
  separator: string

  /** Whether the options can be searched */
  filterable: boolean

  /** filter method to match options according to input keyword */
  filterMethod: (node: CascaderNode<V, D>, keyword: string) => boolean

  /** Debounce delay when typing filter keyword, in millisecond */
  debounce: number

  /** Custom class name for Cascader's dropdown */
  popperClass: string

  /** Hook function before filtering with the value to be filtered as its parameter */
  beforeFilter: (value: string) => boolean | Promise<any>

  $slots: CascaderSlots
}
