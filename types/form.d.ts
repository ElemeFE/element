import { ElementUIComponent, ElementUIComponentSize } from './component'

export type FormItemLabelPosition = 'left' | 'right' | 'top'

export interface ValidateCallback {
  /**
   * The callback to tell the validation result
   *
   * @param isValid Whether the form is valid
   */
  (isValid: boolean): void
}

export interface ValidateFieldCallback {
  /**
   * The callback to tell the field validation result
   *
   * @param errorMessage The error message. It will be empty if there is no error
   */
  (errorMessage: string): void
}

/** Form Component */
export declare class ElForm extends ElementUIComponent {
  /** Data of form component */
  model: object

  /** Validation rules of form */
  rules: object

  /** Whether the form is inline */
  inline: boolean

  /** Whether the form is disabled */
  disabled: boolean

  /** Position of label */
  labelPosition: FormItemLabelPosition

  /** Width of label, and all form items will inherit from Form */
  labelWidth: string

  /** Suffix of the label */
  labelSuffix: string

  /** Whether to show the error message */
  showMessage: boolean

  /** Whether to display the error message inline with the form item */
  inlineMessage: boolean

  /** Whether to display an icon indicating the validation result */
  statusIcon: boolean

  /** Whether to trigger validation when the `rules` prop is changed */
  validateOnRuleChange: boolean

  /** Controls the size of components in this form */
  size: ElementUIComponentSize

  /**
   * Validate the whole form
   *
   * @param callback A callback to tell the validation result
   */
  validate (callback: ValidateCallback): void
  validate (): Promise<boolean>
  /**
   * Validate a certain form item
   *
   * @param prop The property of `model` that is going to validate
   * @param callback A callback to tell the field validation result
   */
  validateField (prop: string, callback: ValidateFieldCallback): void

  /** reset all the fields and remove validation result */
  resetFields (): void
  
  /** clear validation message for all fields */
  clearValidate (): void
}
