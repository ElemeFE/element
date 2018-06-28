import objectAssign from 'element-ui/src/utils/merge';
import deepmerge from 'deepmerge';
import { PopupManager } from 'element-ui/src/utils/popup';
import PopperUtils from 'popper.js/dist/esm/popper-utils';
import PopperJS from 'popper.js';

const stop = e => e.stopPropagation();

function computeArrow(data, options) {
  if (!PopperUtils.isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  let arrowElement = options.element;

  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return data;
    }
  } else {
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn(
        'WARNING: `arrow.element` must be child of its popper element!'
      );
      return data;
    }
  }

  const placement = data.placement.split('-')[0];
  const { popper, reference } = data.offsets;
  const isVertical = ['left', 'right'].indexOf(placement) !== -1;

  const len = isVertical ? 'height' : 'width';
  const sideCapitalized = isVertical ? 'Top' : 'Left';
  const side = sideCapitalized.toLowerCase();
  const altSide = isVertical ? 'left' : 'top';
  const opSide = isVertical ? 'bottom' : 'right';
  const arrowElementSize = PopperUtils.getOuterSizes(arrowElement)[len];

  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -=
      popper[side] - (reference[opSide] - arrowElementSize);
  }
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] +=
      reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = PopperUtils.getClientRect(data.offsets.popper);
  // use arrowOffset to compute center
  const center = reference[side] + (this.arrowOffset || (reference[len] / 2 - arrowElementSize / 2));

  const css = PopperUtils.getStyleComputedProperty(data.instance.popper);
  const popperMarginSide = parseFloat(css[`margin${sideCapitalized}`], 10);
  const popperBorderSide = parseFloat(css[`border${sideCapitalized}Width`], 10);
  let sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;
  // adjust side Value
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize - 8, sideValue), 8);

  data.arrowElement = arrowElement;
  data.offsets.arrow = {
    [side]: Math.round(sideValue),
    [altSide]: ''
  };

  return data;
}
/**
 * @param {HTMLElement} [reference=$refs.reference] - The reference element used to position the popper.
 * @param {HTMLElement} [popper=$refs.popper] - The HTML element used as popper, or a configuration used to generate the popper.
 * @param {String} [placement=button] - Placement of the popper accepted values: top(-start, -end), right(-start, -end), bottom(-start, -end), left(-start, -end)
 * @param {Number} [offset=0] - Amount of pixels the popper will be shifted (can be negative).
 * @param {Boolean} [visible=false] Visibility of the popup element.
 * @param {Boolean} [visible-arrow=false] Visibility of the arrow, no style.
 */
export const BasePopper = {
  props: {
    transformOrigin: {
      type: [Boolean, String],
      default: true
    },
    placement: {
      type: String,
      default: 'bottom'
    },
    reference: HTMLElement,
    popper: HTMLElement,
    boundariesElement: [String, HTMLElement],
    value: Boolean,
    visibleArrow: {
      type: Boolean,
      default: true
    },
    arrowOffset: {
      type: Number,
      default: 35
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    popperOptions: {
      type: Object,
      default() {
        return {};
      }
    }
  },

  data() {
    return {
      showPopper: false,
      currentPlacement: ''
    };
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

      const options = deepmerge({
        placement: this.currentPlacement,
        onCreate: () => {
          this.resetTransformOrigin();
          this.$nextTick(this.updatePopper);
        },
        modifiers: {
          arrow: {
            fn: computeArrow.bind(this)
          },
          computeStyle: { gpuAcceleration: false }
        }
      }, this.popperOptions);
      if (this.boundariesElement) {
        if (options.modifiers.preventOverflow) {
          options.modifiers.preventOverflow.boundariesElement = this.boundariesElement;
        } else {
          options.modifiers.preventOverflow = {
            boundariesElement: this.boundariesElement
          };
        }
      }
      this.popperJS = new PopperJS(reference, popper, options);
      this.increaseZIndex();
      this.popperElm.addEventListener('click', stop);
    },

    updatePopper() {
      const popperJS = this.popperJS;
      if (popperJS) {
        popperJS.update();
        this.increaseZIndex();
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
      if (!this.transformOrigin) return;
      let placementMap = {
        top: 'bottom',
        bottom: 'top',
        left: 'right',
        right: 'left'
      };
      let placement = this.popperElm.getAttribute('x-placement').split('-')[0];
      let origin = placementMap[placement];
      this.popperElm.style.transformOrigin = typeof this.transformOrigin === 'string'
        ? this.transformOrigin
        : ['top', 'bottom'].indexOf(placement) > -1 ? `center ${ origin }` : `${ origin } center`;
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

/**
 * @param {String|Array} attrs - delete some attribues in props
 */
export function customerPopper(attrs) {
  if (!attrs) {
    return BasePopper;
  } else {
    return Object.keys(BasePopper).reduce((val, key) => {
      if (key === 'props') {
        const props = objectAssign({}, BasePopper.props);
        if (!Array.isArray(attrs)) {
          attrs = [attrs];
        }
        attrs.forEach(attr => {
          delete props[attr];
        });
        val.props = props;
      } else {
        val[key] = BasePopper[key];
      }
      return val;
    }, {});
  }
}

export default objectAssign({}, BasePopper, {
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
  }
});
