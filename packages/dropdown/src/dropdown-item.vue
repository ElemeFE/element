<template>
  <li
    class="tm-dropdown-menu__item"
    :class="{
      'is-disabled': disabled,
      'tm-dropdown-menu__item--divided': divided
    }"
    @click="handleClick"
    :aria-disabled="disabled"
    :tabindex="disabled ? null : -1"
  >
    <slot></slot>
  </li>
</template>
<script>
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'TmDropdownItem',

    mixins: [Emitter],

    props: {
      command: {},
      disabled: Boolean,
      divided: Boolean
    },

    methods: {
      handleClick() {
        this.dispatch('TmDropdown', 'menu-item-click', [this.command, this]);
      }
    }
  };
</script>
