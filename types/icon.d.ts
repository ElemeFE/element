import { ElementUIComponent } from './component'

/** Avaliable icon names */
export type ElementUIIcon = 'arrow-down' | 'arrow-left' | 'arrow-right' | 'arrow-up' | 'caret-bottom' | 'caret-left' | 'caret-right' | 'caret-top' | 'check' | 'circle-check' | 'circle-close' | 'circle-cross' | 'close' | 'upload' | 'd-arrow-left' | 'd-arrow-right' | 'd-caret' | 'date' | 'delete' | 'document' | 'edit' | 'information' | 'loading' | 'menu' | 'message' | 'minus' | 'more' | 'picture' | 'plus' | 'search' | 'setting' | 'share' | 'star-off' | 'star-on' | 'time' | 'warning' | 'delete2' | 'upload2' | 'view'

/** Icon Component */
export declare class ElIcon extends ElementUIComponent {
  /** Icon name */
  name: ElementUIIcon
}
