import classNames from 'classnames';
import PropTypes from 'element-ui/src/utils/vue-types';
import { initDefaultProps } from 'element-ui/src/utils/props-util';

const skeletonAvatarProps = {
  prefixCls: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small', 'default']),
  shape: PropTypes.oneOf(['circle', 'square'])
};

export const SkeletonAvatarProps = PropTypes.shape(skeletonAvatarProps).loose;

const Avatar = {
  props: initDefaultProps(skeletonAvatarProps, {
    size: 'large'
  }),
  render() {
    const { prefixCls, size, shape } = this.$props;

    const sizeCls = classNames({
      [`${prefixCls}-lg`]: size === 'large',
      [`${prefixCls}-sm`]: size === 'small'
    });

    const shapeCls = classNames({
      [`${prefixCls}-circle`]: shape === 'circle',
      [`${prefixCls}-square`]: shape === 'square'
    });

    return <span class={classNames(prefixCls, sizeCls, shapeCls)} />;
  }
};

export default Avatar;
