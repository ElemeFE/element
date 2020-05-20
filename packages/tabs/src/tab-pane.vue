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
      name: String,
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
      active() {
        const active = this.$parent.currentName === (this.name || this.index);
        if (active) {
          this.loaded = true;
          if (this.$parent.transition && this.$el) {
            this.$el.classList.add(`${this.$parent.transition}-enter-active`, `${this.$parent.transition}-enter`);
            requestAnimationFrame(() => {
              this.$el.classList.remove(`${this.$parent.transition}-enter`);
              const handTransitionend = ()=> {
                this.$el.removeEventListener('transitionend', handTransitionend);
                this.$el.classList.remove(`${this.$parent.transition}-enter-active`);
              };
              this.$el.addEventListener('transitionend', handTransitionend);
            });
          }
        }
        return active;
      },
      paneName() {
        return this.name || this.index;
      }
    },

    updated() {
      this.$parent.$emit('tab-nav-update');
    }
  };
</script>
