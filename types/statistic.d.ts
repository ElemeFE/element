import { ElementUIComponent } from './component'

/** Statistic Component */
export declare class ElStatistic extends ElementUIComponent {
      /** Set the decimal point */
    decimalSeparator:string
      /** Sets the thousandth identifier */
    groupSeparator:string
      /** numerical precision */
    precision:number
    /** Numerical content */
    value:string|number
  /** Title of numerical value */
    title:string|number
      /**Whether to enable the countdown function */
    timeIndices:boolean
      /** Sets the style of the value */
    valueStyle:object
      /** Numeric content formatting countdown display*/
    format:string
      /** Set the ratio */
    rate:number
   /** Set the suffix of the value*/
    suffix:string
    /** Set the prefix of the value*/
    prefix:string
}
