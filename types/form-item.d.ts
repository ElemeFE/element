import { ElementUIComponent } from './component'

/** FormItem Component */
export declare class ElFormItem extends ElementUIComponent {
  /** A key of `model` of the enclosing `el-form` component */
  prop: string

  /** Label */
  label: string

  /** Width of label, e.g. '50px' */
  labelWidth: string

  /** Whether the field is required or not, will be determined by validation rules if omitted */
  required: boolean

  /** Validation rules of form */
  rules: object

  /** Field error message, set its value and the field will validate error and show this message immediately */
  error: string

  /** Whether to show the error message */
  showMessage: boolean
}
