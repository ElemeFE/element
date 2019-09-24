import { ElementUIComponent } from './component'
import { ElPopover } from './popover'

/** Popconfirm Component */
export declare class ElPopconfirm extends ElPopover {
  /** Popconfirm title */
  title: string

  /** Popconfirm ok text */
  okText: string
  
  /** Popconfirm cancel text */
  cancelText: string

  /** Popconfirm ok type */
  okType: string

  /** Popconfirm cancal type */
  cancelType: string

  /** Popconfirm icon */
  icon: string

  /** Popconfirm icon color */
  iconColor: string

  /** Popconfirm hide icon */
  hideIcon: boolean
}
