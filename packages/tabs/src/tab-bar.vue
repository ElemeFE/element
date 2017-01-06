<template>
  <div class="el-tabs__active-bar" :style="barStyle"></div>
</template>
<script>
  import { getPosition } from 'element-ui/src/utils/dom';

  export default {
    props: {
      tabs: Array
    },
    computed: {
      barStyle: {
        cache: false,
        get() {
          if (!this.$parent.$refs.tabs) return {};
          let style = {};
          let offsetX = 0;
          let offsetY = 0;
          let tabWidth = 0;
          let position = null;
          let $container = this.$parent.$refs.container;

          this.tabs.every((tab, index) => {
            let $el = this.$parent.$refs.tabs[index];

            if (!$el) { return false; }

            if (!tab.active) {
              offsetX += $el.clientWidth;
              return true;
            } else {
              tabWidth = $el.clientWidth;

              position = getPosition($el, $container);
              if (position) {
                offsetX = position.left;
                offsetY = position.top + $el.clientHeight - 1;
              }

              return false;
            }
          });

          offsetY -= ($container.clientHeight || 0);
          style.width = tabWidth + 'px';
          style.transform = `translateX(${offsetX}px) ` + (position ? `translateY(${offsetY}px)` : '');

          return style;
        }
      }
    }
  };
</script>