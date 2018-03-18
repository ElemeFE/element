import { ElementUIComponent, ElementUIComponentSize, ElementUIHorizontalAlignment } from './component'

export type DatePickerType = 'year' | 'month' | 'date' | 'datetime' | 'week' | 'datetimerange' | 'daterange'
export type FirstDayOfWeek = 1 | 2 | 3 | 4 | 5 | 6 | 7

export interface DisabledDateChecker {
  /**
   * Determine if `date` will be disabled in the picker
   *
   * @param date The date to check
   * @returns if `date` will be disabled in the picker
   */
  (date: Date): boolean
}

// Picked date range
export interface DateRange {
  minDate: Date,
  maxDate: Date
}

export interface PickEventHandler {
  /**
   * Callback function that triggers when picks a date range
   *
   * @param dateRange The selected date range
   */
  (dateRange: DateRange): void
}

export interface ShortcutClickEventHandler {
  /**
   * Callback function that triggers when clicking on a shortcut.
   * You can change the picker value by emitting the pick event.
   * Example: `vm.$emit('pick', new Date())`
   */
  (vm: ElDatePicker): void
}

/** Shortcut options */
export interface Shortcut {
  /** Title of the shortcut */
  text: string,

  /** Callback function that triggers when picks a date range */
  onClick?: ShortcutClickEventHandler
}

/** Options of el-date-picker */
export interface DatePickerOptions {
  /** An object array to set shortcut options */
  shortcuts?: Shortcut[]

  /** A function determining if a date is disabled. */
  disabledDate?: DisabledDateChecker

  /** First day of week */
  firstDayOfWeek?: FirstDayOfWeek

  /** A callback that triggers when the seleted date is changed. Only for daterange and datetimerange. */
  onPick?: PickEventHandler
}

/** DatePicker Component */
export declare class ElDatePicker extends ElementUIComponent {
  /** The value of the date picker */
  value: Date | string | Date[] | string[]

  /** Whether DatePicker is read only */
  readonly: boolean

  /** Whether DatePicker is disabled */
  disabled: boolean

  /** Size of Input */
  size: ElementUIComponentSize

  /** Whether the input is editable */
  editable: boolean

  /** Whether to show clear button */
  clearable: boolean

  /** Placeholder */
  placeholder: string

  /** Placeholder for the start date in range mode */
  startPlaceholder: string

  /** Placeholder for the end date in range mode */
  endPlaceholder: string

  /** Type of the picker */
  type: DatePickerType

  /** Format of the picker */
  format: string

  /** Alignment */
  align: ElementUIHorizontalAlignment

  /** Custom class name for DatePicker's dropdown */
  popperClass: string

  /** Additional options, check the table below */
  pickerOptions: DatePickerOptions

  /** Range separator */
  rangeSeparator: string

  /** Default date of the calendar */
  defaultValue: Date | number | string

  /** Format of binding value. If not specified, the binding value will be a Date object */
  valueFormat: string

  /** name for the inner native input */
  name: string

  /**
   * Focus the Input component
   */
  focus (): void
}
