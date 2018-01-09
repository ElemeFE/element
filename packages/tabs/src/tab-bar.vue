<template>
  <div class="el-tabs__active-bar" :class="fixActiveBarClass" :style="barStyle">
    <div class="el-tabs__custom-active-bar" :style="customBarStyle"></div>
  </div>
</template>
<script>
  export default {
    name: 'TabBar',

    props: {
      tabs: Array,
      activeWidth: [Number, String]
    },

    inject: ['rootTabs'],

    computed: {
      barStyle: {
        cache: false,
        get() {
          if (!this.$parent.$refs.tabs) return {};
          let style = {};
          let offset = 0;
          let tabSize = 0;
          const sizeName = ['top', 'bottom'].indexOf(this.rootTabs.tabPosition) !== -1 ? 'width' : 'height';
          const sizeDir = sizeName === 'width' ? 'x' : 'y';
          const firstUpperCase = str => {
            return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
          };
          this.tabs.every((tab, index) => {
            let $el = this.$parent.$refs.tabs[index];
            if (!$el) { return false; }

            if (!tab.active) {
              offset += $el[`client${firstUpperCase(sizeName)}`];
              return true;
            } else {
              tabSize = $el[`client${firstUpperCase(sizeName)}`];
              if (sizeName === 'width') {
                tabSize -= (index === 0 || index === this.tabs.length - 1) ? 20 : 40;
              }
              return false;
            }
          });

          if (sizeName === 'width' && offset !== 0) {
            offset += 20;
          }
          const transform = `translate${firstUpperCase(sizeDir)}(${offset}px)`;
          style[sizeName] = tabSize + 'px';
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
