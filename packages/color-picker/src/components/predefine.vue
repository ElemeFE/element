<template>
  <div class="el-color-predefine">
    预设：
    <div class="el-color-predefine__colors">
      <div class="el-color-predefine__color-selector"  v-for="item in colors"
           :key="item"
           :style="{'background-color': item}"
           @click="handleSelect(item)">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      colors: { type: Array, required: true },
      color: { required: true }
    },
    methods: {
      handleSelect(color) {
        this.color.fromString(color);
      }
    }
  };
</script>