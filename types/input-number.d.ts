import { ElementUIComponent } from './component'

export type InputNumberSize = 'large' | 'small'

/** InputNumber Component */
export declare class ElInputNumber extends ElementUIComponent {
  /** Binding value */
  value: number

  /** The minimum allowed value */
  min: number

  /** The maximum allowed value */
  max: number

  /** Incremental step */
  step: number

  /** Size of the component */
  size: InputNumberSize

  /** Whether the component is disabled */
  disabled: boolean

  /** Whether to enable the control buttons */
  controls: boolean

  /** Debounce delay when typing, in milliseconds */
  debounce: number

  /** Position of the control buttons */
  controlsPosition: string

  /** Same as name in native input */
  name: string

  /** Precision of input value */
  precision: number

  /** whether input value can only be multiple of step */
  stepStrictly: boolean

  /**
   * Focus the Input component
   */
  focus (): void
}
