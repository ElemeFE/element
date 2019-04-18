import { VNode } from 'vue';
import { ElementUIComponent } from './component'

export interface SliderTooltipFormat {
  /**
   * Format the displayed value of Slider
   *
   * @param value Value of the Slider
   * @returns formatted value
   */
  (value: number): string
}

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

  /** Format of displayed tooltip value */
  formatTooltip: SliderTooltipFormat

  /** Whether to display control buttons when show-input is true */
  showInputControls: boolean

  /** Size of the input box */
  inputSize: string

  /** Whether to display breakpoints */
  showStops: boolean

  /** Whether to display tooltip value */
  showTooltip: boolean

  /** Whether to select a range */
  range: boolean

  /** Vertical mode */
  vertical: boolean

  /** Slider height, required in vertical mode */
  height: boolean

  /** Debounce delay when typing, in milliseconds, works when show-input is true */
  debounce: number

  /** Custom class name for the tooltip */
  tooltipClass: string

  /** Custom marks */
  marks: {
    [key: number]: string | { style: object; label: string | VNode }
  }
}
