import PropTypes from 'element-ui/src/utils/vue-types';
import { getComponentFromProp } from 'element-ui/src/utils/props-util';
import emptyImg from './empty.svg';

export const EmptyProps = {
  prefixCls: PropTypes.string,
  image: PropTypes.any,
  description: PropTypes.any
};

const Empty = {
  name: 'ElEmpty',
  props: EmptyProps,
  render() {
    const prefixCls = 'el-empty';
    const image = getComponentFromProp(this, 'image');
    const description = getComponentFromProp(this, 'description');

    const des = description || '暂无数据';
    const alt = typeof des === 'string' ? des : 'empty';

    let imageNode = null;
    if (!image) {
      imageNode = <img alt={alt} src={emptyImg} />;
    } else if (typeof image === 'string') {
      imageNode = <img alt={alt} src={image} />;
    } else {
      imageNode = image;
    }

    return (
      <div class={prefixCls} {...{ on: this.$listeners }}>
        <div class={`${prefixCls}-image`}>{imageNode}</div>
        <p class={`${prefixCls}-description`}>{des}</p>
        {this.$slots.default && <div class={`${prefixCls}-footer`}>{this.$slots.default}</div>}
      </div>
    );
  }
};

export default Empty;
