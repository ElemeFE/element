<template>
    <li
        :class="[
            'el-tag-select__item',
            isActive ? 'active' : '',
            {
                'is-disabled': disabled
            }
        ]"
        @click="onItemClick">
        <slot>{{currentLabel}}</slot>
    </li>
</template>

<script>
  import Emitter from 'element-ui/src/mixins/emitter';
  export default {
    name: 'ElTagSelectItem',

    componentName: 'ElTagSelectItem',

    inject: {
      tagSelect: {
        default: ''
      }
    },

    mixins: [Emitter],

    props: {
      value: {
        required: true,
        type: [String, Number, Boolean]
      },
      label: [String, Number],
      disabled: {
        type: Boolean,
        default: false
      }
    },

    computed: {
      isObject() {},
      currentLabel() {
        return this.label || this.value;
      },
      isActive() {
        if (this.tagSelect.multiple) {
          return this.tagSelect.value.indexOf(this.value) > -1;
        } else {
          return this.value === this.tagSelect.value;
        }
      }
    },

    methods: {
      onItemClick() {
        if (!this.disabled) {
          this.dispatch('ElTagSelect', 'handleItemClick', [this, true]);
        }
      }
    }
  };
</script>
