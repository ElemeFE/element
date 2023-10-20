<template functional>
  <div
    v-bind="data.attrs"
    v-on="listeners"
    :class="[data.staticClass, 'el-divider', `el-divider--${props.direction}`]"
  >
    <div
      v-if="slots().default && props.direction !== 'vertical'"
      :class="['el-divider__text', `is-${props.contentPosition}`]"
     >
      <slot />
    </div>
    <div
        v-if="!slots().default && props.direction !== 'vertical'"
        :class="['el-divider__text', `is-left`]"
    >
      <slot name="left"/>
    </div>
    <div
        v-if="!slots().default && props.direction !== 'vertical'"
        :class="['el-divider__text', `is-center`]"
    >
      <slot name="center"/>
    </div>
    <div
        v-if="!slots().default && props.direction !== 'vertical'"
        :class="['el-divider__text', `is-right`]"
    >
      <slot name="right"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElDivider',
  props: {
    direction: {
      type: String,
      default: 'horizontal',
      validator(val) {
        return ['horizontal', 'vertical'].indexOf(val) !== -1;
      }
    },
    contentPosition: {
      type: String,
      default: 'center',
      validator(val) {
        return ['left', 'center', 'right'].indexOf(val) !== -1;
      }
    }
  }
};

</script>
