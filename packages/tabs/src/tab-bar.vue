<template>
  <div class="el-tabs__active-bar" :style="barStyle"></div>
</template>
<script>
  export default {
    name: 'TabBar',

    props: {
      tabs: Array
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
      }
    }
  };
</script>
