import { ElementUIComponent, ElementUIComponentSize } from './component'

/** Button type */
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'

/** Same as native button's type */
export type ButtonNativeType = 'button' | 'submit' | 'reset' | 'menu'

/** Button Component */
export declare class ElButton extends ElementUIComponent {
  /** Button size */
  size: ElementUIComponentSize

  /** Button type */
  type: ButtonType

  /** Determine whether it's a plain button */
  plain: Boolean

  /** Determine whether it's loading */
  loading: Boolean

  /** Disable the button */
  disabled: boolean

  /** Button icon, accepts an icon name of Element icon component */
  icon: string

  /** Same as native button's autofocus */
  autofocus: boolean

  /** Same as native button's type */
  nativeType: ButtonNativeType
}
