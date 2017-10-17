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
}
