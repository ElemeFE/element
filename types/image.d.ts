import { VNode } from 'vue'
import { ElementUIComponent } from './component'

export type ObjectFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'

export interface ImageSlots {
  /** Placeholder content when image hasn't loaded yet */
  placeholder: VNode[]

  /** Error content when error occurs to image load */
  error: VNode[]

  [key: string]: VNode[]
}

/** Image Component */
export declare class ElImage extends ElementUIComponent {
  /** Image source */
  src: string

  /** Indicate how the image should be resized to fit its container, same as native 'object-fit' */
  fit: ObjectFit

  /** Whether to use lazy load */
  lazy: boolean

  /** Scroll container that to add scroll listener when using lazy load */
  scrollContainer: string | HTMLElement

  /** Native 'alt' attribute */
  alt: string

  /** Native 'referrerPolicy' attribute */
  referrerPolicy: string

  $slots: ImageSlots

  previewSrcList: string[]

  zIndex: number

  initialIndex: number
}
