import { ElementUIComponent, ElementUIComponentSize, ElementUIHorizontalAlignment } from './component'

/** Options when el-time-picker acts like a Time Picker */
export interface TimePickerOptions {
  /**
   * Available time range.
   * e.g. `'18:30:00 - 20:30:00'`
   * or `['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']`
   */
  selectableRange?: string | string[],

  /** Format  of the picker */
  format?: string
}

/** Options when el-time-picker acts like a Time Select */
export interface TimeSelectOptions {
  /** Start time */
  start?: string,

  /** End time */
  end?: string,

  /** Time step */
  step?: string,

  /** Minimum time, any time before this time will be disabled */
  minTime?: string,

  /** Maximum time, any time after this time will be disabled */
  maxTime?: string
}

/** TimePicker and Time Select Component */
export declare class ElTimePicker extends ElementUIComponent {
  /** Whether DatePicker is read only */
  readonly: boolean

  /** Whether DatePicker is disabled */
  disabled: boolean

  /** Whether the input is editable */
  editable: boolean

  /** Whether to show clear button */
  clearable: boolean

  /** Size of Input */
  size: ElementUIComponentSize

  /** Placeholder */
  placeholder: string

  /** Placeholder for the start time in range mode */
  startPlaceholder: string

  /** Placeholder for the end time in range mode */
  endPlaceholder: string

  /** Whether to pick a time range, only works with <el-time-picker> */
  isRange: boolean

  /** Value of the picker */
  value: string | Date

  /** Alignment */
  align: ElementUIHorizontalAlignment

  /** Custom class name for TimePicker's dropdown */
  popperClass: string

  /** Additional options, check the table below */
  pickerOptions: object

  /** Range separator */
  rangeSeparator: string
}
