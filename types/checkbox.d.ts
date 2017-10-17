import { ElementUIComponent } from './component'

/** Checkbox Component */
export declare class ElCheckbox extends ElementUIComponent {
  /** The form input value */
  value: string | string[]

  /** Value of the checkbox when used inside a checkbox-group */
  label: string

  /** Value of the checkbox if it's checked */
  trueLabel: string | number

  /** Value of the checkbox if it's not checked */
  falseLabel: string | number

  /** Native 'name' attribute */
  name: string

  /** If the checkbox is disabled */
  disabled: boolean

  /** If the checkbox is checked */
  checked: boolean

  /** Same as indeterminate in native checkbox */
  indeterminate: boolean
}
