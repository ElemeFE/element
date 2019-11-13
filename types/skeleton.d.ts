import { ElementUIComponent } from './component'

/** Skeleton Component */

export interface SkeletonAvatarProps {
  size?: 'large' | 'small' | 'default';
  shape?: 'circle' | 'square';
}

export interface SkeletonTitleProps {
  width?: number | string;
}

export interface SkeletonParagraphProps {
  width?: string | number | Array<string | number>;
  rows?: number;
}

export declare class Skeleton extends ElementUIComponent {
  /**
   * Show animation effect
   * @default false
   * @type boolean
   */
  active: boolean;

  /**
   * Show avatar placeholder
   * @default false
   * @type boolean | object
   */
  avatar: boolean | SkeletonAvatarProps;

  /**
   * Display the skeleton when true
   * @type boolean
   */
  loading: boolean;

  /**
   * Show paragraph placeholder
   * @default true
   * @type boolean | object
   */
  paragraph: boolean | SkeletonParagraphProps;

  /**
   * Show title placeholder
   * @default true
   * @type boolean | object
   */
  title: boolean | SkeletonTitleProps;
}
