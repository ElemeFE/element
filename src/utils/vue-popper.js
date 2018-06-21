import Vue from 'vue';
import objectAssign from 'element-ui/src/utils/merge';
import {
  PopupManager
} from 'element-ui/src/utils/popup';

const PopperJS = Vue.prototype.$isServer ? function() {} : require('./popper');
const stop = e => e.stopPropagation();

/**
 * @param {HTMLElement} [reference=$refs.reference] - The reference element used to position the popper.
 * @param {HTMLElement} [popper=$refs.popper] - The HTML element used as popper, or a configuration used to generate the popper.
 * @param {String} [placement=button] - Placement of the popper accepted values: top(-start, -end), right(-start, -end), bottom(-start, -end), left(-start, -end)
 * @param {Number} [offset=0] - Amount of pixels the popper will be shifted (can be negative).
 * @param {Boolean} [visible=false] Visibility of the popup element.
 * @param {Boolean} [visible-arrow=false] Visibility of the arrow, no style.
 */
export default {
  props: {
    transformOrigin: {
      type: [Boolean, String],
      default: true
    },
    placement: {
      type: String,
      default: 'bottom'
    },
    // 老版本的参数
    // boundariesPadding: {
    //   type: Number,
    //   default: 5
    // },
    reference: Object,
    popper: Object,
    // 不清楚用途
    // offset: {
    //   default: 0
    // },
    value: Boolean,
    // 默认值可以设置为 true
    // visibleArrow: Boolean,
    visibleArrow: {
      type: Boolean,
      default: true
    },
    // arrowOffset 自己添加的参数
    // todo: 以后要实现该功能
    // arrowOffset: {
    //   type: Number,
    //   default: 35
    // },
    appendToBody: {
      type: Boolean,
      default: true
    },
    popperOptions: {
      type: Object,
      default() {
        return {
          // TODO: 可以删除，如果是真的要使用，也应该放在 computeStyle 中的 gpuAcceleration 中
          // gpuAcceleration: false
        };
      }
    }
  },

  data() {
    return {
      showPopper: false,
      currentPlacement: ''
    };
  },

  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.showPopper = val;
        this.$emit('input', val);
      }
    },

    showPopper(val) {
      if (this.disabled) {
        return;
      }
      val ? this.updatePopper() : this.destroyPopper();
      this.$emit('input', val);
    }
  },

  methods: {
    createPopper() {
      if (this.$isServer) return;
      this.currentPlacement = this.currentPlacement || this.placement;
      if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement)) {
        return;
      }

      const popper = this.popperElm = this.popperElm || this.popper || this.$refs.popper;
      let reference = this.referenceElm = this.referenceElm || this.reference || this.$refs.reference;

      if (!reference &&
        this.$slots.reference &&
        this.$slots.reference[0]) {
        reference = this.referenceElm = this.$slots.reference[0].elm;
      }

      if (!popper || !reference) return;
      if (this.visibleArrow) this.appendArrow(popper);
      if (this.appendToBody) document.body.appendChild(this.popperElm);
      if (this.popperJS && this.popperJS.destroy) {
        this.popperJS.destroy();
      }

      const options = objectAssign({
        placement: this.currentPlacement,
        onCreate: () => {
          // this.$emit('created', this);
          this.resetTransformOrigin();
          this.$nextTick(this.updatePopper);
        }
      }, this.popperOptions);
      // options.placement = this.currentPlacement;
      // options.offset = this.offset;
      // options.arrowOffset = this.arrowOffset;
      this.popperJS = new PopperJS(reference, popper, options);
      // if (typeof options.onUpdate === 'function') {
      //   this.popperJS.onUpdate(options.onUpdate);
      // }
      // this.popperJS._popper.style.zIndex = PopupManager.nextZIndex();
      this.increaseZIndex();
      this.popperElm.addEventListener('click', stop);
    },

    updatePopper() {
      const popperJS = this.popperJS;
      if (popperJS) {
        popperJS.update();
        this.increaseZIndex();
        // if (popperJS._popper) {
        //   popperJS._popper.style.zIndex = PopupManager.nextZIndex();
        // }
      } else {
        this.createPopper();
      }
    },

    doDestroy(forceDestroy) {
      /* istanbul ignore if */
      if (!this.popperJS || (this.showPopper && !forceDestroy)) return;
      this.popperJS.destroy();
      this.popperJS = null;
    },

    destroyPopper() {
      if (this.popperJS) {
        this.resetTransformOrigin();
      }
    },

    resetTransformOrigin() {
      console.warn('todo: resetTransformOrigin');
      // if (!this.transformOrigin) return;
      // let placementMap = {
      //   top: 'bottom',
      //   bottom: 'top',
      //   left: 'right',
      //   right: 'left'
      // };
      // let placement = this.popperJS._popper.getAttribute('x-placement').split('-')[0];
      // let origin = placementMap[placement];
      // this.popperJS._popper.style.transformOrigin = typeof this.transformOrigin === 'string'
      //   ? this.transformOrigin
      //   : ['top', 'bottom'].indexOf(placement) > -1 ? `center ${ origin }` : `${ origin } center`;
    },

    increaseZIndex() {
      this.popperElm.style.zIndex = PopupManager.nextZIndex();
    },

    appendArrow(element) {
      let hash;
      if (this.appended) {
        return;
      }

      this.appended = true;

      for (let item in element.attributes) {
        if (/^_v-/.test(element.attributes[item].name)) {
          hash = element.attributes[item].name;
          break;
        }
      }

      const arrow = document.createElement('div');

      if (hash) {
        arrow.setAttribute(hash, '');
      }
      arrow.setAttribute('x-arrow', '');
      arrow.className = 'popper__arrow';
      element.appendChild(arrow);
    }
  },

  beforeDestroy() {
    this.doDestroy(true);
    if (this.popperElm && this.popperElm.parentNode === document.body) {
      this.popperElm.removeEventListener('click', stop);
      document.body.removeChild(this.popperElm);
    }
  },

  // call destroy in keep-alive mode
  deactivated() {
    this.$options.beforeDestroy[0].call(this);
  }
};
