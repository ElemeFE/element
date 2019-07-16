import { ElementUIComponent } from './component'
import { VNode } from 'vue'

type hide = (shouldCancel: boolean) => void
declare enum Direction {
    LTR = 'ltr', // left to right
    RTL = 'rtl', // right to left
    TTB = 'ttb', // top to bottom
    BTT = 'btt' // bottom to top
}

interface DrawerSlots {
    /* Main Content Slots */
    default: VNode[];

    /* Title Slots */
    title: VNode[];

    [key: string]: VNode[]
}
/** Drawer Component */
export declare class ElDrawer extends ElementUIComponent {
    /* Equivalent to `Dialog`'s append to body attribute, when applying nested drawer, make sure this one is set to true */
    appendToBody: boolean

    /* Hook method called before close drawer, the first parameter is a function which should determine if the drawer should be closed */
    beforeClose: (done: hide) => void

    /** Whether the Drawer can be closed by pressing ESC */
    closeOnPressEscape: boolean

    /** Custom class names for Dialog */
    customClass: string

    /* Determine whether the wrapped children should be destroyed, if true, children's destroyed life cycle method will be called all local state will be destroyed */
    destroyOnClose: boolean

    /* Equivalent to `Dialog`'s modal attribute, determines whether the dark shadowing background should show */
    modal: boolean

    /* Equivalent to `Dialog`'s modal-append-to-body attribute, determines whether the shadowing background should be inserted direct to DocumentBody element */
    modalAppendToBody: boolean

    /* Attributes that controls the drawer's direction of display*/
    position: Direction

    /* Whether the close button should be rendered to control the drawer's visible state */
    showClose: boolean

    /* The size of the drawer component, supporting number with unit of pixel, string by percentage e.g. 30% */
    size: number | string

    /* The Drawer's title, also can be replaced by named slot `title` */
    title: string

    /* Whether the drawer component should show, also can be decorated by `.sync` */
    visible: boolean

    /* Flag attribute whi */
    wrapperClosable: boolean

    $slots: DrawerSlots
}
