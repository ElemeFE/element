import { VNode, CreateElement } from 'vue';
import { ElementUIComponent } from './component'

/** Trigger mode of expanding current item */
export type ExpandTrigger = 'click' | 'hover'

/** Cascader Option */
export interface CascaderOption {
  label: string,
  value: any,
  children?: CascaderOption[],
  disabled?: boolean,
  leaf?: boolean
}

/** Cascader Props */
export interface CascaderProps<V, D> {
  expandTrigger?: ExpandTrigger,
  multiple?: boolean,
  checkStrictly?: boolean,
  emitPath?: boolean,
  lazy?: boolean,
  lazyLoad?: (node: CascaderNode<V, D>, resolve: Resolve<D>) => void,
  value?: string,
  label?: string,
  children?: string,
  disabled?: string
  leaf?: string
}

/** Cascader Node */
export interface CascaderNode<V, D> {
  uid: number,
  data: D,
  value: V,
  label: string,
  level: number,
  isDisabled: boolean,
  isLeaf: boolean,
  parent: CascaderNode<V, D> | null,
  children: CascaderNode<V, D>[]
  config: CascaderProps<V, D>
}

type Resolve<D> = (dataList?: D[]) => void

export interface CascaderPanelSlots {
  /** Custom label content */
  default: VNode[]

  [key: string]: VNode[]
}

/** CascaderPanel Component */
export declare class ElCascaderPanel<V = any, D = CascaderOption> extends ElementUIComponent {
  /** Selected value */
  value: V | V[]

  /** Data of the options */
  options: D[]

  /** Configuration options */
  props: CascaderProps<V, D>

  /** Whether to add border */
  border: boolean

  /** Render function of custom label content */
  renderLabel: (h: CreateElement, context: { node: CascaderNode<V, D>; data: D }) => VNode

  $slots: CascaderPanelSlots
}
