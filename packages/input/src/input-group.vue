<template>
  <div class="el-input-group">
    <div class="el-input-group__prepend" v-if="_slotContents.prepend">
      <slot name="prepend"></slot>
    </div>
    <slot></slot>
    <div class="el-input-group__append" v-if="_slotContents.append">
      <slot name="append"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ElInputGroup',
    data() {
      return {
      };
    }
  };
</script>
