import classNames from 'classnames';
import PropTypes from 'element-ui/src/utils/vue-types';
import { initDefaultProps, hasProp } from 'element-ui/src/utils/props-util';

import Avatar, { SkeletonAvatarProps } from './Avatar.jsx'; // eslint-disable-line
import Title, { SkeletonTitleProps } from './Title.jsx'; // eslint-disable-line
import Paragraph, { SkeletonParagraphProps } from './Paragraph.jsx'; // eslint-disable-line

export const SkeletonProps = {
  active: PropTypes.bool,
  loading: PropTypes.bool,
  prefixCls: PropTypes.string,
  children: PropTypes.any,
  avatar: PropTypes.oneOfType([PropTypes.string, SkeletonAvatarProps, PropTypes.bool]),
  title: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, SkeletonTitleProps]),
  paragraph: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, SkeletonParagraphProps])
};

function getComponentProps(prop) {
  if (prop && typeof prop === 'object') {
    return prop;
  }
  return {};
}

function getAvatarBasicProps(hasTitle, hasParagraph) {
  if (hasTitle && !hasParagraph) {
    return { shape: 'square' };
  }

  return { shape: 'circle' };
}

function getTitleBasicProps(hasAvatar, hasParagraph) {
  if (!hasAvatar && hasParagraph) {
    return { width: '38%' };
  }

  if (hasAvatar && hasParagraph) {
    return { width: '50%' };
  }

  return {};
}

function getParagraphBasicProps(hasAvatar, hasTitle) {
  const basicProps = {};

  // Width
  if (!hasAvatar || !hasTitle) {
    basicProps.width = '61%';
  }

  // Rows
  if (!hasAvatar && hasTitle) {
    basicProps.rows = 3;
  } else {
    basicProps.rows = 2;
  }
  return basicProps;
}

const Skeleton = {
  name: 'ElSkeleton',
  props: initDefaultProps(SkeletonProps, {
    avatar: false,
    title: true,
    paragraph: true
  }),
  render() {
    const {
      loading,
      avatar,
      title,
      paragraph,
      active
    } = this.$props;
    const prefixCls = 'el-skeleton';
    if (loading || !hasProp(this, 'loading')) {
      const hasAvatar = !!avatar || avatar === '';
      const hasTitle = !!title;
      const hasParagraph = !!paragraph;

      // Avatar
      let avatarNode;
      if (hasAvatar) {
        const avatarProps = {
          props: {
            prefixCls: `${prefixCls}-avatar`,
            ...getAvatarBasicProps(hasTitle, hasParagraph),
            ...getComponentProps(avatar)
          }
        };

        avatarNode = (
          <div class={`${prefixCls}-header`}>
            <Avatar {...avatarProps} />
          </div>
        );
      }

      let contentNode;
      if (hasTitle || hasParagraph) {
        // Title
        let $title;
        if (hasTitle) {
          const titleProps = {
            props: {
              prefixCls: `${prefixCls}-title`,
              ...getTitleBasicProps(hasAvatar, hasParagraph),
              ...getComponentProps(title)
            }
          };

          $title = <Title {...titleProps} />;
        }

        // Paragraph
        let paragraphNode;
        if (hasParagraph) {
          const paragraphProps = {
            props: {
              prefixCls: `${prefixCls}-paragraph`,
              ...getParagraphBasicProps(hasAvatar, hasTitle),
              ...getComponentProps(paragraph)
            }
          };
          paragraphNode = <Paragraph {...paragraphProps} />;
        }

        contentNode = (
          <div class={`${prefixCls}-content`}>
            {$title}
            {paragraphNode}
          </div>
        );
      }

      const cls = classNames(prefixCls, {
        [`${prefixCls}-with-avatar`]: hasAvatar,
        [`${prefixCls}-active`]: active
      });

      return (
        <div class={cls}>
          {avatarNode}
          {contentNode}
        </div>
      );
    }
    return this.$slots.default && this.$slots.default[0];
  }
};

export default Skeleton;
