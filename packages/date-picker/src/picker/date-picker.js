import Picker from '../picker';
import DatePanel from '../panel/date';
import DateRangePanel from '../panel/date-range';

const getPanel = function(type) {
  if (type === 'daterange' || type === 'datetimerange') {
    return DateRangePanel;
  }
  return DatePanel;
};

export default {
  mixins: [Picker],

  name: 'ElDatePicker',

  props: {
    type: {
      type: String,
      default: 'date'
    }
  },

  watch: {
    type(type) {
      if (this.picker) {
        this.unmountPicker();
        this.panel = getPanel(type);
        this.mountPicker();
      } else {
        this.panel = getPanel(type);
      }
    }
  },

  created() {
    this.panel = getPanel(this.type);
  },

  methods: {
    handleKeydown(event) {
      const keyCode = event.keyCode;

      // TAB or ESC or Enter
      if (keyCode === 9 || keyCode === 27 || keyCode === 13) {
        this.pickerVisible = false;
        event.stopPropagation();
        this.currentValue = this.picker.date;
        this.$refs.reference.$refs.input.blur();
        return;
      }

      const list = [38, 40, 37, 39];
      if (list.indexOf(keyCode) !== -1) {
        if (this.type === 'daterange' || this.type === 'datetimerange') return;
        this.picker.handleKeyControl(keyCode);
        event.stopPropagation();
        return;
      }
    }
  }
};
