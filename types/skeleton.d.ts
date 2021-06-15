import { ElementUIComponent } from './component'
import { VNode } from 'vue'

interface ElSkeletonSlots {
  /* default slot:  Real rendering DOM */
  default: VNode[]

  /* template slot: Custom rendering skeleton template */
  template: VNode[]

  [key: string]: VNode[]
}

/** When loading data, and you need a rich experience for visual and interactions for your end users */
export declare class ElSkeleton extends ElementUIComponent {
  /** whether showing the animation; default: false */
  animated: boolean

  /** how many fake items to render to the DOM; default: 1 */
  count: number

  /** whether showing the skeleton; default true */
  loading: boolean

  /** numbers of the row, only useful when no template slot were given; default: 4 */
  rows: boolean

  /** Rendering delay in millseconds; default: 0 */
  throttle: number

  $slots: ElSkeletonSlots

}
