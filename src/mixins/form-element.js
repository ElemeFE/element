export default {
  props: {
    required: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    let className = ' tm-form-element ';
    if (this.required) {
      className += 'tm-form-element--required ';
      const sizeLabel = this.size ? this.size : 'large';
      className += this.prefixIcon
        ? 'tm-form-element--prefix '
        : '';
      className += 'tm-form-element--' + sizeLabel;
    }
    this.$el.className += className;
  }
};
