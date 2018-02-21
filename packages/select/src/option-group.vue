<template>
  <ul class="tm-select-group__wrap" v-show="visible">
    <li class="tm-select-group__title">{{ label }}</li>
    <li>
      <ul class="tm-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script type="text/babel">
  import Emitter from 'tmconsulting-ui/src/mixins/emitter';

  export default {
    mixins: [Emitter],

    name: 'TmOptionGroup',

    componentName: 'TmOptionGroup',

    props: {
      label: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        visible: true
      };
    },

    watch: {
      disabled(val) {
        this.broadcast('TmOption', 'handleGroupDisabled', val);
      }
    },

    methods: {
      queryChange() {
        this.visible = this.$children &&
          Array.isArray(this.$children) &&
          this.$children.some(option => option.visible === true);
      }
    },

    created() {
      this.$on('queryChange', this.queryChange);
    },

    mounted() {
      if (this.disabled) {
        this.broadcast('TmOption', 'handleGroupDisabled', this.disabled);
      }
    }
  };
</script>
