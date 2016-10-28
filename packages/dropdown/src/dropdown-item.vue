<template>
  <li class="el-dropdown-item" @click="handleClick"><slot></slot></li>
</template>
<script>
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElDropdownItem',

    mixins: [Emitter],

    methods: {
      handleClick(e) {
        this.dispatch('ElDropdown', 'visible', [false]);
      }
    }
  };
</script>
