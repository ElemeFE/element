<script>

export default {
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },

  inject: ['elForm', 'elFormItem'],

  render() {
    const slots = this.$slots.default;
    return !slots ? null : slots[0];
  },

  methods: {
    getLabelWidth() {
      if (this.$el) {
        const computedWidth = window.getComputedStyle(this.$el).width;
        return Math.ceil(parseFloat(computedWidth));
      } else {
        return 0;
      }
    },
    updateLabelWidth(action = 'update') {
      if (this.$slots.default && this.isAutoWidth) {
        if (action === 'update') {
          this.computedWidth = this.getLabelWidth();
        } else if (action === 'remove') {
          this.elForm.deregisterLabelWidth(this.computedWidth);
        }
      }
    }
  },

  watch: {
    computedWidth(val, oldVal) {
      if (this.updateAll) {
        this.elForm.registerLabelWidth(val, oldVal);
        this.elFormItem.updateComputedLabelWidth(val);
      }
    }
  },

  data() {
    return {
      computedWidth: 0
    };
  },

  mounted() {
    this.updateLabelWidth('update');
  },

  updated() {
    this.updateLabelWidth('update');
  },

  beforeDestroy() {
    this.updateLabelWidth('remove');
  }
};
</script>
