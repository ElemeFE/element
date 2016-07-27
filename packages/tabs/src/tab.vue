<script>
  module.exports = {
    name: 'el-tab',

    props: {
      tab: {
        type: Object,
        required: true
      },
      closable: Boolean
    },
    data() {
      return {
        showClose: false
      };
    }
  };
</script>

<template>
  <div class="el-tabs__item"
  :class="{
    'is-active': $parent.activeKey === tab.key,
    'is-disabled': tab.disabled,
    'is-closable': closable
  }">{{tab.label}}<span class="el-icon-close" v-if="closable" @click="$emit('onremove', tab, $event)"></span></div>
</template>
