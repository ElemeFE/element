import Vue from 'vue'

export type MessageType = 'success' | 'warning' | 'info' | 'error'

/** Message Component */
export declare class ElMessageComponent extends Vue {
  /** Close the Loading instance */
  close (): void
}

export interface CloseEventHandler {
  /**
   * Triggers when a message is being closed
   *
   * @param instance The message component that is being closed
   */
  (instance: ElMessageComponent): void
}

/** Options used in Message */
export interface ElMessageOptions {
  /** Message text */
  message: string

  /** Message type */
  type?: MessageType

  /** Custom icon's class, overrides type */
  iconClass?: string

  /** Custom class name for Message */
  customClass?: string

  /** Display duration, millisecond. If set to 0, it will not turn off automatically */
  duration?: number

  /** Whether to show a close button */
  showClose?: boolean

  /** Whether to center the text */
  center?: boolean

  /** Whether message is treated as HTML string */
  dangerouslyUseHTMLString?: boolean

  /** Callback function when closed with the message instance as the parameter */
  onClose?: CloseEventHandler
}

export interface ElMessage {
  /** Show an info message */
  (text: string): ElMessageComponent

  /** Show message */
  (options: ElMessageOptions): ElMessageComponent

  /** Show a success message */
  success (text: string): ElMessageComponent

  /** Show a warning message */
  warning (text: string): ElMessageComponent

  /** Show an info message */
  info (text: string): ElMessageComponent

  /** Show an error message */
  error (text: string): ElMessageComponent
}

declare module 'vue/types/vue' {
  interface Vue {
  /** Used to show feedback after an activity. The difference with Notification is that the latter is often used to show a system level passive notification. */
    $message: ElMessage
  }
}
