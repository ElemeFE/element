<template>
  <i :class="getColor() + 'el-icon-' + name"></i>
</template>

<script>
export default {
  name: "ElIcon",

  props: {
    name: String,
    type: {
      type: String,
      default: "default"
    }
  },
  computed: {
    getColor(){
      const {type} = this;
      if(type.length){
        return `el-link el-link--${type} `
      }
      return ''
    }
  },
};
</script>
