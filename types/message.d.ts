import Vue, {VNode} from 'vue'

export type MessageType = 'success' | 'warning' | 'info' | 'error'

/** Message Component */
export declare class TmMessageComponent extends Vue {
  /** Close the Loading instance */
  close (): void
}

export interface CloseEventHandler {
  /**
   * Triggers when a message is being closed
   *
   * @param instance The message component that is being closed
   */
  (instance: TmMessageComponent): void
}

/** Options used in Message */
export interface TmMessageOptions {
  /** Message text */
  message: string | VNode

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

export interface TmMessage {
  /** Show an info message */
  (text: string): TmMessageComponent

  /** Show message */
  (options: TmMessageOptions): TmMessageComponent

  /** Show a success message */
  success (text: string): TmMessageComponent

  /** Show a success message with options */
  success (options: TmMessageOptions): TmMessageComponent

  /** Show a warning message */
  warning (text: string): TmMessageComponent

  /** Show a warning message with options */
  warning (options: TmMessageOptions): TmMessageComponent

  /** Show an info message */
  info (text: string): TmMessageComponent

  /** Show an info message with options */
  info (options: TmMessageOptions): TmMessageComponent

  /** Show an error message */
  error (text: string): TmMessageComponent

  /** Show an error message with options */
  error (options: TmMessageOptions): TmMessageComponent
}

declare module 'vue/types/vue' {
  interface Vue {
  /** Used to show feedback after an activity. The difference with Notification is that the latter is often used to show a system level passive notification. */
    $message: TmMessage
  }
}
