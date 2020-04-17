import { ElementUIComponent } from './component'

/** Scrollbar element */
export declare class Scrollbar extends ElementUIComponent {
  /** Use native scrollbar */
  native: boolean

  wrapStyle: any

  wrapClass: any

  viewStyle: any

  viewClass: any

  /** Indicates the size of scroll content won't change */
  noresize: boolean

  tag: string

  orientation: 'vertical' | 'horizontal' | 'both'
}
