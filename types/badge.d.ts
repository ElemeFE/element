import { TmUIComponent } from './component'

/** Button type */
export type BadgeColor = 'red' | 'orange' | 'green'

/** Button Component */
export declare class TmBadge extends TmUIComponent {
  /** badge special color */
  color: BadgeColor

  /** determine whether it's a hollow badge */
  hollow: boolean

  /** determine whether it's a round badge */
  round: boolean

  /** determine whether badge has no hover */
  noHover: boolean
}
