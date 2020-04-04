import Emitter from 'element-ui/src/mixins/emitter';
import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event';

import SliderButton from './button.vue';
import SliderCommon from './common.jsx';

export default {
  mixins: [Emitter],

  inject: {
    elForm: {
      default: ''
    }
  },

  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    showStops: {
      type: Boolean,
      default: false
    },
    showTooltip: {
      type: Boolean,
      default: true
    },
    formatTooltip: Function,
    disabled: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    height: String,
    label: String,
    tooltipClass: String,
    marks: Object,
    validateEvent: {
      type: Boolean,
      default: true
    }
  },

  components: {
    SliderButton,
    SliderCommon
  },

  data() {
    return {
      dragging: null,
      sliderSize: 1
    };
  },

  watch: {
    value(val) {
      this.setOldValues(val);
      this.setValues();
      if (this.validateEvent) {
        this.dispatch('ElFormItem', 'el.form.change', val);
      }
    },

    min() {
      this.setValues();
    },

    max() {
      this.setValues();
    }
  },

  methods: {
    onSliderClick(event) {
      if (this.sliderDisabled) return;
      this.resetSize();
      if (this.vertical) {
        const sliderOffsetBottom = this.$refs.slider.getBoundingClientRect().bottom;
        this.setPosition((sliderOffsetBottom - event.clientY) / this.sliderSize * 100);
      } else {
        const sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left;
        this.setPosition((event.clientX - sliderOffsetLeft) / this.sliderSize * 100);
      }
    },

    resetSize() {
      if (this.$refs.slider) {
        this.sliderSize = this.$refs.slider[`client${ this.vertical ? 'Height' : 'Width' }`];
      }
    }
  },

  computed: {
    markList() {
      if (!this.marks) {
        return [];
      }

      const marksKeys = Object.keys(this.marks);
      return marksKeys.map(parseFloat)
        .sort((a, b) => a - b)
        .filter(point => point <= this.max && point >= this.min)
        .map(point => ({
          point,
          position: (point - this.min) * 100 / this.length,
          mark: this.marks[point]
        }));
    },

    precision() {
      return Math.max(...[this.min, this.max, this.step].map(item => {
        const str = '' + item;
        let decimal = str.indexOf('.') + 1;
        return decimal > 0 ? str.length - decimal : 0;
      }));
    },

    runwayStyle() {
      return this.vertical ? { height: this.height } : {};
    },

    sliderDisabled() {
      return this.disabled || !!(this.elForm || {}).disabled;
    },

    barStyle() {
      return this.vertical
        ? { height: this.barSize, bottom: this.barStart }
        : { width: this.barSize, left: this.barStart };
    },

    length() {
      return this.max - this.min;
    },

    stops() {
      if (!this.showStops || this.length < 0) return [];
      if (this.step === 0) {
        process.env.NODE_ENV !== 'production' &&
        console.warn('[Element Warn][Slider]step should not be 0.');
        return [];
      }
      const stopCount = this.length / this.step;
      const stepWidth = 100 * this.step / this.length;
      const result = [];
      for (let i = 1; i < stopCount; i++) {
        result.push(i * stepWidth);
      }
      return result;
    }
  },

  mounted() {
    this.setOldValues(this.value);
    this.setValues();
    this.resetSize();

    addResizeListener(this.$el, this.resetSize);
  },

  beforeDestroy() {
    removeResizeListener(this.$el, this.resetSize);
  }
};
