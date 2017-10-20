import { ElementUIComponent } from './component'

/** Breadcrumb Item Component */
export declare class ElBreadcrumbItem extends ElementUIComponent {
  /** Target route of the link, same as to of vue-router */
  to: string | object

  /** If true, the navigation will not leave a history record */
  replace: boolean
}
