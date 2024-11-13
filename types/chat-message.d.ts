import {ElementUIComponent, ElementUIComponentSize} from './component'

/** ChatMessage type */
export type ChatMessageType = 'primary' | 'success' | 'warning' | 'danger'

/** ChatMessage status */
export type ChatMessageStatus = 'none' | 'sending' | 'delivered' | 'read'

/** ChatMessage position */
export type ChatMessagePosition = 'left' | 'right'

/** ChatMessage text */
export interface ChatMessageText {
  text: string,
  stamp?: string,
  status?: ChatMessageStatus
}

/** ChatMessage Component */
export declare class ElChatMessage extends ElementUIComponent {
  /** ChatMessage size */
  size: ElementUIComponentSize

  /** ChatMessage status */
  status: ChatMessageStatus

  /** ChatMessage type */
  type: ChatMessageType

  /** ChatMessage position */
  position: ChatMessagePosition

  /** Sender name */
  name: string

  /** Datetime message */
  stamp: string

  /** Array of message */
  text: Array<ChatMessageText> | string

  /** Sender avatar */
  avatar: string
}
