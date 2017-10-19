import { ElementUIComponent } from './component'

export type ProgressType = 'line' | 'circle'
export type ProgressStatus = 'success' | 'exception'

/** Progress Component */
export declare class ElProgress extends ElementUIComponent {
  /** Percentage, required */
  percentage: number

  /** The type of progress bar */
  type: ProgressType

  /** The width of progress bar */
  strokeWidth: number

  /** Whether to place the percentage inside progress bar, only works when type is 'line' */
  textInside: boolean

  /** The current status of progress bar */
  status: ProgressStatus

  /** The canvas width of circle progress bar */
  width: number

  /** Whether to show percentage */
  showText: boolean
}
