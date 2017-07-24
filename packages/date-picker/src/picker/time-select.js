import Picker from '../picker';
import Panel from '../panel/time-select';

export default {
  mixins: [Picker],

  name: 'ElTimeSelect',

  beforeCreate() {
    this.type = 'time-select';
    this.panel = Panel;
  },

  methods: {
    handleKeydown(event) {
      const keyCode = event.keyCode;
      // TAB or ESC
      if (keyCode === 9 || keyCode === 27 || keyCode === 13) {
        this.pickerVisible = false;
        this.$refs.reference.$refs.input.blur();
        event.stopPropagation();
        return;
      }

      const mapping = { 40: 1, 38: -1 };
      const offset = mapping[keyCode.toString()];
      if (!offset) return;
      this.picker.scrollDown(offset);
      this.currentValue = this.picker.value;
    }
  }
};
