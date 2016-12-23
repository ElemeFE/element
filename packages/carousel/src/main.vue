<template>
  <div
    class="el-carousel"
    :class="{ 'el-carousel--card': card }"
    @mouseenter.stop="handleMouseEnter"
    @mouseleave.stop="handleMouseLeave">
    <div
      class="el-carousel__container"
      :style="{ height: height }">
      <transition name="carousel-arrow-left">
        <button
          v-if="arrow !== 'never'"
          v-show="arrow === 'always' || hover"
          @click.stop="throttledArrowClick(activeIndex - 1)"
          class="el-carousel__arrow el-carousel__arrow--left">
          <i class="el-icon-arrow-left"></i>
        </button>
      </transition>
      <transition name="carousel-arrow-right">
        <button
          v-if="arrow !== 'never'"
          v-show="arrow === 'always' || hover"
          @click.stop="throttledArrowClick(activeIndex + 1)"
          class="el-carousel__arrow el-carousel__arrow--right">
          <i class="el-icon-arrow-right"></i>
        </button>
      </transition>
      <slot></slot>
    </div>
    <ul
      class="el-carousel__indicators"
      v-if="indicator"
      :class="{ 'el-carousel__indicators--out': indicatorPosition === 'outside' || card }">
      <li
        v-for="(item, index) in items"
        class="el-carousel__indicator"
        :class="{ 'is-active': index === activeIndex }"
        @mouseenter="throttledIndicatorHover(index)"
        @click.stop="handleIndicatorClick(index)">
        <button class="el-carousel__button"></button>
      </li>
    </ul>
  </div>
</template>

<script>
import throttle from 'throttle-debounce/throttle';

export default {
  name: 'ElCarousel',

  props: {
    initialIndex: {
      type: Number,
      default: 0
    },
    height: String,
    trigger: {
      type: String,
      default: 'hover'
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    },
    indicatorPosition: String,
    indicator: {
      type: Boolean,
      default: true
    },
    arrow: String,
    card: Boolean
  },

  data() {
    return {
      items: [],
      activeIndex: -1,
      containerWidth: 0,
      reInitTimer: null,
      timer: null,
      hover: false
    };
  },

  watch: {
    activeIndex(val, oldVal) {
      this.resetItemPosition();
      this.$emit('index-change', val, oldVal);
    }
  },

  methods: {
    handleMouseEnter() {
      this.hover = true;
      this.pauseTimer();
    },

    handleMouseLeave() {
      this.hover = false;
      this.startTimer();
    },

    handleItemChange() {
      clearTimeout(this.reInitTimer);
      this.reInitTimer = setTimeout(() => {
        this.setItems();
      }, 100);
    },

    setItems() {
      this.items = this.$children.filter(child => child.$options.name === 'ElCarouselItem');
    },

    resetItemPosition() {
      this.items.forEach((item, index) => {
        item.translateItem(index, this.activeIndex);
      });
    },

    playSlides() {
      if (this.activeIndex < this.items.length - 1) {
        this.activeIndex++;
      } else {
        this.activeIndex = 0;
      }
    },

    pauseTimer() {
      clearInterval(this.timer);
    },

    startTimer() {
      if (this.interval <= 0 || !this.autoPlay) return;
      this.timer = setInterval(this.playSlides, this.interval);
    },

    setActiveIndex(index) {
      index = Number(index);
      if (isNaN(index) || index !== Math.floor(index)) {
        console.warn('index must be an integer.');
        return;
      }
      let length = this.items.length;
      if (index < 0) {
        this.activeIndex = length - 1;
      } else if (index >= length) {
        this.activeIndex = 0;
      } else {
        this.activeIndex = index;
      }
    },

    slideToPrev() {
      this.setActiveIndex(this.activeIndex - 1);
    },

    slideToNext() {
      this.setActiveIndex(this.activeIndex + 1);
    },

    handleIndicatorClick(index) {
      this.activeIndex = index;
    },

    handleIndicatorHover(index) {
      if (this.trigger === 'hover' && index !== this.activeIndex) {
        this.activeIndex = index;
      }
    }
  },

  created() {
    this.throttledArrowClick = throttle(300, true, index => {
      this.setActiveIndex(index);
    });
    this.throttledIndicatorHover = throttle(300, index => {
      this.handleIndicatorHover(index);
    });
    window.addEventListener('resize', this.resetItemPosition);
  },

  mounted() {
    this.setItems();
    this.$nextTick(() => {
      if (this.initialIndex < this.items.length && this.initialIndex >= 0) {
        this.activeIndex = this.initialIndex;
      }
      this.startTimer();
    });
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.resetItemPosition);
  }
};
</script>
