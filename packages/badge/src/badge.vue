<template>
  <div class="tm-badge"
       :class="[
        type ? 'tm-badge--' + type : '',
        plainFill ? 'is-plain-' + fill : '',
        {
          'is-round': round,
          'is-plain': plain
        }
       ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TmBadge',

  props: {
    type: {
      type: String,
      default: 'default'
    },
    round: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    fill: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    plainFill() {
      if (this.plain === true && this.fill) {
        return true;
      }
      return false;
    }
  }
};
</script>
