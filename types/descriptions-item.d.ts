import { ElementUIComponent } from './component'
import { VNode } from 'vue'

interface ElDescriptionsItemSlots {
  /* label slot: custom label */
  label: VNode[]

  /* default slot: custom content */
  default: VNode[]

  [key: string]: VNode[]
}

/** description item. **/
export declare class ElDescriptionsItem extends ElementUIComponent {

  /* label text */
  label: string

  /*  the number of columns included */
  span: number 

  /* custom label class name */
  labelClassName: string

  /* custom content class name */
  contentClassName: string

  /* custom label style */
  labelStyle: object

  /* custom content style */
  contentStyle: object

  $slots: ElDescriptionsItemSlots

}
