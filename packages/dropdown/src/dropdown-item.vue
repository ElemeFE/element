<template>
  <li class="el-dropdown-item" @click="handleClick"><slot></slot></li>
</template>
<script>
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElDropdownItem',

    mixins: [Emitter],

    props: {
      command: String
    },

    methods: {
      handleClick(e) {
        this.dispatch('ElDropdown', 'menu-item-click', [this.command, this]);
      }
    }
  };
</script>
