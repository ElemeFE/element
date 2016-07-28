<template>
  <li
    @mouseenter="hoverItem"
    @click.stop="selectOptionClick"
    class="el-select-dropdown__item"
    v-show="queryPassed"
    :class="{ 'selected': itemSelected(), 'is-disabled': disabled, 'hover': parent.hoverIndex === index }">
    <slot>
      <span>{{ label }}</span>
    </slot>
  </li>
</template>

<script type="text/babel">
  import emitter from 'main/mixins/emitter';
  const toString = Object.prototype.toString;

  export default {
    mixins: [emitter],

    name: 'el-option',

    componentName: 'option',

    props: {
      value: {
        required: true
      },
      label: [String, Number],
      selected: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        parent: null,
        index: -1,
        queryPassed: true,
        hitState: false
      };
    },

    computed: {
      currentSelected() {
        return this.selected || (this.$parent.multiple ? this.$parent.value.indexOf(this.value) > -1 : this.$parent.value === this.value);
      }
    },

    watch: {
      currentSelected(val) {
        if (val === true) {
          this.dispatch('select', 'addOptionToValue', this);
        }
      }
    },

    methods: {
      disableOptions() {
        this.disabled = true;
      },

      hoverItem() {
        if (!this.disabled) {
          this.parent.hoverIndex = this.parent.options.indexOf(this);
        }
      },

      selectOptionClick() {
        if (this.disabled !== true) {
          this.dispatch('select', 'handleOptionClick', this);
        }
      },

      itemSelected() {
        if (toString.call(this.parent.selected) === '[object Object]') {
          return this === this.parent.selected;
        } else if (toString.call(this.parent.selected) === '[object Array]') {
          return this.parent.selected.indexOf(this) > -1;
        }
      },

      queryChange(query) {
        this.queryPassed = new RegExp(query, 'i').test(this.label);
        if (!this.queryPassed) {
          this.parent.filteredOptionsCount--;
        }
      }
    },

    created() {
      this.parent = this.$parent;
      while (!this.parent.isSelect) {
        this.parent = this.parent.$parent;
      }
      this.label = this.label || ((typeof this.value === 'string' || typeof this.value === 'number') ? this.value : '');
      this.parent.options.push(this);
      this.parent.optionsCount++;
      this.parent.filteredOptionsCount++;
      this.index = this.parent.options.indexOf(this);

      if (this.currentSelected === true) {
        this.dispatch('select', 'addOptionToValue', this);
      }

      this.$on('queryChange', this.queryChange);
      this.$on('disableOptions', this.disableOptions);
    }
  };
</script>
