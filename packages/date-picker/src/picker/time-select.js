import Picker from '../picker';
import Panel from '../panel/time-select';

export default {
  mixins: [Picker],

  name: 'ElTimeSelect',

  componentName: 'ElTimeSelect',

  props: {
    type: {
      type: String,
      default: 'time-select'
    },
    allowHeader: Boolean
  },

  beforeCreate() {
    this.panel = Panel;
  }
};
