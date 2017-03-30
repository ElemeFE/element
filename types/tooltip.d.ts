import { ElementUIComponent } from './component'

export type TooltipEffect = 'dark' | 'light'
export type TooltipPlacement = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'

/** Tooltip Component */
export declare class ElTooltip extends ElementUIComponent {
  /** Tooltip theme */
  effect: TooltipEffect

  /** Display content, can be overridden by slot#content */
  content: String

  /** Position of Tooltip */
  placement: TooltipPlacement

  /** Visibility of Tooltip */
  value: boolean

  /** Whether Tooltip is disabled */
  disabled: boolean

  /** Offset of the Tooltip */
  offset: number

  /** Animation name */
  transition: string

  /** Whether an arrow is displayed. For more information, check Vue-popper page */
  visibleArrow: boolean

  /** Popper.js parameters */
  options: object

  /** Delay of appearance, in millisecond */
  openDelay: number

  /** Whether to control Tooltip manually. mouseenter and mouseleave won't have effects if set to true */
  manual: boolean

  /** Custom class name for Tooltip's popper */
  popperClass: string
}
