import { ElementUIComponent } from './component'

export type TabType = 'card' | 'border-card'
export type TabPosition = 'top' | 'right' | 'bottom' | 'left'

/** Divide data collections which are related yet belong to different types */
export declare class ElTabs extends ElementUIComponent {
  /** Type of Tab */
  type: TabType

  /** Whether Tab is closable */
  closable: boolean

  /** Whether Tab is addable */
  addable: boolean

  /** Whether Tab is addable and closable */
  editable: boolean

  /** Name of the selected tab */
  value: string

  /** Position of tabs */
  tabPosition: TabPosition

  /** Whether width of tab automatically fits its container */
  stretch: Boolean

  /** Hook function before switching tab. If false or a Promise is returned and then is rejected, switching will be prevented */
  beforeLeave: (activeName: string, oldActiveName: string) => boolean | Promise<any>
}
