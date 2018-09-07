<template>
  <el-tooltip v-if="content" :placement="placement" :content="content">
    <i class="el-icon-question" :style="iconStyle"/>
  </el-tooltip>
</template>

<script>
  import ElTooltip from 'element-ui/packages/tooltip';

  export default {
    name: 'ElHelp',

    components: {
      ElTooltip
    },

    props: {
      content: String,
      iconStyle: {
        type: Object,
        default: () => { return {}; }
      },
      placement: {
        type: String,
        default: 'top'
      }
    }
  };
</script>
