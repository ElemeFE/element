<template>
  <el-tabs :class="{'el-tabs-dotted' : $attrs.type === 'dotted'}" v-bind="$attrs" v-on='$listeners'>
    <slot></slot>
  </el-tabs>
</template>

<script>
import ElTabs from 'element-ui/packages/tabs';
export default {
  name: 'ElTabsDotted',
  components: {
    ElTabs
  }
};
</script>
