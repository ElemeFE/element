<template>
  <div class="tm-value-switcher-item">
    <tm-icon :name="icon"
             class="tm-value-switcher-item__icon"></tm-icon>
    <div class="tm-value-switcher-item__wrap">
      <div class="tm-value-switcher-item__title">
        {{ title }}
      </div>
      <div class="tm-value-switcher-item__description">
        {{ description }}
      </div>
    </div>
    <div class="tm-value-switcher-item__code"
         v-if="code">
      {{ code }}
    </div>
  </div>
</template>
<script>
  import TmIcon from '../../icon/src/icon';
  export default {
    components: {
      TmIcon
    },
    name: 'TmValueSwitcherItem',
    props: {
      icon: String,
      title: String,
      description: String,
      code: String
    }
  };
</script>