import { VNodeDirective } from 'vue'

export interface ElInfiniteScroll extends VNodeDirective {
  name: 'infinite-scroll',
  value: Function
}