import Vue from 'vue'
import { ElementUIComponent } from './component'

/** ImagePreview Component */
export declare class ElImagePreviewComponent extends Vue {

    constructor(options: ElImagePreviewOptions)

    /** Close current preview box */
    closePreview(): void

    /** zoom in preview image */
    zoomIn(value: number): void

    /** zoom out preview image */
    zoomOut(value: number): void

    /** zoom to the specified value */
    zoomTo(value: number): void

    /** rotate preview image */
    rotateImage(value: number): void
}

interface ElImagePreviewOptions {
    /** preview image's url */
    url: string

    /** preview container height */
    height?: number

    /** preview container width */
    width?: string

    /** maximum zoom value for preview image*/
    maxZoomValue?: number

    /** miximum zoom value for preview image*/
    minZoomValue?: number

    /** preview the value of each zoom */
    zoomValue?: number

    /** the callback function when the preivew window closes*/
    onClose?: () => void
}

export interface ElImagePreview {
    (options : ElImagePreviewOptions) : ElImagePreviewComponent
}

declare module 'vue/types/vue' {
    interface Vue {
      /** Show a preview box */
      $imagePreview: ElImagePreview
    }
}
