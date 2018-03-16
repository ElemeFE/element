<template>
  <div class="el-color-predefine">
    预设：
    <div class="el-color-predefine__colors">
      <div class="el-color-predefine__color-selector"
           :class="{selected: item.selected}"
           v-for="(item, index) in rgbaColors"
           :key="colors[index]"
           :style="{'background-color': item.value}"
           @click="handleSelect(index)">
      </div>
    </div>
  </div>
</template>

<script>
  import Color from '../color';

  export default {
    props: {
      colors: { type: Array, required: true },
      color: { required: true }
    },
    data() {
      return {
        rgbaColors: this.parseColors(this.colors, this.color),
      }
    },
    methods: {
      handleSelect(index) {
        this.color.fromString(this.colors[index]);
      },
      parseColors(colors, color) {
        return colors.map(value => {
          const c = new Color();
          c.enableAlpha = true;
          c.format = 'rgba';
          c.fromString(value);
          c.selected = c.value === color.value;
          return c;
        });
      }
    },
    watch: {
      'color.value'() {
        this.rgbaColors.forEach(item => {
          item.selected = this.color.compare(item);
        });
      },
      colors(newVal) {
        this.rgbaColors = this.parseColors(newVal, this.color);
      },
      color(newVal) {
        this.rgbaColors = this.parseColors(this.colors, newVal);
      }
    }
  };
</script>