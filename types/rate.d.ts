import { ElementUIComponent } from './component'

interface Option {
  value: string,
  excluded?: boolean
}

interface Options {
  [threshold: number]: string | Option
}

export type RateColors = Options
export type RateIconClasses = Options

/** Rate Component */
export declare class ElRate extends ElementUIComponent {
  /** Max rating score */
  max: number

  /** Whether Rate is read-only */
  disabled: boolean

  /** Whether picking half start is allowed */
  allowHalf: boolean

  /** Threshold value between low and medium level. The value itself will be included in low level */
  lowThreshold: number

  /** Threshold value between medium and high level. The value itself will be included in high level */
  highThreshold: number

  /** Colors for icons. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding color */
  colors: string[] | RateColors

  /** Color of unselected icons */
  voidColor: string

  /** Color of unselected read-only icons */
  disabledVoidColor: string

  /** Class names of icons. If array, it should have 3 elements, each of which corresponds with a score level, else if object, the key should be threshold value between two levels, and the value should be corresponding class name */
  iconClasses: string[] | RateIconClasses

  /** Class name of unselected icons */
  voidIconClass: string

  /** Class name of unselected read-only icons */
  disabledVoidIconClass: string

  /** Whether to display texts */
  showText: boolean

  /** Whether to display current score. show-score and show-text cannot be true at the same time */
  showScore: boolean

  /** Color of texts */
  textColor: string

  /** Text array */
  texts: string[]

  /** Text template when the component is read-only */
  scoreTemplate: string
}
