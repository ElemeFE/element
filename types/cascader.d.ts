import { ElementUIComponent, ElementUIComponentSize } from './component'

/** Trigger mode of expanding current item */
export type ExpandTrigger = 'click' | 'hover'

/** Cascader Option */
export interface CascaderOption {
  label: string,
  value: any,
  children?: CascaderOption[],
  disabled?: boolean
}

/** Cascader Component */
export declare class ElCascader extends ElementUIComponent {
  /** Data of the options */
  options: CascaderOption[]

  /** Configuration options */
  props: object

  /** Selected value */
  value: any[]

  /** Custom class name for Cascader's dropdown */
  popperClass: string

  /** Input placeholder */
  placeholder: string

  /** Whether Cascader is disabled */
  disabled: boolean

  /** Whether selected value can be cleared */
  clearable: boolean

  /** Trigger mode of expanding current item */
  expandTrigger: ExpandTrigger

  /** Whether to display all levels of the selected value in the input */
  showAllLevels: boolean

  /** Whether the options can be searched */
  filterable: boolean

  /** Debounce delay when typing filter keyword, in millisecond */
  debounce: number

  /** Whether selecting an option of any level is permitted */
  changeOnSelect: boolean

  /** Size of Input */
  size: ElementUIComponentSize

  /** Hook function before filtering with the value to be filtered as its parameter */
  beforeFilter: (value: string) => boolean | Promise<any>
}
