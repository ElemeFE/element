import { TmUIComponent, TmUIComponentSize, TmUIHorizontalAlignment } from './component'

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

/** TimePicker Component */
export declare class TmTimePicker extends TmUIComponent {
  /** Whether DatePicker is read only */
  readonly: boolean

  /** Whether DatePicker is disabled */
  disabled: boolean

  /** Whether the input is editable */
  editable: boolean

  /** Whether to show clear button */
  clearable: boolean

  /** Size of Input */
  size: TmUIComponentSize

  /** Placeholder */
  placeholder: string

  /** Placeholder for the start time in range mode */
  startPlaceholder: string

  /** Placeholder for the end time in range mode */
  endPlaceholder: string

  /** Whether to pick a time range */
  isRange: boolean

  /** Value of the picker */
  value: string | Date

  /** Alignment */
  align: TmUIHorizontalAlignment

  /** Custom class name for TimePicker's dropdown */
  popperClass: string

  /** Additional options, check the table below */
  pickerOptions: TimePickerOptions

  /** Range separator */
  rangeSeparator: string

  /**
   * Focus the Input component
   */
  focus (): void
}
