<template>
  <li class="el-dropdown-item" @click="handleClick"><slot></slot></li>
</template>
<script>
  import emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElDropdownItem',

    mixins: [emitter],

    methods: {
      handleClick(e) {
        this.dispatch('ElDropdownMenu', 'visible', [false]);
      }
    }
  };
</script>
