import Picker from '../picker';
import Panel from '../panel/time-select';

export default {
  mixins: [Picker],

  name: 'ElTimeSelect',

  created() {
    this.type = 'time-select';
    this.panel = Panel;
  }
};
