<template>
  <el-scrollbar
    ref="navScroll"
    class="right-nav"
    wrap-style="max-height: 300px"
    
  >
    <div v-for="item in anchors" :key="item" class="anchor" :class="{'anchor-active': active === item}">
      <el-link
        :id="item"
        :title="item"
        class="link"
        href="javascript:void 0;"
				:underline="false"
        @click.native="handleAnchorClick(item)"
      >
        {{ item }}
      </el-link>
    </div>
  </el-scrollbar>
</template>

<script lang="ts">
import ResizeObserver from 'resize-observer-polyfill';
import { arrayFindIndex } from '../../src/utils/util';

export default {
  data() {
    return {
      active: null,
      anchors: []
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.map = {};
      this.scrollContainer = document.querySelector('.el-scrollbar.page-component__scroll>.el-scrollbar__wrap');
      const content = document.querySelector('.content.element-doc.content');
      if (!content) return;
      const { map, scrollContainer } = this;
      const h3 = content.querySelectorAll('h3[id]');
      this.anchors = [].slice.call(h3).map(item => {
        const text = item.childNodes[1] && item.childNodes[1].textContent.trim();
        map[text] = item.offsetTop;
        return text;
      });

      let mapValues = [];
      let mapKeys = [];
      for (let key in map) {
        mapKeys.push(key);
        mapValues.push[map[key]];
      }
      mapValues.reverse();
      mapKeys.reverse();

      let resizeObserver = new ResizeObserver(() => {
        Array.from(h3).forEach(item => {
          const text = item.childNodes[1] && item.childNodes[1].textContent.trim();
          map[text] = item.offsetTop;
        });
        mapValues = [].slice.call(Object.values(map)).reverse();
        mapKeys = [].slice.call(Object.keys(map)).reverse();
      });
      resizeObserver.observe(scrollContainer.childNodes[0]);

      let cachedIndex = -1;
      this.scrollEventListener = () => {
        const index = arrayFindIndex(mapValues, item => scrollContainer.scrollTop > item - 75);
        if (cachedIndex !== index && index !== -1) {
          this.active = mapKeys[index];
          cachedIndex = index;
          document.getElementById(this.active).focus();
        }
      };
      scrollContainer.addEventListener('scroll', this.scrollEventListener);
    });
  },
  beforeDestroy() {
    this.resizeObserver && this.resizeObserver.disconnect();
    this.scrollContainer && this.scrollContainer.removeEventListener('scroll', this.scrollEventListener);
  },
  methods: {
    handleAnchorClick(anchor) {
      this.scrollContainer.scrollTop = this.map[anchor];
      this.active = anchor;
    }
  }
};
</script>

<style lang="scss" scoped>
.right-nav {
	position: fixed;
	right: 10px;
	top: 100px;
	width: 140px;
	height: auto;
	max-height: 300px;
}
.right-nav::v-deep .el-scrollbar__wrap {
	overflow: auto;
  max-height: 300px;
}
.right-nav::v-deep .el-scrollbar__view {
	border-left: 1px solid rgb(220, 223, 230);
}
.link::v-deep span {
	font-size: 12px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	max-width: 125px;
}

.anchor {
  padding-left: 10px;
  margin: 3px 0;
  &-active {
    position: relative;
    border-left: 1px solid #409EFF;
    transform: translateX(-1px);
    .el-link {
      color: #409EFF;
    }
  }
}

@media (max-width: 1000px) {
  .right-nav {
    display: none;
  }
}
</style>
