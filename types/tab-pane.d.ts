import { TmUIComponent } from './component'

/** Tab Pane Component */
export declare class TmTabPane extends TmUIComponent {
  /** Title of the tab */
  label: string

  /** Whether Tab is disabled */
  disabled: boolean

  /** Identifier corresponding to the activeName of Tabs, representing the alias of the tab-pane */
  name: string

  /** Whether Tab is closable */
  closable: boolean
}
