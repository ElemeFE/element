import Picker from '../picker';
import TimePanel from '../panel/time';
import TimeRangePanel from '../panel/time-range';

export default {
  mixins: [Picker],

  name: 'ElTimePicker',

  props: {
    isRange: Boolean
  },

  data() {
    return {
      type: ''
    };
  },

  watch: {
    isRange(isRange) {
      if (this.picker) {
        this.unmountPicker();
        this.type = isRange ? 'timerange' : 'time';
        this.panel = isRange ? TimeRangePanel : TimePanel;
        this.mountPicker();
      } else {
        this.type = isRange ? 'timerange' : 'time';
        this.panel = isRange ? TimeRangePanel : TimePanel;
      }
    }
  },

  created() {
    this.type = this.isRange ? 'timerange' : 'time';
    this.panel = this.isRange ? TimeRangePanel : TimePanel;
  },

  methods: {
    handleKeydown(event) {
      const keyCode = event.keyCode;

      // TAB or ESC
      if (keyCode === 9 || keyCode === 27) {
        this.pickerVisible = false;
        event.stopPropagation();
        return;
      }

      const mapping = { 38: -1, 40: 1, 37: -1, 39: 1 };

      // Left or Right
      if (keyCode === 37 || keyCode === 39) {
        const step = mapping[keyCode];
        this.picker.changeSelectionRange(step);
        event.preventDefault();
        return;
      }

      // Up or Down
      if (keyCode === 38 || keyCode === 40) {
        const step = mapping[keyCode];
        this.picker.scrollDown(step);
        event.preventDefault();
        return;
      }

      if (keyCode === 13) {
        this.picker.handleConfirm();
        this.$refs.reference.$refs.input.blur();
        event.preventDefault();
        return;
      }
    }
  }
};
