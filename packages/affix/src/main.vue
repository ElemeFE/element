<template>
  <div :style="style">
    <div :class="{'el-affix': affixed}" :style="styles">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { on, off } from "../../utils/dom";
function getScroll(target, top) {
  const prop = top ? "pageYOffset" : "pageXOffset";
  const method = top ? "scrollTop" : "scrollLeft";
  let ret = target[prop];
  if (typeof ret !== "number") {
    ret = window.document.documentElement[method];
  }
  return ret;
}
function getOffset(element) {
  const rect = element.getBoundingClientRect();
  const scrollTop = getScroll(window, true);
  const scrollLeft = getScroll(window);
  const docEl = window.document.body;
  const clientTop = docEl.clientTop || 0;
  const clientLeft = docEl.clientLeft || 0;
  return {
    top: rect.top + scrollTop - clientTop,
    left: rect.left + scrollLeft - clientLeft
  };
}
export default {
  name: "Affix",
  props: {
    offsetTop: {
      type: Number,
      default: 0
    },
    offsetBottom: {
      type: Number
    }
  },
  data() {
    return {
      affix: false,
      styles: {},
      slot: false,
      slotStyle: {}
    };
  },
  computed: {
    offsetType() {
      let type = "top";
      if (this.offsetBottom >= 0) {
        type = "bottom";
      }
      return type;
    }
  },
  mounted() {
    //            window.addEventListener('scroll', this.handleScroll, false);
    //            window.addEventListener('resize', this.handleScroll, false);
    on(window, "scroll", this.handleScroll);
    on(window, "resize", this.handleScroll);
  },
  beforeDestroy() {
    //            window.removeEventListener('scroll', this.handleScroll, false);
    //            window.removeEventListener('resize', this.handleScroll, false);
    off(window, "scroll", this.handleScroll);
    off(window, "resize", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const affix = this.affix;
      const scrollTop = getScroll(window, true);
      const elOffset = getOffset(this.$el);
      const windowHeight = window.innerHeight;
      const elHeight = this.$el.getElementsByTagName("div")[0].offsetHeight;
      // Fixed Top
      if (
        elOffset.top - this.offsetTop < scrollTop &&
        this.offsetType == "top" &&
        !affix
      ) {
        this.affix = true;
        this.slotStyle = {
          width: this.$refs.point.clientWidth + "px",
          height: this.$refs.point.clientHeight + "px"
        };
        this.slot = true;
        this.styles = {
          top: `${this.offsetTop}px`,
          left: `${elOffset.left}px`,
          width: `${this.$el.offsetWidth}px`
        };
        this.$emit("on-change", true);
      } else if (
        elOffset.top - this.offsetTop > scrollTop &&
        this.offsetType == "top" &&
        affix
      ) {
        this.slot = false;
        this.slotStyle = {};
        this.affix = false;
        this.styles = null;
        this.$emit("on-change", false);
      }
      // Fixed Bottom
      if (
        elOffset.top + this.offsetBottom + elHeight >
          scrollTop + windowHeight &&
        this.offsetType == "bottom" &&
        !affix
      ) {
        this.affix = true;
        this.styles = {
          bottom: `${this.offsetBottom}px`,
          left: `${elOffset.left}px`,
          width: `${this.$el.offsetWidth}px`
        };
        this.$emit("on-change", true);
      } else if (
        elOffset.top + this.offsetBottom + elHeight <
          scrollTop + windowHeight &&
        this.offsetType == "bottom" &&
        affix
      ) {
        this.affix = false;
        this.styles = null;
        this.$emit("on-change", false);
      }
    }
  }
};
</script>