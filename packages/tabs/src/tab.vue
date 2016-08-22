<script>
  module.exports = {
    name: 'el-tab',

    props: {
      tab: {
        type: Object,
        required: true
      },
      closable: Boolean
    }
  };
</script>

<template>
  <div
    class="el-tabs__item"
    :class="{
      'is-active': $parent.currentName === tab.key,
      'is-disabled': tab.disabled,
      'is-closable': closable
    }">
    {{tab.label}}
    <span
      class="el-icon-close"
      v-if="closable"
      @click="$emit('remove', tab, $event)">
    </span>
  </div>
</template>
