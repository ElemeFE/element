import { ElementUIComponent } from './component'

export type panelType = 'view' | 'edit'
/** Panel Component */
export declare class ElPanel extends ElementUIComponent {
  /** title text */
  title: string

  /** subtitle text */
  subtitle: string

  /** Panel type */
  type: panelType

  /** bodyPadding */
  bodyPadding: string
|     
  /** Panel width */
  width: string | number
}
