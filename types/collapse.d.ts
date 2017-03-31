import { ElementUIComponent } from './component'

/** Use Collapse to store contents. */
export declare class ElCollapse extends ElementUIComponent {
  /** Whether to activate accordion mode */
  accordion: boolean

  /** Currently active panel */
  value: string | number | string[] | number[]
}
