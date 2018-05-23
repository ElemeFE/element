<template>
  <div class="tm-form-group-item"
       :class="'tm-form-group-item--' + this.size">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TmFormGroupItem',
  componentName: 'TmFormGroupItem',
  props: {
    size: {
      default: 'default',
      type: String
    }
  }
};
</script>
