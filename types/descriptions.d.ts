import { ElementUIComponent } from './component'
import { VNode } from 'vue'

interface ElDescriptionsSlots {
  /* title slot: custom title, display on the top left */
  title: VNode[]

  /* title slot: custom extra area, display on the top right */
  extra: VNode[]

  [key: string]: VNode[]
}

/** Display multiple fields in list form. **/
export declare class ElDescriptions extends ElementUIComponent {

  /* with or without border */
  border: boolean
  
  /* numbers of Descriptions Item in one line */
  column: number

  /* direction of list */
  direction: 'vertical' | 'horizontal'

  /* size of list */
  size: 'medium' | 'small' | 'mini'

  /* title text, display on the top left */
  title: string

  /* extra text, display on the top right */
  extra: string

  /* change default props colon value of Descriptions Item */
  colon: boolean

  /* custom label class name */
  labelClassName: string

  /* custom content class name */
  contentClassName: string

  /* custom label style */
  labelStyle: object

  /* custom content style */
  contentStyle: object

  $slots: ElDescriptionsSlots

}
