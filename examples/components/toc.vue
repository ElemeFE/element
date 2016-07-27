<template>
  <nav
    class="toc"
    :class="{ 'toc--fixed': fixed }"
    :style="{ 'top': offset + 'px' }">
    <ol class="group">
      <el-toc-item
        v-for="item in toc"
        class="title"
        :active="active"
        :item="item">
      </el-toc-item>
    </ol>
  </nav>
</template>

<script>
  import ElTocItem from './toc-item';
  import E from 'oui-dom-events';

  /**
   * 浮动在右边的目录
   */
  export default {
    name: 'toc',

    components: {
      ElTocItem
    },

    props: {
      main: {
        type: String,
        required: true
      }
    },

    data() {
      return {
        toc: [],
        offset: 0,
        fixed: false,
        active: 0
      };
    },

    events: {
      ['element.example.reload']() {
        this.$nextTick(() => {
          this.toc = [];
          this.anchors = this.findAllAnchors();
          this.scrollWrap = document.querySelector('body');
          this.currentHeaderHeight = document.querySelector('.app__main:first-of-type').offsetTop;
          this.fixedOffsetTop = document.querySelector('.app__menu__label').offsetTop;
          this.updateFixed();

          this.generateTOC(this.anchors, this.toc);
          E.off(this.scrollWrap, 'mousewheel.toc.activecurrent');
          this.scrollActiveCurrent();
        });
      }
    },

    ready() {
      this.scrollAutoFixed();
    },

    methods: {
      /**
       * @see https://github.com/chjj/marked/issues/334
       */
      generateTOC(anchors, toc) {
        if (document.querySelector('.no-toc')) {
          return;
        }

        let cache = {};

        for (let key in anchors) {
          const current = this.fetchAnchorData(anchors[key]);
          const level = current.level || 1;
          const last = cache[level - 1];

          current.id = Number(key);

          if (last) {
            last.children = (last.children || []).concat(current);
          } else {
            cache[level] = current;
            toc.push(current);
          }
        }
      },

      fetchAnchorData(anchor) {
        const head = anchor.parentNode;
        const level = head.tagName.match(/\d/g)[0];
        const heading = head.getAttribute('id');

        return { level, heading };
      },

      updateFixed() {
        if (this.scrollWrap.scrollTop <= this.fixedOffsetTop / 2) {
          this.offset = this.currentHeaderHeight;
          this.fixed = false;
          return;
        }

        if (this.fixed) return;

        this.offset = this.fixedOffsetTop;
        this.fixed = true;
      },

      scrollAutoFixed() {
        E.on(document, 'mousewheel.toc.autofixed', this.updateFixed);
      },

      findAllAnchors() {
        return Array.prototype.slice.call(document.querySelectorAll('.anchor'));
      },

      scrollActiveCurrent() {
        const anchors = this.findAllAnchors();
        const body = this.scrollWrap;
        const distances = [];
        let current;
        let index = 0;
        let max;

        for (let anchor of anchors) {
          distances.push(anchor.offsetTop);
        }

        current = distances[index];
        max = distances.length - 1;
        this.active = index;

        // 记录当前滚动档位
        // 判断当前滚动和下个档位
        E.on(this.scrollWrap, 'mousewheel.toc.activecurrent', e => {
          const scrollTop = body.scrollTop;

          while (index < max && scrollTop > current) {
            current = distances[++index];
            this.active = index;
          }

          while (index && scrollTop < current) {
            current = distances[--index];
            this.active = index;
          }
        });
      }
    },

    beforeDestroy() {
      E.off(this.scrollWrap, 'mousewheel.toc.autofixed');
      E.off(this.scrollWrap, 'mousewheel.toc.activecurrent');
    }
  };
</script>

<style lang="css">
  .toc {
    color: #999;
    margin-right: 40px;
    margin-top: -14px;
    position: absolute;
    right: 0;
    top: 0;
    width: 160px;

    &.toc--fixed {
      position: fixed;
    }

    .group {
      font-size: 13px;
      list-style-type: none;
      margin: 0;
      padding-left: 12px;
    }

    .item {
      margin: 14px 0;

      .toc__link:hover,
      .toc__link.active {
        color: #216fc1;
      }

      .group {
        border-left: 1px solid rgba(31, 109, 191, .5);
      }
    }

    .title {
      margin-bottom: 18px;
    }
  }
</style>
