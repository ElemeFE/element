<template>
  <el-scrollbar
    ref="navScroll"
    class="right-nav"
    wrap-style="max-height: 300px"
    style="position: fixed;right: 10px;top: 100px;width: 150px;border-left: 1px solid rgb(220, 223, 230);height: auto;max-height: 300px;"
  >
    <div v-for="item in anchors" :key="item" style="margin: 3px 0 3px 10px">
      <el-link
        :id="item"
        :title="item"
        class="link"
        :type="active === item ? 'primary' : 'default'"
        @click="handleAnchorClick(item)"
      >
        {{ item }}
      </el-link>
    </div>
  </el-scrollbar>
</template>

<script>
import ElScrollbar from 'element-ui/packages/scrollbar';
import ElLink from 'element-ui/packages/link';
import ResizeObserver from 'resize-observer-polyfill';
export default {
  components: {
    ElScrollbar, ElLink
  },
  mounted() {
    this.$nextTick(() => {
      const map = this.map;
      this.scrollContainer = document.querySelector('.el-scrollbar.page-component__scroll>.el-scrollbar__wrap.el-scrollbar__wrap--hidden-default');
      const content = document.querySelector('.content.element-doc.content');
      if (!content) return;
      const h3 = content.querySelectorAll('h3');
      this.anchors = Array.from(h3).map(item => {
        const text = item.childNodes[1].textContent.trim();
        map.set(text, item.offsetTop);
        return text;
      });

      let mapValues = Array.from(map.values()).reverse();
      let mapKeys = Array.from(map.keys()).reverse();
      this.resizeObserver = new ResizeObserver(() => {
        Array.from(h3).forEach(item => {
          const text = item.childNodes[1].textContent.trim();
          map.set(text, item.offsetTop);
        });
        mapValues = Array.from(map.values()).reverse();
        mapKeys = Array.from(map.keys()).reverse();
      });
      this.resizeObserver.observe(this.scrollContainer.childNodes[0]);

      let cachedIndex = -1;
      this.scrollContainer.addEventListener('scroll', () => {
        const index = mapValues.findIndex(item => this.scrollContainer.scrollTop > item - 75);
        if (cachedIndex !== index && index !== -1) {
          this.active = mapKeys[index];
          cachedIndex = index;
          document.getElementById(this.active).focus();
        }
      });
    });
  },
  data() {
    return {
      scrollContainer: null,
      anchors: [],
      active: '',
      navScroll: null,
      resizeObserver: null,
      /* global Map*/
      map: new Map()
    };
  },
  beforeUnmount() {
    this.resizeObserver.disconnect();
  },
  methods: {
    handleAnchorClick(anchor) {
      this.scrollContainer.scrollTop = this.map.get(anchor);
      this.active = anchor;
    }
  }
};
</script>

<style lang="scss" scoped>
.link {
  ::v-deep(span) {
    font-size: 12px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 135px;
  }
}

@media (max-width: 1490px) {
  .right-nav {
    display: none;
  }
}
</style>
