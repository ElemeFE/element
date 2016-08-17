<template>
  <div class="el-rate">
    <span
      v-for="item in max"
      class="el-rate__item"
      @mouseenter="setCurrentValue(item)"
      @mouseleave="resetCurrentValue"
      @click="selectValue(item)"
      :style="{ cursor: disabled ? 'auto' : 'pointer' }">
      <i
        :class="[classes[item - 1], {'hover': hoverIndex === item}]"
        class="el-rate__icon"
        :style="getIconStyle(item)">
        <span class="path1" v-if="smiley && item <= currentValue"></span>
        <span class="path2" v-if="smiley && item <= currentValue"></span>
        <i
          v-if="showDecimalIcon(item)"
          :class="decimalIconClass"
          :style="decimalStyle"
          class="el-rate__decimal">
          <span class="path1" v-if="smiley"></span>
          <span class="path2" v-if="smiley"></span>
        </i>
      </i>
    </span>
    <span v-if="showText" class="el-rate__text" :style="textStyle">{{ text }}</span>
  </div>
</template>

<script type="text/babel">
  const CLASS_MAP = {
    noSmiley: 'icon-rate-star',
    noSmileyVoid: 'icon-rate-star-void',
    smileyLow: 'icon-rate-face-gray',
    smileyMedium: 'icon-rate-face-yellow',
    smileyHigh: 'icon-rate-face-orange',
    smileyVoid: 'icon-rate-face-void'
  };
  const COLOR_MAP = {
    lowColor: '#99A9BF',
    mediumColor: '#F7BA2A',
    highColor: '#FF9900',
    voidColor: '#C6D1DE',
    disbaledVoidColor: '#EFF2F7'
  };
  import '../style.css';
  export default {
    name: 'el-rate',

    data() {
      return {
        classes: null,
        currentValue: 0,
        colors: null,
        hoverIndex: -1
      };
    },

    props: {
      value: {
        type: Number,
        default: 0
      },
      lowThreshold: {
        type: Number,
        default: 2
      },
      highThreshold: {
        type: Number,
        default: 4
      },
      max: {
        type: Number,
        default: 5
      },
      multiColor: {
        type: Boolean,
        default: false
      },
      smiley: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      showText: {
        type: Boolean,
        default: false
      },
      texts: {
        type: Array,
        default() {
          return ['极差', '失望', '一般', '满意', '惊喜'];
        }
      },
      textTemplate: {
        type: String,
        default: '{value}'
      }
    },

    computed: {
      text() {
        let result = '';
        if (this.disabled) {
          result = this.textTemplate.replace('{value}', this.value);
        } else {
          result = this.texts[this.currentValue - 1];
        }
        return result;
      },

      textStyle() {
        let color = '';
        if (this.multiColor || this.smiley) {
          color = this.getValueFromMap(this.currentValue, COLOR_MAP);
        } else {
          color = COLOR_MAP.mediumColor;
        }
        return { color };
      },

      decimalStyle() {
        return {
          color: this.smiley ? '' : this.activeColor,
          width: this.valueDecimal + '%'
        };
      },

      valueDecimal() {
        return this.value * 100 - Math.floor(this.value) * 100;
      },

      decimalIconClass() {
        let className = '';
        if (!this.smiley) {
          className = CLASS_MAP.noSmiley;
        } else {
          className = this.getValueFromMap(this.value, CLASS_MAP);
        }
        return className;
      },

      voidClass() {
        const noSmileyVoidClass = this.disabled ? CLASS_MAP.noSmiley : CLASS_MAP.noSmileyVoid;
        return this.smiley ? CLASS_MAP.smileyVoid : noSmileyVoidClass;
      },

      activeClass() {
        let className = '';
        if (this.smiley) {
          className = this.getValueFromMap(this.currentValue, CLASS_MAP);
        } else {
          className = CLASS_MAP.noSmiley;
        }
        return className;
      },

      activeColor() {
        let color = '';
        if (!this.smiley) {
          if (this.multiColor) {
            color = this.getValueFromMap(this.currentValue, COLOR_MAP);
          } else {
            color = COLOR_MAP.mediumColor;
          }
        }
        return color;
      },

      classes() {
        let result = new Array(this.max);
        result.fill(this.activeClass, 0, this.currentValue).fill(this.voidClass, this.currentValue, this.max);
        return result;
      }
    },

    watch: {
      value(val) {
        this.$emit('change', val);
        this.currentValue = val;
      }
    },

    methods: {
      getValueFromMap(value, map) {
        let result = '';
        if (value <= this.lowThreshold) {
          result = map.lowColor || map.smileyLow;
        } else if (value >= this.highThreshold) {
          result = map.highColor || map.smileyHigh;
        } else {
          result = map.mediumColor || map.smileyMedium;
        }
        return result;
      },

      showDecimalIcon(item) {
        return this.disabled && this.valueDecimal > 0 && item - 1 < this.value && item > this.value;
      },

      getIconStyle(item) {
        const voidColor = this.disabled ? COLOR_MAP.disbaledVoidColor : COLOR_MAP.voidColor;
        const noSmileyColor = item <= this.currentValue ? this.activeColor : voidColor;
        return {
          color: this.smiley ? '' : noSmileyColor
        };
      },

      selectValue(value) {
        if (this.disabled) {
          return;
        }
        this.currentValue = value;
        this.$emit('input', value);
      },

      setCurrentValue(value) {
        if (this.disabled) {
          return;
        }
        this.currentValue = value;
        this.hoverIndex = value;
      },

      resetCurrentValue() {
        if (this.disabled) {
          return;
        }
        this.currentValue = this.value;
        this.hoverIndex = -1;
      }
    },

    created() {
      this.currentValue = this.value;
    }
  };
</script>
