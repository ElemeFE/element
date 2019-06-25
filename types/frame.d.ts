import { ElementUIComponent } from './component'

type fill =  'left' | 'both' | 'right' | 'none'
type size =  string | number

/** Dropdown Select Option Component */
export declare class ElFrame extends ElementUIComponent {
    transition?: boolean

    fillHeader?: fill

    fillFooter?: fill

    headerSize?: size

    headerIndex?: number

    headerFloat?: boolean

    footerSize?: size

    footerIndex?: number

    footerFloat?: boolean

    leftSize?: size

    leftIndex?: number

    leftFloat?: boolean

    rightSize?: size

    rightIndex?: number

    rightFloat?: boolean
}
