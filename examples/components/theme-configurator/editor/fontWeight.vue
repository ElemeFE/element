<template>
  <section class="config" :key="displayName">
    <div class="config-label">
      <el-tooltip :content="displayName" placement="top">
        <span>{{displayKeyName}}</span>
      </el-tooltip>
    </div>
    <div class="config-content">
      <el-select 
        v-model="value" 
        class="select"
        size="medium"
        @change="onSelectChange"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
  </section>
</template>

<style>
.select {
  width: 100%;
}
</style>

<script>
const defaultFontWeight = [
  'normal',
  'bold',
  'bolder',
  'lighter',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  'inherit'
];
import Mixin from './mixin';
import { getStyleDisplayName } from '../utils/utils.js';

export default {
  props: {
    componentName: {
      type: String
    },
    golbalValue: {
      type: Object
    }
  },
  data() {
    return {
      options: [],
      value: ''
    };
  },
  mixins: [Mixin],
  computed: {
    isGlobalInputValue() {
      return this.config.value.startsWith('$');
    }
  },
  methods: {
    onSelectChange(e) {
      this.onChange(e);
    },
    initSelectOption() {
      this.options = [];
      defaultFontWeight.forEach((weight) => {
        this.options.push({
          value: weight,
          label: weight
        });
      });
      const golbalTypography = this.golbalValue.typography;
      if (this.isGlobalInputValue && golbalTypography) {
        Object.keys(golbalTypography).forEach((font) => {
          if (font.includes('font-weight')) {
            const weight = golbalTypography[font];
            this.options.push({
              value: weight.key,
              label: getStyleDisplayName(weight)
            });
          }
        });
      }
    }
  },
  watch: {
    'mergedValue': {
      immediate: true,
      handler(value) {
        this.initSelectOption();
        this.value = this.mergedValue;
      }
    }
  }
};
</script>