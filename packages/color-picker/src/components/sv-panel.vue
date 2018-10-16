<template>
  <div class="el-color-svpanel"
      :style="{
        backgroundColor: background
      }">
    <div class="el-color-svpanel__white"></div>
    <div class="el-color-svpanel__black"></div>
    <div class="el-color-svpanel__cursor"
      :style="{
        top: cursorTop + 'px',
        left: cursorLeft + 'px'
      }">
      <div></div>
    </div>
  </div>
</template>

<script>
  import draggable from '../draggable';

  export default {
    name: 'el-sl-panel',

    props: {
      color: {
        required: true
      }
    },

    computed: {
      colorValue() {
        const hue = this.color.get('hue');
        const value = this.color.get('value');
        return { hue, value };
      }
    },

    watch: {
      colorValue() {
        this.update();
      }
    },

    methods: {
      update() {
        const saturation = this.color.get('saturation');
        const value = this.color.get('value');

        const el = this.$el;
        let { clientWidth: width, clientHeight: height } = el;

        this.cursorLeft = saturation * width / 100;
        this.cursorTop = (100 - value) * height / 100;

        this.background = 'hsl(' + this.color.get('hue') + ', 100%, 50%)';
      },

      handleDrag(event) {
        const el = this.$el;
        const rect = el.getBoundingClientRect();

        let left = event.clientX - rect.left;
        let top = event.clientY - rect.top;
        left = Math.max(0, left);
        left = Math.min(left, rect.width);

        top = Math.max(0, top);
        top = Math.min(top, rect.height);

        this.cursorLeft = left;
        this.cursorTop = top;
        this.color.set({
          saturation: left / rect.width * 100,
          value: 100 - top / rect.height * 100
        });
      }
    },

    mounted() {
      draggable(this.$el, {
        drag: (event) => {
          this.handleDrag(event);
        },
        end: (event) => {
          this.handleDrag(event);
        }
      });

      this.update();
    },

    data() {
      return {
        cursorTop: 0,
        cursorLeft: 0,
        background: 'hsl(0, 100%, 50%)'
      };
    }
  };
</script>
