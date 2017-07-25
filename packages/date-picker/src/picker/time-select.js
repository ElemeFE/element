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
      // TAB or ESC or Enter
      if (keyCode === 9 || keyCode === 27 || keyCode === 13) {
        const input = this.$refs.reference;
        const index = this.picker.items.map(v => v.value).indexOf(input.currentValue);
        const exist = index !== -1;
        if (!exist) {
          input.currentValue = this.currentValue;
        } else {
          this.picker.handleClick(this.picker.items[index]);
        }
        this.pickerVisible = false;
        input.$refs.input.blur();
        event.stopPropagation();
        return;
      }

      if (keyCode === 38 || keyCode === 40) {
        const mapping = { 40: 1, 38: -1 };
        const offset = mapping[keyCode.toString()];
        this.picker.scrollDown(offset);
        this.currentValue = this.picker.value;
        event.stopPropagation();
        return;
      }
    }
  }
};
