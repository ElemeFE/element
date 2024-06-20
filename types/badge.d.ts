import { ElementUIComponent } from './component'

/** Badge type */
export type BadgeType = 'primary' | 'success' | 'warning' | 'info' | 'danger'

/** Badge Component */
export declare class ElBadge extends ElementUIComponent {
  /** Display value */
  value: string | number

  /** Maximum value, shows '{max}+' when exceeded. Only works if `value` is a number */
  max: number

  /** If a little dot is displayed */
  isDot: boolean

  /** Hidden badge */
  hidden: boolean

  /** Badge type */
  type: BadgeType
}
