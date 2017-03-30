import { ElementUIComponent } from './component'

/** Switch Component */
export declare class ElSwitch extends ElementUIComponent {
  /** Whether Switch is on */
  value: boolean

  /** Whether Switch is disabled */
  disabled: boolean

  /** Width of Switch */
  width: number

  /** Class name of the icon displayed when in on state, overrides on-text */
  onCloseIcon: string

  /** Class name of the icon displayed when in off state, overrides off-text */
  offCloseIcon: string

  /** Text displayed when in on state */
  onText: string

  /** Text displayed when in off state */
  offText: string

  /** Background color when in on state */
  onColor: string

  /** Background color when in off state */
  offColor: string

  /** Input name of Switch */
  name: string
}
