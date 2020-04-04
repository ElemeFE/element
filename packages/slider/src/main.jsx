import SliderSingle from './single.vue';
import SliderRange from './range.vue';

export default {
  functional: true,

  name: 'ElSlider',

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
    value: [Number, Array],
    showInput: {
      type: Boolean,
      default: false
    },
    showInputControls: {
      type: Boolean,
      default: true
    },
    inputControlsPosition: {
      type: String,
      default: ''
    },
    inputSize: {
      type: String,
      default: 'small'
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
    range: {
      type: [Boolean, Number],
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    height: {
      type: String
    },
    debounce: {
      type: Number,
      default: 300
    },
    label: {
      type: String
    },
    tooltipClass: String,
    marks: Object,
    validateEvent: {
      type: Boolean,
      default: true
    }
  },

  render(h, { data = {}, props }) {
    if (props.min > props.max) {
      throw new Error('[Element Error][Slider]min should not be greater than max.');
    }

    return (!props.range
      ? <SliderSingle {...{
        ...data,
        props: {
          ...props,
          inputNumber: props.showInput
            ? {
              controls: props.showInputControls,
              controlsPosition: props.inputControlsPosition,
              size: props.inputSize,
              debounce: props.debounce
            } : null
        }
      }} />
      : <SliderRange {...{
        ...data,
        props: {
          ...props,
          range: props.range === true ? 2 : props.range
        }
      }} />
    );
  }
};
