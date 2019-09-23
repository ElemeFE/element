<template>
  <el-popover
    v-bind="$attrs"
    v-model="visible"
    trigger="click"
  >
  <div class="el-popconfirm">
    <p class="el-popconfirm__main">
    <i
      v-if="!hideIcon"
      :class="icon"
      class="el-popconfirm__icon"
      :style="{color: iconColor}"
    ></i>
      {{title}}
    </p>
    <div class="el-popconfirm__action">
      <el-button 
        size="mini" 
        :type="cancelType" 
        @click="cancel"
      >
        {{cancelText}}
      </el-button>
      <el-button 
        size="mini" 
        :type="okType" 
        @click="confirm"
      >
        {{okText}}
      </el-button>
    </div>
  </div>
  <slot name="reference" slot="reference"></slot>
</el-popover>
</template>

<script>
import ElPopover from 'element-ui/packages/popover';
import ElButton from 'element-ui/packages/button';
import {t} from 'element-ui/src/locale';

export default {
  name: 'ElPopconfirm',
  props: {
    title: {
      type: String
    },
    okText: {
      type: String,
      default: t('el.popconfirm.okText')
    },
    cancelText: {
      type: String,
      default: t('el.popconfirm.cancelText')
    },
    okType: {
      type: String,
      default: 'primary'
    },
    cancelType: {
      type: String,
      default: 'text'
    },
    icon: {
      type: String,
      default: 'el-icon-question'
    },
    iconColor: {
      type: String,
      default: '#f90'
    },
    hideIcon: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ElPopover,
    ElButton
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    confirm() {
      this.visible = false;
      this.$emit('onConfirm');
    },
    cancel() {
      this.visible = false;
      this.$emit('onCancel');
    }
  }
};
</script>
