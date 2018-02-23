<template>
  <div class="tm-badge"
       :class="[
        color ? 'tm-badge--' + color : '',
        {
          'is-round': round,
          'is-hollow': hollow,
          'is-no-hover': noHover
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
    color: String,
    round: {
      type: Boolean,
      default: false
    },
    hollow: {
      type: Boolean,
      default: false
    },
    noHover: {
      type: Boolean,
      default: false
    }
  }
};
</script>
