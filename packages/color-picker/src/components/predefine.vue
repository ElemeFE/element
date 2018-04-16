<template>
  <div class="el-color-predefine">
    <div class="el-color-predefine__colors">
      <div class="el-color-predefine__color-selector"
           :class="{selected: item.selected, 'is-alpha': item._alpha < 100}"
           v-for="(item, index) in rgbaColors"
           :key="colors[index]"
           @click="handleSelect(index)">
        <div :style="{'background-color': item.value}">
        </div>
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
        rgbaColors: this.parseColors(this.colors, this.color)
      };
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
      '$parent.currentColor'(val) {
        const color = new Color();
        color.fromString(val);

        this.rgbaColors.forEach(item => {
          item.selected = color.compare(item);
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