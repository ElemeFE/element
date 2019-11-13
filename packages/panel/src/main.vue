<template>
  <div class="el-panel" :style="{width: panelWidth}">
    <div :class="`el-panel-${panelType}__header`">
      <div :class="`el-panel-${panelType}__title`">
        <h3 class="title">{{ title }}</h3>
        <p class="subtitle" v-if="subtitle">{{ subtitle }}</p>
      </div>
      <div :class="`el-panel-${panelType}__operation`">
        <slot name="operation"></slot>
      </div>
    </div>
    <div class="el-panel__body" :style="{padding: bodyPadding}">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ElPanel',
  props: {
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 小标题
    subtitle: {
      type: String,
      default: ''
    },
    // 展示类型
    type: {
      type: String,
      default: 'view',
      validator: function(value) {
        // 这个值必须匹配下列字符串中的一个
        return ['view', 'edit'].indexOf(value) !== -1
          ? true
          : console.error('type is view or edit');
      }
    },
    // body设置padding
    bodyPadding: {
      type: String,
      default: '20px'
    },
    // panel宽度
    width: {
      type: [String, Number],
      default: '100%'
    }
  },
  computed: {
    // panel类型
    panelType() {
      return ['view', 'edit'].indexOf(this.type) !== -1 ? this.type : 'view';
    },
    panelWidth() {
      return (/^[0-9]*px$/).test(this.width) ? this.width : this.width + 'px';
    }
  }
};
</script>
