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
    },
    allowHeader: Boolean,
    timeArrowControl: Boolean
  },

  watch: {
    type: {
      handler(type) {
        let self = this;
        if (self.picker) {
          self.unmountPicker();
          self.panel = getPanel(type);
          self.mountPicker();
        } else {
          self.panel = getPanel(type);
        }
        document.activeElement.blur();
      }
    }
  },

  created() {
    this.panel = getPanel(this.type);
  }
};
