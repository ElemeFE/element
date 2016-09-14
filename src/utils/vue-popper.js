import PopperJS from 'main/utils/popper';

/**
 * @param {HTMLElement} [reference=$refs.reference] - The reference element used to position the popper.
 * @param {HTMLElement} [popper=$refs.popper] - The HTML element used as popper, or a configuration used to generate the popper.
 * @param {String} [placement=button] - Placement of the popper accepted values: top(-start, -end), right(-start, -end), bottom(-start, -right), left(-start, -end)
 * @param {Number} [offset=0] - Amount of pixels the popper will be shifted (can be negative).
 * @param {Boolean} [visible=false] Visibility of the popup element.
 * @param {Boolean} [visible-arrow=false] Visibility of the arrow, no style.
 */
export default {
  props: {
    placement: {
      type: String,
      default: 'bottom'
    },
    boundariesPadding: {
      type: Number,
      default: 5
    },
    reference: Object,
    popper: Object,
    offset: {
      default: 0
    },
    value: Boolean,
    visibleArrow: Boolean,
    transition: String,
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },

  data() {
    return {
      showPopper: false
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
      val ? this.updatePopper() : this.destroyPopper();
      this.$emit('input', val);
    }
  },

  methods: {
    createPopper() {
      if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.placement)) {
        return;
      }

      const options = this.options;
      const popper = this.popper || this.$refs.popper;
      const reference = this.reference || this.$refs.reference || this.$slots.reference[0].elm;

      if (!popper || !reference) return;
      if (this.visibleArrow) {
        this.appendArrow(popper);
      }

      if (this.popperJS && this.popperJS.hasOwnProperty('destroy')) {
        this.popperJS.destroy();
      }

      options.placement = this.placement;
      options.offset = this.offset;

      this.$nextTick(() => {
        this.popperJS = new PopperJS(
          reference,
          popper,
          options
        );
        this.popperJS.onCreate(popper => {
          this.resetTransformOrigin(popper);
          this.$emit('created', this);
        });
      });
    },

    updatePopper() {
      if (this.popperJS) {
        this.popperJS.update();
      } else {
        this.createPopper();
      }
    },

    doDestroy() {
      if (this.showPopper) return;
      this.popperJS.destroy();
      this.popperJS = null;
    },

    destroyPopper() {
      if (this.popperJS) {
        this.resetTransformOrigin(this.popperJS);
      }
    },

    resetTransformOrigin(popper) {
      let placementMap = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' };
      let placement = popper._popper.getAttribute('x-placement').split('-')[0];
      let origin = placementMap[placement];
      popper._popper.style.transformOrigin = ['top', 'bottom'].indexOf(placement) > -1 ? `center ${ origin }` : `${ origin } center`;
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
    if (this.popperJS) {
      this.popperJS.destroy();
    }
  }
};
