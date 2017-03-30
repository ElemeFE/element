import { ElementUIComponent } from './component'

/** Slider Component */
export declare class ElSlider extends ElementUIComponent {
  /** Current value of the slider */
  value: number | number[]

  /** Minimum value */
  min: number

  /** Maximum value */
  max: number

  /** Whether Slider is disabled */
  disabled: boolean

  /** Step size */
  step: number

  /** Whether to display an input box, works when range is false */
  showInput: boolean

  /** Whether to display control buttons when show-input is true */
  showInputControls: boolean

  /** Whether to display breakpoints */
  showStops: boolean

  /** Whether to display tooltip value */
  showTooltip: boolean

  /** Whether to select a range */
  range: boolean
}
