<template>
  <div class="el-color-hue-slider" :class="{ 'is-vertical': vertical }">
    <div class="el-color-hue-slider__bar" @click="handleClick" ref="bar"></div>
    <div class="el-color-hue-slider__thumb"
         :style="{
           left: thumbLeft + 'px',
           top: thumbTop + 'px'
         }"
         ref="thumb">
    </div>
  </div>
</template>

<script>
  import draggable from '../draggable';

  export default {
    name: 'el-color-hue-slider',

    props: {
      color: {
        required: true
      },

      vertical: Boolean
    },

    data() {
      return {
        thumbLeft: 0,
        thumbTop: 0
      };
    },

    watch: {
      'color.value'() {
        this.update();
      }
    },

    methods: {
      handleClick(event) {
        const thumb = this.$refs.thumb;
        const target = event.target;

        if (target !== thumb) {
          this.handleDrag(event);
        }
      },

      handleDrag(event) {
        const rect = this.$el.getBoundingClientRect();
        const { thumb } = this.$refs;
        let hue;

        if (!this.vertical) {
          let left = event.clientX - rect.left;
          left = Math.min(left, rect.width - thumb.offsetWidth / 2);
          left = Math.max(thumb.offsetWidth / 2, left);

          hue = Math.round((left - thumb.offsetWidth / 2) / (rect.width - thumb.offsetWidth) * 360);
        } else {
          let top = event.clientY - rect.top;
          top = Math.min(top, rect.height - thumb.offsetHeight / 2);
          top = Math.max(thumb.offsetHeight / 2, top);

          hue = Math.round((top - thumb.offsetHeight / 2) / (rect.height - thumb.offsetHeight) * 360);
        }

        this.color.set('hue', hue);
      },

      getThumbLeft() {
        if (this.vertical) return 0;
        const el = this.$el;
        const hue = this.color.get('hue');

        if (!el) return 0;
        const thumb = this.$refs.thumb;
        return Math.round(hue * (el.offsetWidth - thumb.offsetWidth / 2) / 360);
      },

      getThumbTop() {
        if (!this.vertical) return 0;
        const el = this.$el;
        const hue = this.color.get('hue');

        if (!el) return 0;
        const thumb = this.$refs.thumb;
        return Math.round(hue * (el.offsetHeight - thumb.offsetHeight / 2) / 360);
      },

      update() {
        this.thumbLeft = this.getThumbLeft();
        this.thumbTop = this.getThumbTop();
      }
    },

    mounted() {
      const { bar, thumb } = this.$refs;

      const dragConfig = {
        drag: (event) => {
          this.handleDrag(event);
        },
        end: (event) => {
          this.handleDrag(event);
        }
      };

      draggable(bar, dragConfig);
      draggable(thumb, dragConfig);
      this.update();
    }
  };
</script>
