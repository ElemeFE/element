<template>
  <el-checkbox-button class="el-checkbox-icon-button" v-bind="$attrs" :label="label" v-on="$listeners"></el-checkbox-button>
</template>
<script>
  import ElCheckboxButton from '../../checkbox-button';
  export default {
    name: 'ElIconCheckbox',
    components: {
      ElCheckboxButton
    },
    props: {
      label: {}
    },
    methods: {}
  };
</script>
