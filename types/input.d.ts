import { TmUIComponent, TmUIComponentSize } from './component'

/** The resizability of el-input component */
export type Resizability = 'none' | 'both' | 'horizontal' | 'vertical'
export type InputType = 'text' | 'textarea'

/** Controls how el-input component automatically sets size */
export interface AutoSize {
  /** Minimum rows to show */
  minRows: number,

  /** Maximum rows to show */
  maxRows: number
}

export interface IconClickEventHandler {
  /** The handler function of on-icon-click property */
  (this: Window, ev: MouseEvent): any
}

/** Input Component */
export declare class TmInput extends TmUIComponent {
  /** Type of input */
  type: InputType

  /** Binding value */
  value: string | number

  /** Maximum Input text length */
  maxlength: number

  /** Minimum Input text length */
  minlength: number

  /** Placeholder of Input */
  placeholder: string

  /** Whether Input is disabled */
  disabled: boolean

  /** Size of Input, works when type is not 'textarea' */
  size: TmUIComponentSize

  /** Prefix icon class */
  prefixIcon: string

  /** Suffix icon class */
  suffixIcon: string

  /** Number of rows of textarea, only works when type is 'textarea' */
  rows: number

  /** Whether textarea has an adaptive height, only works when type is 'textarea' */
  autosize: boolean | AutoSize

  /** Same as auto-complete in native input */
  autoComplete: string

  /** Same as autocomplete in native input */
  autocomplete: string

  /** Same as name in native input */
  name: string

  /** Same as readonly in native input */
  readonly: boolean

  /** Same as max in native input */
  max: any

  /** Same as min in native input */
  min: any

  /** Same as step in native input */
  step: any

  /** Control the resizability */
  resize: Resizability

  /** Same as autofocus in native input */
  autofocus: boolean

  /** Same as form in native input */
  form: string

  /** Hook function when clicking on the input icon */
  onIconClick: IconClickEventHandler

  /** Whether to trigger form validatio */
  validateEvent: boolean

  /**
   * Focus the Input component
   */
  focus (): void

  /**
   * Blur the Input component
   */
  blur (): void

  /**
   * Select the text in input element
   */
  select (): void
}
