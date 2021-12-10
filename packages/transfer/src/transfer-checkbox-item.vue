<template>
  <el-checkbox
    class="el-transfer-panel__item"
    :label="source[keyProp]"
    :disabled="source[disabledProp]">
    <option-content :option="source"></option-content>
</el-checkbox>
</template>

<script>
  import ElCheckbox from 'element-ui/packages/checkbox';
  export default {
    name: 'transfer-checkbox-item',
    props: {
      index: { // index of current item
        type: Number
      },
      source: { // here is: {uid: 'unique_1', text: 'abc'}
        type: Object,
        default() {
          return {};
        }
      },
      keyProp: {
        type: String
      },
      disabledProp: {
        type: String
      }
    },
    components: {
      ElCheckbox,
      OptionContent: {
        props: {
          option: Object
        },
        render(h) {
          const getParent = vm => {
            if (vm.$options.componentName === 'ElTransferPanel') {
              return vm;
            } else if (vm.$parent) {
              return getParent(vm.$parent);
            } else {
              return vm;
            }
          };
          const panel = getParent(this);
          const transfer = panel.$parent || panel;
          return panel.renderContent
            ? panel.renderContent(h, this.option)
            : transfer.$scopedSlots.default
              ? transfer.$scopedSlots.default({ option: this.option })
              : <span>{ this.option[panel.labelProp] || this.option[panel.keyProp] }</span>;
        }
      }
    }
  };
</script>