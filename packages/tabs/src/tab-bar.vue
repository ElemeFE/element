<template>
  <div class="el-tabs__active-bar" :style="barStyle"></div>
</template>
<script>
  export default {
    name: 'TabBar',

    props: {
      tabs: Array
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
          const getSize = this.rootTabs.getSize;

          this.tabs.every((tab, index) => {
            let $el = this.$parent.$refs.tabs[index];
            if (!$el) { return false; }

            if (!tab.active) {
              if (getSize) {
                offset += getSize($el, firstUpperCase(sizeName)/*dimension*/);
              } else {
                offset += $el[`client${firstUpperCase(sizeName)}`];
              }
              return true;
            } else {
              if (getSize) {
                tabSize = getSize($el, firstUpperCase(sizeName)/*dimension*/);
              } else {
                tabSize = $el[`client${firstUpperCase(sizeName)}`];
                if (sizeName === 'width') {
                  tabSize -= index === 0 ? 20 : 40;
                }
              }

              return false;
            }
          });

          if (!getSize && sizeName === 'width' && offset !== 0) {
            offset += 20;
          }
          const transform = `translate${firstUpperCase(sizeDir)}(${offset}px)`;
          style[sizeName] = tabSize + 'px';
          style.transform = transform;
          style.msTransform = transform;
          style.webkitTransform = transform;

          return style;
        }
      }
    }
  };
</script>
