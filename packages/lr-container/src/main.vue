<template>
  <div :class="['el-lr-container', border && 'is-bordered']" >
    <div class="el-lr-container-aside el-aside-border-right">
      <el-scrollbar>
        <div class="el-lr-container-aside-content" ref="aside-content">
          <slot name="aside"></slot>
        </div>
      </el-scrollbar>
    </div>
    <div class="el-lr-container-main">
      <el-scrollbar>
        <div class="el-lr-container-main-content" ref="main-content">
          <slot name="main"></slot>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import elScrollbar from 'element-ui/packages/scrollbar';
export default {
  name: 'ElLrContainer',
  components: {
    elScrollbar
  },
  props: {
    border: Boolean,
    asideWidth: [String, Number],
    asideHeight: [String, Number],
    mainHeight: [String, Number]
  },
  mounted() {
    this.setStyle();
  },
  methods: {
    parseHW(hw) {
      if (typeof hw === 'number') {
        return hw;
      }
      if (typeof hw === 'string') {
        if (/^\d+(?:px)?$/.test(hw)) {
          return parseInt(hw, 10);
        } else {
          return hw;
        }
      }
      return null;
    },
    setStyle() {
      const formatValue = (value)=> {
        if (typeof value === 'number') {
          value = value + 'px';
        } else if (typeof value === 'string') {
          value = value;
        }
        return value;
      };
      let value;
      if (this.asideWidth) {
        value = formatValue(this.parseHW(this.asideWidth));
        this.$refs['aside-content'].style.width = value;
      }
      if (this.asideHeight) {
        value = formatValue(this.parseHW(this.asideHeight));
        this.$refs['aside-content'].style.height = value;
      }
      if (this.mainHeight) {
        value = formatValue(this.parseHW(this.mainHeight));
        this.$refs['main-content'].style.height = value;
      }
    }
  }
};
</script>
