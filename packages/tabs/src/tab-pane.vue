<template>
  <div
    class="el-tab-pane"
    v-if="(!lazy || loaded) || active"
    v-show="active"
    role="tabpanel"
    :aria-hidden="!active"
    :id="`pane-${paneName}`"
    :aria-labelledby="`tab-${paneName}`"
  >
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ElTabPane',

    componentName: 'ElTabPane',

    props: {
      label: String,
      labelContent: Function,
      name: [String, Number],
      closable: Boolean,
      disabled: Boolean,
      lazy: Boolean
    },

    data() {
      return {
        index: null,
        loaded: false
      };
    },

    computed: {
      isClosable() {
        return this.closable || this.$parent.closable;
      },
      paneName() {
        return this.name === 0 ? 0 : this.name || this.index;
      },
      active() {
        const active = this.$parent.currentName === this.paneName;
        if (active) {
          this.loaded = true;
        }
        return active;
      }
    },

    updated() {
      this.$parent.$emit('tab-nav-update');
    }
  };
</script>
