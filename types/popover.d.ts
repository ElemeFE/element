import { VNode, VNodeDirective } from 'vue'
import { ElementUIComponent } from './component'

export type PopoverTrigger = 'click' | 'focus' | 'hover' | 'manual'
export type PopoverPlacement = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'

export interface PopoverSlots {
  /** Content of popover */
  default: VNode[],

  /** HTML element that triggers popover */
  reference: VNode[]

  [key: string]: VNode[]
}

/** Popover directive definition */
export interface ElPopoverDirective extends VNodeDirective {
  name: 'popover',
  arg: string
}

/** Popover Component */
export declare class ElPopover extends ElementUIComponent {
  /** How the popover is triggered */
  trigger: PopoverTrigger

  /** Popover title */
  title: string

  /** Popover content, can be replaced with a default slot */
  content: string

  /** Popover width */
  width: string | number

  /** Popover placement */
  placement: PopoverPlacement

  /** Whether Popover is disabled */
  disabled: boolean

  /** Whether popover is visible */
  value: boolean

  /** Popover offset */
  offset: number

  /** Popover transition animation */
  transition: string

  /** Whether a tooltip arrow is displayed or not. For more info, please refer to Vue-popper */
  visibleArrow: boolean

  /** Parameters for popper.js */
  popperOptions: object

  /** Custom class name for popover */
  popperClass: string

  /** Delay of appearance when trigger is hover, in milliseconds */
  openDelay: number

  /** Popover tabindex */
  tabindex: number

  $slots: PopoverSlots
}
