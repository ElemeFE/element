import { ElementUIComponent } from './component'

export type AlertType = 'success' | 'warning' | 'info' | 'error'
export type AlertEffect = 'dark' | 'light'

/** Alert Component */
export declare class ElAlert extends ElementUIComponent {
  /** Title */
  title: string

  /** Component type */
  type: AlertType

  /** Descriptive text. Can also be passed with the default slot */
  description: string

  /** If closable or not */
  closable: boolean

  /** whether to center the text */
  center: boolean

  /** Customized close button text */
  closeText: string

  /** If a type icon is displayed */
  showIcon: boolean

  /** Choose effect */
  effect: AlertEffect
}
