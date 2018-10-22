<template>
  <div :class="slideClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ElSwiperSlide',
    data() {
      return {
        slideClass: 'swiper-slide'
      };
    },
    ready() {
      this.update();
    },
    mounted() {
      this.update();
      if (this.$parent && this.$parent.options && this.$parent.options.slideClass) {
        this.slideClass = this.$parent.options.slideClass;
      }
    },
    updated() {
      this.update();
    },
    attached() {
      this.update();
    },
    methods: {
      update() {
        if (this.$parent && this.$parent.swiper) {
          this.$parent.update();
        }
      }
    }
  };
</script>
