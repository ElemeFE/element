import { ElementUIComponent } from './component'
import { VNode } from 'vue'

interface ELEmptySlots {
  /* default slot:  Custom bottom content */
  default: VNode[]

  /* image slot: Custom image */
  image: VNode[]

  /* description slot: Custom description */
  description: VNode[]


  [key: string]: VNode[]
}

/** Placeholder hints for empty states. */
export declare class ElEmpty extends ElementUIComponent {
  /* image URL */
  image: string
  	
  /* image size (width) */
  imageSize: number
  
  /* description */
  description: string

  $slots: ELEmptySlots

}
