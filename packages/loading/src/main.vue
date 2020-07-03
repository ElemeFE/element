<!--
 * @Author: Yang Lin
 * @Description: loading 组件
 * @Date: 2020-06-16 20:20:42
 * @LastEditTime: 2020-07-03 20:17:01
 * @FilePath: f:\sourcecode\element\packages\loading\src\main.vue
--> 

<script>
import {
  addClass,
  removeClass
} from 'element-ui/src/utils/dom';
import { PopupManager } from 'element-ui/src/utils/popup';
import {
  beforeDestroyHookName
} from './config';

function genDefaultContent(h) {
  const {
    spinner,
    text
  } = this;
  const childs = [];

  if (spinner) {
    // spinner icon
    childs.push(h('i', {
      class: spinner
    }));
  } else {
    // svg loading
    childs.push(h('svg', {
      class: 'circular',
      attrs: {
        viewBox: '25 25 50 50'
      }
    }, [
      h('circle', {
        class: 'path',
        attrs: {
          cx: '50',
          cy: '50',
          r: '20',
          fill: 'none'
        }
      })
    ]));
  }

  // loading text
  if (text) {
    childs.push(h('p', {
      class: 'el-loading-text'
    }, text));
  }

  return h('div', {
    class: 'el-loading-spinner'
  }, childs);
}

export default {
  name: 'ELLoading',
  props: {
    background: String,
    // Loading 的自定义类名
    customClass: {
      type: String
    },
    // 是否显示loading
    visible: {
      type: Boolean,
      default: false
    },
    // render 渲染内容函数
    render: {
      type: Function
    },
    // 是否锁屏，无法滚动
    lock: {
      type: Boolean,
      default: false
    },
    // 全屏loading
    fullscreen: {
      type: Boolean,
      default: false
    },
    // loading 图标
    spinner: String,
    // 覆盖对象
    target: {
      type: HTMLElement,
      required: true
    },
    // loading文字
    text: String
  },
  methods: {
    close() {
      const target = this.target;
      this.visible = false;
      removeClass(target, 'el-loading-parent--relative');
      removeClass(target, 'el-loading-parent--hidden');
      this.$nextTick(() => {
        this.$emit('after-leave');
      });
    },
    updateDom() {
      if (this.$isServer) {
        return ;
      }

      const {
        target,
        lock
      } = this;

      try {
        const {
          position
        } = getComputedStyle(target, null);

        if (position !== 'absolute' && position !== 'fixed') {
          addClass(target, 'el-loading-parent--relative');
        }

        if (lock) {
          addClass(target, 'el-loading-parent--hidden');
        }
      } catch (error) {
        console.error('Target invalid.');
      }
    }
  },
  watch: {
    visible: {
      immediate: true,
      handler(val) {
        val && this.updateDom();
      }
    }
  },
  render(h, context) {
    const {
      visible,
      fullscreen,
      customClass,
      background,
      render
    } = this;

    if (!visible) {
      return null;
    }

    let child = null;
    const renderEl = !!render && render.apply(this, [h, context]);

    if (renderEl === false) {
      // render function disabled when return false
      child = genDefaultContent.apply(this, [h, context]);
    } else {
      // render result
      child = renderEl;
    }

    return h('div', {
      class: ['el-loading-mask', {
        [customClass]: !!customClass,
        'is-fullscreen': fullscreen
      }],
      style: {
        zIndex: PopupManager.nextZIndex(),
        background
      }
    }, [child]);
  },
  beforeDestroy() {
    this[beforeDestroyHookName] && this[beforeDestroyHookName]();
    if (this.visible) {
      const target = this.target;
      this.visible = false;
      removeClass(target, 'el-loading-parent--relative');
      removeClass(target, 'el-loading-parent--hidden');
      target.removeChild(this.$el);
    }
  }
};
</script>