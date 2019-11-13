import PropTypes from 'element-ui/src/utils/vue-types';
import classNames from 'classnames';
import shallowequal from 'shallowequal';
import omit from 'omit.js';
import getScroll from 'element-ui/src/utils/getScroll';
import BaseMixin from 'element-ui/src/utils/BaseMixin';
import throttleByAnimationFrame from 'element-ui/src/utils/throttleByAnimationFrame';

function getTargetRect(target) {
  return target !== window ? target.getBoundingClientRect() : { top: 0, left: 0, bottom: 0 };
}

function getOffset(element, target) {
  const elemRect = element.getBoundingClientRect();
  const targetRect = getTargetRect(target);

  const scrollTop = getScroll(target, true);
  const scrollLeft = getScroll(target, false);

  const docElem = window.document.body;
  const clientTop = docElem.clientTop || 0;
  const clientLeft = docElem.clientLeft || 0;

  return {
    top: elemRect.top - targetRect.top + scrollTop - clientTop,
    left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
    width: elemRect.width,
    height: elemRect.height
  };
}

function getDefaultTarget() {
  return typeof window !== 'undefined' ? window : null;
}

// Affix
const AffixProps = {
  /**
   * 距离窗口顶部达到指定偏移量后触发
   */
  offsetTop: PropTypes.number,
  offset: PropTypes.number,
  /** 距离窗口底部达到指定偏移量后触发 */
  offsetBottom: PropTypes.number,
  /** 固定状态改变时触发的回调函数 */
  // onChange?: (affixed?: boolean) => void;
  /** 设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 */
  target: PropTypes.func,
  prefixCls: PropTypes.string
};

