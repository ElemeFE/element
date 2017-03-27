<template>
  <div class="el-tabs__active-bar" :class="fixActiveBarClass" :style="barStyle">
    <div class="el-tabs__custom-active-bar" :style="customBarStyle"></div>
  </div>
</template>
<script>
  export default {
    props: {
      tabs: Array,
      activeWidth: [Number, String]
    },
    computed: {
      barStyle: {
        cache: false,
        get() {
          if (!this.$parent.$refs.tabs) return {};
          let style = {};
          let offset = 0;
          let tabWidth = 0;

          this.tabs.every((tab, index) => {
            let $el = this.$parent.$refs.tabs[index];
            if (!$el) { return false; }

            if (!tab.active) {
              offset += $el.clientWidth;
              return true;
            } else {
              tabWidth = $el.clientWidth;
              return false;
            }
          });

          const transform = `translateX(${offset}px)`;
          style.width = tabWidth + 'px';
          style.transform = transform;
          style.msTransform = transform;
          style.webkitTransform = transform;

          return style;
        }
      },
      customBarStyle: {
        cache: false,
        get() {
          let style = {};
          if (this.activeWidth && this.activeWidth >= 0) {
            style.width = this.activeWidth + 'px';
          }
          return style;
        }
      },
      fixActiveBarClass() {
        let classList = {};
        if (this.activeWidth) {
          classList['el-tabs__fix-width-active-bar'] = true;
        }
        return classList;
      }
    }
  };
</script>