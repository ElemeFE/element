<script>
export default {
  name: 'item',
  inject: ['select'],
  props: {
    index: {
      type: Number
    },
    source: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  render(h) {
    const {source} = this;
    let render = this.select.$scopedSlots.default ? this.select.$scopedSlots.default(source)[0] : null;
    return (render);
  }
};
</script>