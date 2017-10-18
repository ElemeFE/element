import { CreateElement, VNode } from 'vue'
import { ElementUIComponent } from './component'

export interface TransferData {
  key: any,
  label: string,
  disabled: boolean
}

export interface TransferFormat {
  noChecked: string,
  hasChecked: string,
}

export interface TransferProps {
  key: string,
  label: string,
  disabled: string
}

export interface TransferRenderContent {
  /**
   * Render function for a specific option
   *
   * @param h The render function
   * @param option The option data object
   */
  (h: CreateElement, option: TransferData): VNode
}

/** Transfer Component */
export declare class ElTransfer extends ElementUIComponent {
  /** Data source */
  data: TransferData[]

  /** Whether Transfer is filterable */
  filterable: boolean

  /** Placeholder for the filter input */
  filterPlaceholder: string

  /** Custom filter method */
  filterMethod: (query: string, item: TransferData) => boolean

  /** Custom list titles */
  titles: string[]

  /** Custom button texts */
  buttonTexts: string[]

  /** Custom render function for data items */
  renderContent: TransferRenderContent

  /** Texts for checking status in list header */
  format: TransferFormat

  /** Prop aliases for data source */
  props: TransferProps

  /** Key array of initially checked data items of the left list */
  leftDefaultChecked: any[]

  /** Key array of initially checked data items of the right list */
  rightDefaultChecked: any[]
}
