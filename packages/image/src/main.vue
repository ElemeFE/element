<template>
  <div class="el-image">
    <slot v-if="loading" name="placeholder">
      <div class="el-image__placeholder"></div>
    </slot>
    <slot v-else-if="error" name="error">
      <div class="el-image__error">{{ t('el.image.error') }}</div>
    </slot>
    <img
      v-else
      class="el-image__inner"
      :src="src"
      :alt="alt"
      :style="{ 'object-fit': fit }">
  </div>
</template>

<script>
  import Locale from 'element-ui/src/mixins/locale';
  import { on, off, getScrollContainer, isInContainer } from 'element-ui/src/utils/dom';
  import { isString, isHtmlElement } from 'element-ui/src/utils/types';
  import throttle from 'throttle-debounce/throttle';

  export default {
    name: 'ElImage',

    mixins: [Locale],

    props: {
      src: String,
      fit: String,
      lazy: Boolean,
      scrollContainer: [String, HTMLElement],
      alt: String
    },

    data() {
      return {
        loading: true,
        error: false,
        show: !this.lazy
      };
    },

    watch: {
      src: {
        handler(val) {
          this.show && this.loadImage(val);
        },
        immediate: true
      },
      show(val) {
        val && this.loadImage(this.src);
      }
    },

    mounted() {
      this.lazy && this.addLazyLoadListener();
    },

    beforeDestroy() {
      this.lazy && this.removeLazyLoadListener();
    },

    methods: {
      loadImage(val) {
        // reset status
        this.loading = true;
        this.error = false;

        const img = new Image();
        img.onload = this.handleLoad.bind(this);
        img.onerror = this.handleError.bind(this);
        img.src = val;
      },
      handleLoad(e) {
        this.loading = false;
        this.$emit('load', e);
      },
      handleError(e) {
        this.loading = false;
        this.error = true;
        this.$emit('error', e);
      },
      handleLazyLoad() {
        if (isInContainer(this.$el, this._scrollContainer)) {
          this.show = true;
          this.removeLazyLoadListener();
        }
      },
      addLazyLoadListener() {
        if (this.$isServer) return;

        const { scrollContainer } = this;
        let _scrollContainer = null;

        if (isHtmlElement(scrollContainer)) {
          _scrollContainer = scrollContainer;
        } else if (isString(scrollContainer)) {
          _scrollContainer = document.querySelector(scrollContainer);
        } else {
          _scrollContainer = getScrollContainer(this.$el);
        }

        if (_scrollContainer) {
          this._scrollContainer = _scrollContainer;
          this._lazyLoadHandler = throttle(200, this.handleLazyLoad);
          on(_scrollContainer, 'scroll', this._lazyLoadHandler);
          this.handleLazyLoad();
        }
      },
      removeLazyLoadListener() {
        const { _scrollContainer, _lazyLoadHandler } = this;

        if (this.$isServer || !_scrollContainer || !_lazyLoadHandler) return;

        off(_scrollContainer, 'scroll', _lazyLoadHandler);
        this._scrollContainer = null;
        this._lazyLoadHandler = null;
      }
    }
  };
</script>
