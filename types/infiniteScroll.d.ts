import { VNodeDirective } from 'vue'

export interface ElLoadingDirective extends VNodeDirective {
  name: 'infinite-scroll',
  value: Function
}