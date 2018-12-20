<template>
  <button
    class="el-content-switch"
    @click.prevent="click"
    :class="{ 'is-active': _active, 'is-disabled': _disabled }">
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
  export default {
    name: 'ElContentSwitch',

    props: {
      value: {
        required: false,
      },

      label: {
        required: true,
      },

      disabled: {
        type: Boolean,
        default: false,
        required: false,
      },
    },

    computed: {
      _active () {
        const value = this._grouped
          ? this.$parent.value
          : this.value;

        return value === this.label;
      },

      _disabled () {
        if (this._grouped) {
          return this.$parent.disabled;
        }

        return this.disabled;
      },

      _grouped () {
        const parent = this.$parent;

        return parent.$options.componentName === 'ElContentSwitchGroup';
      },
    },

    methods: {
      click () {
        /**
         * Bail if it's disabled.
         */
        if (this._disabled) {
          return;
        }

        if (this._grouped) {
          this.$parent.$emit('input', this.label);

          return;
        }

        this.$emit('input', this.label);
      },
    },
  };
</script>
