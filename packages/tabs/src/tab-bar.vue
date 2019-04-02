<template>
  <div class="el-tabs__active-bar" :class="`is-${ rootTabs.tabPosition }`" :style="barStyle"></div>
</template>
<script>
  import { arrayFind } from 'element-ui/src/utils/util';
  export default {
    name: 'TabBar',

    props: {
      tabs: Array
    },

    inject: ['rootTabs'],

    computed: {
      barStyle: {
        get() {
          let style = {};
          let offset = 0;
          let tabSize = 0;
          let tabPaddingLeft = 0;
          const sizeName = ['top', 'bottom'].indexOf(this.rootTabs.tabPosition) !== -1 ? 'width' : 'height';
          const sizeDir = sizeName === 'width' ? 'x' : 'y';
          const firstUpperCase = str => {
            return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
          };
          this.tabs.every((tab, index) => {
            let $el = arrayFind(this.$parent.$refs.tabs || [], t => t.id.replace('tab-', '') === tab.paneName);
            if (!$el) { return false; }

            if (!tabPaddingLeft && index) {
              tabPaddingLeft = Number.parseInt(getComputedStyle($el).paddingLeft, 10);
            }
            if (!tab.active) {
              offset += $el[`client${firstUpperCase(sizeName)}`];
              return true;
            } else {
              tabSize = $el[`client${firstUpperCase(sizeName)}`];
              if (sizeName === 'width' && this.tabs.length > 1) {
                tabSize -= Number.parseInt(getComputedStyle($el).paddingLeft, 10) + Number.parseInt(getComputedStyle($el).paddingRight, 10);
              }
              return false;
            }
          });

          if (sizeName === 'width' && offset !== 0) {
            offset += tabPaddingLeft;
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
