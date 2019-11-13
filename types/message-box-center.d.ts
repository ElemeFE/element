import Vue, { VNode } from 'vue'
import { MessageType } from './message'

export type MessageBoxCenterCloseAction = 'confirm' | 'cancel' | 'close'
export type MessageBoxCenterData = MessageBoxCenterInputData | MessageBoxCenterCloseAction

export interface MessageBoxCenterInputData {
    value: string,
    action: MessageBoxCenterCloseAction
}

export interface MessageBoxCenterInputValidator {
    (value: string): boolean | string
}

export declare class ElMessageBoxCenterComponent extends Vue {
    title: string
    message: string
    type: MessageType
    iconClass: string
    customClass: string
    showInput: boolean
    showClose: boolean
    inputValue: string
    inputPlaceholder: string
    inputType: string
    inputPattern: RegExp
    inputValidator: MessageBoxCenterInputValidator
    inputErrorMessage: string
    showConfirmButton: boolean
    showCancelButton: boolean
    action: MessageBoxCenterCloseAction
    dangerouslyUseHTMLString: boolean
    confirmButtonText: string
    cancelButtonText: string
    confirmButtonLoading: boolean
    cancelButtonLoading: boolean
    confirmButtonClass: string
    confirmButtonDisabled: boolean
    cancelButtonClass: string
    editorErrorMessage: string
}

/** Options used in MessageBoxCenter */
export interface ElMessageBoxCenterOptions {
    /** Title of the MessageBoxCenter */
    title?: string

    /** Content of the MessageBoxCenter */
    message?: string | VNode

    /** Message type, used for icon display */
    type?: MessageType

    /** Custom icon's class */
    iconClass?: string

    /** Custom class name for MessageBoxCenter */
    customClass?: string

    /** MessageBoxCenter closing callback if you don't prefer Promise */
    callback?: (action: MessageBoxCenterCloseAction, instance: ElMessageBoxCenterComponent) => void

    /** Callback before MessageBoxCenter closes, and it will prevent MessageBoxCenter from closing */
    beforeClose?: (action: MessageBoxCenterCloseAction, instance: ElMessageBoxCenterComponent, done: (() => void)) => void

    /** Whether to lock body scroll when MessageBoxCenter prompts */
    lockScroll?: boolean

    /** Whether to show a cancel button */
    showCancelButton?: boolean

    /** Whether to show a confirm button */
    showConfirmButton?: boolean

    /** Whether to show a close button */
    showClose?: boolean

    /** Text content of cancel button */
    cancelButtonText?: string

    /** Text content of confirm button */
    confirmButtonText?: string

    /** Custom class name of cancel button */
    cancelButtonClass?: string

    /** Custom class name of confirm button */
    confirmButtonClass?: string

    /** Whether to align the content in center */
    center?: boolean

    /** Whether message is treated as HTML string */
    dangerouslyUseHTMLString?: boolean

    /** Whether to use round button */
    roundButton?: boolean

    /** Whether MessageBoxCenter can be closed by clicking the mask */
    closeOnClickModal?: boolean

    /** Whether MessageBoxCenter can be closed by pressing the ESC */
    closeOnPressEscape?: boolean

    /** Whether to close MessageBoxCenter when hash changes */
    closeOnHashChange?: boolean

    /** Whether to show an input */
    showInput?: boolean

    /** Placeholder of input */
    inputPlaceholder?: string

    /** Initial value of input */
    inputValue?: string

    /** Regexp for the input */
    inputPattern?: RegExp

    /** Input Type: text, textArea, password or number */
    inputType?: string

    /** Validation function for the input. Should returns a boolean or string. If a string is returned, it will be assigned to inputErrorMessage */
    inputValidator?: MessageBoxCenterInputValidator

    /** Error message when validation fails */
    inputErrorMessage?: string

    /** Whether to distinguish canceling and closing */
    distinguishCancelAndClose?: boolean
}

export interface ElMessageBoxCenterShortcutMethod {
    (message: string, title: string, options?: ElMessageBoxCenterOptions): Promise<MessageBoxCenterData>
    (message: string, options?: ElMessageBoxCenterOptions): Promise<MessageBoxCenterData>
}

export interface ElMessageBoxCenter {
    /** Show a message box */
    (message: string, title?: string, type?: string): Promise<MessageBoxCenterData>

    /** Show a message box */
    (options: ElMessageBoxCenterOptions): Promise<MessageBoxCenterData>

    /** Show an alert message box */
    alert: ElMessageBoxCenterShortcutMethod

    /** Show a confirm message box */
    confirm: ElMessageBoxCenterShortcutMethod

    /** Show a prompt message box */
    prompt: ElMessageBoxCenterShortcutMethod

    /** Set default options of message boxes */
    setDefaults (defaults: ElMessageBoxCenterOptions): void

    /** Close current message box */
    close (): void
}

declare module 'vue/types/vue' {
    interface Vue {
        /** Show a message box */
        $msgbox: ElMessageBoxCenter

        /** Show an alert message box */
        $alert: ElMessageBoxCenterShortcutMethod

        /** Show a confirm message box */
        $confirm: ElMessageBoxCenterShortcutMethod

        /** Show a prompt message box */
        $prompt: ElMessageBoxCenterShortcutMethod
    }
}
