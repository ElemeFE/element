import { VNode } from 'vue'
import { ElementUIComponent } from './component'

export type DialogSize = 'tiny' | 'small' | 'large' | 'full'

export interface DialogSlots {
  /** Content of the Dialog */
  default: VNode[],

  /** Content of the Dialog title */
  title: VNode[],

  /** Content of the Dialog footer */
  footer: VNode[],

  [key: string]: VNode[]
}

/** Informs users while preserving the current page state */
export declare class ElDialog extends ElementUIComponent {
  /** Title of Dialog */
  title: string

  /** Size of Dialog */
  size: DialogSize

  /** Value for `top` of Dialog CSS, works when `size` is not `full` */
  top: string

  /** Whether a mask is displayed */
  modal: boolean

  /** Whether to append modal to body element. If false, the modal will be appended to Dialog's parent element */
  modalAppendToBody: boolean

  /** Whether scroll of body is disabled while Dialog is displayed */
  lockScroll: boolean

  /** Custom class names for Dialog */
  customClass: string

  /** Whether the Dialog can be closed by clicking the mask */
  closeOnClickModal: boolean

  /** Whether the Dialog can be closed by pressing ESC */
  closeOnPressEscape: boolean

  /** Whether to show a close button */
  showClose: boolean

  $slots: DialogSlots

  /** Open the current instance */
  open ()

  /** Close the current instance */
  close ()
}
