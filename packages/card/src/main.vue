<template>
  <div class="el-card" :class="{'is-shadow': hasShadow, 'is-hover-shadow': hasHoverShadow}">
    <div class="el-card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="el-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ElCard',
    props: {
      header: null,
      bodyStyle: null,
      shadow: {
        type: String,
        default: 'always'
      }
    },
    computed: {
      hasShadow() {
        switch (this.shadow) {
          case 'always':
            return true;
          case 'hover':
            return false;
          case 'never':
            return false;
          default:
            return true;
        }
      },
      hasHoverShadow() {
        switch (this.shadow) {
          case 'always':
            return false;
          case 'hover':
            return true;
          case 'never':
            return false;
          default:
            return false;
        }
      }
    }
  };
</script>
