import { TmUIComponent } from './component'

/** Submenu Component */
export declare class TmSubmenu extends TmUIComponent {
  /** Unique identification */
  index: string

  /** Delay time before show a sub-menu */
  showTimeout: number

  /** Delay time before hide a sub-menu */
  hideTimeout: number

  /** Custom class name for the popup menu */
  popperClass: string

  /** Whether the sub-menu is disabled */
  disabled: boolean

  /** Whether to append the popper menu to body */
  popperAppendToBody: boolean
}
