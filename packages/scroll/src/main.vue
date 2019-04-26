<template>
  <div class="el-scroll">
    <el-scrollbar ref="scrollbar" :style="WrapperHeight">
      <div class="el-scroll__body">
        <slot></slot>
      </div>

      <div class="el-scroll__loading" v-if="loading">
        <i class="el-scroll__loading__icon el-icon-loading"></i>
        <span class="el-scroll__loading__text">{{loadingText}}</span>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
  import { on, off } from 'element-ui/src/utils/dom';
  import debounce from 'throttle-debounce/debounce';
  import ElScrollbar from '../../scrollbar/index';
  export default {
    name: 'ElScroll',
    components: {
      ElScrollbar
    },
    props: {
      height: {
        type: Number
      },
      maxHeight: {
        type: Number
      },
      threshold: {
        type: Number,
        default: 0
      },
      loadingText: {
        type: String,
        default: ''
      },
      loading: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      WrapperHeight() {
        let style = {};
        if (typeof this.maxHeight === 'number') {
          style = {
            'maxHeight': this.maxHeight + 'px'
          };
        } else if (typeof this.height === 'number') {
          style = {
            'height': this.height + 'px'
          };
        }
        return style;
      }
    },
    mounted() {
      this.scrollHandler = debounce(200, () => {
        // 获取容器的height
        const containerHeight = this.$el.offsetHeight;
        // 获取内容的height
        const contentBodyHeight = this.$el.querySelector('.el-scroll__body').offsetHeight;
        // 获取滚动的height
        const scrollHeight = Math.ceil(this.$el.querySelector('.el-scrollbar__wrap').scrollTop);
        if ((containerHeight + scrollHeight + this.threshold) >= contentBodyHeight) {
          this.emitScrollToBottom();
        }
      });
      on(this.$el.querySelector('.el-scrollbar__wrap'), 'scroll', this.scrollHandler);
    },
    destroyed() {
      off(this.$el.querySelector('.el-scrollbar__wrap'), 'scroll', this.scrollHandler);
    },
    methods: {
      emitScrollToBottom() {
        this.$emit('scroll-to-bottom', this);
      }
    }
};
</script>
