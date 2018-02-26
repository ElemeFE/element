<template>
  <div class="tm-time-info"
       :class="[
        type ? 'tm-time-info--' + type : ''
       ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TmTimeInfo',

  props: {
    type: String
  }
};
</script>
