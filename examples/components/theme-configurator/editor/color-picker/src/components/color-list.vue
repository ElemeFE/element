<template>
  <div class="el-color-predefine color-list-container">
    <div class="el-color-predefine__colors color-list">
      <div class="color-list-item"
           :class="{selected: item.selected, 'is-alpha': item._alpha < 100}"
           v-for="(item, index) in rgbaColors"
           :key="colors[index].variable"
           @click="handleSelect(index)">
        <span class="color-list-item-ball" :style="{'background-color': item.value}">
        </span>
        <div class="color-list-item-label">
          {{item.info.label}} 
          <div class="color-list-item-value">
            {{item.info.value}} 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
  .color-list-container {
    border-top: 1px solid #EBEEF5;
    margin-top: 15px;
    padding-top: 10px;
    width: 100%;
  }
  .color-list {
    max-height: 138px;
    overflow: auto;
  }
  .color-list-item {
    height: 24px;
    width: 100%;
    cursor: pointer;
    margin: 2px 0;
    position: relative;
  }
  .color-list-item:hover {
    background: #efefef;
  }
  .color-list-item-ball {
    height: 20px;
    width: 20px;
    margin-top: 2px;
    margin-left: 5px;
    border-radius: 100%;
    display: block;
    position: absolute;
  }
  .color-list-item-label {
    margin-left: 35px;
    font-size: 13px;
    line-height: 24px;
    display: inline-block;
    width: 85%;
    overflow: hidden;
  }
  .color-list-item-value { 
    float: right;
  }
</style>

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
        this.color.fromString(this.colors[index].value);
        this.$emit('select', this.colors[index]);
      },
      parseColors(colors, color) {
        return colors.map(value => {
          const c = new Color();
          c.enableAlpha = true;
          c.format = 'rgba';
          c.fromString(value.value);
          c.info = value;
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