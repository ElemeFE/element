import { TmUIComponent } from './component'

export type RadioGroupSize = 'large' | 'small'

/** Radio Group Component */
export declare class TmRadioGroup extends TmUIComponent {
  /** The size of radio buttons */
  size: RadioGroupSize

  /** Border and background color when button is active */
  fill: string

  /** Whether the nesting radios are disabled */
  disabled: boolean

  /** Font color when button is active */
  textColor: string
}
