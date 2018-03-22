<template>
  <span>
    <transition-group
      v-if="elFormItem.vuelidate && elFormItem.vuelidateMessages && elFormItem.vuelidate.$dirty"
      name="fade-down" 
      :tag="elFormItem.vuelidatePopover ? 'ol' : 'span'"
      :style="elFormItem.vuelidatePopover ? {listStyleType: 'decimal', paddingLeft: '1.2em'} : ''"
      appear
    >
      <span
        v-for="(vMessage, vName) in elFormItem.vuelidateMessages" 
        v-if="!elFormItem.vuelidate[vName] && !elFormItem.vuelidate.$pending && elFormItem.showMessage && elFormItem.form.showMessage"
        :is="elFormItem.vuelidatePopover ? 'li' : 'span'"
        :key="vName"
        class="el-form-item__error"
        :style="elFormItem.vuelidatePopover ? {position: 'relative'} : ''"
        :class="{
          'el-form-item__error--inline': typeof elFormItem.inlineMessage === 'boolean'
            ? elFormItem.inlineMessage
            : (elFormItem.elForm && elFormItem.elForm.inlineMessage || false)
        }"
      >
        {{vMessage}}
      </span>
    </transition-group>
  </span>
</template>

<script>
export default {
  name: 'VuelidateErrorList',
  inject: ['elFormItem']
};
</script>

<style scoped>
.fade-down-enter-active {
  animation-name: fadeInDown;
  animation-duration: 250ms;
}

.fade-down-leave-active {
  animation-name: fadeOutDown;
  animation-duration: 250ms;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    height: 0px;
    transform: translate3d(0, -25px, 0);
  }
  to {
    opacity: 1;
    height: initial;
    transform: none;
  }
}

@keyframes fadeOutDown {
  from {
    opacity: 1;
    height: initial;
    transform: none;
  }
  to {
    opacity: 0;
    height: 0px;
    transform: translate3d(0, -25px, 0);
  }
}
</style>
