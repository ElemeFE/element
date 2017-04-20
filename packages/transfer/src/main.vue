<template>
  <div class="el-transfer">
    <transfer-panel
      :filterable="filterable"
      :filter-method="filterMethod"
      :data="sourceData"
      :render-content="renderContent"
      :title="titles[0]"
      :format="footerFormat"
      :default-checked="leftDefaultChecked"
      :placeholder="filterPlaceholder"
      :props="props"
      @checked-change="onSourceCheckedChange">
      <slot name="left-footer"></slot>
    </transfer-panel>
    <div class="el-transfer__buttons">
      <el-button
        type="primary"
        size="small"
        @click.native="addToLeft"
        :disabled="rightChecked.length === 0">
        <i class="el-icon-arrow-left"></i>
        <span v-if="buttonTexts[0] !== undefined">{{ buttonTexts[0] }}</span>
      </el-button>
      <el-button
        type="primary"
        size="small"
        @click.native="addToRight"
        :disabled="leftChecked.length === 0">
        <span v-if="buttonTexts[1] !== undefined">{{ buttonTexts[1] }}</span>
        <i class="el-icon-arrow-right"></i>
      </el-button>
    </div>
    <transfer-panel
      :filterable="filterable"
      :filter-method="filterMethod"
      :data="targetData"
      :render-content="renderContent"
      :title="titles[1]"
      :format="footerFormat"
      :default-checked="rightDefaultChecked"
      :placeholder="filterPlaceholder"
      :props="props"
      @checked-change="onTargetCheckedChange">
      <slot name="right-footer"></slot>
    </transfer-panel>
  </div>
</template>

<script>
  import ElButton from 'element-ui/packages/button';
  import Emitter from 'element-ui/src/mixins/emitter';
  import TransferPanel from './transfer-panel.vue';

  export default {
    name: 'ElTransfer',

    mixins: [Emitter],

    components: {
      TransferPanel,
      ElButton
    },

    props: {
      data: {
        type: Array,
        default() {
          return [];
        }
      },
      titles: {
        type: Array,
        default() {
          return ['列表 1', '列表 2'];
        }
      },
      buttonTexts: {
        type: Array,
        default() {
          return [];
        }
      },
      filterPlaceholder: {
        type: String,
        default: '请输入搜索内容'
      },
      filterMethod: Function,
      leftDefaultChecked: {
        type: Array,
        default() {
          return [];
        }
      },
      rightDefaultChecked: {
        type: Array,
        default() {
          return [];
        }
      },
      renderContent: Function,
      value: {
        type: Array,
        default() {
          return [];
        }
      },
      footerFormat: {
        type: Object,
        default() {
          return {
            noChecked: '共 ${total} 项',
            hasChecked: '已选 ${checked}/${total} 项'
          };
        }
      },
      filterable: Boolean,
      props: {
        type: Object,
        default() {
          return {
            label: 'label',
            key: 'key',
            disabled: 'disabled'
          };
        }
      }
    },

    data() {
      return {
        leftChecked: [],
        rightChecked: []
      };
    },

    computed: {
      sourceData() {
        return this.data.filter(item => this.value.indexOf(item[this.props.key]) === -1);
      },

      targetData() {
        return this.data.filter(item => this.value.indexOf(item[this.props.key]) > -1);
      }
    },

    watch: {
      value(val) {
        this.dispatch('ElFormItem', 'el.form.change', val);
      }
    },

    methods: {
      onSourceCheckedChange(val) {
        this.leftChecked = val;
      },

      onTargetCheckedChange(val) {
        this.rightChecked = val;
      },

      addToLeft() {
        let currentValue = this.value.slice();
        this.rightChecked.forEach(item => {
          const index = currentValue.indexOf(item);
          if (index > -1) {
            currentValue.splice(index, 1);
          }
        });
        this.$emit('input', currentValue);
        this.$emit('change', currentValue, 'left', this.rightChecked);
      },

      addToRight() {
        let currentValue = this.value.slice();
        this.leftChecked.forEach(item => {
          if (this.value.indexOf(item) === -1) {
            currentValue = currentValue.concat(item);
          }
        });
        this.$emit('input', currentValue);
        this.$emit('change', currentValue, 'right', this.leftChecked);
      }
    }
  };
</script>
