<template>
  <div class="el-card" :class="shadow ? 'is-' + shadow + '-shadow' : ''">
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
      header: {},
      bodyStyle: {},
      shadow: {
        type: String,
        default: 'always',
        validator(val) {
          return ['always', 'hover', 'never'].includes(val)
        }
      }
    }
  };
</script>