const Affix = {
  name: 'ElAffix',
  props: AffixProps,
  mixins: [BaseMixin],
  data() {
    this.events = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'];
    this.eventHandlers = {};
    return {
      affixStyle: undefined,
      placeholderStyle: undefined
    };
  },
  beforeMount() {
    this.updatePosition = throttleByAnimationFrame(this.updatePosition);
  },
  mounted() {
    const target = this.target || getDefaultTarget;
    // Wait for parent component ref has its value
    this.timeout = setTimeout(() => {
      this.setTargetEventListeners(target);
      // Mock Event object.
      this.updatePosition({});
    });
  },
  watch: {
    target(val) {
      this.clearEventListeners();
      this.setTargetEventListeners(val);
      // Mock Event object.
      this.updatePosition({});
    },
    offsetTop() {
      this.updatePosition({});
    },
    offsetBottom() {
      this.updatePosition({});
    }
  },
  beforeDestroy() {
    this.clearEventListeners();
    clearTimeout(this.timeout);
    this.updatePosition.cancel();
  },
  methods: {
    setAffixStyle(e, affixStyle) {
      const { target = getDefaultTarget } = this;
      const originalAffixStyle = this.affixStyle;
      const isWindow = target() === window;
      if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
        return;
      }
      if (shallowequal(affixStyle, originalAffixStyle)) {
        return;
      }
      this.setState({ affixStyle: affixStyle }, () => {
        const affixed = !!this.affixStyle;
        if ((affixStyle && !originalAffixStyle) || (!affixStyle && originalAffixStyle)) {
          this.$emit('change', affixed);
        }
      });
    },

    setPlaceholderStyle(placeholderStyle) {
      const originalPlaceholderStyle = this.placeholderStyle;
      if (shallowequal(placeholderStyle, originalPlaceholderStyle)) {
        return;
      }
      this.setState({ placeholderStyle: placeholderStyle });
    },
    syncPlaceholderStyle(e) {
      const { affixStyle } = this;
      if (!affixStyle) {
        return;
      }
      this.$refs.placeholderNode.style.cssText = '';
      this.setAffixStyle(e, {
        ...affixStyle,
        width: this.$refs.placeholderNode.offsetWidth + 'px'
      });
      this.setPlaceholderStyle({
        width: this.$refs.placeholderNode.offsetWidth + 'px'
      });
    },

    updatePosition(e) {
      const { offsetBottom, offset, target = getDefaultTarget } = this;
      let { offsetTop } = this;
      const targetNode = target();

      // Backwards support
      // Fix: if offsetTop === 0, it will get undefined,
      //   if offsetBottom is type of number, offsetMode will be { top: false, ... }
      offsetTop = typeof offsetTop === 'undefined' ? offset : offsetTop;
      const scrollTop = getScroll(targetNode, true);
      const affixNode = this.$el;
      const elemOffset = getOffset(affixNode, targetNode);
      const elemSize = {
        width: this.$refs.fixedNode.offsetWidth,
        height: this.$refs.fixedNode.offsetHeight
      };

      const offsetMode = {
        top: false,
        bottom: false
      };
      // Default to `offsetTop=0`.
      if (typeof offsetTop !== 'number' && typeof offsetBottom !== 'number') {
        offsetMode.top = true;
        offsetTop = 0;
      } else {
        offsetMode.top = typeof offsetTop === 'number';
        offsetMode.bottom = typeof offsetBottom === 'number';
      }

      const targetRect = getTargetRect(targetNode);
      const targetInnerHeight = targetNode.innerHeight || targetNode.clientHeight;
      // ref: https://github.com/ant-design/ant-design/issues/13662
      if (scrollTop >= elemOffset.top - offsetTop && offsetMode.top) {
        // Fixed Top
        const width = `${elemOffset.width}px`;
        const top = `${targetRect.top + offsetTop}px`;
        this.setAffixStyle(e, {
          position: 'fixed',
          top,
          left: `${targetRect.left + elemOffset.left}px`,
          width
        });
        this.setPlaceholderStyle({
          width,
          height: `${elemSize.height}px`
        });
      } else if (
        scrollTop <= elemOffset.top + elemSize.height + offsetBottom - targetInnerHeight &&
        offsetMode.bottom
      ) {
        // Fixed Bottom
        const targetBottomOffet =
          targetNode === window ? 0 : window.innerHeight - targetRect.bottom;
        const width = `${elemOffset.width}px`;
        this.setAffixStyle(e, {
          position: 'fixed',
          bottom: targetBottomOffet + offsetBottom + 'px',
          left: targetRect.left + elemOffset.left + 'px',
          width
        });
        this.setPlaceholderStyle({
          width,
          height: elemOffset.height + 'px'
        });
      } else {
        const { affixStyle } = this;
        if (
          e.type === 'resize' &&
          affixStyle &&
          affixStyle.position === 'fixed' &&
          affixNode.offsetWidth
        ) {
          this.setAffixStyle(e, { ...affixStyle, width: affixNode.offsetWidth + 'px' });
        } else {
          this.setAffixStyle(e, null);
        }
        this.setPlaceholderStyle(null);
      }
      if (e.type === 'resize') {
        this.syncPlaceholderStyle(e);
      }
    },
    setTargetEventListeners(getTarget) {
      const target = getTarget();
      if (!target) {
        return;
      }
      this.clearEventListeners();

      this.events.forEach(eventName => {
        this.eventHandlers[eventName] = target.addEventListener(eventName, this.updatePosition);
      });
    },

    clearEventListeners() {
      this.events.forEach(eventName => {
        const handler = this.eventHandlers[eventName];
        if (handler && handler.remove) {
          handler.remove();
        }
      });
    }
  },

  render() {
    const { affixStyle, placeholderStyle, $slots, $props } = this;
    const className = classNames({
      'el-affix': affixStyle
    });

    const props = {
      attrs: omit($props, ['prefixCls', 'offsetTop', 'offsetBottom', 'target'])
    };
    return (
      <div {...props} style={placeholderStyle} ref="placeholderNode">
        <div class={className} ref="fixedNode" style={affixStyle}>
          {$slots.default}
        </div>
      </div>
    );
  }
};

export default Affix;
