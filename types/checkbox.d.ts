import { ElementUIComponent, ElementUIComponentSize } from './component'

/** Checkbox Component */
export declare class ElCheckbox extends ElementUIComponent {
  /** The form input value */
  value: string | string[]

  /** Value of the checkbox when used inside a checkbox-group */
  label: string | number | boolean

  /** Value of the checkbox if it's checked */
  trueLabel: string | number

  /** Value of the checkbox if it's not checked */
  falseLabel: string | number

  /** Native 'name' attribute */
  name: string

  /** Whether to add a border around Checkbox */
  border: boolean

  /** Size of the Checkbox, only works when border is true */
  size: ElementUIComponentSize

  /** If the checkbox is disabled */
  disabled: boolean

  /** If the checkbox is checked */
  checked: boolean

  /** Same as indeterminate in native checkbox */
  indeterminate: boolean
}
