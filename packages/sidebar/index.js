import Component from './sidebar'
import Component2 from './sidebarItem'
import Component3 from './sidebarGroup'

export default Vue => {
  Vue.component(Component.name, Component)
  Vue.component(Component2.name, Component2)
  Vue.component(Component3.name, Component3)
}
