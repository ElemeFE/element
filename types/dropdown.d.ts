import { ElementUIComponent, ElementUIComponentSize } from './component'
import { ButtonType } from './button'

export type DropdownMenuAlignment = 'start' | 'end'
export type DropdownMenuTrigger = 'hover' | 'click'

/** Toggleable menu for displaying lists of links and actions */
export declare class ElDropdown extends ElementUIComponent {
  /** Menu button type. only works when split-button is true */
  type: ButtonType

  /** Whether a button group is displayed */
  splitButton: boolean

  /** Component size */
  size: ElementUIComponentSize

  /** Horizontal alignment */
  menuAlign: DropdownMenuAlignment

  /** How to trigger */
  trigger: DropdownMenuTrigger

  /** Whether to hide menu after clicking menu-item */
  hideOnClick: boolean
}
