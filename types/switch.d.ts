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
  trueIconClass: string

  /** Class name of the icon displayed when in off state, overrides off-text */
  falseIconClass: string

  /** Text displayed when in on state */
  trueText: string

  /** Text displayed when in off state */
  falseText: string

  /** Background color when in on state */
  trueColor: string

  /** Background color when in off state */
  falseColor: string

  /** Switch value when in on state */
  trueValue: string | boolean | number

  /** Switch value when in off state */
  falseValue: string | boolean | number

  /** Input name of Switch */
  name: string
}
