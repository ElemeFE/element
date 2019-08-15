<template>
  <section class="config" :key="displayName">
    <div class="config-label">
      <el-tooltip :content="displayName" placement="top">
        <span>{{displayKeyName}}</span>
      </el-tooltip>
    </div>
    <div class="config-content">
      <div class="content-80">
        <el-input
          size="medium"
          :value=displayValue
          readonly
          slot="reference"
          @click.native="onInputClick"
        ></el-input>
      </div>
      <div class="content-20">
        <color-picker 
          size="medium"
          ref="colorPicker"
          class="colorPicker"
          v-model="pickerColor" 
          @change=onPickerChange
          :colorList="golbalColorList"
        ></color-picker>
      </div>
    </div>
  </section>
</template>

<style>
input {
  cursor: pointer;
}
.colorPicker {
  margin-left: 10px;
  vertical-align: bottom;
}
</style>

<script>
import Mixin from './mixin';
import { getStyleDisplayValue, getStyleDisplayName } from '../utils/utils.js';
import ColorPicker from './color-picker';

export default {
  components: {
    ColorPicker
  },
  data() {
    return {
      pickerColor: ''
    };
  },
  mixins: [Mixin],
  watch: {
    displayValue: {
      immediate: true,
      handler(value) {
        if (value.startsWith('#')) {
          this.pickerColor = value;
        }
      }
    }
  },
  computed: {
    golbalColor() {
      return this.golbalValue.color;
    },
    displayValue() {
      return getStyleDisplayValue(this.mergedValue, this.golbalColor);
    },
    golbalColorList() {
      return this.isGlobal ? [] : Object.keys(this.golbalColor).map((c) => (
        {
          label: getStyleDisplayName(this.golbalColor[c]),
          value: this.golbalColor[c].value,
          variable: c
        }
      ));
    }
  },
  methods: {
    onInputClick() {
      this.$refs.colorPicker && this.$refs.colorPicker.handleTrigger();
    },
    onPickerChange(e) {
      this.onChange(e.variable || e);
    }
  }
};
</script>